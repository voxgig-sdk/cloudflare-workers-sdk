import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Application, ApplicationLoadMatch, ApplicationListMatch, ApplicationCreateData, ApplicationUpdateData, ApplicationRemoveMatch } from '../CloudflareWorkersTypes';
declare class ApplicationEntity extends CloudflareWorkersEntityBase<Application> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: ApplicationEntity): ApplicationEntity;
    load(this: any, reqmatch?: ApplicationLoadMatch, ctrl?: Control): Promise<ApplicationEntity>;
    list(this: any, reqmatch?: ApplicationListMatch, ctrl?: Control): Promise<ApplicationEntity[]>;
    create(this: any, reqdata?: ApplicationCreateData, ctrl?: Control): Promise<ApplicationEntity>;
    update(this: any, reqdata?: ApplicationUpdateData, ctrl?: Control): Promise<ApplicationEntity>;
    remove(this: any, reqmatch?: ApplicationRemoveMatch, ctrl?: Control): Promise<ApplicationEntity>;
}
export { ApplicationEntity };
