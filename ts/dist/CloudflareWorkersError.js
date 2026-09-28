"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareWorkersError = void 0;
class CloudflareWorkersError extends Error {
    isCloudflareWorkersError = true;
    sdk = 'CloudflareWorkers';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CloudflareWorkersError = CloudflareWorkersError;
//# sourceMappingURL=CloudflareWorkersError.js.map