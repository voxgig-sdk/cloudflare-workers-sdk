import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { BuildToken, BuildTokenListMatch, BuildTokenCreateData } from '../CloudflareWorkersTypes';
declare class BuildTokenEntity extends CloudflareWorkersEntityBase<BuildToken> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: BuildTokenEntity): BuildTokenEntity;
    list(this: any, reqmatch?: BuildTokenListMatch, ctrl?: Control): Promise<BuildTokenEntity[]>;
    create(this: any, reqdata?: BuildTokenCreateData, ctrl?: Control): Promise<BuildTokenEntity>;
}
export { BuildTokenEntity };
