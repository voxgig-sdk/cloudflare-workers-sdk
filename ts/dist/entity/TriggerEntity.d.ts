import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Trigger, TriggerCreateData, TriggerUpdateData, TriggerRemoveMatch } from '../CloudflareWorkersTypes';
declare class TriggerEntity extends CloudflareWorkersEntityBase<Trigger> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: TriggerEntity): TriggerEntity;
    create(this: any, reqdata?: TriggerCreateData, ctrl?: Control): Promise<TriggerEntity>;
    update(this: any, reqdata?: TriggerUpdateData, ctrl?: Control): Promise<TriggerEntity>;
    remove(this: any, reqmatch?: TriggerRemoveMatch, ctrl?: Control): Promise<TriggerEntity>;
}
export { TriggerEntity };
