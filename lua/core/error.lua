-- CloudflareWorkers SDK error

local CloudflareWorkersError = {}
CloudflareWorkersError.__index = CloudflareWorkersError


function CloudflareWorkersError.new(code, msg, ctx)
  local self = setmetatable({}, CloudflareWorkersError)
  self.is_sdk_error = true
  self.sdk = "CloudflareWorkers"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudflareWorkersError:error()
  return self.msg
end


function CloudflareWorkersError:__tostring()
  return self.msg
end


return CloudflareWorkersError
