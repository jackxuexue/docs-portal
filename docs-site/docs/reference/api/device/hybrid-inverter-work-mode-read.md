---
title: Hybrid Inverter Work Mode Read
description: >-
  SOFARCloud OPEN API 2.0 - Device / Hybrid Inverter Work Mode Read.
---

# Hybrid Inverter Work Mode Read

## Hybrid Inverter energy work mode Read

- **Description**: Hybrid Inverter energy work mode read
- **Url**: /deviceCmd/v2/energyStorage/read
- **Method**: post
- **Content-Type**: application/json

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| deviceSn | String | Body | Y | device serial number |
| callBackUrl | String | Body | Y | callback url,device response callback with<br>the same with read result |
| mode | String | Body | N | defult is for current mode. |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | Y | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| requestId | String | body | N | request id |

## Callback Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| requestId | String | Body | Y | trace id for request |
| data | Object | Body | N | the same with setting param |

## Example

### Request

```json
{
  "callBackUrl": "http://google.com/xxxx",
  "deviceSn": "sn123"
}
```

### Response

```json
{
  "traceId": "8c5f73d2c95b4ab6",
  "code": "0",
  "message": "success",
  "data": {
    "requestId": "712618884892594176"
  }
}
```

### Callback

```json
{
  "requestId": "712618884892594176",
  "code": "200",
  "data": {
    "deviceSn": "ZD1051010KC238150003",
    "mode": 4,
    "params": {
      "peakShaving": {
        "purchasePowerLimit": 0
      }
    }
  }
}
```
