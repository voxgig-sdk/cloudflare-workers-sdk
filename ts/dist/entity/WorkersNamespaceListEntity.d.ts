import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersNamespaceList, WorkersNamespaceListListMatch } from '../CloudflareWorkersTypes';
declare class WorkersNamespaceListEntity extends CloudflareWorkersEntityBase<WorkersNamespaceList> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersNamespaceListEntity): WorkersNamespaceListEntity;
    list(this: any, reqmatch?: WorkersNamespaceListListMatch, ctrl?: Control): Promise<WorkersNamespaceListEntity[]>;
}
export { WorkersNamespaceListEntity };
