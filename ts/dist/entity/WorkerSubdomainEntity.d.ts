import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkerSubdomain, WorkerSubdomainListMatch, WorkerSubdomainUpdateData, WorkerSubdomainRemoveMatch } from '../CloudflareWorkersTypes';
declare class WorkerSubdomainEntity extends CloudflareWorkersEntityBase<WorkerSubdomain> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkerSubdomainEntity): WorkerSubdomainEntity;
    list(this: any, reqmatch?: WorkerSubdomainListMatch, ctrl?: Control): Promise<WorkerSubdomainEntity[]>;
    update(this: any, reqdata?: WorkerSubdomainUpdateData, ctrl?: Control): Promise<WorkerSubdomainEntity>;
    remove(this: any, reqmatch?: WorkerSubdomainRemoveMatch, ctrl?: Control): Promise<WorkerSubdomainEntity>;
}
export { WorkerSubdomainEntity };
