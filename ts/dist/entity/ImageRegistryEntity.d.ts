import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { ImageRegistry, ImageRegistryListMatch, ImageRegistryCreateData, ImageRegistryRemoveMatch } from '../CloudflareWorkersTypes';
declare class ImageRegistryEntity extends CloudflareWorkersEntityBase<ImageRegistry> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: ImageRegistryEntity): ImageRegistryEntity;
    list(this: any, reqmatch?: ImageRegistryListMatch, ctrl?: Control): Promise<ImageRegistryEntity[]>;
    create(this: any, reqdata?: ImageRegistryCreateData, ctrl?: Control): Promise<ImageRegistryEntity>;
    remove(this: any, reqmatch?: ImageRegistryRemoveMatch, ctrl?: Control): Promise<ImageRegistryEntity>;
}
export { ImageRegistryEntity };
