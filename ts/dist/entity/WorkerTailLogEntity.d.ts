import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkerTailLog, WorkerTailLogListMatch, WorkerTailLogCreateData } from '../CloudflareWorkersTypes';
declare class WorkerTailLogEntity extends CloudflareWorkersEntityBase<WorkerTailLog> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkerTailLogEntity): WorkerTailLogEntity;
    list(this: any, reqmatch?: WorkerTailLogListMatch, ctrl?: Control): Promise<WorkerTailLogEntity[]>;
    create(this: any, reqdata?: WorkerTailLogCreateData, ctrl?: Control): Promise<WorkerTailLogEntity>;
}
export { WorkerTailLogEntity };
