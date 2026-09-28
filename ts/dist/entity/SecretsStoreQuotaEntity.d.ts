import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { SecretsStoreQuota, SecretsStoreQuotaLoadMatch } from '../CloudflareWorkersTypes';
declare class SecretsStoreQuotaEntity extends CloudflareWorkersEntityBase<SecretsStoreQuota> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: SecretsStoreQuotaEntity): SecretsStoreQuotaEntity;
    load(this: any, reqmatch?: SecretsStoreQuotaLoadMatch, ctrl?: Control): Promise<SecretsStoreQuotaEntity>;
}
export { SecretsStoreQuotaEntity };
