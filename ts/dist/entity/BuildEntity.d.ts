import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Build, BuildLoadMatch, BuildListMatch, BuildUpdateData } from '../CloudflareWorkersTypes';
declare class BuildEntity extends CloudflareWorkersEntityBase<Build> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: BuildEntity): BuildEntity;
    load(this: any, reqmatch?: BuildLoadMatch, ctrl?: Control): Promise<BuildEntity>;
    list(this: any, reqmatch?: BuildListMatch, ctrl?: Control): Promise<BuildEntity[]>;
    update(this: any, reqdata?: BuildUpdateData, ctrl?: Control): Promise<BuildEntity>;
}
export { BuildEntity };
