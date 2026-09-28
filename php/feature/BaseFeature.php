<?php
declare(strict_types=1);

// CloudflareWorkers SDK base feature

class CloudflareWorkersBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CloudflareWorkersContext $ctx, array $options): void {}
    public function PostConstruct(CloudflareWorkersContext $ctx): void {}
    public function PostConstructEntity(CloudflareWorkersContext $ctx): void {}
    public function SetData(CloudflareWorkersContext $ctx): void {}
    public function GetData(CloudflareWorkersContext $ctx): void {}
    public function GetMatch(CloudflareWorkersContext $ctx): void {}
    public function SetMatch(CloudflareWorkersContext $ctx): void {}
    public function PrePoint(CloudflareWorkersContext $ctx): void {}
    public function PreSpec(CloudflareWorkersContext $ctx): void {}
    public function PreRequest(CloudflareWorkersContext $ctx): void {}
    public function PreResponse(CloudflareWorkersContext $ctx): void {}
    public function PreResult(CloudflareWorkersContext $ctx): void {}
    public function PreDone(CloudflareWorkersContext $ctx): void {}
    public function PreUnexpected(CloudflareWorkersContext $ctx): void {}
}
