import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Brapi, BrapiLoadMatch, BrapiListMatch, BrapiCreateData, BrapiUpdateData, BrapiRemoveMatch } from '../CloudflareWorkersTypes';
declare class BrapiEntity extends CloudflareWorkersEntityBase<Brapi> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: BrapiEntity): BrapiEntity;
    load(this: any, reqmatch?: BrapiLoadMatch, ctrl?: Control): Promise<BrapiEntity>;
    list(this: any, reqmatch?: BrapiListMatch, ctrl?: Control): Promise<BrapiEntity[]>;
    create(this: any, reqdata?: BrapiCreateData, ctrl?: Control): Promise<BrapiEntity>;
    update(this: any, reqdata?: BrapiUpdateData, ctrl?: Control): Promise<BrapiEntity>;
    remove(this: any, reqmatch?: BrapiRemoveMatch, ctrl?: Control): Promise<BrapiEntity>;
}
export { BrapiEntity };
