import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersScriptAndVersionSetting, WorkersScriptAndVersionSettingListMatch, WorkersScriptAndVersionSettingUpdateData } from '../CloudflareWorkersTypes';
declare class WorkersScriptAndVersionSettingEntity extends CloudflareWorkersEntityBase<WorkersScriptAndVersionSetting> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersScriptAndVersionSettingEntity): WorkersScriptAndVersionSettingEntity;
    list(this: any, reqmatch?: WorkersScriptAndVersionSettingListMatch, ctrl?: Control): Promise<WorkersScriptAndVersionSettingEntity[]>;
    update(this: any, reqdata?: WorkersScriptAndVersionSettingUpdateData, ctrl?: Control): Promise<WorkersScriptAndVersionSettingEntity>;
}
export { WorkersScriptAndVersionSettingEntity };
