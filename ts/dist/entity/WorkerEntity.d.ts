import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Worker, WorkerLoadMatch, WorkerListMatch, WorkerCreateData, WorkerUpdateData, WorkerRemoveMatch } from '../CloudflareWorkersTypes';
declare class WorkerEntity extends CloudflareWorkersEntityBase<Worker> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkerEntity): WorkerEntity;
    load(this: any, reqmatch?: WorkerLoadMatch, ctrl?: Control): Promise<WorkerEntity>;
    list(this: any, reqmatch?: WorkerListMatch, ctrl?: Control): Promise<WorkerEntity[]>;
    create(this: any, reqdata?: WorkerCreateData, ctrl?: Control): Promise<WorkerEntity>;
    update(this: any, reqdata?: WorkerUpdateData, ctrl?: Control): Promise<WorkerEntity>;
    remove(this: any, reqmatch?: WorkerRemoveMatch, ctrl?: Control): Promise<WorkerEntity>;
}
export { WorkerEntity };
