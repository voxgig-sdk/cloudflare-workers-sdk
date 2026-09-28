import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { DeployHook, DeployHookLoadMatch, DeployHookListMatch, DeployHookCreateData, DeployHookUpdateData, DeployHookRemoveMatch } from '../CloudflareWorkersTypes';
declare class DeployHookEntity extends CloudflareWorkersEntityBase<DeployHook> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: DeployHookEntity): DeployHookEntity;
    load(this: any, reqmatch?: DeployHookLoadMatch, ctrl?: Control): Promise<DeployHookEntity>;
    list(this: any, reqmatch?: DeployHookListMatch, ctrl?: Control): Promise<DeployHookEntity[]>;
    create(this: any, reqdata?: DeployHookCreateData, ctrl?: Control): Promise<DeployHookEntity>;
    update(this: any, reqdata?: DeployHookUpdateData, ctrl?: Control): Promise<DeployHookEntity>;
    remove(this: any, reqmatch?: DeployHookRemoveMatch, ctrl?: Control): Promise<DeployHookEntity>;
}
export { DeployHookEntity };
