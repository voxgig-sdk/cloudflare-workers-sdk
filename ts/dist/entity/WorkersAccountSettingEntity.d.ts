import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersAccountSetting, WorkersAccountSettingListMatch, WorkersAccountSettingUpdateData } from '../CloudflareWorkersTypes';
declare class WorkersAccountSettingEntity extends CloudflareWorkersEntityBase<WorkersAccountSetting> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersAccountSettingEntity): WorkersAccountSettingEntity;
    list(this: any, reqmatch?: WorkersAccountSettingListMatch, ctrl?: Control): Promise<WorkersAccountSettingEntity[]>;
    update(this: any, reqdata?: WorkersAccountSettingUpdateData, ctrl?: Control): Promise<WorkersAccountSettingEntity>;
}
export { WorkersAccountSettingEntity };
