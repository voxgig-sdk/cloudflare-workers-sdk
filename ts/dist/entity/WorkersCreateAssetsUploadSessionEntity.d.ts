import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersCreateAssetsUploadSession, WorkersCreateAssetsUploadSessionCreateData } from '../CloudflareWorkersTypes';
declare class WorkersCreateAssetsUploadSessionEntity extends CloudflareWorkersEntityBase<WorkersCreateAssetsUploadSession> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersCreateAssetsUploadSessionEntity): WorkersCreateAssetsUploadSessionEntity;
    create(this: any, reqdata?: WorkersCreateAssetsUploadSessionCreateData, ctrl?: Control): Promise<WorkersCreateAssetsUploadSessionEntity>;
}
export { WorkersCreateAssetsUploadSessionEntity };
