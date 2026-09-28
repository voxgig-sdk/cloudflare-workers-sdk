import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { SecretsStoreSecret, SecretsStoreSecretCreateData } from '../CloudflareWorkersTypes';
declare class SecretsStoreSecretEntity extends CloudflareWorkersEntityBase<SecretsStoreSecret> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: SecretsStoreSecretEntity): SecretsStoreSecretEntity;
    create(this: any, reqdata?: SecretsStoreSecretCreateData, ctrl?: Control): Promise<SecretsStoreSecretEntity>;
}
export { SecretsStoreSecretEntity };
