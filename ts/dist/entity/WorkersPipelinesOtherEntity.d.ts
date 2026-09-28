import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersPipelinesOther, WorkersPipelinesOtherLoadMatch, WorkersPipelinesOtherListMatch, WorkersPipelinesOtherCreateData, WorkersPipelinesOtherUpdateData, WorkersPipelinesOtherRemoveMatch } from '../CloudflareWorkersTypes';
declare class WorkersPipelinesOtherEntity extends CloudflareWorkersEntityBase<WorkersPipelinesOther> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersPipelinesOtherEntity): WorkersPipelinesOtherEntity;
    load(this: any, reqmatch?: WorkersPipelinesOtherLoadMatch, ctrl?: Control): Promise<WorkersPipelinesOtherEntity>;
    list(this: any, reqmatch?: WorkersPipelinesOtherListMatch, ctrl?: Control): Promise<WorkersPipelinesOtherEntity[]>;
    create(this: any, reqdata?: WorkersPipelinesOtherCreateData, ctrl?: Control): Promise<WorkersPipelinesOtherEntity>;
    update(this: any, reqdata?: WorkersPipelinesOtherUpdateData, ctrl?: Control): Promise<WorkersPipelinesOtherEntity>;
    remove(this: any, reqmatch?: WorkersPipelinesOtherRemoveMatch, ctrl?: Control): Promise<WorkersPipelinesOtherEntity>;
}
export { WorkersPipelinesOtherEntity };
