import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersApiResponseNullResult, WorkersApiResponseNullResultUpdateData, WorkersApiResponseNullResultRemoveMatch } from '../CloudflareWorkersTypes';
declare class WorkersApiResponseNullResultEntity extends CloudflareWorkersEntityBase<WorkersApiResponseNullResult> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersApiResponseNullResultEntity): WorkersApiResponseNullResultEntity;
    update(this: any, reqdata?: WorkersApiResponseNullResultUpdateData, ctrl?: Control): Promise<WorkersApiResponseNullResultEntity>;
    remove(this: any, reqmatch?: WorkersApiResponseNullResultRemoveMatch, ctrl?: Control): Promise<WorkersApiResponseNullResultEntity>;
}
export { WorkersApiResponseNullResultEntity };
