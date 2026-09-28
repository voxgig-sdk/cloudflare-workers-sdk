import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { PreviewDeployment, PreviewDeploymentLoadMatch, PreviewDeploymentListMatch, PreviewDeploymentCreateData, PreviewDeploymentUpdateData } from '../CloudflareWorkersTypes';
declare class PreviewDeploymentEntity extends CloudflareWorkersEntityBase<PreviewDeployment> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: PreviewDeploymentEntity): PreviewDeploymentEntity;
    load(this: any, reqmatch?: PreviewDeploymentLoadMatch, ctrl?: Control): Promise<PreviewDeploymentEntity>;
    list(this: any, reqmatch?: PreviewDeploymentListMatch, ctrl?: Control): Promise<PreviewDeploymentEntity[]>;
    create(this: any, reqdata?: PreviewDeploymentCreateData, ctrl?: Control): Promise<PreviewDeploymentEntity>;
    update(this: any, reqdata?: PreviewDeploymentUpdateData, ctrl?: Control): Promise<PreviewDeploymentEntity>;
}
export { PreviewDeploymentEntity };
