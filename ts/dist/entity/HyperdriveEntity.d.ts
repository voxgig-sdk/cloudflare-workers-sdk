import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Hyperdrive, HyperdriveLoadMatch, HyperdriveListMatch, HyperdriveCreateData, HyperdriveUpdateData, HyperdriveRemoveMatch } from '../CloudflareWorkersTypes';
declare class HyperdriveEntity extends CloudflareWorkersEntityBase<Hyperdrive> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: HyperdriveEntity): HyperdriveEntity;
    load(this: any, reqmatch?: HyperdriveLoadMatch, ctrl?: Control): Promise<HyperdriveEntity>;
    list(this: any, reqmatch?: HyperdriveListMatch, ctrl?: Control): Promise<HyperdriveEntity[]>;
    create(this: any, reqdata?: HyperdriveCreateData, ctrl?: Control): Promise<HyperdriveEntity>;
    update(this: any, reqdata?: HyperdriveUpdateData, ctrl?: Control): Promise<HyperdriveEntity>;
    remove(this: any, reqmatch?: HyperdriveRemoveMatch, ctrl?: Control): Promise<HyperdriveEntity>;
}
export { HyperdriveEntity };
