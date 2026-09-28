import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { GitHubIntegration, GitHubIntegrationListMatch } from '../CloudflareWorkersTypes';
declare class GitHubIntegrationEntity extends CloudflareWorkersEntityBase<GitHubIntegration> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: GitHubIntegrationEntity): GitHubIntegrationEntity;
    list(this: any, reqmatch?: GitHubIntegrationListMatch, ctrl?: Control): Promise<GitHubIntegrationEntity[]>;
}
export { GitHubIntegrationEntity };
