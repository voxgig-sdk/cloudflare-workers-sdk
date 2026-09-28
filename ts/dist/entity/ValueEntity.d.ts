import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Value, ValueCreateData } from '../CloudflareWorkersTypes';
declare class ValueEntity extends CloudflareWorkersEntityBase<Value> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: ValueEntity): ValueEntity;
    create(this: any, reqdata?: ValueCreateData, ctrl?: Control): Promise<ValueEntity>;
}
export { ValueEntity };
