---
title: Interface
description: >-
  SOFARCloud OPEN API 2.0 - Account / Interface.
---

# Interface

- **Description**: retrieve the interfaces (APIs) that the current app has permission to access
- **Url**: /account/v2/interface
- **Method**: post
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | Y | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| interface | String[] | Body | N | interface list |

## Example

## request

### Response

```json
{
  "traceId": "796080a7ed5843fe",
  "message": "success",
  "code": "200",
  "data": {
    "interface": [
      "/account/v2/interface",
      "/account/v2/createToken"
    ]
  }
}
```
