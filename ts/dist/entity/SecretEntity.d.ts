import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Secret, SecretLoadMatch, SecretListMatch, SecretCreateData, SecretUpdateData, SecretRemoveMatch } from '../CloudflareWorkersTypes';
declare class SecretEntity extends CloudflareWorkersEntityBase<Secret> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: SecretEntity): SecretEntity;
    load(this: any, reqmatch?: SecretLoadMatch, ctrl?: Control): Promise<SecretEntity>;
    list(this: any, reqmatch?: SecretListMatch, ctrl?: Control): Promise<SecretEntity[]>;
    create(this: any, reqdata?: SecretCreateData, ctrl?: Control): Promise<SecretEntity>;
    update(this: any, reqdata?: SecretUpdateData, ctrl?: Control): Promise<SecretEntity>;
    remove(this: any, reqmatch?: SecretRemoveMatch, ctrl?: Control): Promise<SecretEntity>;
}
export { SecretEntity };
