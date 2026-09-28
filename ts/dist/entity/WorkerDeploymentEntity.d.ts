import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkerDeployment, WorkerDeploymentLoadMatch, WorkerDeploymentCreateData } from '../CloudflareWorkersTypes';
declare class WorkerDeploymentEntity extends CloudflareWorkersEntityBase<WorkerDeployment> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkerDeploymentEntity): WorkerDeploymentEntity;
    load(this: any, reqmatch?: WorkerDeploymentLoadMatch, ctrl?: Control): Promise<WorkerDeploymentEntity>;
    create(this: any, reqdata?: WorkerDeploymentCreateData, ctrl?: Control): Promise<WorkerDeploymentEntity>;
}
export { WorkerDeploymentEntity };
