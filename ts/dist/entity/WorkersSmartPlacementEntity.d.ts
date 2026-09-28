import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersSmartPlacement, WorkersSmartPlacementListMatch } from '../CloudflareWorkersTypes';
declare class WorkersSmartPlacementEntity extends CloudflareWorkersEntityBase<WorkersSmartPlacement> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersSmartPlacementEntity): WorkersSmartPlacementEntity;
    list(this: any, reqmatch?: WorkersSmartPlacementListMatch, ctrl?: Control): Promise<WorkersSmartPlacementEntity[]>;
}
export { WorkersSmartPlacementEntity };
