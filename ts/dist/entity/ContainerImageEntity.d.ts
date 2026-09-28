import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { ContainerImage, ContainerImageCreateData } from '../CloudflareWorkersTypes';
declare class ContainerImageEntity extends CloudflareWorkersEntityBase<ContainerImage> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: ContainerImageEntity): ContainerImageEntity;
    create(this: any, reqdata?: ContainerImageCreateData, ctrl?: Control): Promise<ContainerImageEntity>;
}
export { ContainerImageEntity };
