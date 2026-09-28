import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { WorkerRoute, WorkerRouteLoadMatch, WorkerRouteListMatch, WorkerRouteCreateData, WorkerRouteUpdateData, WorkerRouteRemoveMatch } from '../CloudflareWorkersTypes';
declare class WorkerRouteEntity extends CloudflareWorkersEntityBase<WorkerRoute> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: WorkerRouteEntity): WorkerRouteEntity;
    load(this: any, reqmatch?: WorkerRouteLoadMatch, ctrl?: Control): Promise<WorkerRouteEntity>;
    list(this: any, reqmatch?: WorkerRouteListMatch, ctrl?: Control): Promise<WorkerRouteEntity[]>;
    create(this: any, reqdata?: WorkerRouteCreateData, ctrl?: Control): Promise<WorkerRouteEntity>;
    update(this: any, reqdata?: WorkerRouteUpdateData, ctrl?: Control): Promise<WorkerRouteEntity>;
    remove(this: any, reqmatch?: WorkerRouteRemoveMatch, ctrl?: Control): Promise<WorkerRouteEntity>;
}
export { WorkerRouteEntity };
