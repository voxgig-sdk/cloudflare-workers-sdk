import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { SecretsStoreStoresResponseCollection, SecretsStoreStoresResponseCollectionListMatch } from '../CloudflareWorkersTypes';
declare class SecretsStoreStoresResponseCollectionEntity extends CloudflareWorkersEntityBase<SecretsStoreStoresResponseCollection> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: SecretsStoreStoresResponseCollectionEntity): SecretsStoreStoresResponseCollectionEntity;
    list(this: any, reqmatch?: SecretsStoreStoresResponseCollectionListMatch, ctrl?: Control): Promise<SecretsStoreStoresResponseCollectionEntity[]>;
}
export { SecretsStoreStoresResponseCollectionEntity };
