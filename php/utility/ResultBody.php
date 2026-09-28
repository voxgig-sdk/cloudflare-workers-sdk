<?php
declare(strict_types=1);

// CloudflareWorkers SDK utility: result_body

class CloudflareWorkersResultBody
{
    public static function call(CloudflareWorkersContext $ctx): ?CloudflareWorkersResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
