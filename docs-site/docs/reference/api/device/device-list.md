---
title: Device List
description: >-
  SOFARCloud OPEN API 2.0 - Device / Device List.
---

# Device List

- **Description**: retrieve the device list which belongs to this account
- **Url**: /device/v2/page
- **Method**: post
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| deviceSn | String | Body | N | device serial number |
| deviceType | Integer | Body | N | Device Type：<br>1：Inverter<br>2：Logger<br>4：Battery<br>27：CH1000 |
| pageable | Object | Body | N |  |
| page | Integer | Body | N | page |
| pageSize | Integer | Body | N | page size, maximum 100 |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | Y | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| total | Long | Body | Y | total number |
| rows | Arrays | Body | Y |  |
| deviceId | Long | Body | Y | device unique id |
| deviceName | String | Body | N | device name |
| deviceModel | String | Body | Y | device model |
| deviceModelName | String | Body | Y | device model name |
| deviceType | Integer | Body | Y | Device Type：<br>1：Inverter<br>2：Logger<br>4：Battery<br>27：CH1000 |
| deviceState | Integer | Body | Y | device state:<br>1：online<br>2：alarm<br>3：offline |
| timezone | String | Body | N | timezone，example：Asia/Shanghai |
| stationId | Long | Body | N | station id |
| power | String | Body | Y | rated power kW |

## Example

### Request

```json
{
  "pageable": {
    "page": 1,
    "pageSize": 50
  }
}
```

### Response

```json
{
  "traceId": "796080a7ed5843fe",
  "code": "200",
  "message": "success",
  "data": {
    "total": 2,
    "rows": [
      {
        "deviceId": 101,
        "deviceName": "Inverter A",
        "deviceModel": "HYD 3-6K-EP",
        "deviceModelName": "HYD 5.5K-EP",
        "deviceType": 1,
        "deviceState": 1,
        "timezone": "Asia/Shanghai",
        "stationId": 11231231243,
        "power": "5.5kW"
      },
      {
        "deviceId": 102,
        "deviceName": "Collector B",
        "deviceModel": "HYD 3-6K-EP",
        "deviceModelName": "HYD 5.5K-EP",
        "deviceType": 2,
        "deviceState": 2,
        "timezone": "Asia/Shanghai",
        "stationId": 11231231246,
        "power": "5.5kW"
      }
    ]
  }
}
```
