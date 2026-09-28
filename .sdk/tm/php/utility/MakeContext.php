<?php
declare(strict_types=1);

// CloudflareWorkers SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudflareWorkersMakeContext
{
    public static function call(array $ctxmap, ?CloudflareWorkersContext $basectx): CloudflareWorkersContext
    {
        return new CloudflareWorkersContext($ctxmap, $basectx);
    }
}
