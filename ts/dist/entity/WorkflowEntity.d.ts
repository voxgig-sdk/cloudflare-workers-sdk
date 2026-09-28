import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Workflow, WorkflowLoadMatch, WorkflowListMatch, WorkflowCreateData, WorkflowUpdateData, WorkflowRemoveMatch } from '../CloudflareWorkersTypes';
declare class WorkflowEntity extends CloudflareWorkersEntityBase<Workflow> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkflowEntity): WorkflowEntity;
    load(this: any, reqmatch?: WorkflowLoadMatch, ctrl?: Control): Promise<WorkflowEntity>;
    list(this: any, reqmatch?: WorkflowListMatch, ctrl?: Control): Promise<WorkflowEntity[]>;
    create(this: any, reqdata?: WorkflowCreateData, ctrl?: Control): Promise<WorkflowEntity>;
    update(this: any, reqdata?: WorkflowUpdateData, ctrl?: Control): Promise<WorkflowEntity>;
    remove(this: any, reqmatch?: WorkflowRemoveMatch, ctrl?: Control): Promise<WorkflowEntity>;
}
export { WorkflowEntity };
