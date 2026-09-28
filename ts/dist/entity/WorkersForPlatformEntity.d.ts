import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersForPlatform, WorkersForPlatformLoadMatch, WorkersForPlatformListMatch, WorkersForPlatformUpdateData } from '../CloudflareWorkersTypes';
declare class WorkersForPlatformEntity extends CloudflareWorkersEntityBase<WorkersForPlatform> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersForPlatformEntity): WorkersForPlatformEntity;
    load(this: any, reqmatch?: WorkersForPlatformLoadMatch, ctrl?: Control): Promise<WorkersForPlatformEntity>;
    list(this: any, reqmatch?: WorkersForPlatformListMatch, ctrl?: Control): Promise<WorkersForPlatformEntity[]>;
    update(this: any, reqdata?: WorkersForPlatformUpdateData, ctrl?: Control): Promise<WorkersForPlatformEntity>;
}
export { WorkersForPlatformEntity };
