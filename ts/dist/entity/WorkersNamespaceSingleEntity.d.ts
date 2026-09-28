import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersNamespaceSingle, WorkersNamespaceSingleLoadMatch, WorkersNamespaceSingleCreateData, WorkersNamespaceSingleUpdateData } from '../CloudflareWorkersTypes';
declare class WorkersNamespaceSingleEntity extends CloudflareWorkersEntityBase<WorkersNamespaceSingle> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersNamespaceSingleEntity): WorkersNamespaceSingleEntity;
    load(this: any, reqmatch?: WorkersNamespaceSingleLoadMatch, ctrl?: Control): Promise<WorkersNamespaceSingleEntity>;
    create(this: any, reqdata?: WorkersNamespaceSingleCreateData, ctrl?: Control): Promise<WorkersNamespaceSingleEntity>;
    update(this: any, reqdata?: WorkersNamespaceSingleUpdateData, ctrl?: Control): Promise<WorkersNamespaceSingleEntity>;
}
export { WorkersNamespaceSingleEntity };
