---
title: Device real time data
description: >-
  SOFARCloud OPEN API 2.0 - Device / Device real time data.
---

# Device real time data

- **Description**: retrieve the device real time data
- **Url**: /device/v2/realTime
- **Method**: post
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| deviceSn | String | Body | Y | device serial number |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | Y | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| updateTime | Long | Body | Y | UTC timestamp,sec |
| deviceType | Integer | Body | Y | Device Type：<br>1：Inverter<br>2：Logger<br>4：Battery<br>27：CH1000 |
| timezone | String | Body | N | timezone id， example：Asia/Shanghai |
| countryName | String | Body | Y | country |
| power | String | Body | Y | rated power kW |
| deviceState | Integer | Body | Y | device state:<br>1：online<br>2：alarm<br>3：offline |
| fieldList | Arrays | Body | Y | device field list |
| key | String | Body | Y | key, see reference enumeration definition |
| name | String | Body | Y | name |
| value | String | Body | Y | value |
| unit | String | Body | Y | unit |
| currentAlarmList | Arrays | Body | N | when device have alarm |
| triggerTime | Long | Body | N | trigger timestamp, UTC timestamp,sec |
| resolveTime | Long | Body | N | resolve timestamp，UTC timestamp,0 or null means happening |
| status | Integer | Body | N | Status：<br>0:happening<br>1:recovered |
| alarmCode | String | Body | N | alarm code ,see the device alarm code define as below |
| alarmFaultNum | String | Body | N | alarm code number |
| alarmLevel | Integer | Body | N | Level：<br>2：fault<br>1：warn<br>0：info |

## Example

### Request

```json
{
  "deviceSn": "SS32223421213"
}
```

### Response

```json
{
"traceId": "796080a7ed5843fe",
"code": "200",
"message": "success",
"data": {
"updateTime": 1727244469，
"deviceType": 1,
"timezone": "Asia/Shanghai",
"countryName":"CN",
"power":"50kW",
"fieldList": [
{
"key": "inv$generationToday",
"name": "today generation",
"value": "83.04",
"unit":"kWh"
},
{
"key": "inv$totalActivePower",
"name": "total active power",
"value": "17.65",
"unit":"kW"
}
]
}
}
```
