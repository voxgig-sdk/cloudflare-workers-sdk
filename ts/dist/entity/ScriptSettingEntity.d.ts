import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { ScriptSetting, ScriptSettingListMatch, ScriptSettingUpdateData } from '../CloudflareWorkersTypes';
declare class ScriptSettingEntity extends CloudflareWorkersEntityBase<ScriptSetting> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: ScriptSettingEntity): ScriptSettingEntity;
    list(this: any, reqmatch?: ScriptSettingListMatch, ctrl?: Control): Promise<ScriptSettingEntity[]>;
    update(this: any, reqdata?: ScriptSettingUpdateData, ctrl?: Control): Promise<ScriptSettingEntity>;
}
export { ScriptSettingEntity };
