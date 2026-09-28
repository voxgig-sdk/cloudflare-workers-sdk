import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Token, TokenRemoveMatch } from '../CloudflareWorkersTypes';
declare class TokenEntity extends CloudflareWorkersEntityBase<Token> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: TokenEntity): TokenEntity;
    remove(this: any, reqmatch?: TokenRemoveMatch, ctrl?: Control): Promise<TokenEntity>;
}
export { TokenEntity };
