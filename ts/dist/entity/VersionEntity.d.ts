import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Version, VersionLoadMatch, VersionListMatch, VersionCreateData, VersionUpdateData, VersionRemoveMatch } from '../CloudflareWorkersTypes';
declare class VersionEntity extends CloudflareWorkersEntityBase<Version> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: VersionEntity): VersionEntity;
    load(this: any, reqmatch?: VersionLoadMatch, ctrl?: Control): Promise<VersionEntity>;
    list(this: any, reqmatch?: VersionListMatch, ctrl?: Control): Promise<VersionEntity[]>;
    create(this: any, reqdata?: VersionCreateData, ctrl?: Control): Promise<VersionEntity>;
    update(this: any, reqdata?: VersionUpdateData, ctrl?: Control): Promise<VersionEntity>;
    remove(this: any, reqmatch?: VersionRemoveMatch, ctrl?: Control): Promise<VersionEntity>;
}
export { VersionEntity };
