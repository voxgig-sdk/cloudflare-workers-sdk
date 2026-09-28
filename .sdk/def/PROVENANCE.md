# Definition provenance

This SDK is generated from the official Cloudflare OpenAPI definition.

- Upstream repository: https://github.com/cloudflare/api-schemas
- Upstream file: `openapi.json`
- Upstream commit: [`d9edc9e601cc940449da424bf35a69d863e103af`](https://github.com/cloudflare/api-schemas/commit/d9edc9e601cc940449da424bf35a69d863e103af)
- Retrieved: 2026-09-28
- Upstream SHA-256: `7cd298669e3ca59c52fa76eac9a8b377535b993cffa4c6131296e2ed268a94c6`
- Product: Cloudflare Workers
- Product slice: 192 paths, 303 operations, 500 transitively referenced schemas
- Product-spec SHA-256: `ae5fa4e16fb0460651ad6cd5283d4fca39022829fdd7aaaa8d3470b70c12b1a1`

Cloudflare publishes one monolithic definition spanning many independent products.
This repository covers the named product surface, not the entire Cloudflare
platform. The product split is reproducible with
`voxgig-sdk/admin/scripts/cloudflare-split.py`; it retains every transitively
referenced OpenAPI component, rejects no operation within its declared path
families, and assigns no path to more than one product SDK.

The upstream Workers request example contains a random UUID in its
`build_token_uuid` field. The splitter replaces only that example value with
the valid nil UUID because GitHub push protection classifies random UUID-shaped
npm access tokens as secrets. The field and API schema are unchanged.
