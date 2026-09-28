import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { RepositoryConnection, RepositoryConnectionUpdateData } from '../CloudflareWorkersTypes';
declare class RepositoryConnectionEntity extends CloudflareWorkersEntityBase<RepositoryConnection> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: RepositoryConnectionEntity): RepositoryConnectionEntity;
    update(this: any, reqdata?: RepositoryConnectionUpdateData, ctrl?: Control): Promise<RepositoryConnectionEntity>;
}
export { RepositoryConnectionEntity };
