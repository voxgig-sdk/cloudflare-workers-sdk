import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Account, AccountListMatch } from '../CloudflareWorkersTypes';
declare class AccountEntity extends CloudflareWorkersEntityBase<Account> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: AccountEntity): AccountEntity;
    list(this: any, reqmatch?: AccountListMatch, ctrl?: Control): Promise<AccountEntity[]>;
}
export { AccountEntity };
