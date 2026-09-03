---
title: Oauth2 Exchange Token
description: SOFARCloud OPEN API 2.0 - Account / Oauth2 Exchange Token.
---
## OAuth2 Authorize Exchange Token

- **Description**: exchange token with code
- **Url**: /oauth/v2/token
- **Method**: POST
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| appId | String | Body | Y | appId（contact with SOLFAR CLOUD） |
| appSecret | String | Body | Y | appSecret（contact with SofarCloud） |
| redirectUri | String | Body | Y | redirect uri |
| grantType | String | Body | Y | grant type, fixed value: authorization_code |
| code | String | Body | Y | authorization code |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | Y | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y | data object |
| accessToken | String | Body | Y | access token |
| refreshToken | String | Body | Y | refresh token |
| tokenType | String | Body | Y | token type,fixed value: Bearer |
| expiresIn | String | Body | Y | expires in seconds |
| scope | String | Body | Y | Spacedelimited list of permission scopes that the client requests. If omitted, server applies clientconfigured default scopes. |

## Example

### Request

```json
{
  "appId": "sf_demo_001",
  "appSecret": "7a2f918e88xxxxxxxxx",
  "redirectUri": "https://client-demo.example.com/callback",
  "grantType": "authorization_code",
  "code": "AUTH_CODE_912837abcdef"
}
```

### Response

```json
{
  "traceId": "trace-62817392001abcdef",
  "code": "200",
  "message": "success",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxx",
    "refreshToken": "ref_001_abcdef123456",
    "tokenType": "Bearer",
    "expiresIn": "7200",
    "scope": "user_info"
  }
}
```
