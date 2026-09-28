import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersNamespaceScriptDeleteBulk, WorkersNamespaceScriptDeleteBulkRemoveMatch } from '../CloudflareWorkersTypes';
declare class WorkersNamespaceScriptDeleteBulkEntity extends CloudflareWorkersEntityBase<WorkersNamespaceScriptDeleteBulk> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersNamespaceScriptDeleteBulkEntity): WorkersNamespaceScriptDeleteBulkEntity;
    remove(this: any, reqmatch?: WorkersNamespaceScriptDeleteBulkRemoveMatch, ctrl?: Control): Promise<WorkersNamespaceScriptDeleteBulkEntity>;
}
export { WorkersNamespaceScriptDeleteBulkEntity };
