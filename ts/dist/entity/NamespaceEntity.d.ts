import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Namespace, NamespaceRemoveMatch } from '../CloudflareWorkersTypes';
declare class NamespaceEntity extends CloudflareWorkersEntityBase<Namespace> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: NamespaceEntity): NamespaceEntity;
    remove(this: any, reqmatch?: NamespaceRemoveMatch, ctrl?: Control): Promise<NamespaceEntity>;
}
export { NamespaceEntity };
