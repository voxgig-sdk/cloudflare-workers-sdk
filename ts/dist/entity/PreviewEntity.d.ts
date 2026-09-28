import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Preview, PreviewLoadMatch, PreviewListMatch, PreviewCreateData, PreviewUpdateData, PreviewRemoveMatch } from '../CloudflareWorkersTypes';
declare class PreviewEntity extends CloudflareWorkersEntityBase<Preview> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: PreviewEntity): PreviewEntity;
    load(this: any, reqmatch?: PreviewLoadMatch, ctrl?: Control): Promise<PreviewEntity>;
    list(this: any, reqmatch?: PreviewListMatch, ctrl?: Control): Promise<PreviewEntity[]>;
    create(this: any, reqdata?: PreviewCreateData, ctrl?: Control): Promise<PreviewEntity>;
    update(this: any, reqdata?: PreviewUpdateData, ctrl?: Control): Promise<PreviewEntity>;
    remove(this: any, reqmatch?: PreviewRemoveMatch, ctrl?: Control): Promise<PreviewEntity>;
}
export { PreviewEntity };
