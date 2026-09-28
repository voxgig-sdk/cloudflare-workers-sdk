import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Shared, SharedLoadMatch, SharedCreateData } from '../CloudflareWorkersTypes';
declare class SharedEntity extends CloudflareWorkersEntityBase<Shared> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: SharedEntity): SharedEntity;
    load(this: any, reqmatch?: SharedLoadMatch, ctrl?: Control): Promise<SharedEntity>;
    create(this: any, reqdata?: SharedCreateData, ctrl?: Control): Promise<SharedEntity>;
}
export { SharedEntity };
