# CloudflareWorkers SDK utility: make_context
require_relative '../core/context'
module CloudflareWorkersUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudflareWorkersContext.new(ctxmap, basectx)
  }
end
