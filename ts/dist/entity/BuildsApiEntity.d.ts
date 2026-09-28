import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { BuildsApi, BuildsApiCreateData, BuildsApiRemoveMatch } from '../CloudflareWorkersTypes';
declare class BuildsApiEntity extends CloudflareWorkersEntityBase<BuildsApi> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: BuildsApiEntity): BuildsApiEntity;
    create(this: any, reqdata?: BuildsApiCreateData, ctrl?: Control): Promise<BuildsApiEntity>;
    remove(this: any, reqmatch?: BuildsApiRemoveMatch, ctrl?: Control): Promise<BuildsApiEntity>;
}
export { BuildsApiEntity };
