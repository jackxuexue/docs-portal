---
title: Station Device List
description: >-
  SOFARCloud OPEN API 2.0 - Station / Station Device List.
---

# Station Device List

## station device list

- **Description**: retrieve the device list of this station
- **Url**: /station/v2/device/page
- **Method**: post
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| stationId | Long | Body | Y | station ID |
| deviceType | Integer | Body | N | device type<br>1：Inverter<br>2：Logger<br>3: battery<br>4: CH100 |
| pageable | Object | Body | N |  |
| page | Integer | Body | N | page |
| pageSize | Integer | Body | N | page size, maximum 100 |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | N | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| total | Long | Body | Y | total number |
| rows | Arrays | Body | Y |  |
| deviceId | Long | Body | Y | device id |
| deviceSn | String | Body | Y | device serial number |
| deviceName | String | Body | N | device name |
| deviceModel | String | Body | N | device model |
| deviceModelName | String | Body | Y | device model name |
| deviceType | Integer | Body | Y | device type<br>1：Inverter<br>2：Logger |
| deviceState | Integer | Body | Y | device status<br>1：online<br>2：alarm<br>3：offline |
| timezone | String | Body | N | timezone，such as：Asia/Shanghai |
| stationId | Long | Body | Y | station id |

## Example

### Request

```json
{
  "stationId": 11231231243,
  "pageable": {
    "page": "1",
    "pageSize": "50"
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
        "stationId": 11231231243
      },
      {
        "deviceId": 102,
        "deviceName": "Collector B",
        "deviceModel": "HYD 3-6K-EP",
        "deviceModelName": "HYD 5.5K-EP",
        "deviceType": 2,
        "deviceState": 2,
        "timezone": "Asia/Shanghai",
        "stationId": 11231231243
      }
    ]
  }
}
```
