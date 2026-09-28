import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Deployment, DeploymentRemoveMatch } from '../CloudflareWorkersTypes';
declare class DeploymentEntity extends CloudflareWorkersEntityBase<Deployment> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: DeploymentEntity): DeploymentEntity;
    remove(this: any, reqmatch?: DeploymentRemoveMatch, ctrl?: Control): Promise<DeploymentEntity>;
}
export { DeploymentEntity };
