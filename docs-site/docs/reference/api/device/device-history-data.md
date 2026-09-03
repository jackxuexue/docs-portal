---
title: Device history data
description: >-
  SOFARCloud OPEN API 2.0 - Device / Device history data.
---

# Device history data

- **Description**: retrieve the device history data
- **Url**: /device/v2/history
- **Method**: post
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| deviceSn | String | Body | Y | device serial number |
| startTimestamp | Long | Body | Y | start timestamp second |
| endTimestamp | Long | Body | Y | end timestamp second |
| metricsList | Array | Body | N | key, see reference enumeration definition |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | Y | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| dataList | Array | Body | N | history data list |
| updateTime | Long | Body | Y | UTC timestamp,sec |
| deviceType | Integer | Body | Y | Device Type：<br>1：Inverter<br>2：Logger<br>4：Battery<br>27：CH1000 |
| timezone | String | Body | N | timezone id， example：Asia/Shanghai |
| countryName | String | Body | Y | country |
| power | String | Body | Y | rated power kW |
| fieldList | Arrays | Body | Y | device field list |
| key | String | Body | Y | key, see reference enumeration definition |
| name | String | Body | Y | name |
| value | String | Body | Y | value |
| unit | String | Body | Y | unit |

## Example

### Request

```json
{
  "deviceSn": "SH1021080KE258090048",
  "startTimestamp": 1782608808,
  "endTimestamp": 1782691608,
  "metricsList": [
    "inv$status"
  ]
}
```

### Response

```json
{
  "traceId": "0c8e3f29dcc34f59",
  "code": "200",
  "message": "SUCCESS",
  "data": {
    "dataList": [
      {
        "deviceType": 1,
        "updateTime": 1782618688,
        "timezone": "Asia/Shanghai",
        "countryName": "China",
        "power": "80kW",
        "deviceState": 3,
        "fieldList": [
          {
            "key": "inv$status",
            "name": "inv$status",
            "unit": "",
            "value": "2"
          }
        ]
      },
      {
        "deviceType": 1,
        "updateTime": 1782649408,
        "timezone": "Asia/Shanghai",
        "countryName": "China",
        "power": "80kW",
        "deviceState": 3,
        "fieldList": [
          {
            "key": "inv$status",
            "name": "inv$status",
            "unit": "",
            "value": "2"
          }
        ]
      }
    ]
  }
}
```
