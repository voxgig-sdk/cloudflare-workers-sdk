import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersVersionsList, WorkersVersionsListListMatch } from '../CloudflareWorkersTypes';
declare class WorkersVersionsListEntity extends CloudflareWorkersEntityBase<WorkersVersionsList> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersVersionsListEntity): WorkersVersionsListEntity;
    list(this: any, reqmatch?: WorkersVersionsListListMatch, ctrl?: Control): Promise<WorkersVersionsListEntity[]>;
}
export { WorkersVersionsListEntity };
