import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkersVersionsUpload, WorkersVersionsUploadCreateData } from '../CloudflareWorkersTypes';
declare class WorkersVersionsUploadEntity extends CloudflareWorkersEntityBase<WorkersVersionsUpload> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkersVersionsUploadEntity): WorkersVersionsUploadEntity;
    create(this: any, reqdata?: WorkersVersionsUploadCreateData, ctrl?: Control): Promise<WorkersVersionsUploadEntity>;
}
export { WorkersVersionsUploadEntity };
