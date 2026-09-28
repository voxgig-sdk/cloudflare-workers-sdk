import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { SecretsStoreDelete, SecretsStoreDeleteRemoveMatch } from '../CloudflareWorkersTypes';
declare class SecretsStoreDeleteEntity extends CloudflareWorkersEntityBase<SecretsStoreDelete> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: SecretsStoreDeleteEntity): SecretsStoreDeleteEntity;
    remove(this: any, reqmatch?: SecretsStoreDeleteRemoveMatch, ctrl?: Control): Promise<SecretsStoreDeleteEntity>;
}
export { SecretsStoreDeleteEntity };
