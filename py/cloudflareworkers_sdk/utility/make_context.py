# CloudflareWorkers SDK utility: make_context

from cloudflareworkers_sdk.core.context import CloudflareWorkersContext


def make_context_util(ctxmap, basectx):
    return CloudflareWorkersContext(ctxmap, basectx)
