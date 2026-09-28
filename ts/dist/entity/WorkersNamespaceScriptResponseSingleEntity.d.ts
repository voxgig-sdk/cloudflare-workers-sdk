import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersNamespaceScriptResponseSingle, WorkersNamespaceScriptResponseSingleLoadMatch, WorkersNamespaceScriptResponseSingleUpdateData } from '../CloudflareWorkersTypes';
declare class WorkersNamespaceScriptResponseSingleEntity extends CloudflareWorkersEntityBase<WorkersNamespaceScriptResponseSingle> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersNamespaceScriptResponseSingleEntity): WorkersNamespaceScriptResponseSingleEntity;
    load(this: any, reqmatch?: WorkersNamespaceScriptResponseSingleLoadMatch, ctrl?: Control): Promise<WorkersNamespaceScriptResponseSingleEntity>;
    update(this: any, reqdata?: WorkersNamespaceScriptResponseSingleUpdateData, ctrl?: Control): Promise<WorkersNamespaceScriptResponseSingleEntity>;
}
export { WorkersNamespaceScriptResponseSingleEntity };
