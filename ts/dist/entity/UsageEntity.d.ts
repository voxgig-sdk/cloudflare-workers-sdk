import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Usage, UsageListMatch } from '../CloudflareWorkersTypes';
declare class UsageEntity extends CloudflareWorkersEntityBase<Usage> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: UsageEntity): UsageEntity;
    list(this: any, reqmatch?: UsageListMatch, ctrl?: Control): Promise<UsageEntity[]>;
}
export { UsageEntity };
