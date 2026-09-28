import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Script, ScriptRemoveMatch } from '../CloudflareWorkersTypes';
declare class ScriptEntity extends CloudflareWorkersEntityBase<Script> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: ScriptEntity): ScriptEntity;
    remove(this: any, reqmatch?: ScriptRemoveMatch, ctrl?: Control): Promise<ScriptEntity>;
}
export { ScriptEntity };
