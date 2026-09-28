import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkerScript, WorkerScriptLoadMatch, WorkerScriptListMatch, WorkerScriptCreateData, WorkerScriptUpdateData, WorkerScriptRemoveMatch } from '../CloudflareWorkersTypes';
declare class WorkerScriptEntity extends CloudflareWorkersEntityBase<WorkerScript> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkerScriptEntity): WorkerScriptEntity;
    load(this: any, reqmatch?: WorkerScriptLoadMatch, ctrl?: Control): Promise<WorkerScriptEntity>;
    list(this: any, reqmatch?: WorkerScriptListMatch, ctrl?: Control): Promise<WorkerScriptEntity[]>;
    create(this: any, reqdata?: WorkerScriptCreateData, ctrl?: Control): Promise<WorkerScriptEntity>;
    update(this: any, reqdata?: WorkerScriptUpdateData, ctrl?: Control): Promise<WorkerScriptEntity>;
    remove(this: any, reqmatch?: WorkerScriptRemoveMatch, ctrl?: Control): Promise<WorkerScriptEntity>;
}
export { WorkerScriptEntity };
