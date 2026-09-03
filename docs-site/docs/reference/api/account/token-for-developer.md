---
title: Token(for developer)
description: SOFARCloud OPEN API 2.0 - Account / Token(for developer).
---
## get token

- **Description**: get the access token
- **Url**: /account/v2/token
- **Method**: post
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| appId | String | Body | Y | appId（contact with SOLFAR CLOUD） |
| appSecret | String | Body | Y | appSecret（contact with SofarCloud） |
| accountName | String | Body | Y | account （use name、mobile、email） |
| accountType | Integer | Body | Y | account type：1:user name；2:mobile；3:email |
| password | String | Body | Y | password |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | Y | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y | data object |
| token | String | Body | Y | access token |
| refreshToken | String | Body | Y | refresh token |

## Example

### Request

```json
{
"appId":260036383412846592,
"appSecret":"3e1450024ee639f3aa29758ac00f6bf3",
"accountName": "xxxx@sofarcloud.com"，
"password":"xxxxxxx"
}
```

### Response

```json
{
  "traceId": "796080a7ed5843fe",
  "message": "success",
  "code": "200",
  "data": {
    "token": "dc149a1d5171f1b4603580fb02783ff868c2aa5b4ebddae21bc02b411f4abd0025b4380768601073f519e373e1fc3a4cd03c9228046294def82c579376df1f14c2f90cd682f96d17925a42081df08875",
    "refreshToken": "dc149a1d5171f1b4603580fb02783ff868c2aa5b4ebddae21bc02b411f4abd0025b4380768601073f519e373e1fc3"
  }
}
```
