import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { SecretsStoreStore, SecretsStoreStoreLoadMatch, SecretsStoreStoreCreateData } from '../CloudflareWorkersTypes';
declare class SecretsStoreStoreEntity extends CloudflareWorkersEntityBase<SecretsStoreStore> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: SecretsStoreStoreEntity): SecretsStoreStoreEntity;
    load(this: any, reqmatch?: SecretsStoreStoreLoadMatch, ctrl?: Control): Promise<SecretsStoreStoreEntity>;
    create(this: any, reqdata?: SecretsStoreStoreCreateData, ctrl?: Control): Promise<SecretsStoreStoreEntity>;
}
export { SecretsStoreStoreEntity };
