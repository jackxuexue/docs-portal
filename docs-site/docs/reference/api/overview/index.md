---
title: OpenAPI Overview
description: >-
  SOFARCloud OPEN API 2.0 - OPENAPI section overview.
---

# OpenAPI Overview

This API is used to work with the SofarCloud Energy platform to automate the retrieval and creation of elements, and provide the API call for the third-party cloud or app. It will attempt to adhere to standard REST calls found in most REST implementations.

Platform interfaces are based on HTTP/HTTPS protocols.

All data uses UTF-8 encoding.

Supports data in JSON format.

Response structure:  Body content, error code, and message.

Authorization requirement: Except for the token acquisition endpoint, all API calls require adding the Authorization Bearer &lt;token&gt; header to the HTTP request.

Token validity:

Access token: 30 days

Refresh token: 60 days

Timestamp format: Unix time in seconds (seconds since January 1, 1970, 00:00:00 UTC).

## APIs in this section

- [Glossary](./glossary)
- [Common Response](./common-response)
- [HTTP ERROR CODES](./http-error-codes)
- [Rate Limiting](./rate-limiting)
- [Command Callback](./command-callback)
- [Server](./server)
