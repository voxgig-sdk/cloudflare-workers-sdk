import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkerCronTrigger, WorkerCronTriggerListMatch, WorkerCronTriggerUpdateData } from '../CloudflareWorkersTypes';
declare class WorkerCronTriggerEntity extends CloudflareWorkersEntityBase<WorkerCronTrigger> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkerCronTriggerEntity): WorkerCronTriggerEntity;
    list(this: any, reqmatch?: WorkerCronTriggerListMatch, ctrl?: Control): Promise<WorkerCronTriggerEntity[]>;
    update(this: any, reqdata?: WorkerCronTriggerUpdateData, ctrl?: Control): Promise<WorkerCronTriggerEntity>;
}
export { WorkerCronTriggerEntity };
