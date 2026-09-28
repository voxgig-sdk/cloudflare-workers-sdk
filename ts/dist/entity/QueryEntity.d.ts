import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Query, QueryCreateData } from '../CloudflareWorkersTypes';
declare class QueryEntity extends CloudflareWorkersEntityBase<Query> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: QueryEntity): QueryEntity;
    create(this: any, reqdata?: QueryCreateData, ctrl?: Control): Promise<QueryEntity>;
}
export { QueryEntity };
