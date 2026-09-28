<?php
declare(strict_types=1);

// CloudflareWorkers SDK utility: result_headers

class CloudflareWorkersResultHeaders
{
    public static function call(CloudflareWorkersContext $ctx): ?CloudflareWorkersResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
