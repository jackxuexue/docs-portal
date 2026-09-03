---
title: Power Control
description: >-
  SOFARCloud OPEN API 2.0 - Device / Power Control.
---

# Power Control

## Power control

- **Description**: control the inverter power output
- **Url**: /deviceCmd/v2/powerControl/set
- **Method**: post
- **Content-Type**: application/json

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| deviceSn | String | Body | Y | device serial number |
| callBackUrl | String | Body | N | callable  with http post body<br>{<br>&quot;code&quot;: &quot;200&quot;,<br>&quot;message&quot;: &quot;&quot;,<br>&quot;requestId&quot;: &quot;123&quot;,<br>&quot;isSuccess&quot;: true,<br>&quot;content&quot;: &quot;0110111000010530&quot;<br>} |
| activePowerEnable | Integer | Body | N | active power enable<br>0: disable<br>1: enable |
| activePowerExportLimit | String | Body | N | active power export limit(%) |
| activePowerImportLimit | String | Body | N | active power import limit(%) |
| activePowerLimitSpeed | String | Body | N | active power import speed(%Pn/min) |
| powerMode | Integer | Body | N | power mode<br>0：reactive power<br>1：power factor |
| powerFactorSetting | String | Body | N | power factor |
| reactivePowerEnableSetting | Integer | Body | N | reactive power enable<br>0: disable<br>1: enable |
| reactivePowerResponseTime | String | Body | N | reactive power response time(second) |
| reactivePowerSetting | String | Body | N | reactive power limit(%) |
| svgEnable | Integer | Body | N | SVG<br>0：disable<br>1：enable |
| svgMode | Integer | Body | N | SVG<br>0: fix mode<br>1：reactive power |
| svgFixedReactivePowerSetting | String | Body | N | reactive power(kVar） |

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
  "activePowerEnable": 0,
  "activePowerExportLimit": "89.9",
  "activePowerImportLimit": "78.4",
  "activePowerLimitSpeed": "856",
  "callBackUrl": "https:callbackurl.com",
  "deviceSn": "SH3ES950QAW191",
  "powerFactorSetting": "-3.45",
  "powerMode": 0,
  "reactivePowerEnableSetting": 0,
  "reactivePowerResponseTime": "3",
  "reactivePowerSetting": "32",
  "svgEnable": 1,
  "svgFixedReactivePowerSetting": "45",
  "svgMode": 0
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
"content": "0110111000010530"
}
```
