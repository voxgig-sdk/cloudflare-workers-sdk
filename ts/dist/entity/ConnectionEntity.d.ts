import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Connection, ConnectionRemoveMatch } from '../CloudflareWorkersTypes';
declare class ConnectionEntity extends CloudflareWorkersEntityBase<Connection> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: ConnectionEntity): ConnectionEntity;
    remove(this: any, reqmatch?: ConnectionRemoveMatch, ctrl?: Control): Promise<ConnectionEntity>;
}
export { ConnectionEntity };
