import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Key, KeyCreateData } from '../CloudflareWorkersTypes';
declare class KeyEntity extends CloudflareWorkersEntityBase<Key> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: KeyEntity): KeyEntity;
    create(this: any, reqdata?: KeyCreateData, ctrl?: Control): Promise<KeyEntity>;
}
export { KeyEntity };
