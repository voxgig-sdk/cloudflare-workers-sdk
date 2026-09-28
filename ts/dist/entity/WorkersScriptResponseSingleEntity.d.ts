import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersScriptResponseSingle, WorkersScriptResponseSingleUpdateData } from '../CloudflareWorkersTypes';
declare class WorkersScriptResponseSingleEntity extends CloudflareWorkersEntityBase<WorkersScriptResponseSingle> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersScriptResponseSingleEntity): WorkersScriptResponseSingleEntity;
    update(this: any, reqdata?: WorkersScriptResponseSingleUpdateData, ctrl?: Control): Promise<WorkersScriptResponseSingleEntity>;
}
export { WorkersScriptResponseSingleEntity };
