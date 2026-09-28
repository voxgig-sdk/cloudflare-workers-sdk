import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Setting, SettingListMatch, SettingUpdateData } from '../CloudflareWorkersTypes';
declare class SettingEntity extends CloudflareWorkersEntityBase<Setting> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: SettingEntity): SettingEntity;
    list(this: any, reqmatch?: SettingListMatch, ctrl?: Control): Promise<SettingEntity[]>;
    update(this: any, reqdata?: SettingUpdateData, ctrl?: Control): Promise<SettingEntity>;
}
export { SettingEntity };
