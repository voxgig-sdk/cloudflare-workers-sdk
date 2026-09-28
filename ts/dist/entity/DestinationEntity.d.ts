import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Destination, DestinationListMatch, DestinationCreateData, DestinationUpdateData, DestinationRemoveMatch } from '../CloudflareWorkersTypes';
declare class DestinationEntity extends CloudflareWorkersEntityBase<Destination> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: DestinationEntity): DestinationEntity;
    list(this: any, reqmatch?: DestinationListMatch, ctrl?: Control): Promise<DestinationEntity[]>;
    create(this: any, reqdata?: DestinationCreateData, ctrl?: Control): Promise<DestinationEntity>;
    update(this: any, reqdata?: DestinationUpdateData, ctrl?: Control): Promise<DestinationEntity>;
    remove(this: any, reqmatch?: DestinationRemoveMatch, ctrl?: Control): Promise<DestinationEntity>;
}
export { DestinationEntity };
