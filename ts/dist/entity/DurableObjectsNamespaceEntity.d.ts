import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { DurableObjectsNamespace, DurableObjectsNamespaceListMatch, DurableObjectsNamespaceCreateData } from '../CloudflareWorkersTypes';
declare class DurableObjectsNamespaceEntity extends CloudflareWorkersEntityBase<DurableObjectsNamespace> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: DurableObjectsNamespaceEntity): DurableObjectsNamespaceEntity;
    list(this: any, reqmatch?: DurableObjectsNamespaceListMatch, ctrl?: Control): Promise<DurableObjectsNamespaceEntity[]>;
    create(this: any, reqdata?: DurableObjectsNamespaceCreateData, ctrl?: Control): Promise<DurableObjectsNamespaceEntity>;
}
export { DurableObjectsNamespaceEntity };
