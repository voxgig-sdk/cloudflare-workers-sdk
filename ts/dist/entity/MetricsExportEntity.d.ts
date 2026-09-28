import { CloudflareWorkersEntityBase } from '../CloudflareWorkersEntityBase';
import type { CloudflareWorkersSDK } from '../CloudflareWorkersSDK';
import type { Control } from '../types';
import type { MetricsExport, MetricsExportListMatch, MetricsExportCreateData } from '../CloudflareWorkersTypes';
declare class MetricsExportEntity extends CloudflareWorkersEntityBase<MetricsExport> {
    constructor(client: CloudflareWorkersSDK, entopts: any);
    make(this: MetricsExportEntity): MetricsExportEntity;
    list(this: any, reqmatch?: MetricsExportListMatch, ctrl?: Control): Promise<MetricsExportEntity[]>;
    create(this: any, reqdata?: MetricsExportCreateData, ctrl?: Control): Promise<MetricsExportEntity>;
}
export { MetricsExportEntity };
