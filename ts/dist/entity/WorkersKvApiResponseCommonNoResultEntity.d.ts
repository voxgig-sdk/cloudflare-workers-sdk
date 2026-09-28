import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersKvApiResponseCommonNoResult, WorkersKvApiResponseCommonNoResultUpdateData, WorkersKvApiResponseCommonNoResultRemoveMatch } from '../CloudflareWorkersTypes';
declare class WorkersKvApiResponseCommonNoResultEntity extends CloudflareWorkersEntityBase<WorkersKvApiResponseCommonNoResult> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersKvApiResponseCommonNoResultEntity): WorkersKvApiResponseCommonNoResultEntity;
    update(this: any, reqdata?: WorkersKvApiResponseCommonNoResultUpdateData, ctrl?: Control): Promise<WorkersKvApiResponseCommonNoResultEntity>;
    remove(this: any, reqmatch?: WorkersKvApiResponseCommonNoResultRemoveMatch, ctrl?: Control): Promise<WorkersKvApiResponseCommonNoResultEntity>;
}
export { WorkersKvApiResponseCommonNoResultEntity };
