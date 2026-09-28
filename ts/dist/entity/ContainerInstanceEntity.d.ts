import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { ContainerInstance, ContainerInstanceLoadMatch, ContainerInstanceListMatch } from '../CloudflareWorkersTypes';
declare class ContainerInstanceEntity extends CloudflareWorkersEntityBase<ContainerInstance> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: ContainerInstanceEntity): ContainerInstanceEntity;
    load(this: any, reqmatch?: ContainerInstanceLoadMatch, ctrl?: Control): Promise<ContainerInstanceEntity>;
    list(this: any, reqmatch?: ContainerInstanceListMatch, ctrl?: Control): Promise<ContainerInstanceEntity[]>;
}
export { ContainerInstanceEntity };
