import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { EnvironmentVariable, EnvironmentVariableListMatch, EnvironmentVariableUpdateData } from '../CloudflareWorkersTypes';
declare class EnvironmentVariableEntity extends CloudflareWorkersEntityBase<EnvironmentVariable> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: EnvironmentVariableEntity): EnvironmentVariableEntity;
    list(this: any, reqmatch?: EnvironmentVariableListMatch, ctrl?: Control): Promise<EnvironmentVariableEntity[]>;
    update(this: any, reqdata?: EnvironmentVariableUpdateData, ctrl?: Control): Promise<EnvironmentVariableEntity>;
}
export { EnvironmentVariableEntity };
