import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Tail, TailRemoveMatch } from '../CloudflareWorkersTypes';
declare class TailEntity extends CloudflareWorkersEntityBase<Tail> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: TailEntity): TailEntity;
    remove(this: any, reqmatch?: TailRemoveMatch, ctrl?: Control): Promise<TailEntity>;
}
export { TailEntity };
