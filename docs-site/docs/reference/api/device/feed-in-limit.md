---
title: Feed-in Limit
description: >-
  SOFARCloud OPEN API 2.0 - Device / Feed-in Limit.
---

# Feed-in Limit

- **Description**: Feed-in limit
- **Url**: /deviceCmd/v2/feedInLimit/set
- **Method**: post
- **Content-Type**: application/json

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| deviceSn | String | Body | Y | device serial number |
| callBackUrl | String | Body | N | callable  with http post body<br>{<br>&quot;code&quot;: &quot;200&quot;,<br>&quot;message&quot;: &quot;&quot;,<br>&quot;requestId&quot;: &quot;123&quot;,<br>&quot;isSuccess&quot;: true,<br>&quot;content&quot;: &quot;0110111000010530&quot;<br>} |
| control | Integer | Body | Y | FeedInLimitControl<br>0: disable<br>1: default mode |
| powerW | Integer | Body | N | power limit(W) |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | N | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| requestId | Long | Body | Y | request id |

## Example

### Request

```json
{
  "deviceSn": "SH3ES950QAW191",
  "control": 1,
  "powerW": 500
}
```

### Response

```json
{
  "traceId": "38dcaf6dfa264752",
  "code": "0",
  "message": "成功",
  "data": {
    "requestId": "406491365929783296"
  }
}
```

### Callback

```json
{
"code": "200",
"message": ""
"requestId": "123",
"isSuccess": true,
"content": "011010240001XXXX"
}
```
