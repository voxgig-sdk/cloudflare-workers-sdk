# frozen_string_literal: true

# Typed models for the CloudflareWorkers SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Account entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Account = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Account#list.
#
# @!attribute [rw] id
#   @return [String]
AccountListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Application entity data model.
#
# @!attribute [rw] configuration
#   @return [Hash, nil]
#
# @!attribute [rw] constraints
#   @return [Hash, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] max_instances
#   @return [Integer, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] observability
#   @return [Object, nil]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] rollout_active_grace_period
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
Application = Struct.new(
  :configuration,
  :constraints,
  :errors,
  :id,
  :max_instances,
  :messages,
  :observability,
  :result,
  :result_info,
  :rollout_active_grace_period,
  :success,
  keyword_init: true
)

# Request payload for Application#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ApplicationLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for Application#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page_token
#   @return [String, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
ApplicationListMatch = Struct.new(
  :account_id,
  :image,
  :name,
  :page_token,
  :per_page,
  keyword_init: true
)

# Request payload for Application#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] configuration
#   @return [Hash, nil]
#
# @!attribute [rw] constraints
#   @return [Hash, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] max_instances
#   @return [Integer, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] observability
#   @return [Object, nil]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] rollout_active_grace_period
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
ApplicationCreateData = Struct.new(
  :account_id,
  :configuration,
  :constraints,
  :errors,
  :id,
  :max_instances,
  :messages,
  :observability,
  :result,
  :result_info,
  :rollout_active_grace_period,
  :success,
  keyword_init: true
)

# Request payload for Application#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] configuration
#   @return [Hash, nil]
#
# @!attribute [rw] constraints
#   @return [Hash, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] max_instances
#   @return [Integer, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] observability
#   @return [Object, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] rollout_active_grace_period
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
ApplicationUpdateData = Struct.new(
  :account_id,
  :id,
  :configuration,
  :constraints,
  :errors,
  :max_instances,
  :messages,
  :observability,
  :result,
  :result_info,
  :rollout_active_grace_period,
  :success,
  keyword_init: true
)

# Request payload for Application#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ApplicationRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Brapi entity data model.
#
# @!attribute [rw] Browser
#   @return [String]
#
# @!attribute [rw] ProtocolVersion
#   @return [String]
#
# @!attribute [rw] UserAgent
#   @return [String]
#
# @!attribute [rw] V8Version
#   @return [String]
#
# @!attribute [rw] WebKitVersion
#   @return [String]
#
# @!attribute [rw] actionTimeout
#   @return [Float, nil]
#
# @!attribute [rw] addScriptTag
#   @return [Array, nil]
#
# @!attribute [rw] addStyleTag
#   @return [Array, nil]
#
# @!attribute [rw] allowRequestPattern
#   @return [Array, nil]
#
# @!attribute [rw] allowResourceTypes
#   @return [Array, nil]
#
# @!attribute [rw] authenticate
#   @return [Hash]
#
# @!attribute [rw] bestAttempt
#   @return [Boolean, nil]
#
# @!attribute [rw] closeReason
#   @return [Float, nil]
#
# @!attribute [rw] closeReasonText
#   @return [String, nil]
#
# @!attribute [rw] commands
#   @return [Array, nil]
#
# @!attribute [rw] connectionEndTime
#   @return [Float, nil]
#
# @!attribute [rw] connectionId
#   @return [String, nil]
#
# @!attribute [rw] connectionStartTime
#   @return [Float, nil]
#
# @!attribute [rw] cookies
#   @return [Array, nil]
#
# @!attribute [rw] custom_ai
#   @return [Array, nil]
#
# @!attribute [rw] dependencies
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] devtoolsFrontendUrl
#   @return [String, nil]
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] elements
#   @return [Array]
#
# @!attribute [rw] emulateMediaType
#   @return [String, nil]
#
# @!attribute [rw] endTime
#   @return [Float, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] events
#   @return [Array, nil]
#
# @!attribute [rw] excludeExternalLinks
#   @return [Boolean, nil]
#
# @!attribute [rw] experimental
#   @return [Boolean, nil]
#
# @!attribute [rw] formats
#   @return [Array, nil]
#
# @!attribute [rw] gotoOptions
#   @return [Hash, nil]
#
# @!attribute [rw] guardrails
#   @return [Hash, nil]
#
# @!attribute [rw] html
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] interestingOnly
#   @return [Boolean, nil]
#
# @!attribute [rw] lastUpdated
#   @return [Float, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] meta
#   @return [Hash]
#
# @!attribute [rw] pdfOptions
#   @return [Hash, nil]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] rejectRequestPattern
#   @return [Array, nil]
#
# @!attribute [rw] rejectResourceTypes
#   @return [Array, nil]
#
# @!attribute [rw] response_format
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] root
#   @return [String, nil]
#
# @!attribute [rw] screenshotOptions
#   @return [Hash, nil]
#
# @!attribute [rw] scrollPage
#   @return [Boolean, nil]
#
# @!attribute [rw] selector
#   @return [String, nil]
#
# @!attribute [rw] sessionId
#   @return [String]
#
# @!attribute [rw] setExtraHTTPHeaders
#   @return [Hash, nil]
#
# @!attribute [rw] setJavaScriptEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] startTime
#   @return [Float, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] types
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] userAgent
#   @return [String, nil]
#
# @!attribute [rw] viewport
#   @return [Hash]
#
# @!attribute [rw] visibleLinksOnly
#   @return [Boolean, nil]
#
# @!attribute [rw] waitForSelector
#   @return [Hash]
#
# @!attribute [rw] waitForTimeout
#   @return [Float, nil]
#
# @!attribute [rw] webSocketDebuggerUrl
#   @return [String, nil]
Brapi = Struct.new(
  :Browser,
  :ProtocolVersion,
  :UserAgent,
  :V8Version,
  :WebKitVersion,
  :actionTimeout,
  :addScriptTag,
  :addStyleTag,
  :allowRequestPattern,
  :allowResourceTypes,
  :authenticate,
  :bestAttempt,
  :closeReason,
  :closeReasonText,
  :commands,
  :connectionEndTime,
  :connectionId,
  :connectionStartTime,
  :cookies,
  :custom_ai,
  :dependencies,
  :description,
  :devtoolsFrontendUrl,
  :domain,
  :elements,
  :emulateMediaType,
  :endTime,
  :errors,
  :events,
  :excludeExternalLinks,
  :experimental,
  :formats,
  :gotoOptions,
  :guardrails,
  :html,
  :id,
  :interestingOnly,
  :lastUpdated,
  :message,
  :meta,
  :pdfOptions,
  :prompt,
  :rejectRequestPattern,
  :rejectResourceTypes,
  :response_format,
  :result,
  :root,
  :screenshotOptions,
  :scrollPage,
  :selector,
  :sessionId,
  :setExtraHTTPHeaders,
  :setJavaScriptEnabled,
  :startTime,
  :success,
  :title,
  :type,
  :types,
  :url,
  :userAgent,
  :viewport,
  :visibleLinksOnly,
  :waitForSelector,
  :waitForTimeout,
  :webSocketDebuggerUrl,
  keyword_init: true
)

# Request payload for Brapi#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] job_id
#   @return [String, nil]
#
# @!attribute [rw] cache_ttl
#   @return [Float, nil]
#
# @!attribute [rw] cursor
#   @return [Float, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] keep_alive
#   @return [Float, nil]
#
# @!attribute [rw] lab
#   @return [Boolean, nil]
#
# @!attribute [rw] recording
#   @return [Boolean, nil]
#
# @!attribute [rw] browser_id
#   @return [String, nil]
#
# @!attribute [rw] target_id
#   @return [String, nil]
#
# @!attribute [rw] recording_id
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] target
#   @return [String, nil]
BrapiLoadMatch = Struct.new(
  :account_id,
  :job_id,
  :cache_ttl,
  :cursor,
  :limit,
  :status,
  :session_id,
  :keep_alive,
  :lab,
  :recording,
  :browser_id,
  :target_id,
  :recording_id,
  :format,
  :target,
  keyword_init: true
)

# Request payload for Brapi#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] browser_id
#   @return [String, nil]
#
# @!attribute [rw] live_view_url_expires_in_m
#   @return [Float, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] offset
#   @return [Float, nil]
BrapiListMatch = Struct.new(
  :account_id,
  :browser_id,
  :live_view_url_expires_in_m,
  :limit,
  :offset,
  keyword_init: true
)

# Request payload for Brapi#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] keep_alive
#   @return [Float, nil]
#
# @!attribute [rw] lab
#   @return [Boolean, nil]
#
# @!attribute [rw] live_view_url_expires_in_m
#   @return [Float, nil]
#
# @!attribute [rw] recording
#   @return [Boolean, nil]
#
# @!attribute [rw] target
#   @return [Boolean, nil]
#
# @!attribute [rw] cache_ttl
#   @return [Float, nil]
#
# @!attribute [rw] Browser
#   @return [String]
#
# @!attribute [rw] ProtocolVersion
#   @return [String]
#
# @!attribute [rw] UserAgent
#   @return [String]
#
# @!attribute [rw] V8Version
#   @return [String]
#
# @!attribute [rw] WebKitVersion
#   @return [String]
#
# @!attribute [rw] actionTimeout
#   @return [Float, nil]
#
# @!attribute [rw] addScriptTag
#   @return [Array, nil]
#
# @!attribute [rw] addStyleTag
#   @return [Array, nil]
#
# @!attribute [rw] allowRequestPattern
#   @return [Array, nil]
#
# @!attribute [rw] allowResourceTypes
#   @return [Array, nil]
#
# @!attribute [rw] authenticate
#   @return [Hash]
#
# @!attribute [rw] bestAttempt
#   @return [Boolean, nil]
#
# @!attribute [rw] closeReason
#   @return [Float, nil]
#
# @!attribute [rw] closeReasonText
#   @return [String, nil]
#
# @!attribute [rw] commands
#   @return [Array, nil]
#
# @!attribute [rw] connectionEndTime
#   @return [Float, nil]
#
# @!attribute [rw] connectionId
#   @return [String, nil]
#
# @!attribute [rw] connectionStartTime
#   @return [Float, nil]
#
# @!attribute [rw] cookies
#   @return [Array, nil]
#
# @!attribute [rw] custom_ai
#   @return [Array, nil]
#
# @!attribute [rw] dependencies
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] devtoolsFrontendUrl
#   @return [String, nil]
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] elements
#   @return [Array]
#
# @!attribute [rw] emulateMediaType
#   @return [String, nil]
#
# @!attribute [rw] endTime
#   @return [Float, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] events
#   @return [Array, nil]
#
# @!attribute [rw] excludeExternalLinks
#   @return [Boolean, nil]
#
# @!attribute [rw] experimental
#   @return [Boolean, nil]
#
# @!attribute [rw] formats
#   @return [Array, nil]
#
# @!attribute [rw] gotoOptions
#   @return [Hash, nil]
#
# @!attribute [rw] guardrails
#   @return [Hash, nil]
#
# @!attribute [rw] html
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] interestingOnly
#   @return [Boolean, nil]
#
# @!attribute [rw] lastUpdated
#   @return [Float, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] meta
#   @return [Hash]
#
# @!attribute [rw] pdfOptions
#   @return [Hash, nil]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] rejectRequestPattern
#   @return [Array, nil]
#
# @!attribute [rw] rejectResourceTypes
#   @return [Array, nil]
#
# @!attribute [rw] response_format
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] root
#   @return [String, nil]
#
# @!attribute [rw] screenshotOptions
#   @return [Hash, nil]
#
# @!attribute [rw] scrollPage
#   @return [Boolean, nil]
#
# @!attribute [rw] selector
#   @return [String, nil]
#
# @!attribute [rw] sessionId
#   @return [String]
#
# @!attribute [rw] setExtraHTTPHeaders
#   @return [Hash, nil]
#
# @!attribute [rw] setJavaScriptEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] startTime
#   @return [Float, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] types
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] userAgent
#   @return [String, nil]
#
# @!attribute [rw] viewport
#   @return [Hash]
#
# @!attribute [rw] visibleLinksOnly
#   @return [Boolean, nil]
#
# @!attribute [rw] waitForSelector
#   @return [Hash]
#
# @!attribute [rw] waitForTimeout
#   @return [Float, nil]
#
# @!attribute [rw] webSocketDebuggerUrl
#   @return [String, nil]
BrapiCreateData = Struct.new(
  :account_id,
  :keep_alive,
  :lab,
  :live_view_url_expires_in_m,
  :recording,
  :target,
  :cache_ttl,
  :Browser,
  :ProtocolVersion,
  :UserAgent,
  :V8Version,
  :WebKitVersion,
  :actionTimeout,
  :addScriptTag,
  :addStyleTag,
  :allowRequestPattern,
  :allowResourceTypes,
  :authenticate,
  :bestAttempt,
  :closeReason,
  :closeReasonText,
  :commands,
  :connectionEndTime,
  :connectionId,
  :connectionStartTime,
  :cookies,
  :custom_ai,
  :dependencies,
  :description,
  :devtoolsFrontendUrl,
  :domain,
  :elements,
  :emulateMediaType,
  :endTime,
  :errors,
  :events,
  :excludeExternalLinks,
  :experimental,
  :formats,
  :gotoOptions,
  :guardrails,
  :html,
  :id,
  :interestingOnly,
  :lastUpdated,
  :message,
  :meta,
  :pdfOptions,
  :prompt,
  :rejectRequestPattern,
  :rejectResourceTypes,
  :response_format,
  :result,
  :root,
  :screenshotOptions,
  :scrollPage,
  :selector,
  :sessionId,
  :setExtraHTTPHeaders,
  :setJavaScriptEnabled,
  :startTime,
  :success,
  :title,
  :type,
  :types,
  :url,
  :userAgent,
  :viewport,
  :visibleLinksOnly,
  :waitForSelector,
  :waitForTimeout,
  :webSocketDebuggerUrl,
  keyword_init: true
)

# Request payload for Brapi#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] browser_id
#   @return [String]
#
# @!attribute [rw] live_view_url_expires_in_m
#   @return [Float, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] Browser
#   @return [String, nil]
#
# @!attribute [rw] ProtocolVersion
#   @return [String, nil]
#
# @!attribute [rw] UserAgent
#   @return [String, nil]
#
# @!attribute [rw] V8Version
#   @return [String, nil]
#
# @!attribute [rw] WebKitVersion
#   @return [String, nil]
#
# @!attribute [rw] actionTimeout
#   @return [Float, nil]
#
# @!attribute [rw] addScriptTag
#   @return [Array, nil]
#
# @!attribute [rw] addStyleTag
#   @return [Array, nil]
#
# @!attribute [rw] allowRequestPattern
#   @return [Array, nil]
#
# @!attribute [rw] allowResourceTypes
#   @return [Array, nil]
#
# @!attribute [rw] authenticate
#   @return [Hash, nil]
#
# @!attribute [rw] bestAttempt
#   @return [Boolean, nil]
#
# @!attribute [rw] closeReason
#   @return [Float, nil]
#
# @!attribute [rw] closeReasonText
#   @return [String, nil]
#
# @!attribute [rw] commands
#   @return [Array, nil]
#
# @!attribute [rw] connectionEndTime
#   @return [Float, nil]
#
# @!attribute [rw] connectionId
#   @return [String, nil]
#
# @!attribute [rw] connectionStartTime
#   @return [Float, nil]
#
# @!attribute [rw] cookies
#   @return [Array, nil]
#
# @!attribute [rw] custom_ai
#   @return [Array, nil]
#
# @!attribute [rw] dependencies
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] devtoolsFrontendUrl
#   @return [String, nil]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] elements
#   @return [Array, nil]
#
# @!attribute [rw] emulateMediaType
#   @return [String, nil]
#
# @!attribute [rw] endTime
#   @return [Float, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] events
#   @return [Array, nil]
#
# @!attribute [rw] excludeExternalLinks
#   @return [Boolean, nil]
#
# @!attribute [rw] experimental
#   @return [Boolean, nil]
#
# @!attribute [rw] formats
#   @return [Array, nil]
#
# @!attribute [rw] gotoOptions
#   @return [Hash, nil]
#
# @!attribute [rw] guardrails
#   @return [Hash, nil]
#
# @!attribute [rw] html
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] interestingOnly
#   @return [Boolean, nil]
#
# @!attribute [rw] lastUpdated
#   @return [Float, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] pdfOptions
#   @return [Hash, nil]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] rejectRequestPattern
#   @return [Array, nil]
#
# @!attribute [rw] rejectResourceTypes
#   @return [Array, nil]
#
# @!attribute [rw] response_format
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] root
#   @return [String, nil]
#
# @!attribute [rw] screenshotOptions
#   @return [Hash, nil]
#
# @!attribute [rw] scrollPage
#   @return [Boolean, nil]
#
# @!attribute [rw] selector
#   @return [String, nil]
#
# @!attribute [rw] sessionId
#   @return [String, nil]
#
# @!attribute [rw] setExtraHTTPHeaders
#   @return [Hash, nil]
#
# @!attribute [rw] setJavaScriptEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] startTime
#   @return [Float, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] types
#   @return [Array, nil]
#
# @!attribute [rw] userAgent
#   @return [String, nil]
#
# @!attribute [rw] viewport
#   @return [Hash, nil]
#
# @!attribute [rw] visibleLinksOnly
#   @return [Boolean, nil]
#
# @!attribute [rw] waitForSelector
#   @return [Hash, nil]
#
# @!attribute [rw] waitForTimeout
#   @return [Float, nil]
#
# @!attribute [rw] webSocketDebuggerUrl
#   @return [String, nil]
BrapiUpdateData = Struct.new(
  :account_id,
  :browser_id,
  :live_view_url_expires_in_m,
  :url,
  :Browser,
  :ProtocolVersion,
  :UserAgent,
  :V8Version,
  :WebKitVersion,
  :actionTimeout,
  :addScriptTag,
  :addStyleTag,
  :allowRequestPattern,
  :allowResourceTypes,
  :authenticate,
  :bestAttempt,
  :closeReason,
  :closeReasonText,
  :commands,
  :connectionEndTime,
  :connectionId,
  :connectionStartTime,
  :cookies,
  :custom_ai,
  :dependencies,
  :description,
  :devtoolsFrontendUrl,
  :domain,
  :elements,
  :emulateMediaType,
  :endTime,
  :errors,
  :events,
  :excludeExternalLinks,
  :experimental,
  :formats,
  :gotoOptions,
  :guardrails,
  :html,
  :id,
  :interestingOnly,
  :lastUpdated,
  :message,
  :meta,
  :pdfOptions,
  :prompt,
  :rejectRequestPattern,
  :rejectResourceTypes,
  :response_format,
  :result,
  :root,
  :screenshotOptions,
  :scrollPage,
  :selector,
  :sessionId,
  :setExtraHTTPHeaders,
  :setJavaScriptEnabled,
  :startTime,
  :success,
  :title,
  :type,
  :types,
  :userAgent,
  :viewport,
  :visibleLinksOnly,
  :waitForSelector,
  :waitForTimeout,
  :webSocketDebuggerUrl,
  keyword_init: true
)

# Request payload for Brapi#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] job_id
#   @return [String, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
BrapiRemoveMatch = Struct.new(
  :account_id,
  :job_id,
  :session_id,
  keyword_init: true
)

# Build entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
Build = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for Build#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
BuildLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for Build#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] version_id
#   @return [String]
BuildListMatch = Struct.new(
  :account_id,
  :version_id,
  keyword_init: true
)

# Request payload for Build#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
BuildUpdateData = Struct.new(
  :account_id,
  :id,
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# BuildToken entity data model.
#
# @!attribute [rw] build_token_name
#   @return [String]
#
# @!attribute [rw] build_token_secret
#   @return [String]
#
# @!attribute [rw] cloudflare_token_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
BuildToken = Struct.new(
  :build_token_name,
  :build_token_secret,
  :cloudflare_token_id,
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for BuildToken#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
BuildTokenListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for BuildToken#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] build_token_name
#   @return [String]
#
# @!attribute [rw] build_token_secret
#   @return [String]
#
# @!attribute [rw] cloudflare_token_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
BuildTokenCreateData = Struct.new(
  :account_id,
  :build_token_name,
  :build_token_secret,
  :cloudflare_token_id,
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# BuildsApi entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
BuildsApi = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for BuildsApi#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] trigger_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
BuildsApiCreateData = Struct.new(
  :account_id,
  :trigger_id,
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for BuildsApi#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] environment_variable_key
#   @return [String]
#
# @!attribute [rw] trigger_id
#   @return [String]
BuildsApiRemoveMatch = Struct.new(
  :account_id,
  :environment_variable_key,
  :trigger_id,
  keyword_init: true
)

# Connection entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Connection = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Connection#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ConnectionRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# ContainerImage entity data model.
#
# @!attribute [rw] image
#   @return [String]
ContainerImage = Struct.new(
  :image,
  keyword_init: true
)

# Request payload for ContainerImage#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] image
#   @return [String]
ContainerImageCreateData = Struct.new(
  :account_id,
  :image,
  keyword_init: true
)

# ContainerInstance entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
ContainerInstance = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for ContainerInstance#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] application_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ContainerInstanceLoadMatch = Struct.new(
  :account_id,
  :application_id,
  :id,
  keyword_init: true
)

# Request payload for ContainerInstance#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] application_id
#   @return [String]
#
# @!attribute [rw] name_prefix
#   @return [String, nil]
#
# @!attribute [rw] page_token
#   @return [String, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
ContainerInstanceListMatch = Struct.new(
  :account_id,
  :application_id,
  :name_prefix,
  :page_token,
  :per_page,
  :state,
  keyword_init: true
)

# DeployHook entity data model.
#
# @!attribute [rw] branch
#   @return [String]
#
# @!attribute [rw] deploy_hook_name
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
DeployHook = Struct.new(
  :branch,
  :deploy_hook_name,
  :errors,
  :id,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for DeployHook#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
DeployHookLoadMatch = Struct.new(
  :account_id,
  :id,
  :worker_id,
  keyword_init: true
)

# Request payload for DeployHook#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
DeployHookListMatch = Struct.new(
  :account_id,
  :script_name,
  keyword_init: true
)

# Request payload for DeployHook#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] branch
#   @return [String]
#
# @!attribute [rw] deploy_hook_name
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
DeployHookCreateData = Struct.new(
  :id,
  :branch,
  :deploy_hook_name,
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for DeployHook#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] branch
#   @return [String, nil]
#
# @!attribute [rw] deploy_hook_name
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
DeployHookUpdateData = Struct.new(
  :account_id,
  :id,
  :worker_id,
  :branch,
  :deploy_hook_name,
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for DeployHook#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
DeployHookRemoveMatch = Struct.new(
  :account_id,
  :id,
  :worker_id,
  keyword_init: true
)

# Deployment entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Deployment = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Deployment#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] preview_id
#   @return [String, nil]
#
# @!attribute [rw] worker_id
#   @return [String, nil]
#
# @!attribute [rw] script_id
#   @return [String, nil]
DeploymentRemoveMatch = Struct.new(
  :account_id,
  :id,
  :preview_id,
  :worker_id,
  :script_id,
  keyword_init: true
)

# Destination entity data model.
#
# @!attribute [rw] configuration
#   @return [Hash]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] skipPreflightCheck
#   @return [Boolean, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
Destination = Struct.new(
  :configuration,
  :enabled,
  :errors,
  :id,
  :messages,
  :name,
  :result,
  :skipPreflightCheck,
  :success,
  keyword_init: true
)

# Request payload for Destination#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
DestinationListMatch = Struct.new(
  :account_id,
  :order,
  :order_by,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for Destination#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] configuration
#   @return [Hash]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] skipPreflightCheck
#   @return [Boolean, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
DestinationCreateData = Struct.new(
  :account_id,
  :configuration,
  :enabled,
  :errors,
  :id,
  :messages,
  :name,
  :result,
  :skipPreflightCheck,
  :success,
  keyword_init: true
)

# Request payload for Destination#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] configuration
#   @return [Hash, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] skipPreflightCheck
#   @return [Boolean, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
DestinationUpdateData = Struct.new(
  :account_id,
  :id,
  :configuration,
  :enabled,
  :errors,
  :messages,
  :name,
  :result,
  :skipPreflightCheck,
  :success,
  keyword_init: true
)

# Request payload for Destination#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DestinationRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Domain entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
Domain = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Domain#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DomainLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for Domain#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] environment
#   @return [String, nil]
#
# @!attribute [rw] hostname
#   @return [String, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
#
# @!attribute [rw] zone_id
#   @return [String, nil]
#
# @!attribute [rw] zone_name
#   @return [String, nil]
DomainListMatch = Struct.new(
  :account_id,
  :environment,
  :hostname,
  :service,
  :zone_id,
  :zone_name,
  keyword_init: true
)

# Request payload for Domain#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
DomainUpdateData = Struct.new(
  :account_id,
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Domain#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DomainRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# DurableObjectsNamespace entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
DurableObjectsNamespace = Struct.new(
  :result,
  :result_info,
  keyword_init: true
)

# Request payload for DurableObjectsNamespace#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
DurableObjectsNamespaceListMatch = Struct.new(
  :account_id,
  :namespace_id,
  :cursor,
  :limit,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for DurableObjectsNamespace#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
DurableObjectsNamespaceCreateData = Struct.new(
  :account_id,
  :namespace_id,
  :result,
  :result_info,
  keyword_init: true
)

# EnvironmentVariable entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
EnvironmentVariable = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for EnvironmentVariable#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] trigger_id
#   @return [String]
EnvironmentVariableListMatch = Struct.new(
  :account_id,
  :trigger_id,
  keyword_init: true
)

# Request payload for EnvironmentVariable#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] trigger_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
EnvironmentVariableUpdateData = Struct.new(
  :account_id,
  :trigger_id,
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# GitHubIntegration entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
GitHubIntegration = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for GitHubIntegration#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] provider_account_id
#   @return [String]
#
# @!attribute [rw] provider_type
#   @return [String]
#
# @!attribute [rw] repo_id
#   @return [String]
#
# @!attribute [rw] branch
#   @return [String]
#
# @!attribute [rw] root_directory
#   @return [String, nil]
GitHubIntegrationListMatch = Struct.new(
  :account_id,
  :provider_account_id,
  :provider_type,
  :repo_id,
  :branch,
  :root_directory,
  keyword_init: true
)

# Hyperdrive entity data model.
#
# @!attribute [rw] caching
#   @return [Hash, nil]
#
# @!attribute [rw] created_on
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] modified_on
#   @return [String, nil]
#
# @!attribute [rw] mtls
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] origin
#   @return [Hash]
#
# @!attribute [rw] origin_connection_limit
#   @return [Integer, nil]
#
# @!attribute [rw] restarted_on
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
Hyperdrive = Struct.new(
  :caching,
  :created_on,
  :id,
  :modified_on,
  :mtls,
  :name,
  :origin,
  :origin_connection_limit,
  :restarted_on,
  :result,
  keyword_init: true
)

# Request payload for Hyperdrive#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] hyperdrive_id
#   @return [String]
HyperdriveLoadMatch = Struct.new(
  :account_id,
  :hyperdrive_id,
  keyword_init: true
)

# Request payload for Hyperdrive#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
HyperdriveListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for Hyperdrive#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] integration
#   @return [String]
#
# @!attribute [rw] caching
#   @return [Hash, nil]
#
# @!attribute [rw] created_on
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] modified_on
#   @return [String, nil]
#
# @!attribute [rw] mtls
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] origin
#   @return [Hash]
#
# @!attribute [rw] origin_connection_limit
#   @return [Integer, nil]
#
# @!attribute [rw] restarted_on
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
HyperdriveCreateData = Struct.new(
  :account_id,
  :integration,
  :caching,
  :created_on,
  :id,
  :modified_on,
  :mtls,
  :name,
  :origin,
  :origin_connection_limit,
  :restarted_on,
  :result,
  keyword_init: true
)

# Request payload for Hyperdrive#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] hyperdrive_id
#   @return [String]
#
# @!attribute [rw] caching
#   @return [Hash, nil]
#
# @!attribute [rw] created_on
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] modified_on
#   @return [String, nil]
#
# @!attribute [rw] mtls
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [Hash, nil]
#
# @!attribute [rw] origin_connection_limit
#   @return [Integer, nil]
#
# @!attribute [rw] restarted_on
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
HyperdriveUpdateData = Struct.new(
  :account_id,
  :hyperdrive_id,
  :caching,
  :created_on,
  :id,
  :modified_on,
  :mtls,
  :name,
  :origin,
  :origin_connection_limit,
  :restarted_on,
  :result,
  keyword_init: true
)

# Request payload for Hyperdrive#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] hyperdrive_id
#   @return [String]
HyperdriveRemoveMatch = Struct.new(
  :account_id,
  :hyperdrive_id,
  keyword_init: true
)

# ImageRegistry entity data model.
#
# @!attribute [rw] auth
#   @return [Hash]
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] expiration_minutes
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_public
#   @return [Boolean, nil]
#
# @!attribute [rw] kind
#   @return [Object]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] permissions
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
ImageRegistry = Struct.new(
  :auth,
  :domain,
  :errors,
  :expiration_minutes,
  :id,
  :is_public,
  :kind,
  :messages,
  :permissions,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ImageRegistry#list.
#
# @!attribute [rw] account_id
#   @return [String]
ImageRegistryListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for ImageRegistry#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] auth
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] expiration_minutes
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_public
#   @return [Boolean, nil]
#
# @!attribute [rw] kind
#   @return [Object]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] permissions
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
ImageRegistryCreateData = Struct.new(
  :account_id,
  :domain,
  :auth,
  :errors,
  :expiration_minutes,
  :id,
  :is_public,
  :kind,
  :messages,
  :permissions,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ImageRegistry#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ImageRegistryRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Issue entity data model.
#
# @!attribute [rw] afterInactivitySeconds
#   @return [Integer, nil]
#
# @!attribute [rw] afterOccurrences
#   @return [Integer, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] issueIds
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] policyId
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] service
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] title
#   @return [String, nil]
Issue = Struct.new(
  :afterInactivitySeconds,
  :afterOccurrences,
  :enabled,
  :errors,
  :id,
  :issueIds,
  :messages,
  :name,
  :policyId,
  :result,
  :result_info,
  :service,
  :status,
  :success,
  :title,
  keyword_init: true
)

# Request payload for Issue#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] automation_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
IssueLoadMatch = Struct.new(
  :account_id,
  :automation_id,
  :id,
  keyword_init: true
)

# Request payload for Issue#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
IssueListMatch = Struct.new(
  :account_id,
  :order,
  :order_by,
  :page,
  :per_page,
  :search,
  :service,
  :status,
  :type,
  keyword_init: true
)

# Request payload for Issue#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] group_id
#   @return [String]
#
# @!attribute [rw] afterInactivitySeconds
#   @return [Integer, nil]
#
# @!attribute [rw] afterOccurrences
#   @return [Integer, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] issueIds
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] policyId
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] service
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] title
#   @return [String, nil]
IssueCreateData = Struct.new(
  :account_id,
  :group_id,
  :afterInactivitySeconds,
  :afterOccurrences,
  :enabled,
  :errors,
  :id,
  :issueIds,
  :messages,
  :name,
  :policyId,
  :result,
  :result_info,
  :service,
  :status,
  :success,
  :title,
  keyword_init: true
)

# Request payload for Issue#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] automation_id
#   @return [String]
#
# @!attribute [rw] afterInactivitySeconds
#   @return [Integer, nil]
#
# @!attribute [rw] afterOccurrences
#   @return [Integer, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] issueIds
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] policyId
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
IssueUpdateData = Struct.new(
  :account_id,
  :automation_id,
  :afterInactivitySeconds,
  :afterOccurrences,
  :enabled,
  :errors,
  :id,
  :issueIds,
  :messages,
  :name,
  :policyId,
  :result,
  :result_info,
  :service,
  :status,
  :success,
  :title,
  keyword_init: true
)

# Request payload for Issue#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] automation_id
#   @return [String, nil]
IssueRemoveMatch = Struct.new(
  :account_id,
  :group_id,
  :issue_id,
  :automation_id,
  keyword_init: true
)

# Key entity data model.
#
# @!attribute [rw] datasets
#   @return [Array, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] filters
#   @return [Array, nil]
#
# @!attribute [rw] from
#   @return [Float, nil]
#
# @!attribute [rw] keyNeedle
#   @return [Hash]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] needle
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] to
#   @return [Float, nil]
Key = Struct.new(
  :datasets,
  :errors,
  :filters,
  :from,
  :keyNeedle,
  :limit,
  :messages,
  :needle,
  :result,
  :success,
  :to,
  keyword_init: true
)

# Request payload for Key#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] datasets
#   @return [Array, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] filters
#   @return [Array, nil]
#
# @!attribute [rw] from
#   @return [Float, nil]
#
# @!attribute [rw] keyNeedle
#   @return [Hash]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] needle
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] to
#   @return [Float, nil]
KeyCreateData = Struct.new(
  :account_id,
  :datasets,
  :errors,
  :filters,
  :from,
  :keyNeedle,
  :limit,
  :messages,
  :needle,
  :result,
  :success,
  :to,
  keyword_init: true
)

# LiveTail entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] filterCombination
#   @return [String, nil]
#
# @!attribute [rw] filters
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] scriptId
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LiveTail = Struct.new(
  :errors,
  :filterCombination,
  :filters,
  :messages,
  :result,
  :scriptId,
  :success,
  keyword_init: true
)

# Request payload for LiveTail#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] filterCombination
#   @return [String, nil]
#
# @!attribute [rw] filters
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] scriptId
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LiveTailCreateData = Struct.new(
  :account_id,
  :errors,
  :filterCombination,
  :filters,
  :messages,
  :result,
  :scriptId,
  :success,
  keyword_init: true
)

# MetricsExport entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] requester
#   @return [Hash]
#
# @!attribute [rw] resources
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
MetricsExport = Struct.new(
  :errors,
  :messages,
  :requester,
  :resources,
  :result,
  :success,
  keyword_init: true
)

# Request payload for MetricsExport#list.
#
# @!attribute [rw] account_id
#   @return [String]
MetricsExportListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for MetricsExport#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] requester
#   @return [Hash]
#
# @!attribute [rw] resources
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
MetricsExportCreateData = Struct.new(
  :account_id,
  :errors,
  :messages,
  :requester,
  :resources,
  :result,
  :success,
  keyword_init: true
)

# Namespace entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Namespace = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Namespace#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
NamespaceRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Preview entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
Preview = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Preview#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
PreviewLoadMatch = Struct.new(
  :account_id,
  :id,
  :worker_id,
  keyword_init: true
)

# Request payload for Preview#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
PreviewListMatch = Struct.new(
  :account_id,
  :worker_id,
  :name,
  :order,
  :order_by,
  :page,
  :per_page,
  :slug,
  keyword_init: true
)

# Request payload for Preview#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] ignore_base_config
#   @return [Boolean, nil]
#
# @!attribute [rw] ignore_default
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
PreviewCreateData = Struct.new(
  :account_id,
  :worker_id,
  :ignore_base_config,
  :ignore_default,
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Preview#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] ignore_base_config
#   @return [Boolean, nil]
#
# @!attribute [rw] ignore_default
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
PreviewUpdateData = Struct.new(
  :account_id,
  :id,
  :worker_id,
  :ignore_base_config,
  :ignore_default,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Preview#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] force
#   @return [Boolean, nil]
PreviewRemoveMatch = Struct.new(
  :account_id,
  :id,
  :worker_id,
  :force,
  keyword_init: true
)

# PreviewDeployment entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] success
#   @return [Boolean]
PreviewDeployment = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for PreviewDeployment#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] preview_id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] include
#   @return [String, nil]
PreviewDeploymentLoadMatch = Struct.new(
  :account_id,
  :id,
  :preview_id,
  :worker_id,
  :include,
  keyword_init: true
)

# Request payload for PreviewDeployment#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
PreviewDeploymentListMatch = Struct.new(
  :account_id,
  :id,
  :worker_id,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for PreviewDeployment#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] ignore_default
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] success
#   @return [Boolean]
PreviewDeploymentCreateData = Struct.new(
  :account_id,
  :id,
  :worker_id,
  :ignore_default,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for PreviewDeployment#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] preview_id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] ignore_default
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
PreviewDeploymentUpdateData = Struct.new(
  :account_id,
  :preview_id,
  :worker_id,
  :ignore_default,
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Query entity data model.
#
# @!attribute [rw] chart
#   @return [Boolean, nil]
#
# @!attribute [rw] chartType
#   @return [String, nil]
#
# @!attribute [rw] compare
#   @return [Boolean, nil]
#
# @!attribute [rw] distributionScale
#   @return [String, nil]
#
# @!attribute [rw] dry
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] granularity
#   @return [Float, nil]
#
# @!attribute [rw] ignoreSeries
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] offset
#   @return [String, nil]
#
# @!attribute [rw] offsetBy
#   @return [Float, nil]
#
# @!attribute [rw] offsetDirection
#   @return [String, nil]
#
# @!attribute [rw] parameters
#   @return [Hash, nil]
#
# @!attribute [rw] queryId
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] timeframe
#   @return [Hash]
#
# @!attribute [rw] view
#   @return [String, nil]
Query = Struct.new(
  :chart,
  :chartType,
  :compare,
  :distributionScale,
  :dry,
  :errors,
  :granularity,
  :ignoreSeries,
  :limit,
  :messages,
  :offset,
  :offsetBy,
  :offsetDirection,
  :parameters,
  :queryId,
  :result,
  :success,
  :timeframe,
  :view,
  keyword_init: true
)

# Request payload for Query#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] chart
#   @return [Boolean, nil]
#
# @!attribute [rw] chartType
#   @return [String, nil]
#
# @!attribute [rw] compare
#   @return [Boolean, nil]
#
# @!attribute [rw] distributionScale
#   @return [String, nil]
#
# @!attribute [rw] dry
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] granularity
#   @return [Float, nil]
#
# @!attribute [rw] ignoreSeries
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] offset
#   @return [String, nil]
#
# @!attribute [rw] offsetBy
#   @return [Float, nil]
#
# @!attribute [rw] offsetDirection
#   @return [String, nil]
#
# @!attribute [rw] parameters
#   @return [Hash, nil]
#
# @!attribute [rw] queryId
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] timeframe
#   @return [Hash]
#
# @!attribute [rw] view
#   @return [String, nil]
QueryCreateData = Struct.new(
  :account_id,
  :chart,
  :chartType,
  :compare,
  :distributionScale,
  :dry,
  :errors,
  :granularity,
  :ignoreSeries,
  :limit,
  :messages,
  :offset,
  :offsetBy,
  :offsetDirection,
  :parameters,
  :queryId,
  :result,
  :success,
  :timeframe,
  :view,
  keyword_init: true
)

# RepositoryConnection entity data model.
#
# @!attribute [rw] provider_account_id
#   @return [String]
#
# @!attribute [rw] provider_account_name
#   @return [String]
#
# @!attribute [rw] provider_type
#   @return [String]
#
# @!attribute [rw] repo_id
#   @return [String]
#
# @!attribute [rw] repo_name
#   @return [String]
RepositoryConnection = Struct.new(
  :provider_account_id,
  :provider_account_name,
  :provider_type,
  :repo_id,
  :repo_name,
  keyword_init: true
)

# Request payload for RepositoryConnection#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] provider_account_id
#   @return [String, nil]
#
# @!attribute [rw] provider_account_name
#   @return [String, nil]
#
# @!attribute [rw] provider_type
#   @return [String, nil]
#
# @!attribute [rw] repo_id
#   @return [String, nil]
#
# @!attribute [rw] repo_name
#   @return [String, nil]
RepositoryConnectionUpdateData = Struct.new(
  :account_id,
  :provider_account_id,
  :provider_account_name,
  :provider_type,
  :repo_id,
  :repo_name,
  keyword_init: true
)

# Rollout entity data model.
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] percentage
#   @return [Integer, nil]
#
# @!attribute [rw] step_percentage
#   @return [Integer, nil]
#
# @!attribute [rw] steps
#   @return [Array, nil]
#
# @!attribute [rw] strategy
#   @return [String]
#
# @!attribute [rw] target_configuration
#   @return [Hash]
Rollout = Struct.new(
  :description,
  :kind,
  :percentage,
  :step_percentage,
  :steps,
  :strategy,
  :target_configuration,
  keyword_init: true
)

# Request payload for Rollout#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] application_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] percentage
#   @return [Integer, nil]
#
# @!attribute [rw] step_percentage
#   @return [Integer, nil]
#
# @!attribute [rw] steps
#   @return [Array, nil]
#
# @!attribute [rw] strategy
#   @return [String]
#
# @!attribute [rw] target_configuration
#   @return [Hash]
RolloutCreateData = Struct.new(
  :account_id,
  :application_id,
  :description,
  :kind,
  :percentage,
  :step_percentage,
  :steps,
  :strategy,
  :target_configuration,
  keyword_init: true
)

# SavedQuery entity data model.
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
SavedQuery = Struct.new(
  :description,
  :errors,
  :id,
  :messages,
  :name,
  :parameters,
  :result,
  :success,
  keyword_init: true
)

# Request payload for SavedQuery#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
SavedQueryLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for SavedQuery#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
SavedQueryListMatch = Struct.new(
  :account_id,
  :order,
  :order_by,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for SavedQuery#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
SavedQueryCreateData = Struct.new(
  :account_id,
  :description,
  :errors,
  :id,
  :messages,
  :name,
  :parameters,
  :result,
  :success,
  keyword_init: true
)

# Request payload for SavedQuery#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] parameters
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
SavedQueryUpdateData = Struct.new(
  :account_id,
  :id,
  :description,
  :errors,
  :messages,
  :name,
  :parameters,
  :result,
  :success,
  keyword_init: true
)

# Request payload for SavedQuery#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
SavedQueryRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Script entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Script = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Script#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] force
#   @return [Boolean, nil]
ScriptRemoveMatch = Struct.new(
  :account_id,
  :id,
  :force,
  keyword_init: true
)

# ScriptSetting entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] logpush
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] observability
#   @return [Object, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tags
#   @return [Object, nil]
#
# @!attribute [rw] tail_consumers
#   @return [Array, nil]
ScriptSetting = Struct.new(
  :errors,
  :logpush,
  :messages,
  :observability,
  :result,
  :success,
  :tags,
  :tail_consumers,
  keyword_init: true
)

# Request payload for ScriptSetting#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
ScriptSettingListMatch = Struct.new(
  :account_id,
  :script_name,
  keyword_init: true
)

# Request payload for ScriptSetting#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] logpush
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] observability
#   @return [Object, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] tags
#   @return [Object, nil]
#
# @!attribute [rw] tail_consumers
#   @return [Array, nil]
ScriptSettingUpdateData = Struct.new(
  :account_id,
  :script_name,
  :errors,
  :logpush,
  :messages,
  :observability,
  :result,
  :success,
  :tags,
  :tail_consumers,
  keyword_init: true
)

# Secret entity data model.
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] scopes
#   @return [Array, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
Secret = Struct.new(
  :comment,
  :id,
  :result,
  :scopes,
  :value,
  keyword_init: true
)

# Request payload for Secret#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] store_id
#   @return [String]
SecretLoadMatch = Struct.new(
  :account_id,
  :id,
  :store_id,
  keyword_init: true
)

# Request payload for Secret#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] store_id
#   @return [String]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] scope
#   @return [Array, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
SecretListMatch = Struct.new(
  :account_id,
  :store_id,
  :direction,
  :order,
  :page,
  :per_page,
  :scope,
  :search,
  keyword_init: true
)

# Request payload for Secret#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] store_id
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] scopes
#   @return [Array, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
SecretCreateData = Struct.new(
  :account_id,
  :store_id,
  :comment,
  :id,
  :result,
  :scopes,
  :value,
  keyword_init: true
)

# Request payload for Secret#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] store_id
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] scopes
#   @return [Array, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
SecretUpdateData = Struct.new(
  :account_id,
  :id,
  :store_id,
  :comment,
  :result,
  :scopes,
  :value,
  keyword_init: true
)

# Request payload for Secret#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] store_id
#   @return [String]
SecretRemoveMatch = Struct.new(
  :account_id,
  :id,
  :store_id,
  keyword_init: true
)

# SecretsStoreDelete entity data model.
class SecretsStoreDelete
end

# Request payload for SecretsStoreDelete#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] store_id
#   @return [String]
#
# @!attribute [rw] force
#   @return [Boolean, nil]
SecretsStoreDeleteRemoveMatch = Struct.new(
  :account_id,
  :store_id,
  :force,
  keyword_init: true
)

# SecretsStoreQuota entity data model.
#
# @!attribute [rw] result
#   @return [Object]
SecretsStoreQuota = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for SecretsStoreQuota#load.
#
# @!attribute [rw] account_id
#   @return [String]
SecretsStoreQuotaLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# SecretsStoreSecret entity data model.
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] scopes
#   @return [Array]
SecretsStoreSecret = Struct.new(
  :comment,
  :name,
  :scopes,
  keyword_init: true
)

# Request payload for SecretsStoreSecret#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] secret_id
#   @return [String]
#
# @!attribute [rw] store_id
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] scopes
#   @return [Array]
SecretsStoreSecretCreateData = Struct.new(
  :account_id,
  :secret_id,
  :store_id,
  :comment,
  :name,
  :scopes,
  keyword_init: true
)

# SecretsStoreStore entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Object]
SecretsStoreStore = Struct.new(
  :id,
  :name,
  :result,
  keyword_init: true
)

# Request payload for SecretsStoreStore#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
SecretsStoreStoreLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for SecretsStoreStore#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Object]
SecretsStoreStoreCreateData = Struct.new(
  :account_id,
  :id,
  :name,
  :result,
  keyword_init: true
)

# SecretsStoreStoresResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
SecretsStoreStoresResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for SecretsStoreStoresResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
SecretsStoreStoresResponseCollectionListMatch = Struct.new(
  :account_id,
  :direction,
  :order,
  :page,
  :per_page,
  keyword_init: true
)

# Setting entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
Setting = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Setting#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] environment_name
#   @return [String]
#
# @!attribute [rw] service_id
#   @return [String]
SettingListMatch = Struct.new(
  :account_id,
  :environment_name,
  :service_id,
  keyword_init: true
)

# Request payload for Setting#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] environment_name
#   @return [String]
#
# @!attribute [rw] service_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
SettingUpdateData = Struct.new(
  :account_id,
  :environment_name,
  :service_id,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Shared entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
Shared = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Shared#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] view
#   @return [String, nil]
SharedLoadMatch = Struct.new(
  :account_id,
  :id,
  :view,
  keyword_init: true
)

# Request payload for Shared#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
SharedCreateData = Struct.new(
  :account_id,
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Tail entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Tail = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Tail#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] script_id
#   @return [String]
TailRemoveMatch = Struct.new(
  :account_id,
  :id,
  :script_id,
  keyword_init: true
)

# Token entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Token = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Token#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
TokenRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Trigger entity data model.
#
# @!attribute [rw] branch_excludes
#   @return [Array]
#
# @!attribute [rw] branch_includes
#   @return [Array]
#
# @!attribute [rw] build_caching_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] build_command
#   @return [String]
#
# @!attribute [rw] build_token_uuid
#   @return [String]
#
# @!attribute [rw] deploy_command
#   @return [String]
#
# @!attribute [rw] external_script_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] path_excludes
#   @return [Array]
#
# @!attribute [rw] path_includes
#   @return [Array]
#
# @!attribute [rw] repo_connection_uuid
#   @return [String]
#
# @!attribute [rw] root_directory
#   @return [String]
#
# @!attribute [rw] trigger_name
#   @return [String]
Trigger = Struct.new(
  :branch_excludes,
  :branch_includes,
  :build_caching_enabled,
  :build_command,
  :build_token_uuid,
  :deploy_command,
  :external_script_id,
  :id,
  :path_excludes,
  :path_includes,
  :repo_connection_uuid,
  :root_directory,
  :trigger_name,
  keyword_init: true
)

# Request payload for Trigger#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] branch_excludes
#   @return [Array]
#
# @!attribute [rw] branch_includes
#   @return [Array]
#
# @!attribute [rw] build_caching_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] build_command
#   @return [String]
#
# @!attribute [rw] build_token_uuid
#   @return [String]
#
# @!attribute [rw] deploy_command
#   @return [String]
#
# @!attribute [rw] external_script_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] path_excludes
#   @return [Array]
#
# @!attribute [rw] path_includes
#   @return [Array]
#
# @!attribute [rw] repo_connection_uuid
#   @return [String]
#
# @!attribute [rw] root_directory
#   @return [String]
#
# @!attribute [rw] trigger_name
#   @return [String]
TriggerCreateData = Struct.new(
  :account_id,
  :branch_excludes,
  :branch_includes,
  :build_caching_enabled,
  :build_command,
  :build_token_uuid,
  :deploy_command,
  :external_script_id,
  :id,
  :path_excludes,
  :path_includes,
  :repo_connection_uuid,
  :root_directory,
  :trigger_name,
  keyword_init: true
)

# Request payload for Trigger#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] branch_excludes
#   @return [Array, nil]
#
# @!attribute [rw] branch_includes
#   @return [Array, nil]
#
# @!attribute [rw] build_caching_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] build_command
#   @return [String, nil]
#
# @!attribute [rw] build_token_uuid
#   @return [String, nil]
#
# @!attribute [rw] deploy_command
#   @return [String, nil]
#
# @!attribute [rw] external_script_id
#   @return [String, nil]
#
# @!attribute [rw] path_excludes
#   @return [Array, nil]
#
# @!attribute [rw] path_includes
#   @return [Array, nil]
#
# @!attribute [rw] repo_connection_uuid
#   @return [String, nil]
#
# @!attribute [rw] root_directory
#   @return [String, nil]
#
# @!attribute [rw] trigger_name
#   @return [String, nil]
TriggerUpdateData = Struct.new(
  :account_id,
  :id,
  :branch_excludes,
  :branch_includes,
  :build_caching_enabled,
  :build_command,
  :build_token_uuid,
  :deploy_command,
  :external_script_id,
  :path_excludes,
  :path_includes,
  :repo_connection_uuid,
  :root_directory,
  :trigger_name,
  keyword_init: true
)

# Request payload for Trigger#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
TriggerRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Usage entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
Usage = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Usage#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] from
#   @return [String]
#
# @!attribute [rw] to
#   @return [String]
UsageListMatch = Struct.new(
  :account_id,
  :from,
  :to,
  keyword_init: true
)

# Value entity data model.
#
# @!attribute [rw] datasets
#   @return [Array]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] filters
#   @return [Array, nil]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] needle
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] timeframe
#   @return [Hash]
#
# @!attribute [rw] type
#   @return [String]
Value = Struct.new(
  :datasets,
  :errors,
  :filters,
  :key,
  :limit,
  :messages,
  :needle,
  :result,
  :success,
  :timeframe,
  :type,
  keyword_init: true
)

# Request payload for Value#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] datasets
#   @return [Array]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] filters
#   @return [Array, nil]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] needle
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] timeframe
#   @return [Hash]
#
# @!attribute [rw] type
#   @return [String]
ValueCreateData = Struct.new(
  :account_id,
  :datasets,
  :errors,
  :filters,
  :key,
  :limit,
  :messages,
  :needle,
  :result,
  :success,
  :timeframe,
  :type,
  keyword_init: true
)

# Version entity data model.
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] assets
#   @return [Hash, nil]
#
# @!attribute [rw] author_email
#   @return [String, nil]
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] bindings
#   @return [Array, nil]
#
# @!attribute [rw] cache_options
#   @return [Hash]
#
# @!attribute [rw] compatibility_date
#   @return [String, nil]
#
# @!attribute [rw] compatibility_flags
#   @return [Array, nil]
#
# @!attribute [rw] containers
#   @return [Array, nil]
#
# @!attribute [rw] created_on
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] exports
#   @return [Object, nil]
#
# @!attribute [rw] exports_reconciliation
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] limits
#   @return [Hash, nil]
#
# @!attribute [rw] main_module
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] migration_tag
#   @return [String, nil]
#
# @!attribute [rw] migrations
#   @return [Object, nil]
#
# @!attribute [rw] modules
#   @return [Array, nil]
#
# @!attribute [rw] number
#   @return [Integer]
#
# @!attribute [rw] package_dependencies
#   @return [Array, nil]
#
# @!attribute [rw] placement
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] startup_time_ms
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] urls
#   @return [Array]
#
# @!attribute [rw] usage_model
#   @return [String, nil]
Version = Struct.new(
  :annotations,
  :assets,
  :author_email,
  :author_id,
  :bindings,
  :cache_options,
  :compatibility_date,
  :compatibility_flags,
  :containers,
  :created_on,
  :errors,
  :exports,
  :exports_reconciliation,
  :id,
  :limits,
  :main_module,
  :messages,
  :migration_tag,
  :migrations,
  :modules,
  :number,
  :package_dependencies,
  :placement,
  :result,
  :source,
  :startup_time_ms,
  :success,
  :urls,
  :usage_model,
  keyword_init: true
)

# Request payload for Version#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] include
#   @return [String, nil]
VersionLoadMatch = Struct.new(
  :account_id,
  :id,
  :worker_id,
  :include,
  keyword_init: true
)

# Request payload for Version#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
VersionListMatch = Struct.new(
  :account_id,
  :worker_id,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for Version#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] deploy
#   @return [Boolean, nil]
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] assets
#   @return [Hash, nil]
#
# @!attribute [rw] author_email
#   @return [String, nil]
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] bindings
#   @return [Array, nil]
#
# @!attribute [rw] cache_options
#   @return [Hash]
#
# @!attribute [rw] compatibility_date
#   @return [String, nil]
#
# @!attribute [rw] compatibility_flags
#   @return [Array, nil]
#
# @!attribute [rw] containers
#   @return [Array, nil]
#
# @!attribute [rw] created_on
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] exports
#   @return [Object, nil]
#
# @!attribute [rw] exports_reconciliation
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] limits
#   @return [Hash, nil]
#
# @!attribute [rw] main_module
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] migration_tag
#   @return [String, nil]
#
# @!attribute [rw] migrations
#   @return [Object, nil]
#
# @!attribute [rw] modules
#   @return [Array, nil]
#
# @!attribute [rw] number
#   @return [Integer]
#
# @!attribute [rw] package_dependencies
#   @return [Array, nil]
#
# @!attribute [rw] placement
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] startup_time_ms
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] urls
#   @return [Array]
#
# @!attribute [rw] usage_model
#   @return [String, nil]
VersionCreateData = Struct.new(
  :account_id,
  :worker_id,
  :deploy,
  :annotations,
  :assets,
  :author_email,
  :author_id,
  :bindings,
  :cache_options,
  :compatibility_date,
  :compatibility_flags,
  :containers,
  :created_on,
  :errors,
  :exports,
  :exports_reconciliation,
  :id,
  :limits,
  :main_module,
  :messages,
  :migration_tag,
  :migrations,
  :modules,
  :number,
  :package_dependencies,
  :placement,
  :result,
  :source,
  :startup_time_ms,
  :success,
  :urls,
  :usage_model,
  keyword_init: true
)

# Request payload for Version#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
#
# @!attribute [rw] deploy
#   @return [Boolean, nil]
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] assets
#   @return [Hash, nil]
#
# @!attribute [rw] author_email
#   @return [String, nil]
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] bindings
#   @return [Array, nil]
#
# @!attribute [rw] cache_options
#   @return [Hash, nil]
#
# @!attribute [rw] compatibility_date
#   @return [String, nil]
#
# @!attribute [rw] compatibility_flags
#   @return [Array, nil]
#
# @!attribute [rw] containers
#   @return [Array, nil]
#
# @!attribute [rw] created_on
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] exports
#   @return [Object, nil]
#
# @!attribute [rw] exports_reconciliation
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] limits
#   @return [Hash, nil]
#
# @!attribute [rw] main_module
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] migration_tag
#   @return [String, nil]
#
# @!attribute [rw] migrations
#   @return [Object, nil]
#
# @!attribute [rw] modules
#   @return [Array, nil]
#
# @!attribute [rw] number
#   @return [Integer, nil]
#
# @!attribute [rw] package_dependencies
#   @return [Array, nil]
#
# @!attribute [rw] placement
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] startup_time_ms
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] urls
#   @return [Array, nil]
#
# @!attribute [rw] usage_model
#   @return [String, nil]
VersionUpdateData = Struct.new(
  :account_id,
  :worker_id,
  :deploy,
  :annotations,
  :assets,
  :author_email,
  :author_id,
  :bindings,
  :cache_options,
  :compatibility_date,
  :compatibility_flags,
  :containers,
  :created_on,
  :errors,
  :exports,
  :exports_reconciliation,
  :id,
  :limits,
  :main_module,
  :messages,
  :migration_tag,
  :migrations,
  :modules,
  :number,
  :package_dependencies,
  :placement,
  :result,
  :source,
  :startup_time_ms,
  :success,
  :urls,
  :usage_model,
  keyword_init: true
)

# Request payload for Version#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] worker_id
#   @return [String]
VersionRemoveMatch = Struct.new(
  :account_id,
  :id,
  :worker_id,
  keyword_init: true
)

# Worker entity data model.
#
# @!attribute [rw] auto_build
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_delete
#   @return [Boolean, nil]
#
# @!attribute [rw] branch
#   @return [Object, nil]
#
# @!attribute [rw] commit_hash
#   @return [Object, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] git_repository
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] previews_base_config
#   @return [Hash]
#
# @!attribute [rw] previews_enabled
#   @return [Boolean]
#
# @!attribute [rw] production_settings
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] script_tag
#   @return [String]
#
# @!attribute [rw] seed_repo
#   @return [Object, nil]
#
# @!attribute [rw] settings
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
Worker = Struct.new(
  :auto_build,
  :auto_delete,
  :branch,
  :commit_hash,
  :errors,
  :git_repository,
  :id,
  :messages,
  :previews_base_config,
  :previews_enabled,
  :production_settings,
  :result,
  :result_info,
  :script_tag,
  :seed_repo,
  :settings,
  :success,
  keyword_init: true
)

# Request payload for Worker#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] preview_id
#   @return [String, nil]
#
# @!attribute [rw] worker_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
WorkerLoadMatch = Struct.new(
  :account_id,
  :preview_id,
  :worker_id,
  :id,
  keyword_init: true
)

# Request payload for Worker#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] preview_id
#   @return [String, nil]
#
# @!attribute [rw] worker_id
#   @return [String, nil]
WorkerListMatch = Struct.new(
  :account_id,
  :order,
  :order_by,
  :page,
  :per_page,
  :preview_id,
  :worker_id,
  keyword_init: true
)

# Request payload for Worker#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] preview_id
#   @return [String, nil]
#
# @!attribute [rw] worker_id
#   @return [String, nil]
#
# @!attribute [rw] auto_build
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_delete
#   @return [Boolean, nil]
#
# @!attribute [rw] branch
#   @return [Object, nil]
#
# @!attribute [rw] commit_hash
#   @return [Object, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] git_repository
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] previews_base_config
#   @return [Hash]
#
# @!attribute [rw] previews_enabled
#   @return [Boolean]
#
# @!attribute [rw] production_settings
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] script_tag
#   @return [String]
#
# @!attribute [rw] seed_repo
#   @return [Object, nil]
#
# @!attribute [rw] settings
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkerCreateData = Struct.new(
  :account_id,
  :preview_id,
  :worker_id,
  :auto_build,
  :auto_delete,
  :branch,
  :commit_hash,
  :errors,
  :git_repository,
  :id,
  :messages,
  :previews_base_config,
  :previews_enabled,
  :production_settings,
  :result,
  :result_info,
  :script_tag,
  :seed_repo,
  :settings,
  :success,
  keyword_init: true
)

# Request payload for Worker#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] auto_build
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_delete
#   @return [Boolean, nil]
#
# @!attribute [rw] branch
#   @return [Object, nil]
#
# @!attribute [rw] commit_hash
#   @return [Object, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] git_repository
#   @return [Object, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] previews_base_config
#   @return [Hash, nil]
#
# @!attribute [rw] previews_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] production_settings
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] script_tag
#   @return [String, nil]
#
# @!attribute [rw] seed_repo
#   @return [Object, nil]
#
# @!attribute [rw] settings
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
WorkerUpdateData = Struct.new(
  :account_id,
  :id,
  :auto_build,
  :auto_delete,
  :branch,
  :commit_hash,
  :errors,
  :git_repository,
  :messages,
  :previews_base_config,
  :previews_enabled,
  :production_settings,
  :result,
  :result_info,
  :script_tag,
  :seed_repo,
  :settings,
  :success,
  keyword_init: true
)

# Request payload for Worker#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] force
#   @return [Boolean, nil]
WorkerRemoveMatch = Struct.new(
  :account_id,
  :id,
  :force,
  keyword_init: true
)

# WorkerCronTrigger entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkerCronTrigger = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkerCronTrigger#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
WorkerCronTriggerListMatch = Struct.new(
  :account_id,
  :script_name,
  keyword_init: true
)

# Request payload for WorkerCronTrigger#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
WorkerCronTriggerUpdateData = Struct.new(
  :account_id,
  :script_name,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# WorkerDeployment entity data model.
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] author_email
#   @return [String, nil]
#
# @!attribute [rw] created_on
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] strategy
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] versions
#   @return [Array]
WorkerDeployment = Struct.new(
  :annotations,
  :author_email,
  :created_on,
  :errors,
  :id,
  :messages,
  :result,
  :source,
  :strategy,
  :success,
  :versions,
  keyword_init: true
)

# Request payload for WorkerDeployment#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] since
#   @return [String, nil]
#
# @!attribute [rw] until
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] script_id
#   @return [String, nil]
WorkerDeploymentLoadMatch = Struct.new(
  :account_id,
  :script_name,
  :page,
  :per_page,
  :since,
  :until,
  :id,
  :script_id,
  keyword_init: true
)

# Request payload for WorkerDeployment#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] force
#   @return [Boolean, nil]
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] author_email
#   @return [String, nil]
#
# @!attribute [rw] created_on
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] strategy
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] versions
#   @return [Array]
WorkerDeploymentCreateData = Struct.new(
  :account_id,
  :script_name,
  :force,
  :annotations,
  :author_email,
  :created_on,
  :errors,
  :id,
  :messages,
  :result,
  :source,
  :strategy,
  :success,
  :versions,
  keyword_init: true
)

# WorkerEnvironment entity data model.
class WorkerEnvironment
end

# Request payload for WorkerEnvironment#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] environment_name
#   @return [String]
#
# @!attribute [rw] service_id
#   @return [String]
WorkerEnvironmentLoadMatch = Struct.new(
  :account_id,
  :environment_name,
  :service_id,
  keyword_init: true
)

# WorkerRoute entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] pattern
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] script
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkerRoute = Struct.new(
  :errors,
  :id,
  :messages,
  :pattern,
  :result,
  :script,
  :success,
  keyword_init: true
)

# Request payload for WorkerRoute#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
WorkerRouteLoadMatch = Struct.new(
  :id,
  :zone_id,
  keyword_init: true
)

# Request payload for WorkerRoute#list.
#
# @!attribute [rw] zone_id
#   @return [String]
WorkerRouteListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for WorkerRoute#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] pattern
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] script
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkerRouteCreateData = Struct.new(
  :zone_id,
  :errors,
  :id,
  :messages,
  :pattern,
  :result,
  :script,
  :success,
  keyword_init: true
)

# Request payload for WorkerRoute#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] pattern
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] script
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
WorkerRouteUpdateData = Struct.new(
  :id,
  :zone_id,
  :errors,
  :messages,
  :pattern,
  :result,
  :script,
  :success,
  keyword_init: true
)

# Request payload for WorkerRoute#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
WorkerRouteRemoveMatch = Struct.new(
  :id,
  :zone_id,
  keyword_init: true
)

# WorkerScript entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkerScript = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkerScript#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_id
#   @return [String, nil]
#
# @!attribute [rw] secret_name
#   @return [String, nil]
#
# @!attribute [rw] url_encoded
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
WorkerScriptLoadMatch = Struct.new(
  :account_id,
  :script_id,
  :secret_name,
  :url_encoded,
  :id,
  keyword_init: true
)

# Request payload for WorkerScript#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] script_name
#   @return [String, nil]
WorkerScriptListMatch = Struct.new(
  :account_id,
  :id,
  :name,
  :order_by,
  :page,
  :per_page,
  :script_name,
  keyword_init: true
)

# Request payload for WorkerScript#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkerScriptCreateData = Struct.new(
  :account_id,
  :script_name,
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkerScript#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] bindings_inherit
#   @return [String, nil]
#
# @!attribute [rw] script_name
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
WorkerScriptUpdateData = Struct.new(
  :account_id,
  :id,
  :bindings_inherit,
  :script_name,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkerScript#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
WorkerScriptRemoveMatch = Struct.new(
  :account_id,
  :script_name,
  keyword_init: true
)

# WorkerSubdomain entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] subdomain
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkerSubdomain = Struct.new(
  :errors,
  :messages,
  :result,
  :subdomain,
  :success,
  keyword_init: true
)

# Request payload for WorkerSubdomain#list.
#
# @!attribute [rw] account_id
#   @return [String]
WorkerSubdomainListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for WorkerSubdomain#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] subdomain
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
WorkerSubdomainUpdateData = Struct.new(
  :account_id,
  :errors,
  :messages,
  :result,
  :subdomain,
  :success,
  keyword_init: true
)

# Request payload for WorkerSubdomain#remove.
#
# @!attribute [rw] account_id
#   @return [String]
WorkerSubdomainRemoveMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# WorkerTailLog entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkerTailLog = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkerTailLog#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
WorkerTailLogListMatch = Struct.new(
  :account_id,
  :script_name,
  keyword_init: true
)

# Request payload for WorkerTailLog#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkerTailLogCreateData = Struct.new(
  :account_id,
  :script_name,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# WorkersAccountSetting entity data model.
#
# @!attribute [rw] default_usage_model
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] green_compute
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersAccountSetting = Struct.new(
  :default_usage_model,
  :errors,
  :green_compute,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkersAccountSetting#list.
#
# @!attribute [rw] account_id
#   @return [String]
WorkersAccountSettingListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for WorkersAccountSetting#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] default_usage_model
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] green_compute
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
WorkersAccountSettingUpdateData = Struct.new(
  :account_id,
  :default_usage_model,
  :errors,
  :green_compute,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# WorkersApiResponseNullResult entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersApiResponseNullResult = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkersApiResponseNullResult#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] script_id
#   @return [String]
#
# @!attribute [rw] tag
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
WorkersApiResponseNullResultUpdateData = Struct.new(
  :account_id,
  :namespace_id,
  :script_id,
  :tag,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkersApiResponseNullResult#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] script_id
#   @return [String, nil]
#
# @!attribute [rw] secret_name
#   @return [String, nil]
#
# @!attribute [rw] url_encoded
#   @return [Boolean, nil]
#
# @!attribute [rw] script_name
#   @return [String, nil]
#
# @!attribute [rw] force
#   @return [Boolean, nil]
#
# @!attribute [rw] tag
#   @return [String, nil]
WorkersApiResponseNullResultRemoveMatch = Struct.new(
  :account_id,
  :namespace_id,
  :script_id,
  :secret_name,
  :url_encoded,
  :script_name,
  :force,
  :tag,
  keyword_init: true
)

# WorkersCompletedUploadAsset entity data model.
class WorkersCompletedUploadAsset
end

# Request payload for WorkersCompletedUploadAsset#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] base64
#   @return [Boolean]
WorkersCompletedUploadAssetCreateData = Struct.new(
  :account_id,
  :base64,
  keyword_init: true
)

# WorkersCreateAssetsUploadSession entity data model.
#
# @!attribute [rw] manifest
#   @return [Hash]
WorkersCreateAssetsUploadSession = Struct.new(
  :manifest,
  keyword_init: true
)

# Request payload for WorkersCreateAssetsUploadSession#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] manifest
#   @return [Hash]
WorkersCreateAssetsUploadSessionCreateData = Struct.new(
  :account_id,
  :namespace_id,
  :script_name,
  :manifest,
  keyword_init: true
)

# WorkersForPlatform entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersForPlatform = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkersForPlatform#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] script_id
#   @return [String, nil]
#
# @!attribute [rw] secret_name
#   @return [String, nil]
#
# @!attribute [rw] url_encoded
#   @return [Boolean, nil]
#
# @!attribute [rw] script_name
#   @return [String, nil]
WorkersForPlatformLoadMatch = Struct.new(
  :account_id,
  :namespace_id,
  :script_id,
  :secret_name,
  :url_encoded,
  :script_name,
  keyword_init: true
)

# Request payload for WorkersForPlatform#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dispatch_namespace
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [String, nil]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] script_name
#   @return [String, nil]
WorkersForPlatformListMatch = Struct.new(
  :account_id,
  :dispatch_namespace,
  :tag,
  :namespace_id,
  :script_name,
  keyword_init: true
)

# Request payload for WorkersForPlatform#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] bindings_inherit
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
WorkersForPlatformUpdateData = Struct.new(
  :account_id,
  :namespace_id,
  :script_name,
  :bindings_inherit,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# WorkersKvApiResponseCommonNoResult entity data model.
class WorkersKvApiResponseCommonNoResult
end

# Request payload for WorkersKvApiResponseCommonNoResult#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] key_name
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] expiration
#   @return [Float, nil]
#
# @!attribute [rw] expiration_ttl
#   @return [Float, nil]
WorkersKvApiResponseCommonNoResultUpdateData = Struct.new(
  :account_id,
  :key_name,
  :namespace_id,
  :expiration,
  :expiration_ttl,
  keyword_init: true
)

# Request payload for WorkersKvApiResponseCommonNoResult#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] key_name
#   @return [String, nil]
#
# @!attribute [rw] namespace_id
#   @return [String]
WorkersKvApiResponseCommonNoResultRemoveMatch = Struct.new(
  :account_id,
  :key_name,
  :namespace_id,
  keyword_init: true
)

# WorkersKvNamespace entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] jurisdiction
#   @return [String, nil]
#
# @!attribute [rw] keys
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] withMetadata
#   @return [Boolean, nil]
WorkersKvNamespace = Struct.new(
  :errors,
  :id,
  :jurisdiction,
  :keys,
  :messages,
  :result,
  :result_info,
  :success,
  :title,
  :type,
  :withMetadata,
  keyword_init: true
)

# Request payload for WorkersKvNamespace#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] key_name
#   @return [String, nil]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
WorkersKvNamespaceLoadMatch = Struct.new(
  :account_id,
  :key_name,
  :namespace_id,
  :id,
  keyword_init: true
)

# Request payload for WorkersKvNamespace#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] prefix
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
WorkersKvNamespaceListMatch = Struct.new(
  :account_id,
  :namespace_id,
  :cursor,
  :limit,
  :prefix,
  :direction,
  :order,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for WorkersKvNamespace#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] jurisdiction
#   @return [String, nil]
#
# @!attribute [rw] keys
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] withMetadata
#   @return [Boolean, nil]
WorkersKvNamespaceCreateData = Struct.new(
  :account_id,
  :namespace_id,
  :errors,
  :id,
  :jurisdiction,
  :keys,
  :messages,
  :result,
  :result_info,
  :success,
  :title,
  :type,
  :withMetadata,
  keyword_init: true
)

# Request payload for WorkersKvNamespace#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] jurisdiction
#   @return [String, nil]
#
# @!attribute [rw] keys
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] withMetadata
#   @return [Boolean, nil]
WorkersKvNamespaceUpdateData = Struct.new(
  :account_id,
  :id,
  :namespace_id,
  :errors,
  :jurisdiction,
  :keys,
  :messages,
  :result,
  :result_info,
  :success,
  :title,
  :type,
  :withMetadata,
  keyword_init: true
)

# Request payload for WorkersKvNamespace#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
WorkersKvNamespaceRemoveMatch = Struct.new(
  :account_id,
  :namespace_id,
  keyword_init: true
)

# WorkersNamespaceList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersNamespaceList = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkersNamespaceList#list.
#
# @!attribute [rw] account_id
#   @return [String]
WorkersNamespaceListListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# WorkersNamespaceScriptDeleteBulk entity data model.
class WorkersNamespaceScriptDeleteBulk
end

# Request payload for WorkersNamespaceScriptDeleteBulk#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dispatch_namespace
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] tag
#   @return [String]
WorkersNamespaceScriptDeleteBulkRemoveMatch = Struct.new(
  :account_id,
  :dispatch_namespace,
  :limit,
  :tag,
  keyword_init: true
)

# WorkersNamespaceScriptResponseSingle entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersNamespaceScriptResponseSingle = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkersNamespaceScriptResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
WorkersNamespaceScriptResponseSingleLoadMatch = Struct.new(
  :account_id,
  :namespace_id,
  :script_name,
  keyword_init: true
)

# Request payload for WorkersNamespaceScriptResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
WorkersNamespaceScriptResponseSingleUpdateData = Struct.new(
  :account_id,
  :namespace_id,
  :script_name,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# WorkersNamespaceSingle entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] trusted_workers
#   @return [Boolean, nil]
WorkersNamespaceSingle = Struct.new(
  :errors,
  :messages,
  :name,
  :result,
  :success,
  :trusted_workers,
  keyword_init: true
)

# Request payload for WorkersNamespaceSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dispatch_namespace
#   @return [String]
WorkersNamespaceSingleLoadMatch = Struct.new(
  :account_id,
  :dispatch_namespace,
  keyword_init: true
)

# Request payload for WorkersNamespaceSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] trusted_workers
#   @return [Boolean, nil]
WorkersNamespaceSingleCreateData = Struct.new(
  :account_id,
  :errors,
  :messages,
  :name,
  :result,
  :success,
  :trusted_workers,
  keyword_init: true
)

# Request payload for WorkersNamespaceSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dispatch_namespace
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] trusted_workers
#   @return [Boolean, nil]
WorkersNamespaceSingleUpdateData = Struct.new(
  :account_id,
  :dispatch_namespace,
  :errors,
  :messages,
  :name,
  :result,
  :success,
  :trusted_workers,
  keyword_init: true
)

# WorkersPipelinesOther entity data model.
#
# @!attribute [rw] config
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] destination
#   @return [Hash]
#
# @!attribute [rw] endpoint
#   @return [String]
#
# @!attribute [rw] failure_reason
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [Object, nil]
#
# @!attribute [rw] graph
#   @return [Hash]
#
# @!attribute [rw] http
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] schema
#   @return [Hash, nil]
#
# @!attribute [rw] source
#   @return [Array]
#
# @!attribute [rw] sql
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] tables
#   @return [Array]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] version
#   @return [Float]
#
# @!attribute [rw] worker_binding
#   @return [Hash]
WorkersPipelinesOther = Struct.new(
  :config,
  :created_at,
  :destination,
  :endpoint,
  :failure_reason,
  :format,
  :graph,
  :http,
  :id,
  :modified_at,
  :name,
  :schema,
  :source,
  :sql,
  :status,
  :tables,
  :type,
  :version,
  :worker_binding,
  keyword_init: true
)

# Request payload for WorkersPipelinesOther#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] pipeline_id
#   @return [String, nil]
#
# @!attribute [rw] pipeline_name
#   @return [String, nil]
#
# @!attribute [rw] sink_id
#   @return [String, nil]
#
# @!attribute [rw] stream_id
#   @return [String, nil]
WorkersPipelinesOtherLoadMatch = Struct.new(
  :account_id,
  :pipeline_id,
  :pipeline_name,
  :sink_id,
  :stream_id,
  keyword_init: true
)

# Request payload for WorkersPipelinesOther#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] pipeline_id
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
WorkersPipelinesOtherListMatch = Struct.new(
  :account_id,
  :name,
  :page,
  :per_page,
  :pipeline_id,
  :search,
  keyword_init: true
)

# Request payload for WorkersPipelinesOther#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] config
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] destination
#   @return [Hash]
#
# @!attribute [rw] endpoint
#   @return [String]
#
# @!attribute [rw] failure_reason
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [Object, nil]
#
# @!attribute [rw] graph
#   @return [Hash]
#
# @!attribute [rw] http
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] schema
#   @return [Hash, nil]
#
# @!attribute [rw] source
#   @return [Array]
#
# @!attribute [rw] sql
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] tables
#   @return [Array]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] version
#   @return [Float]
#
# @!attribute [rw] worker_binding
#   @return [Hash]
WorkersPipelinesOtherCreateData = Struct.new(
  :account_id,
  :config,
  :created_at,
  :destination,
  :endpoint,
  :failure_reason,
  :format,
  :graph,
  :http,
  :id,
  :modified_at,
  :name,
  :schema,
  :source,
  :sql,
  :status,
  :tables,
  :type,
  :version,
  :worker_binding,
  keyword_init: true
)

# Request payload for WorkersPipelinesOther#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] pipeline_name
#   @return [String]
#
# @!attribute [rw] config
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] destination
#   @return [Hash, nil]
#
# @!attribute [rw] endpoint
#   @return [String, nil]
#
# @!attribute [rw] failure_reason
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [Object, nil]
#
# @!attribute [rw] graph
#   @return [Hash, nil]
#
# @!attribute [rw] http
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] schema
#   @return [Hash, nil]
#
# @!attribute [rw] source
#   @return [Array, nil]
#
# @!attribute [rw] sql
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] tables
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [Float, nil]
#
# @!attribute [rw] worker_binding
#   @return [Hash, nil]
WorkersPipelinesOtherUpdateData = Struct.new(
  :account_id,
  :pipeline_name,
  :config,
  :created_at,
  :destination,
  :endpoint,
  :failure_reason,
  :format,
  :graph,
  :http,
  :id,
  :modified_at,
  :name,
  :schema,
  :source,
  :sql,
  :status,
  :tables,
  :type,
  :version,
  :worker_binding,
  keyword_init: true
)

# Request payload for WorkersPipelinesOther#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] pipeline_id
#   @return [String, nil]
#
# @!attribute [rw] pipeline_name
#   @return [String, nil]
#
# @!attribute [rw] sink_id
#   @return [String, nil]
#
# @!attribute [rw] stream_id
#   @return [String, nil]
WorkersPipelinesOtherRemoveMatch = Struct.new(
  :account_id,
  :pipeline_id,
  :pipeline_name,
  :sink_id,
  :stream_id,
  keyword_init: true
)

# WorkersScriptAndVersionSetting entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersScriptAndVersionSetting = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkersScriptAndVersionSetting#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
WorkersScriptAndVersionSettingListMatch = Struct.new(
  :account_id,
  :script_name,
  keyword_init: true
)

# Request payload for WorkersScriptAndVersionSetting#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
WorkersScriptAndVersionSettingUpdateData = Struct.new(
  :account_id,
  :script_name,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# WorkersScriptResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersScriptResponseCollection = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkersScriptResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] tag
#   @return [String, nil]
WorkersScriptResponseCollectionListMatch = Struct.new(
  :account_id,
  :tag,
  keyword_init: true
)

# WorkersScriptResponseSingle entity data model.
class WorkersScriptResponseSingle
end

# Request payload for WorkersScriptResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] environment_name
#   @return [String, nil]
#
# @!attribute [rw] service_id
#   @return [String, nil]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] script_name
#   @return [String, nil]
WorkersScriptResponseSingleUpdateData = Struct.new(
  :account_id,
  :environment_name,
  :service_id,
  :namespace_id,
  :script_name,
  keyword_init: true
)

# WorkersSmartPlacement entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersSmartPlacement = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkersSmartPlacement#list.
#
# @!attribute [rw] account_id
#   @return [String]
WorkersSmartPlacementListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# WorkersUsageModel entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] usage_model
#   @return [String, nil]
#
# @!attribute [rw] user_limits
#   @return [Hash, nil]
WorkersUsageModel = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  :usage_model,
  :user_limits,
  keyword_init: true
)

# Request payload for WorkersUsageModel#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
WorkersUsageModelListMatch = Struct.new(
  :account_id,
  :script_name,
  keyword_init: true
)

# Request payload for WorkersUsageModel#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] usage_model
#   @return [String, nil]
#
# @!attribute [rw] user_limits
#   @return [Hash, nil]
WorkersUsageModelUpdateData = Struct.new(
  :account_id,
  :script_name,
  :errors,
  :messages,
  :result,
  :success,
  :usage_model,
  :user_limits,
  keyword_init: true
)

# WorkersVersionsList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersVersionsList = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkersVersionsList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] deployable
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
WorkersVersionsListListMatch = Struct.new(
  :account_id,
  :script_name,
  :deployable,
  :page,
  :per_page,
  keyword_init: true
)

# WorkersVersionsSingle entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersVersionsSingle = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkersVersionsSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_id
#   @return [String]
#
# @!attribute [rw] version_id
#   @return [String]
WorkersVersionsSingleLoadMatch = Struct.new(
  :account_id,
  :script_id,
  :version_id,
  keyword_init: true
)

# WorkersVersionsUpload entity data model.
class WorkersVersionsUpload
end

# Request payload for WorkersVersionsUpload#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] bindings_inherit
#   @return [String, nil]
WorkersVersionsUploadCreateData = Struct.new(
  :account_id,
  :script_name,
  :bindings_inherit,
  keyword_init: true
)

# Workflow entity data model.
#
# @!attribute [rw] class_name
#   @return [String]
#
# @!attribute [rw] concurrency
#   @return [Hash, nil]
#
# @!attribute [rw] default_retention
#   @return [Hash, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] instances
#   @return [Array]
#
# @!attribute [rw] limits
#   @return [Hash, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] schedules
#   @return [Array, nil]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
Workflow = Struct.new(
  :class_name,
  :concurrency,
  :default_retention,
  :errors,
  :id,
  :instances,
  :limits,
  :messages,
  :result,
  :result_info,
  :schedules,
  :script_name,
  :success,
  keyword_init: true
)

# Request payload for Workflow#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] instance_id
#   @return [String, nil]
#
# @!attribute [rw] workflow_id
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [Integer, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] simple
#   @return [String, nil]
#
# @!attribute [rw] version_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] script_name
#   @return [String, nil]
WorkflowLoadMatch = Struct.new(
  :account_id,
  :instance_id,
  :workflow_id,
  :cursor,
  :filter,
  :order,
  :simple,
  :version_id,
  :id,
  :script_name,
  keyword_init: true
)

# Request payload for Workflow#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] instance_id
#   @return [String, nil]
#
# @!attribute [rw] workflow_id
#   @return [String, nil]
#
# @!attribute [rw] attempt
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] version_id
#   @return [String, nil]
WorkflowListMatch = Struct.new(
  :account_id,
  :instance_id,
  :workflow_id,
  :attempt,
  :name,
  :type,
  :page,
  :per_page,
  :search,
  :version_id,
  keyword_init: true
)

# Request payload for Workflow#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] event_type
#   @return [String, nil]
#
# @!attribute [rw] instance_id
#   @return [String, nil]
#
# @!attribute [rw] workflow_id
#   @return [String]
#
# @!attribute [rw] class_name
#   @return [String]
#
# @!attribute [rw] concurrency
#   @return [Hash, nil]
#
# @!attribute [rw] default_retention
#   @return [Hash, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] instances
#   @return [Array]
#
# @!attribute [rw] limits
#   @return [Hash, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] schedules
#   @return [Array, nil]
#
# @!attribute [rw] script_name
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkflowCreateData = Struct.new(
  :account_id,
  :event_type,
  :instance_id,
  :workflow_id,
  :class_name,
  :concurrency,
  :default_retention,
  :errors,
  :id,
  :instances,
  :limits,
  :messages,
  :result,
  :result_info,
  :schedules,
  :script_name,
  :success,
  keyword_init: true
)

# Request payload for Workflow#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] script_name
#   @return [String, nil]
#
# @!attribute [rw] class_name
#   @return [String, nil]
#
# @!attribute [rw] concurrency
#   @return [Hash, nil]
#
# @!attribute [rw] default_retention
#   @return [Hash, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] instances
#   @return [Array, nil]
#
# @!attribute [rw] limits
#   @return [Hash, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] schedules
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
WorkflowUpdateData = Struct.new(
  :account_id,
  :id,
  :script_name,
  :class_name,
  :concurrency,
  :default_retention,
  :errors,
  :instances,
  :limits,
  :messages,
  :result,
  :result_info,
  :schedules,
  :success,
  keyword_init: true
)

# Request payload for Workflow#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] instance_id
#   @return [String, nil]
#
# @!attribute [rw] workflow_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] script_name
#   @return [String, nil]
WorkflowRemoveMatch = Struct.new(
  :account_id,
  :instance_id,
  :workflow_id,
  :id,
  :script_name,
  keyword_init: true
)

