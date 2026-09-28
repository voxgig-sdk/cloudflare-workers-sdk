package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/cloudflare-workers-sdk/go/utility/struct"
)

type CloudflareWorkersSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCloudflareWorkersSDK(options map[string]any) *CloudflareWorkersSDK {
	sdk := &CloudflareWorkersSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CloudflareWorkersSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CloudflareWorkersSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CloudflareWorkersSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CloudflareWorkersSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CloudflareWorkersSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CloudflareWorkersSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *CloudflareWorkersSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CloudflareWorkersSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CloudflareWorkersSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *CloudflareWorkersSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CloudflareWorkersSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Account returns a Account entity bound to this client.
// Idiomatic usage: client.Account(nil).List(nil, nil) or
// client.Account(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Account(data map[string]any) CloudflareWorkersEntity {
	return NewAccountEntityFunc(sdk, data)
}


// Application returns a Application entity bound to this client.
// Idiomatic usage: client.Application(nil).List(nil, nil) or
// client.Application(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Application(data map[string]any) CloudflareWorkersEntity {
	return NewApplicationEntityFunc(sdk, data)
}


// Brapi returns a Brapi entity bound to this client.
// Idiomatic usage: client.Brapi(nil).List(nil, nil) or
// client.Brapi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Brapi(data map[string]any) CloudflareWorkersEntity {
	return NewBrapiEntityFunc(sdk, data)
}


// Build returns a Build entity bound to this client.
// Idiomatic usage: client.Build(nil).List(nil, nil) or
// client.Build(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Build(data map[string]any) CloudflareWorkersEntity {
	return NewBuildEntityFunc(sdk, data)
}


// BuildToken returns a BuildToken entity bound to this client.
// Idiomatic usage: client.BuildToken(nil).List(nil, nil) or
// client.BuildToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) BuildToken(data map[string]any) CloudflareWorkersEntity {
	return NewBuildTokenEntityFunc(sdk, data)
}


// BuildsApi returns a BuildsApi entity bound to this client.
// Idiomatic usage: client.BuildsApi(nil).List(nil, nil) or
// client.BuildsApi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) BuildsApi(data map[string]any) CloudflareWorkersEntity {
	return NewBuildsApiEntityFunc(sdk, data)
}


// Connection returns a Connection entity bound to this client.
// Idiomatic usage: client.Connection(nil).List(nil, nil) or
// client.Connection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Connection(data map[string]any) CloudflareWorkersEntity {
	return NewConnectionEntityFunc(sdk, data)
}


// ContainerImage returns a ContainerImage entity bound to this client.
// Idiomatic usage: client.ContainerImage(nil).List(nil, nil) or
// client.ContainerImage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) ContainerImage(data map[string]any) CloudflareWorkersEntity {
	return NewContainerImageEntityFunc(sdk, data)
}


// ContainerInstance returns a ContainerInstance entity bound to this client.
// Idiomatic usage: client.ContainerInstance(nil).List(nil, nil) or
// client.ContainerInstance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) ContainerInstance(data map[string]any) CloudflareWorkersEntity {
	return NewContainerInstanceEntityFunc(sdk, data)
}


// DeployHook returns a DeployHook entity bound to this client.
// Idiomatic usage: client.DeployHook(nil).List(nil, nil) or
// client.DeployHook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) DeployHook(data map[string]any) CloudflareWorkersEntity {
	return NewDeployHookEntityFunc(sdk, data)
}


// Deployment returns a Deployment entity bound to this client.
// Idiomatic usage: client.Deployment(nil).List(nil, nil) or
// client.Deployment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Deployment(data map[string]any) CloudflareWorkersEntity {
	return NewDeploymentEntityFunc(sdk, data)
}


// Destination returns a Destination entity bound to this client.
// Idiomatic usage: client.Destination(nil).List(nil, nil) or
// client.Destination(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Destination(data map[string]any) CloudflareWorkersEntity {
	return NewDestinationEntityFunc(sdk, data)
}


// Domain returns a Domain entity bound to this client.
// Idiomatic usage: client.Domain(nil).List(nil, nil) or
// client.Domain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Domain(data map[string]any) CloudflareWorkersEntity {
	return NewDomainEntityFunc(sdk, data)
}


// DurableObjectsNamespace returns a DurableObjectsNamespace entity bound to this client.
// Idiomatic usage: client.DurableObjectsNamespace(nil).List(nil, nil) or
// client.DurableObjectsNamespace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) DurableObjectsNamespace(data map[string]any) CloudflareWorkersEntity {
	return NewDurableObjectsNamespaceEntityFunc(sdk, data)
}


// EnvironmentVariable returns a EnvironmentVariable entity bound to this client.
// Idiomatic usage: client.EnvironmentVariable(nil).List(nil, nil) or
// client.EnvironmentVariable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) EnvironmentVariable(data map[string]any) CloudflareWorkersEntity {
	return NewEnvironmentVariableEntityFunc(sdk, data)
}


// GitHubIntegration returns a GitHubIntegration entity bound to this client.
// Idiomatic usage: client.GitHubIntegration(nil).List(nil, nil) or
// client.GitHubIntegration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) GitHubIntegration(data map[string]any) CloudflareWorkersEntity {
	return NewGitHubIntegrationEntityFunc(sdk, data)
}


// Hyperdrive returns a Hyperdrive entity bound to this client.
// Idiomatic usage: client.Hyperdrive(nil).List(nil, nil) or
// client.Hyperdrive(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Hyperdrive(data map[string]any) CloudflareWorkersEntity {
	return NewHyperdriveEntityFunc(sdk, data)
}


// ImageRegistry returns a ImageRegistry entity bound to this client.
// Idiomatic usage: client.ImageRegistry(nil).List(nil, nil) or
// client.ImageRegistry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) ImageRegistry(data map[string]any) CloudflareWorkersEntity {
	return NewImageRegistryEntityFunc(sdk, data)
}


// Issue returns a Issue entity bound to this client.
// Idiomatic usage: client.Issue(nil).List(nil, nil) or
// client.Issue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Issue(data map[string]any) CloudflareWorkersEntity {
	return NewIssueEntityFunc(sdk, data)
}


// Key returns a Key entity bound to this client.
// Idiomatic usage: client.Key(nil).List(nil, nil) or
// client.Key(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Key(data map[string]any) CloudflareWorkersEntity {
	return NewKeyEntityFunc(sdk, data)
}


// LiveTail returns a LiveTail entity bound to this client.
// Idiomatic usage: client.LiveTail(nil).List(nil, nil) or
// client.LiveTail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) LiveTail(data map[string]any) CloudflareWorkersEntity {
	return NewLiveTailEntityFunc(sdk, data)
}


// MetricsExport returns a MetricsExport entity bound to this client.
// Idiomatic usage: client.MetricsExport(nil).List(nil, nil) or
// client.MetricsExport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) MetricsExport(data map[string]any) CloudflareWorkersEntity {
	return NewMetricsExportEntityFunc(sdk, data)
}


// Namespace returns a Namespace entity bound to this client.
// Idiomatic usage: client.Namespace(nil).List(nil, nil) or
// client.Namespace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Namespace(data map[string]any) CloudflareWorkersEntity {
	return NewNamespaceEntityFunc(sdk, data)
}


// Preview returns a Preview entity bound to this client.
// Idiomatic usage: client.Preview(nil).List(nil, nil) or
// client.Preview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Preview(data map[string]any) CloudflareWorkersEntity {
	return NewPreviewEntityFunc(sdk, data)
}


// PreviewDeployment returns a PreviewDeployment entity bound to this client.
// Idiomatic usage: client.PreviewDeployment(nil).List(nil, nil) or
// client.PreviewDeployment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) PreviewDeployment(data map[string]any) CloudflareWorkersEntity {
	return NewPreviewDeploymentEntityFunc(sdk, data)
}


// Query returns a Query entity bound to this client.
// Idiomatic usage: client.Query(nil).List(nil, nil) or
// client.Query(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Query(data map[string]any) CloudflareWorkersEntity {
	return NewQueryEntityFunc(sdk, data)
}


// RepositoryConnection returns a RepositoryConnection entity bound to this client.
// Idiomatic usage: client.RepositoryConnection(nil).List(nil, nil) or
// client.RepositoryConnection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) RepositoryConnection(data map[string]any) CloudflareWorkersEntity {
	return NewRepositoryConnectionEntityFunc(sdk, data)
}


// Rollout returns a Rollout entity bound to this client.
// Idiomatic usage: client.Rollout(nil).List(nil, nil) or
// client.Rollout(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Rollout(data map[string]any) CloudflareWorkersEntity {
	return NewRolloutEntityFunc(sdk, data)
}


// SavedQuery returns a SavedQuery entity bound to this client.
// Idiomatic usage: client.SavedQuery(nil).List(nil, nil) or
// client.SavedQuery(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) SavedQuery(data map[string]any) CloudflareWorkersEntity {
	return NewSavedQueryEntityFunc(sdk, data)
}


// Script returns a Script entity bound to this client.
// Idiomatic usage: client.Script(nil).List(nil, nil) or
// client.Script(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Script(data map[string]any) CloudflareWorkersEntity {
	return NewScriptEntityFunc(sdk, data)
}


// ScriptSetting returns a ScriptSetting entity bound to this client.
// Idiomatic usage: client.ScriptSetting(nil).List(nil, nil) or
// client.ScriptSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) ScriptSetting(data map[string]any) CloudflareWorkersEntity {
	return NewScriptSettingEntityFunc(sdk, data)
}


// Secret returns a Secret entity bound to this client.
// Idiomatic usage: client.Secret(nil).List(nil, nil) or
// client.Secret(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Secret(data map[string]any) CloudflareWorkersEntity {
	return NewSecretEntityFunc(sdk, data)
}


// SecretsStoreDelete returns a SecretsStoreDelete entity bound to this client.
// Idiomatic usage: client.SecretsStoreDelete(nil).List(nil, nil) or
// client.SecretsStoreDelete(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) SecretsStoreDelete(data map[string]any) CloudflareWorkersEntity {
	return NewSecretsStoreDeleteEntityFunc(sdk, data)
}


// SecretsStoreQuota returns a SecretsStoreQuota entity bound to this client.
// Idiomatic usage: client.SecretsStoreQuota(nil).List(nil, nil) or
// client.SecretsStoreQuota(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) SecretsStoreQuota(data map[string]any) CloudflareWorkersEntity {
	return NewSecretsStoreQuotaEntityFunc(sdk, data)
}


// SecretsStoreSecret returns a SecretsStoreSecret entity bound to this client.
// Idiomatic usage: client.SecretsStoreSecret(nil).List(nil, nil) or
// client.SecretsStoreSecret(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) SecretsStoreSecret(data map[string]any) CloudflareWorkersEntity {
	return NewSecretsStoreSecretEntityFunc(sdk, data)
}


// SecretsStoreStore returns a SecretsStoreStore entity bound to this client.
// Idiomatic usage: client.SecretsStoreStore(nil).List(nil, nil) or
// client.SecretsStoreStore(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) SecretsStoreStore(data map[string]any) CloudflareWorkersEntity {
	return NewSecretsStoreStoreEntityFunc(sdk, data)
}


// SecretsStoreStoresResponseCollection returns a SecretsStoreStoresResponseCollection entity bound to this client.
// Idiomatic usage: client.SecretsStoreStoresResponseCollection(nil).List(nil, nil) or
// client.SecretsStoreStoresResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) SecretsStoreStoresResponseCollection(data map[string]any) CloudflareWorkersEntity {
	return NewSecretsStoreStoresResponseCollectionEntityFunc(sdk, data)
}


// Setting returns a Setting entity bound to this client.
// Idiomatic usage: client.Setting(nil).List(nil, nil) or
// client.Setting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Setting(data map[string]any) CloudflareWorkersEntity {
	return NewSettingEntityFunc(sdk, data)
}


// Shared returns a Shared entity bound to this client.
// Idiomatic usage: client.Shared(nil).List(nil, nil) or
// client.Shared(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Shared(data map[string]any) CloudflareWorkersEntity {
	return NewSharedEntityFunc(sdk, data)
}


// Tail returns a Tail entity bound to this client.
// Idiomatic usage: client.Tail(nil).List(nil, nil) or
// client.Tail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Tail(data map[string]any) CloudflareWorkersEntity {
	return NewTailEntityFunc(sdk, data)
}


// Token returns a Token entity bound to this client.
// Idiomatic usage: client.Token(nil).List(nil, nil) or
// client.Token(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Token(data map[string]any) CloudflareWorkersEntity {
	return NewTokenEntityFunc(sdk, data)
}


// Trigger returns a Trigger entity bound to this client.
// Idiomatic usage: client.Trigger(nil).List(nil, nil) or
// client.Trigger(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Trigger(data map[string]any) CloudflareWorkersEntity {
	return NewTriggerEntityFunc(sdk, data)
}


// Usage returns a Usage entity bound to this client.
// Idiomatic usage: client.Usage(nil).List(nil, nil) or
// client.Usage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Usage(data map[string]any) CloudflareWorkersEntity {
	return NewUsageEntityFunc(sdk, data)
}


// Value returns a Value entity bound to this client.
// Idiomatic usage: client.Value(nil).List(nil, nil) or
// client.Value(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Value(data map[string]any) CloudflareWorkersEntity {
	return NewValueEntityFunc(sdk, data)
}


// Version returns a Version entity bound to this client.
// Idiomatic usage: client.Version(nil).List(nil, nil) or
// client.Version(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Version(data map[string]any) CloudflareWorkersEntity {
	return NewVersionEntityFunc(sdk, data)
}


// Worker returns a Worker entity bound to this client.
// Idiomatic usage: client.Worker(nil).List(nil, nil) or
// client.Worker(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Worker(data map[string]any) CloudflareWorkersEntity {
	return NewWorkerEntityFunc(sdk, data)
}


// WorkerCronTrigger returns a WorkerCronTrigger entity bound to this client.
// Idiomatic usage: client.WorkerCronTrigger(nil).List(nil, nil) or
// client.WorkerCronTrigger(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkerCronTrigger(data map[string]any) CloudflareWorkersEntity {
	return NewWorkerCronTriggerEntityFunc(sdk, data)
}


// WorkerDeployment returns a WorkerDeployment entity bound to this client.
// Idiomatic usage: client.WorkerDeployment(nil).List(nil, nil) or
// client.WorkerDeployment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkerDeployment(data map[string]any) CloudflareWorkersEntity {
	return NewWorkerDeploymentEntityFunc(sdk, data)
}


// WorkerEnvironment returns a WorkerEnvironment entity bound to this client.
// Idiomatic usage: client.WorkerEnvironment(nil).List(nil, nil) or
// client.WorkerEnvironment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkerEnvironment(data map[string]any) CloudflareWorkersEntity {
	return NewWorkerEnvironmentEntityFunc(sdk, data)
}


// WorkerRoute returns a WorkerRoute entity bound to this client.
// Idiomatic usage: client.WorkerRoute(nil).List(nil, nil) or
// client.WorkerRoute(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkerRoute(data map[string]any) CloudflareWorkersEntity {
	return NewWorkerRouteEntityFunc(sdk, data)
}


// WorkerScript returns a WorkerScript entity bound to this client.
// Idiomatic usage: client.WorkerScript(nil).List(nil, nil) or
// client.WorkerScript(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkerScript(data map[string]any) CloudflareWorkersEntity {
	return NewWorkerScriptEntityFunc(sdk, data)
}


// WorkerSubdomain returns a WorkerSubdomain entity bound to this client.
// Idiomatic usage: client.WorkerSubdomain(nil).List(nil, nil) or
// client.WorkerSubdomain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkerSubdomain(data map[string]any) CloudflareWorkersEntity {
	return NewWorkerSubdomainEntityFunc(sdk, data)
}


// WorkerTailLog returns a WorkerTailLog entity bound to this client.
// Idiomatic usage: client.WorkerTailLog(nil).List(nil, nil) or
// client.WorkerTailLog(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkerTailLog(data map[string]any) CloudflareWorkersEntity {
	return NewWorkerTailLogEntityFunc(sdk, data)
}


// WorkersAccountSetting returns a WorkersAccountSetting entity bound to this client.
// Idiomatic usage: client.WorkersAccountSetting(nil).List(nil, nil) or
// client.WorkersAccountSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersAccountSetting(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersAccountSettingEntityFunc(sdk, data)
}


// WorkersApiResponseNullResult returns a WorkersApiResponseNullResult entity bound to this client.
// Idiomatic usage: client.WorkersApiResponseNullResult(nil).List(nil, nil) or
// client.WorkersApiResponseNullResult(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersApiResponseNullResult(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersApiResponseNullResultEntityFunc(sdk, data)
}


// WorkersCompletedUploadAsset returns a WorkersCompletedUploadAsset entity bound to this client.
// Idiomatic usage: client.WorkersCompletedUploadAsset(nil).List(nil, nil) or
// client.WorkersCompletedUploadAsset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersCompletedUploadAsset(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersCompletedUploadAssetEntityFunc(sdk, data)
}


// WorkersCreateAssetsUploadSession returns a WorkersCreateAssetsUploadSession entity bound to this client.
// Idiomatic usage: client.WorkersCreateAssetsUploadSession(nil).List(nil, nil) or
// client.WorkersCreateAssetsUploadSession(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersCreateAssetsUploadSession(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersCreateAssetsUploadSessionEntityFunc(sdk, data)
}


// WorkersForPlatform returns a WorkersForPlatform entity bound to this client.
// Idiomatic usage: client.WorkersForPlatform(nil).List(nil, nil) or
// client.WorkersForPlatform(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersForPlatform(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersForPlatformEntityFunc(sdk, data)
}


// WorkersKvApiResponseCommonNoResult returns a WorkersKvApiResponseCommonNoResult entity bound to this client.
// Idiomatic usage: client.WorkersKvApiResponseCommonNoResult(nil).List(nil, nil) or
// client.WorkersKvApiResponseCommonNoResult(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersKvApiResponseCommonNoResult(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersKvApiResponseCommonNoResultEntityFunc(sdk, data)
}


// WorkersKvNamespace returns a WorkersKvNamespace entity bound to this client.
// Idiomatic usage: client.WorkersKvNamespace(nil).List(nil, nil) or
// client.WorkersKvNamespace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersKvNamespace(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersKvNamespaceEntityFunc(sdk, data)
}


// WorkersNamespaceList returns a WorkersNamespaceList entity bound to this client.
// Idiomatic usage: client.WorkersNamespaceList(nil).List(nil, nil) or
// client.WorkersNamespaceList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersNamespaceList(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersNamespaceListEntityFunc(sdk, data)
}


// WorkersNamespaceScriptDeleteBulk returns a WorkersNamespaceScriptDeleteBulk entity bound to this client.
// Idiomatic usage: client.WorkersNamespaceScriptDeleteBulk(nil).List(nil, nil) or
// client.WorkersNamespaceScriptDeleteBulk(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersNamespaceScriptDeleteBulk(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersNamespaceScriptDeleteBulkEntityFunc(sdk, data)
}


// WorkersNamespaceScriptResponseSingle returns a WorkersNamespaceScriptResponseSingle entity bound to this client.
// Idiomatic usage: client.WorkersNamespaceScriptResponseSingle(nil).List(nil, nil) or
// client.WorkersNamespaceScriptResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersNamespaceScriptResponseSingle(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersNamespaceScriptResponseSingleEntityFunc(sdk, data)
}


// WorkersNamespaceSingle returns a WorkersNamespaceSingle entity bound to this client.
// Idiomatic usage: client.WorkersNamespaceSingle(nil).List(nil, nil) or
// client.WorkersNamespaceSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersNamespaceSingle(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersNamespaceSingleEntityFunc(sdk, data)
}


// WorkersPipelinesOther returns a WorkersPipelinesOther entity bound to this client.
// Idiomatic usage: client.WorkersPipelinesOther(nil).List(nil, nil) or
// client.WorkersPipelinesOther(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersPipelinesOther(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersPipelinesOtherEntityFunc(sdk, data)
}


// WorkersScriptAndVersionSetting returns a WorkersScriptAndVersionSetting entity bound to this client.
// Idiomatic usage: client.WorkersScriptAndVersionSetting(nil).List(nil, nil) or
// client.WorkersScriptAndVersionSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersScriptAndVersionSetting(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersScriptAndVersionSettingEntityFunc(sdk, data)
}


// WorkersScriptResponseCollection returns a WorkersScriptResponseCollection entity bound to this client.
// Idiomatic usage: client.WorkersScriptResponseCollection(nil).List(nil, nil) or
// client.WorkersScriptResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersScriptResponseCollection(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersScriptResponseCollectionEntityFunc(sdk, data)
}


// WorkersScriptResponseSingle returns a WorkersScriptResponseSingle entity bound to this client.
// Idiomatic usage: client.WorkersScriptResponseSingle(nil).List(nil, nil) or
// client.WorkersScriptResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersScriptResponseSingle(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersScriptResponseSingleEntityFunc(sdk, data)
}


// WorkersSmartPlacement returns a WorkersSmartPlacement entity bound to this client.
// Idiomatic usage: client.WorkersSmartPlacement(nil).List(nil, nil) or
// client.WorkersSmartPlacement(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersSmartPlacement(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersSmartPlacementEntityFunc(sdk, data)
}


// WorkersUsageModel returns a WorkersUsageModel entity bound to this client.
// Idiomatic usage: client.WorkersUsageModel(nil).List(nil, nil) or
// client.WorkersUsageModel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersUsageModel(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersUsageModelEntityFunc(sdk, data)
}


// WorkersVersionsList returns a WorkersVersionsList entity bound to this client.
// Idiomatic usage: client.WorkersVersionsList(nil).List(nil, nil) or
// client.WorkersVersionsList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersVersionsList(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersVersionsListEntityFunc(sdk, data)
}


// WorkersVersionsSingle returns a WorkersVersionsSingle entity bound to this client.
// Idiomatic usage: client.WorkersVersionsSingle(nil).List(nil, nil) or
// client.WorkersVersionsSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersVersionsSingle(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersVersionsSingleEntityFunc(sdk, data)
}


// WorkersVersionsUpload returns a WorkersVersionsUpload entity bound to this client.
// Idiomatic usage: client.WorkersVersionsUpload(nil).List(nil, nil) or
// client.WorkersVersionsUpload(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) WorkersVersionsUpload(data map[string]any) CloudflareWorkersEntity {
	return NewWorkersVersionsUploadEntityFunc(sdk, data)
}


// Workflow returns a Workflow entity bound to this client.
// Idiomatic usage: client.Workflow(nil).List(nil, nil) or
// client.Workflow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareWorkersSDK) Workflow(data map[string]any) CloudflareWorkersEntity {
	return NewWorkflowEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareWorkersSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCloudflareWorkersSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
