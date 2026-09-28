package core

type CloudflareWorkersError struct {
	IsCloudflareWorkersError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudflareWorkersError(code string, msg string, ctx *Context) *CloudflareWorkersError {
	return &CloudflareWorkersError{
		IsCloudflareWorkersError: true,
		Sdk:              "CloudflareWorkers",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudflareWorkersError) Error() string {
	return e.Msg
}
