---
title: User Info
description: SOFARCloud OPEN API 2.0 - Account / User Info.
---

## User Info

- **Description**: get the user info
- **Url**: /account/v2/userInfo
- **Method**: get
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
| userId | Long | Body | Y | user id |
| userName | String | Body | N | user name |
| email | String | Body | Y | email |

## Example

## request

### Response

```json
{
"traceId": "796080a7ed5843fe",
"message": "success",
"code": "200",
"data": {
"userId": 625988290633404400,
"userName": "",
"email": "xuezejian@sofarsolar.com"
}
```
