import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkerEnvironment, WorkerEnvironmentLoadMatch } from '../CloudflareWorkersTypes';
declare class WorkerEnvironmentEntity extends CloudflareWorkersEntityBase<WorkerEnvironment> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkerEnvironmentEntity): WorkerEnvironmentEntity;
    load(this: any, reqmatch?: WorkerEnvironmentLoadMatch, ctrl?: Control): Promise<WorkerEnvironmentEntity>;
}
export { WorkerEnvironmentEntity };
