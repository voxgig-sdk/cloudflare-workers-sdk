import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { SavedQuery, SavedQueryLoadMatch, SavedQueryListMatch, SavedQueryCreateData, SavedQueryUpdateData, SavedQueryRemoveMatch } from '../CloudflareWorkersTypes';
declare class SavedQueryEntity extends CloudflareWorkersEntityBase<SavedQuery> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: SavedQueryEntity): SavedQueryEntity;
    load(this: any, reqmatch?: SavedQueryLoadMatch, ctrl?: Control): Promise<SavedQueryEntity>;
    list(this: any, reqmatch?: SavedQueryListMatch, ctrl?: Control): Promise<SavedQueryEntity[]>;
    create(this: any, reqdata?: SavedQueryCreateData, ctrl?: Control): Promise<SavedQueryEntity>;
    update(this: any, reqdata?: SavedQueryUpdateData, ctrl?: Control): Promise<SavedQueryEntity>;
    remove(this: any, reqmatch?: SavedQueryRemoveMatch, ctrl?: Control): Promise<SavedQueryEntity>;
}
export { SavedQueryEntity };
