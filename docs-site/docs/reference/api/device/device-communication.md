---
title: Device Communication
description: >-
  SOFARCloud OPEN API 2.0 - Device / Device Communication.
---

# Device Communication

- **Description**: get the device communication tree
- **Url**: /device/v2/tree
- **Method**: post
- **Content-Type**: application/json

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| deviceSn | String | Body | Y | device serial number |
| deviceId | Long | Body | N | device unique id |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | N | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| deviceId | Long | Body | Y | device unique id |
| deviceSn | Long | Body | Y | device serial number |
| deviceName | String | Body | N | device name |
| deviceModel | String | Body | Y | device model |
| deviceModelName | String | Body | Y | device model name |
| deviceType | Integer | Body | Y | Device Type：<br>1：Inverter<br>2：Logger<br>4：Battery<br>27：CH1000 |
| deviceState | Integer | Body | Y | device state:<br>1：online<br>2：alarm<br>3：offline |
| stationId | Long | Body | Y | station id |
| parentSn | String | Body | Y | parent serial number |
| childList | Array | Body | N | child device list |
| deviceId | Long | Body | Y | device unique id |
| deviceSn | Long | Body | Y | device serial number |
| deviceName | String | Body | N | device name |
| deviceModel | String | Body | Y | device model |
| deviceModelName | String | Body | Y | device model name |
| deviceType | Integer | Body | Y | Device Type：<br>1：Inverter<br>2：Logger<br>4：Battery<br>27：CH1000 |
| deviceState | Integer | Body | Y | device state:<br>1：online<br>2：alarm<br>3：offline |
| stationId | Long | Body | Y | station id |
| parentSn | String | Body | Y | parent serial number |
| childList | Array | Body | N | child device list |

## Example

### Request

```json
{
  "deviceSn": "SH0000000002"
}
```

### Response

```json
{
  "traceId": "38dcaf6dfa264752",
  "code": "0",
  "message": "成功",
  "data": {
    "deviceId": 101,
    "deviceSn": "LH0000000001",
    "deviceName": "LOGGER A",
    "deviceModel": "Logger",
    "deviceModelName": "LSW-3B3253-C",
    "deviceType": 2,
    "deviceState": 1,
    "childList": [
      {
        "deviceId": 102,
        "deviceSn": "SH0000000002",
        "deviceName": "Inverter A",
        "deviceModel": "HYD 3-6K-EP",
        "deviceModelName": "HYD 5.5K-EP",
        "deviceType": 1,
        "deviceState": 1,
        "childList": []
      }
    ]
  }
}
```
