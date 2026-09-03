---
title: Power On Off
description: >-
  SOFARCloud OPEN API 2.0 - Device / Power On Off.
---

# Power On Off

## remote control on off the Inverter

- **Description**: remote control the inverter on or off
- **Url**: /deviceCmd/v2/powerOnOrOff/set
- **Method**: post
- **Content-Type**: application/json

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| deviceSn | String | Body | Y | device serial number |
| onOff | Integer | Body | Y | 0：off<br>1：on |
| callBackUrl | String | Body | N | call back url by the device response with http post<br>{<br>&quot;code&quot;: &quot;200&quot;,<br>&quot;message&quot;: &quot;&quot;,<br>&quot;requestId&quot;: &quot;123&quot;,<br>&quot;isSuccess&quot;: true,<br>&quot;content&quot;: &quot;0110111000010530&quot;<br>} |

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
  "callBackUrl": "https://callbackurl.com",
  "deviceSn": "SD1057012KC23A010001",
  "onOff": 0
}
```

### Response

```json
{
  "traceId": "38dcaf6dfa264752",
  "code": "0",
  "message": "success",
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
"content": "0110111000010530"
}
```
