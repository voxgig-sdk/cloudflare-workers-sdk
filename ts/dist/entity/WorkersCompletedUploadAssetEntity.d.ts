import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersCompletedUploadAsset, WorkersCompletedUploadAssetCreateData } from '../CloudflareWorkersTypes';
declare class WorkersCompletedUploadAssetEntity extends CloudflareWorkersEntityBase<WorkersCompletedUploadAsset> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersCompletedUploadAssetEntity): WorkersCompletedUploadAssetEntity;
    create(this: any, reqdata?: WorkersCompletedUploadAssetCreateData, ctrl?: Control): Promise<WorkersCompletedUploadAssetEntity>;
}
export { WorkersCompletedUploadAssetEntity };
