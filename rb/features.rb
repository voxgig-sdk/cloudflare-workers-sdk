# CloudflareWorkers SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudflareWorkersFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudflareWorkersBaseFeature.new
    when "test"
      CloudflareWorkersTestFeature.new
    else
      CloudflareWorkersBaseFeature.new
    end
  end
end
