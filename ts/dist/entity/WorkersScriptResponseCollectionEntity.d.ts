import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersScriptResponseCollection, WorkersScriptResponseCollectionListMatch } from '../CloudflareWorkersTypes';
declare class WorkersScriptResponseCollectionEntity extends CloudflareWorkersEntityBase<WorkersScriptResponseCollection> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersScriptResponseCollectionEntity): WorkersScriptResponseCollectionEntity;
    list(this: any, reqmatch?: WorkersScriptResponseCollectionListMatch, ctrl?: Control): Promise<WorkersScriptResponseCollectionEntity[]>;
}
export { WorkersScriptResponseCollectionEntity };
