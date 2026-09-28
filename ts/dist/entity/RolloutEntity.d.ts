import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Rollout, RolloutCreateData } from '../CloudflareWorkersTypes';
declare class RolloutEntity extends CloudflareWorkersEntityBase<Rollout> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: RolloutEntity): RolloutEntity;
    create(this: any, reqdata?: RolloutCreateData, ctrl?: Control): Promise<RolloutEntity>;
}
export { RolloutEntity };
