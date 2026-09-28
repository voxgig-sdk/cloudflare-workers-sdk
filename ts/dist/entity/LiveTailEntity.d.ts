import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { LiveTail, LiveTailCreateData } from '../CloudflareWorkersTypes';
declare class LiveTailEntity extends CloudflareWorkersEntityBase<LiveTail> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: LiveTailEntity): LiveTailEntity;
    create(this: any, reqdata?: LiveTailCreateData, ctrl?: Control): Promise<LiveTailEntity>;
}
export { LiveTailEntity };
