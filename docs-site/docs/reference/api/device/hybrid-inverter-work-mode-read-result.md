---
title: Hybrid Inverter Work Mode Read Result
description: >-
  SOFARCloud OPEN API 2.0 - Device / Hybrid Inverter Work Mode Read Result.
---

# Hybrid Inverter Work Mode Read Result

## Hybrid Inverter energy work mode get read result

- **Description**: Hybrid Inverter energy work mode get read result
- **Url**: /deviceCmd/v2/energyStorage/read/result
- **Method**: GET
- **Content-Type**: application/json

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| requestId | String | Param | Y | requestId |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | Y | code（0/200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y | the same with Hybrid Inverter Work Mode Setting parameter |

## Example

### Response

```json
{
"traceId": "bf074c1b735442b2",
"code": "200",
"data": {
"callBackUrl": "",
"deviceSn": "ZD1051010KC238150003",
"mode": 4,
"params": {
"peakShaving": {
"purchasePowerLimit": 0
}
}
}
}
{
"traceId": "bc87f6d14f7f4487",
"code": "0",
"message": "processing"
}
```
