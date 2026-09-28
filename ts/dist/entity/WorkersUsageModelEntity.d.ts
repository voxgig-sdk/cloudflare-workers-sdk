import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersUsageModel, WorkersUsageModelListMatch, WorkersUsageModelUpdateData } from '../CloudflareWorkersTypes';
declare class WorkersUsageModelEntity extends CloudflareWorkersEntityBase<WorkersUsageModel> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersUsageModelEntity): WorkersUsageModelEntity;
    list(this: any, reqmatch?: WorkersUsageModelListMatch, ctrl?: Control): Promise<WorkersUsageModelEntity[]>;
    update(this: any, reqdata?: WorkersUsageModelUpdateData, ctrl?: Control): Promise<WorkersUsageModelEntity>;
}
export { WorkersUsageModelEntity };
