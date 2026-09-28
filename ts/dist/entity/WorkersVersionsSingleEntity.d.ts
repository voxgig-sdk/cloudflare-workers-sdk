import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersVersionsSingle, WorkersVersionsSingleLoadMatch } from '../CloudflareWorkersTypes';
declare class WorkersVersionsSingleEntity extends CloudflareWorkersEntityBase<WorkersVersionsSingle> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersVersionsSingleEntity): WorkersVersionsSingleEntity;
    load(this: any, reqmatch?: WorkersVersionsSingleLoadMatch, ctrl?: Control): Promise<WorkersVersionsSingleEntity>;
}
export { WorkersVersionsSingleEntity };
