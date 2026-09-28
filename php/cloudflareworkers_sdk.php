<?php
declare(strict_types=1);

// CloudflareWorkers SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CloudflareWorkersSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CloudflareWorkersUtility();
        $this->_utility = $utility;

        $config = CloudflareWorkersConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CloudflareWorkersHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CloudflareWorkersHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CloudflareWorkersFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CloudflareWorkersFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CloudflareWorkersUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CloudflareWorkersHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CloudflareWorkersHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CloudflareWorkersHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CloudflareWorkersSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CloudflareWorkersError($op . "_allow",
                "CloudflareWorkersSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CloudflareWorkersHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CloudflareWorkersHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CloudflareWorkersError("graphql_error",
                "CloudflareWorkersSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_account = null;

    // Canonical facade: $client->Account()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account()
    // resolves here too.
    public function Account($data = null)
    {
        require_once __DIR__ . '/entity/account_entity.php';
        if ($data === null) {
            if ($this->_account === null) {
                $this->_account = new AccountEntity($this, null);
            }
            return $this->_account;
        }
        return new AccountEntity($this, $data);
    }


    private $_application = null;

    // Canonical facade: $client->Application()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->application()
    // resolves here too.
    public function Application($data = null)
    {
        require_once __DIR__ . '/entity/application_entity.php';
        if ($data === null) {
            if ($this->_application === null) {
                $this->_application = new ApplicationEntity($this, null);
            }
            return $this->_application;
        }
        return new ApplicationEntity($this, $data);
    }


    private $_brapi = null;

    // Canonical facade: $client->Brapi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->brapi()
    // resolves here too.
    public function Brapi($data = null)
    {
        require_once __DIR__ . '/entity/brapi_entity.php';
        if ($data === null) {
            if ($this->_brapi === null) {
                $this->_brapi = new BrapiEntity($this, null);
            }
            return $this->_brapi;
        }
        return new BrapiEntity($this, $data);
    }


    private $_build = null;

    // Canonical facade: $client->Build()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->build()
    // resolves here too.
    public function Build($data = null)
    {
        require_once __DIR__ . '/entity/build_entity.php';
        if ($data === null) {
            if ($this->_build === null) {
                $this->_build = new BuildEntity($this, null);
            }
            return $this->_build;
        }
        return new BuildEntity($this, $data);
    }


    private $_build_token = null;

    // Canonical facade: $client->BuildToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->build_token()
    // resolves here too.
    public function BuildToken($data = null)
    {
        require_once __DIR__ . '/entity/build_token_entity.php';
        if ($data === null) {
            if ($this->_build_token === null) {
                $this->_build_token = new BuildTokenEntity($this, null);
            }
            return $this->_build_token;
        }
        return new BuildTokenEntity($this, $data);
    }


    private $_builds_api = null;

    // Canonical facade: $client->BuildsApi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->builds_api()
    // resolves here too.
    public function BuildsApi($data = null)
    {
        require_once __DIR__ . '/entity/builds_api_entity.php';
        if ($data === null) {
            if ($this->_builds_api === null) {
                $this->_builds_api = new BuildsApiEntity($this, null);
            }
            return $this->_builds_api;
        }
        return new BuildsApiEntity($this, $data);
    }


    private $_connection = null;

    // Canonical facade: $client->Connection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->connection()
    // resolves here too.
    public function Connection($data = null)
    {
        require_once __DIR__ . '/entity/connection_entity.php';
        if ($data === null) {
            if ($this->_connection === null) {
                $this->_connection = new ConnectionEntity($this, null);
            }
            return $this->_connection;
        }
        return new ConnectionEntity($this, $data);
    }


    private $_container_image = null;

    // Canonical facade: $client->ContainerImage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->container_image()
    // resolves here too.
    public function ContainerImage($data = null)
    {
        require_once __DIR__ . '/entity/container_image_entity.php';
        if ($data === null) {
            if ($this->_container_image === null) {
                $this->_container_image = new ContainerImageEntity($this, null);
            }
            return $this->_container_image;
        }
        return new ContainerImageEntity($this, $data);
    }


    private $_container_instance = null;

    // Canonical facade: $client->ContainerInstance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->container_instance()
    // resolves here too.
    public function ContainerInstance($data = null)
    {
        require_once __DIR__ . '/entity/container_instance_entity.php';
        if ($data === null) {
            if ($this->_container_instance === null) {
                $this->_container_instance = new ContainerInstanceEntity($this, null);
            }
            return $this->_container_instance;
        }
        return new ContainerInstanceEntity($this, $data);
    }


    private $_deploy_hook = null;

    // Canonical facade: $client->DeployHook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deploy_hook()
    // resolves here too.
    public function DeployHook($data = null)
    {
        require_once __DIR__ . '/entity/deploy_hook_entity.php';
        if ($data === null) {
            if ($this->_deploy_hook === null) {
                $this->_deploy_hook = new DeployHookEntity($this, null);
            }
            return $this->_deploy_hook;
        }
        return new DeployHookEntity($this, $data);
    }


    private $_deployment = null;

    // Canonical facade: $client->Deployment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deployment()
    // resolves here too.
    public function Deployment($data = null)
    {
        require_once __DIR__ . '/entity/deployment_entity.php';
        if ($data === null) {
            if ($this->_deployment === null) {
                $this->_deployment = new DeploymentEntity($this, null);
            }
            return $this->_deployment;
        }
        return new DeploymentEntity($this, $data);
    }


    private $_destination = null;

    // Canonical facade: $client->Destination()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->destination()
    // resolves here too.
    public function Destination($data = null)
    {
        require_once __DIR__ . '/entity/destination_entity.php';
        if ($data === null) {
            if ($this->_destination === null) {
                $this->_destination = new DestinationEntity($this, null);
            }
            return $this->_destination;
        }
        return new DestinationEntity($this, $data);
    }


    private $_domain = null;

    // Canonical facade: $client->Domain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->domain()
    // resolves here too.
    public function Domain($data = null)
    {
        require_once __DIR__ . '/entity/domain_entity.php';
        if ($data === null) {
            if ($this->_domain === null) {
                $this->_domain = new DomainEntity($this, null);
            }
            return $this->_domain;
        }
        return new DomainEntity($this, $data);
    }


    private $_durable_objects_namespace = null;

    // Canonical facade: $client->DurableObjectsNamespace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->durable_objects_namespace()
    // resolves here too.
    public function DurableObjectsNamespace($data = null)
    {
        require_once __DIR__ . '/entity/durable_objects_namespace_entity.php';
        if ($data === null) {
            if ($this->_durable_objects_namespace === null) {
                $this->_durable_objects_namespace = new DurableObjectsNamespaceEntity($this, null);
            }
            return $this->_durable_objects_namespace;
        }
        return new DurableObjectsNamespaceEntity($this, $data);
    }


    private $_environment_variable = null;

    // Canonical facade: $client->EnvironmentVariable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->environment_variable()
    // resolves here too.
    public function EnvironmentVariable($data = null)
    {
        require_once __DIR__ . '/entity/environment_variable_entity.php';
        if ($data === null) {
            if ($this->_environment_variable === null) {
                $this->_environment_variable = new EnvironmentVariableEntity($this, null);
            }
            return $this->_environment_variable;
        }
        return new EnvironmentVariableEntity($this, $data);
    }


    private $_git_hub_integration = null;

    // Canonical facade: $client->GitHubIntegration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->git_hub_integration()
    // resolves here too.
    public function GitHubIntegration($data = null)
    {
        require_once __DIR__ . '/entity/git_hub_integration_entity.php';
        if ($data === null) {
            if ($this->_git_hub_integration === null) {
                $this->_git_hub_integration = new GitHubIntegrationEntity($this, null);
            }
            return $this->_git_hub_integration;
        }
        return new GitHubIntegrationEntity($this, $data);
    }


    private $_hyperdrive = null;

    // Canonical facade: $client->Hyperdrive()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->hyperdrive()
    // resolves here too.
    public function Hyperdrive($data = null)
    {
        require_once __DIR__ . '/entity/hyperdrive_entity.php';
        if ($data === null) {
            if ($this->_hyperdrive === null) {
                $this->_hyperdrive = new HyperdriveEntity($this, null);
            }
            return $this->_hyperdrive;
        }
        return new HyperdriveEntity($this, $data);
    }


    private $_image_registry = null;

    // Canonical facade: $client->ImageRegistry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->image_registry()
    // resolves here too.
    public function ImageRegistry($data = null)
    {
        require_once __DIR__ . '/entity/image_registry_entity.php';
        if ($data === null) {
            if ($this->_image_registry === null) {
                $this->_image_registry = new ImageRegistryEntity($this, null);
            }
            return $this->_image_registry;
        }
        return new ImageRegistryEntity($this, $data);
    }


    private $_issue = null;

    // Canonical facade: $client->Issue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->issue()
    // resolves here too.
    public function Issue($data = null)
    {
        require_once __DIR__ . '/entity/issue_entity.php';
        if ($data === null) {
            if ($this->_issue === null) {
                $this->_issue = new IssueEntity($this, null);
            }
            return $this->_issue;
        }
        return new IssueEntity($this, $data);
    }


    private $_key = null;

    // Canonical facade: $client->Key()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->key()
    // resolves here too.
    public function Key($data = null)
    {
        require_once __DIR__ . '/entity/key_entity.php';
        if ($data === null) {
            if ($this->_key === null) {
                $this->_key = new KeyEntity($this, null);
            }
            return $this->_key;
        }
        return new KeyEntity($this, $data);
    }


    private $_live_tail = null;

    // Canonical facade: $client->LiveTail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->live_tail()
    // resolves here too.
    public function LiveTail($data = null)
    {
        require_once __DIR__ . '/entity/live_tail_entity.php';
        if ($data === null) {
            if ($this->_live_tail === null) {
                $this->_live_tail = new LiveTailEntity($this, null);
            }
            return $this->_live_tail;
        }
        return new LiveTailEntity($this, $data);
    }


    private $_metrics_export = null;

    // Canonical facade: $client->MetricsExport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->metrics_export()
    // resolves here too.
    public function MetricsExport($data = null)
    {
        require_once __DIR__ . '/entity/metrics_export_entity.php';
        if ($data === null) {
            if ($this->_metrics_export === null) {
                $this->_metrics_export = new MetricsExportEntity($this, null);
            }
            return $this->_metrics_export;
        }
        return new MetricsExportEntity($this, $data);
    }


    private $_namespace = null;

    // Canonical facade: $client->Namespace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->namespace()
    // resolves here too.
    public function Namespace($data = null)
    {
        require_once __DIR__ . '/entity/namespace_entity.php';
        if ($data === null) {
            if ($this->_namespace === null) {
                $this->_namespace = new NamespaceEntity($this, null);
            }
            return $this->_namespace;
        }
        return new NamespaceEntity($this, $data);
    }


    private $_preview = null;

    // Canonical facade: $client->Preview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->preview()
    // resolves here too.
    public function Preview($data = null)
    {
        require_once __DIR__ . '/entity/preview_entity.php';
        if ($data === null) {
            if ($this->_preview === null) {
                $this->_preview = new PreviewEntity($this, null);
            }
            return $this->_preview;
        }
        return new PreviewEntity($this, $data);
    }


    private $_preview_deployment = null;

    // Canonical facade: $client->PreviewDeployment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->preview_deployment()
    // resolves here too.
    public function PreviewDeployment($data = null)
    {
        require_once __DIR__ . '/entity/preview_deployment_entity.php';
        if ($data === null) {
            if ($this->_preview_deployment === null) {
                $this->_preview_deployment = new PreviewDeploymentEntity($this, null);
            }
            return $this->_preview_deployment;
        }
        return new PreviewDeploymentEntity($this, $data);
    }


    private $_query = null;

    // Canonical facade: $client->Query()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->query()
    // resolves here too.
    public function Query($data = null)
    {
        require_once __DIR__ . '/entity/query_entity.php';
        if ($data === null) {
            if ($this->_query === null) {
                $this->_query = new QueryEntity($this, null);
            }
            return $this->_query;
        }
        return new QueryEntity($this, $data);
    }


    private $_repository_connection = null;

    // Canonical facade: $client->RepositoryConnection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_connection()
    // resolves here too.
    public function RepositoryConnection($data = null)
    {
        require_once __DIR__ . '/entity/repository_connection_entity.php';
        if ($data === null) {
            if ($this->_repository_connection === null) {
                $this->_repository_connection = new RepositoryConnectionEntity($this, null);
            }
            return $this->_repository_connection;
        }
        return new RepositoryConnectionEntity($this, $data);
    }


    private $_rollout = null;

    // Canonical facade: $client->Rollout()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rollout()
    // resolves here too.
    public function Rollout($data = null)
    {
        require_once __DIR__ . '/entity/rollout_entity.php';
        if ($data === null) {
            if ($this->_rollout === null) {
                $this->_rollout = new RolloutEntity($this, null);
            }
            return $this->_rollout;
        }
        return new RolloutEntity($this, $data);
    }


    private $_saved_query = null;

    // Canonical facade: $client->SavedQuery()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->saved_query()
    // resolves here too.
    public function SavedQuery($data = null)
    {
        require_once __DIR__ . '/entity/saved_query_entity.php';
        if ($data === null) {
            if ($this->_saved_query === null) {
                $this->_saved_query = new SavedQueryEntity($this, null);
            }
            return $this->_saved_query;
        }
        return new SavedQueryEntity($this, $data);
    }


    private $_script = null;

    // Canonical facade: $client->Script()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->script()
    // resolves here too.
    public function Script($data = null)
    {
        require_once __DIR__ . '/entity/script_entity.php';
        if ($data === null) {
            if ($this->_script === null) {
                $this->_script = new ScriptEntity($this, null);
            }
            return $this->_script;
        }
        return new ScriptEntity($this, $data);
    }


    private $_script_setting = null;

    // Canonical facade: $client->ScriptSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->script_setting()
    // resolves here too.
    public function ScriptSetting($data = null)
    {
        require_once __DIR__ . '/entity/script_setting_entity.php';
        if ($data === null) {
            if ($this->_script_setting === null) {
                $this->_script_setting = new ScriptSettingEntity($this, null);
            }
            return $this->_script_setting;
        }
        return new ScriptSettingEntity($this, $data);
    }


    private $_secret = null;

    // Canonical facade: $client->Secret()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secret()
    // resolves here too.
    public function Secret($data = null)
    {
        require_once __DIR__ . '/entity/secret_entity.php';
        if ($data === null) {
            if ($this->_secret === null) {
                $this->_secret = new SecretEntity($this, null);
            }
            return $this->_secret;
        }
        return new SecretEntity($this, $data);
    }


    private $_secrets_store_delete = null;

    // Canonical facade: $client->SecretsStoreDelete()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secrets_store_delete()
    // resolves here too.
    public function SecretsStoreDelete($data = null)
    {
        require_once __DIR__ . '/entity/secrets_store_delete_entity.php';
        if ($data === null) {
            if ($this->_secrets_store_delete === null) {
                $this->_secrets_store_delete = new SecretsStoreDeleteEntity($this, null);
            }
            return $this->_secrets_store_delete;
        }
        return new SecretsStoreDeleteEntity($this, $data);
    }


    private $_secrets_store_quota = null;

    // Canonical facade: $client->SecretsStoreQuota()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secrets_store_quota()
    // resolves here too.
    public function SecretsStoreQuota($data = null)
    {
        require_once __DIR__ . '/entity/secrets_store_quota_entity.php';
        if ($data === null) {
            if ($this->_secrets_store_quota === null) {
                $this->_secrets_store_quota = new SecretsStoreQuotaEntity($this, null);
            }
            return $this->_secrets_store_quota;
        }
        return new SecretsStoreQuotaEntity($this, $data);
    }


    private $_secrets_store_secret = null;

    // Canonical facade: $client->SecretsStoreSecret()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secrets_store_secret()
    // resolves here too.
    public function SecretsStoreSecret($data = null)
    {
        require_once __DIR__ . '/entity/secrets_store_secret_entity.php';
        if ($data === null) {
            if ($this->_secrets_store_secret === null) {
                $this->_secrets_store_secret = new SecretsStoreSecretEntity($this, null);
            }
            return $this->_secrets_store_secret;
        }
        return new SecretsStoreSecretEntity($this, $data);
    }


    private $_secrets_store_store = null;

    // Canonical facade: $client->SecretsStoreStore()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secrets_store_store()
    // resolves here too.
    public function SecretsStoreStore($data = null)
    {
        require_once __DIR__ . '/entity/secrets_store_store_entity.php';
        if ($data === null) {
            if ($this->_secrets_store_store === null) {
                $this->_secrets_store_store = new SecretsStoreStoreEntity($this, null);
            }
            return $this->_secrets_store_store;
        }
        return new SecretsStoreStoreEntity($this, $data);
    }


    private $_secrets_store_stores_response_collection = null;

    // Canonical facade: $client->SecretsStoreStoresResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secrets_store_stores_response_collection()
    // resolves here too.
    public function SecretsStoreStoresResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/secrets_store_stores_response_collection_entity.php';
        if ($data === null) {
            if ($this->_secrets_store_stores_response_collection === null) {
                $this->_secrets_store_stores_response_collection = new SecretsStoreStoresResponseCollectionEntity($this, null);
            }
            return $this->_secrets_store_stores_response_collection;
        }
        return new SecretsStoreStoresResponseCollectionEntity($this, $data);
    }


    private $_setting = null;

    // Canonical facade: $client->Setting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->setting()
    // resolves here too.
    public function Setting($data = null)
    {
        require_once __DIR__ . '/entity/setting_entity.php';
        if ($data === null) {
            if ($this->_setting === null) {
                $this->_setting = new SettingEntity($this, null);
            }
            return $this->_setting;
        }
        return new SettingEntity($this, $data);
    }


    private $_shared = null;

    // Canonical facade: $client->Shared()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->shared()
    // resolves here too.
    public function Shared($data = null)
    {
        require_once __DIR__ . '/entity/shared_entity.php';
        if ($data === null) {
            if ($this->_shared === null) {
                $this->_shared = new SharedEntity($this, null);
            }
            return $this->_shared;
        }
        return new SharedEntity($this, $data);
    }


    private $_tail = null;

    // Canonical facade: $client->Tail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tail()
    // resolves here too.
    public function Tail($data = null)
    {
        require_once __DIR__ . '/entity/tail_entity.php';
        if ($data === null) {
            if ($this->_tail === null) {
                $this->_tail = new TailEntity($this, null);
            }
            return $this->_tail;
        }
        return new TailEntity($this, $data);
    }


    private $_token = null;

    // Canonical facade: $client->Token()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->token()
    // resolves here too.
    public function Token($data = null)
    {
        require_once __DIR__ . '/entity/token_entity.php';
        if ($data === null) {
            if ($this->_token === null) {
                $this->_token = new TokenEntity($this, null);
            }
            return $this->_token;
        }
        return new TokenEntity($this, $data);
    }


    private $_trigger = null;

    // Canonical facade: $client->Trigger()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->trigger()
    // resolves here too.
    public function Trigger($data = null)
    {
        require_once __DIR__ . '/entity/trigger_entity.php';
        if ($data === null) {
            if ($this->_trigger === null) {
                $this->_trigger = new TriggerEntity($this, null);
            }
            return $this->_trigger;
        }
        return new TriggerEntity($this, $data);
    }


    private $_usage = null;

    // Canonical facade: $client->Usage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->usage()
    // resolves here too.
    public function Usage($data = null)
    {
        require_once __DIR__ . '/entity/usage_entity.php';
        if ($data === null) {
            if ($this->_usage === null) {
                $this->_usage = new UsageEntity($this, null);
            }
            return $this->_usage;
        }
        return new UsageEntity($this, $data);
    }


    private $_value = null;

    // Canonical facade: $client->Value()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->value()
    // resolves here too.
    public function Value($data = null)
    {
        require_once __DIR__ . '/entity/value_entity.php';
        if ($data === null) {
            if ($this->_value === null) {
                $this->_value = new ValueEntity($this, null);
            }
            return $this->_value;
        }
        return new ValueEntity($this, $data);
    }


    private $_version = null;

    // Canonical facade: $client->Version()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->version()
    // resolves here too.
    public function Version($data = null)
    {
        require_once __DIR__ . '/entity/version_entity.php';
        if ($data === null) {
            if ($this->_version === null) {
                $this->_version = new VersionEntity($this, null);
            }
            return $this->_version;
        }
        return new VersionEntity($this, $data);
    }


    private $_worker = null;

    // Canonical facade: $client->Worker()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->worker()
    // resolves here too.
    public function Worker($data = null)
    {
        require_once __DIR__ . '/entity/worker_entity.php';
        if ($data === null) {
            if ($this->_worker === null) {
                $this->_worker = new WorkerEntity($this, null);
            }
            return $this->_worker;
        }
        return new WorkerEntity($this, $data);
    }


    private $_worker_cron_trigger = null;

    // Canonical facade: $client->WorkerCronTrigger()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->worker_cron_trigger()
    // resolves here too.
    public function WorkerCronTrigger($data = null)
    {
        require_once __DIR__ . '/entity/worker_cron_trigger_entity.php';
        if ($data === null) {
            if ($this->_worker_cron_trigger === null) {
                $this->_worker_cron_trigger = new WorkerCronTriggerEntity($this, null);
            }
            return $this->_worker_cron_trigger;
        }
        return new WorkerCronTriggerEntity($this, $data);
    }


    private $_worker_deployment = null;

    // Canonical facade: $client->WorkerDeployment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->worker_deployment()
    // resolves here too.
    public function WorkerDeployment($data = null)
    {
        require_once __DIR__ . '/entity/worker_deployment_entity.php';
        if ($data === null) {
            if ($this->_worker_deployment === null) {
                $this->_worker_deployment = new WorkerDeploymentEntity($this, null);
            }
            return $this->_worker_deployment;
        }
        return new WorkerDeploymentEntity($this, $data);
    }


    private $_worker_environment = null;

    // Canonical facade: $client->WorkerEnvironment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->worker_environment()
    // resolves here too.
    public function WorkerEnvironment($data = null)
    {
        require_once __DIR__ . '/entity/worker_environment_entity.php';
        if ($data === null) {
            if ($this->_worker_environment === null) {
                $this->_worker_environment = new WorkerEnvironmentEntity($this, null);
            }
            return $this->_worker_environment;
        }
        return new WorkerEnvironmentEntity($this, $data);
    }


    private $_worker_route = null;

    // Canonical facade: $client->WorkerRoute()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->worker_route()
    // resolves here too.
    public function WorkerRoute($data = null)
    {
        require_once __DIR__ . '/entity/worker_route_entity.php';
        if ($data === null) {
            if ($this->_worker_route === null) {
                $this->_worker_route = new WorkerRouteEntity($this, null);
            }
            return $this->_worker_route;
        }
        return new WorkerRouteEntity($this, $data);
    }


    private $_worker_script = null;

    // Canonical facade: $client->WorkerScript()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->worker_script()
    // resolves here too.
    public function WorkerScript($data = null)
    {
        require_once __DIR__ . '/entity/worker_script_entity.php';
        if ($data === null) {
            if ($this->_worker_script === null) {
                $this->_worker_script = new WorkerScriptEntity($this, null);
            }
            return $this->_worker_script;
        }
        return new WorkerScriptEntity($this, $data);
    }


    private $_worker_subdomain = null;

    // Canonical facade: $client->WorkerSubdomain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->worker_subdomain()
    // resolves here too.
    public function WorkerSubdomain($data = null)
    {
        require_once __DIR__ . '/entity/worker_subdomain_entity.php';
        if ($data === null) {
            if ($this->_worker_subdomain === null) {
                $this->_worker_subdomain = new WorkerSubdomainEntity($this, null);
            }
            return $this->_worker_subdomain;
        }
        return new WorkerSubdomainEntity($this, $data);
    }


    private $_worker_tail_log = null;

    // Canonical facade: $client->WorkerTailLog()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->worker_tail_log()
    // resolves here too.
    public function WorkerTailLog($data = null)
    {
        require_once __DIR__ . '/entity/worker_tail_log_entity.php';
        if ($data === null) {
            if ($this->_worker_tail_log === null) {
                $this->_worker_tail_log = new WorkerTailLogEntity($this, null);
            }
            return $this->_worker_tail_log;
        }
        return new WorkerTailLogEntity($this, $data);
    }


    private $_workers_account_setting = null;

    // Canonical facade: $client->WorkersAccountSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_account_setting()
    // resolves here too.
    public function WorkersAccountSetting($data = null)
    {
        require_once __DIR__ . '/entity/workers_account_setting_entity.php';
        if ($data === null) {
            if ($this->_workers_account_setting === null) {
                $this->_workers_account_setting = new WorkersAccountSettingEntity($this, null);
            }
            return $this->_workers_account_setting;
        }
        return new WorkersAccountSettingEntity($this, $data);
    }


    private $_workers_api_response_null_result = null;

    // Canonical facade: $client->WorkersApiResponseNullResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_api_response_null_result()
    // resolves here too.
    public function WorkersApiResponseNullResult($data = null)
    {
        require_once __DIR__ . '/entity/workers_api_response_null_result_entity.php';
        if ($data === null) {
            if ($this->_workers_api_response_null_result === null) {
                $this->_workers_api_response_null_result = new WorkersApiResponseNullResultEntity($this, null);
            }
            return $this->_workers_api_response_null_result;
        }
        return new WorkersApiResponseNullResultEntity($this, $data);
    }


    private $_workers_completed_upload_asset = null;

    // Canonical facade: $client->WorkersCompletedUploadAsset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_completed_upload_asset()
    // resolves here too.
    public function WorkersCompletedUploadAsset($data = null)
    {
        require_once __DIR__ . '/entity/workers_completed_upload_asset_entity.php';
        if ($data === null) {
            if ($this->_workers_completed_upload_asset === null) {
                $this->_workers_completed_upload_asset = new WorkersCompletedUploadAssetEntity($this, null);
            }
            return $this->_workers_completed_upload_asset;
        }
        return new WorkersCompletedUploadAssetEntity($this, $data);
    }


    private $_workers_create_assets_upload_session = null;

    // Canonical facade: $client->WorkersCreateAssetsUploadSession()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_create_assets_upload_session()
    // resolves here too.
    public function WorkersCreateAssetsUploadSession($data = null)
    {
        require_once __DIR__ . '/entity/workers_create_assets_upload_session_entity.php';
        if ($data === null) {
            if ($this->_workers_create_assets_upload_session === null) {
                $this->_workers_create_assets_upload_session = new WorkersCreateAssetsUploadSessionEntity($this, null);
            }
            return $this->_workers_create_assets_upload_session;
        }
        return new WorkersCreateAssetsUploadSessionEntity($this, $data);
    }


    private $_workers_for_platform = null;

    // Canonical facade: $client->WorkersForPlatform()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_for_platform()
    // resolves here too.
    public function WorkersForPlatform($data = null)
    {
        require_once __DIR__ . '/entity/workers_for_platform_entity.php';
        if ($data === null) {
            if ($this->_workers_for_platform === null) {
                $this->_workers_for_platform = new WorkersForPlatformEntity($this, null);
            }
            return $this->_workers_for_platform;
        }
        return new WorkersForPlatformEntity($this, $data);
    }


    private $_workers_kv_api_response_common_no_result = null;

    // Canonical facade: $client->WorkersKvApiResponseCommonNoResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_kv_api_response_common_no_result()
    // resolves here too.
    public function WorkersKvApiResponseCommonNoResult($data = null)
    {
        require_once __DIR__ . '/entity/workers_kv_api_response_common_no_result_entity.php';
        if ($data === null) {
            if ($this->_workers_kv_api_response_common_no_result === null) {
                $this->_workers_kv_api_response_common_no_result = new WorkersKvApiResponseCommonNoResultEntity($this, null);
            }
            return $this->_workers_kv_api_response_common_no_result;
        }
        return new WorkersKvApiResponseCommonNoResultEntity($this, $data);
    }


    private $_workers_kv_namespace = null;

    // Canonical facade: $client->WorkersKvNamespace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_kv_namespace()
    // resolves here too.
    public function WorkersKvNamespace($data = null)
    {
        require_once __DIR__ . '/entity/workers_kv_namespace_entity.php';
        if ($data === null) {
            if ($this->_workers_kv_namespace === null) {
                $this->_workers_kv_namespace = new WorkersKvNamespaceEntity($this, null);
            }
            return $this->_workers_kv_namespace;
        }
        return new WorkersKvNamespaceEntity($this, $data);
    }


    private $_workers_namespace_list = null;

    // Canonical facade: $client->WorkersNamespaceList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_namespace_list()
    // resolves here too.
    public function WorkersNamespaceList($data = null)
    {
        require_once __DIR__ . '/entity/workers_namespace_list_entity.php';
        if ($data === null) {
            if ($this->_workers_namespace_list === null) {
                $this->_workers_namespace_list = new WorkersNamespaceListEntity($this, null);
            }
            return $this->_workers_namespace_list;
        }
        return new WorkersNamespaceListEntity($this, $data);
    }


    private $_workers_namespace_script_delete_bulk = null;

    // Canonical facade: $client->WorkersNamespaceScriptDeleteBulk()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_namespace_script_delete_bulk()
    // resolves here too.
    public function WorkersNamespaceScriptDeleteBulk($data = null)
    {
        require_once __DIR__ . '/entity/workers_namespace_script_delete_bulk_entity.php';
        if ($data === null) {
            if ($this->_workers_namespace_script_delete_bulk === null) {
                $this->_workers_namespace_script_delete_bulk = new WorkersNamespaceScriptDeleteBulkEntity($this, null);
            }
            return $this->_workers_namespace_script_delete_bulk;
        }
        return new WorkersNamespaceScriptDeleteBulkEntity($this, $data);
    }


    private $_workers_namespace_script_response_single = null;

    // Canonical facade: $client->WorkersNamespaceScriptResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_namespace_script_response_single()
    // resolves here too.
    public function WorkersNamespaceScriptResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/workers_namespace_script_response_single_entity.php';
        if ($data === null) {
            if ($this->_workers_namespace_script_response_single === null) {
                $this->_workers_namespace_script_response_single = new WorkersNamespaceScriptResponseSingleEntity($this, null);
            }
            return $this->_workers_namespace_script_response_single;
        }
        return new WorkersNamespaceScriptResponseSingleEntity($this, $data);
    }


    private $_workers_namespace_single = null;

    // Canonical facade: $client->WorkersNamespaceSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_namespace_single()
    // resolves here too.
    public function WorkersNamespaceSingle($data = null)
    {
        require_once __DIR__ . '/entity/workers_namespace_single_entity.php';
        if ($data === null) {
            if ($this->_workers_namespace_single === null) {
                $this->_workers_namespace_single = new WorkersNamespaceSingleEntity($this, null);
            }
            return $this->_workers_namespace_single;
        }
        return new WorkersNamespaceSingleEntity($this, $data);
    }


    private $_workers_pipelines_other = null;

    // Canonical facade: $client->WorkersPipelinesOther()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_pipelines_other()
    // resolves here too.
    public function WorkersPipelinesOther($data = null)
    {
        require_once __DIR__ . '/entity/workers_pipelines_other_entity.php';
        if ($data === null) {
            if ($this->_workers_pipelines_other === null) {
                $this->_workers_pipelines_other = new WorkersPipelinesOtherEntity($this, null);
            }
            return $this->_workers_pipelines_other;
        }
        return new WorkersPipelinesOtherEntity($this, $data);
    }


    private $_workers_script_and_version_setting = null;

    // Canonical facade: $client->WorkersScriptAndVersionSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_script_and_version_setting()
    // resolves here too.
    public function WorkersScriptAndVersionSetting($data = null)
    {
        require_once __DIR__ . '/entity/workers_script_and_version_setting_entity.php';
        if ($data === null) {
            if ($this->_workers_script_and_version_setting === null) {
                $this->_workers_script_and_version_setting = new WorkersScriptAndVersionSettingEntity($this, null);
            }
            return $this->_workers_script_and_version_setting;
        }
        return new WorkersScriptAndVersionSettingEntity($this, $data);
    }


    private $_workers_script_response_collection = null;

    // Canonical facade: $client->WorkersScriptResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_script_response_collection()
    // resolves here too.
    public function WorkersScriptResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/workers_script_response_collection_entity.php';
        if ($data === null) {
            if ($this->_workers_script_response_collection === null) {
                $this->_workers_script_response_collection = new WorkersScriptResponseCollectionEntity($this, null);
            }
            return $this->_workers_script_response_collection;
        }
        return new WorkersScriptResponseCollectionEntity($this, $data);
    }


    private $_workers_script_response_single = null;

    // Canonical facade: $client->WorkersScriptResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_script_response_single()
    // resolves here too.
    public function WorkersScriptResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/workers_script_response_single_entity.php';
        if ($data === null) {
            if ($this->_workers_script_response_single === null) {
                $this->_workers_script_response_single = new WorkersScriptResponseSingleEntity($this, null);
            }
            return $this->_workers_script_response_single;
        }
        return new WorkersScriptResponseSingleEntity($this, $data);
    }


    private $_workers_smart_placement = null;

    // Canonical facade: $client->WorkersSmartPlacement()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_smart_placement()
    // resolves here too.
    public function WorkersSmartPlacement($data = null)
    {
        require_once __DIR__ . '/entity/workers_smart_placement_entity.php';
        if ($data === null) {
            if ($this->_workers_smart_placement === null) {
                $this->_workers_smart_placement = new WorkersSmartPlacementEntity($this, null);
            }
            return $this->_workers_smart_placement;
        }
        return new WorkersSmartPlacementEntity($this, $data);
    }


    private $_workers_usage_model = null;

    // Canonical facade: $client->WorkersUsageModel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_usage_model()
    // resolves here too.
    public function WorkersUsageModel($data = null)
    {
        require_once __DIR__ . '/entity/workers_usage_model_entity.php';
        if ($data === null) {
            if ($this->_workers_usage_model === null) {
                $this->_workers_usage_model = new WorkersUsageModelEntity($this, null);
            }
            return $this->_workers_usage_model;
        }
        return new WorkersUsageModelEntity($this, $data);
    }


    private $_workers_versions_list = null;

    // Canonical facade: $client->WorkersVersionsList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_versions_list()
    // resolves here too.
    public function WorkersVersionsList($data = null)
    {
        require_once __DIR__ . '/entity/workers_versions_list_entity.php';
        if ($data === null) {
            if ($this->_workers_versions_list === null) {
                $this->_workers_versions_list = new WorkersVersionsListEntity($this, null);
            }
            return $this->_workers_versions_list;
        }
        return new WorkersVersionsListEntity($this, $data);
    }


    private $_workers_versions_single = null;

    // Canonical facade: $client->WorkersVersionsSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_versions_single()
    // resolves here too.
    public function WorkersVersionsSingle($data = null)
    {
        require_once __DIR__ . '/entity/workers_versions_single_entity.php';
        if ($data === null) {
            if ($this->_workers_versions_single === null) {
                $this->_workers_versions_single = new WorkersVersionsSingleEntity($this, null);
            }
            return $this->_workers_versions_single;
        }
        return new WorkersVersionsSingleEntity($this, $data);
    }


    private $_workers_versions_upload = null;

    // Canonical facade: $client->WorkersVersionsUpload()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_versions_upload()
    // resolves here too.
    public function WorkersVersionsUpload($data = null)
    {
        require_once __DIR__ . '/entity/workers_versions_upload_entity.php';
        if ($data === null) {
            if ($this->_workers_versions_upload === null) {
                $this->_workers_versions_upload = new WorkersVersionsUploadEntity($this, null);
            }
            return $this->_workers_versions_upload;
        }
        return new WorkersVersionsUploadEntity($this, $data);
    }


    private $_workflow = null;

    // Canonical facade: $client->Workflow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow()
    // resolves here too.
    public function Workflow($data = null)
    {
        require_once __DIR__ . '/entity/workflow_entity.php';
        if ($data === null) {
            if ($this->_workflow === null) {
                $this->_workflow = new WorkflowEntity($this, null);
            }
            return $this->_workflow;
        }
        return new WorkflowEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CloudflareWorkersSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
