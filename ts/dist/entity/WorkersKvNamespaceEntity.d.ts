import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersKvNamespace, WorkersKvNamespaceLoadMatch, WorkersKvNamespaceListMatch, WorkersKvNamespaceCreateData, WorkersKvNamespaceUpdateData, WorkersKvNamespaceRemoveMatch } from '../CloudflareWorkersTypes';
declare class WorkersKvNamespaceEntity extends CloudflareWorkersEntityBase<WorkersKvNamespace> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersKvNamespaceEntity): WorkersKvNamespaceEntity;
    load(this: any, reqmatch?: WorkersKvNamespaceLoadMatch, ctrl?: Control): Promise<WorkersKvNamespaceEntity>;
    list(this: any, reqmatch?: WorkersKvNamespaceListMatch, ctrl?: Control): Promise<WorkersKvNamespaceEntity[]>;
    create(this: any, reqdata?: WorkersKvNamespaceCreateData, ctrl?: Control): Promise<WorkersKvNamespaceEntity>;
    update(this: any, reqdata?: WorkersKvNamespaceUpdateData, ctrl?: Control): Promise<WorkersKvNamespaceEntity>;
    remove(this: any, reqmatch?: WorkersKvNamespaceRemoveMatch, ctrl?: Control): Promise<WorkersKvNamespaceEntity>;
}
export { WorkersKvNamespaceEntity };
