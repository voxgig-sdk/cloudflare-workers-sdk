import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { Issue, IssueLoadMatch, IssueListMatch, IssueCreateData, IssueUpdateData, IssueRemoveMatch } from '../CloudflareWorkersTypes';
declare class IssueEntity extends CloudflareWorkersEntityBase<Issue> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: IssueEntity): IssueEntity;
    load(this: any, reqmatch?: IssueLoadMatch, ctrl?: Control): Promise<IssueEntity>;
    list(this: any, reqmatch?: IssueListMatch, ctrl?: Control): Promise<IssueEntity[]>;
    create(this: any, reqdata?: IssueCreateData, ctrl?: Control): Promise<IssueEntity>;
    update(this: any, reqdata?: IssueUpdateData, ctrl?: Control): Promise<IssueEntity>;
    remove(this: any, reqmatch?: IssueRemoveMatch, ctrl?: Control): Promise<IssueEntity>;
}
export { IssueEntity };
