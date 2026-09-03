---
title: Device Alarm
description: >-
  SOFARCloud OPEN API 2.0 - Device / Device Alarm.
---

# Device Alarm

## device alarm

- **Description**: retrieve the device alarm
- **Url**: /device/v2/alarm
- **Method**: post
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| deviceSn | String | Body | Y | device serial number |
| startTimestamp | Long | Body | Y | start timestamp, UTC timestamp,sec |
| endTimestamp | Long | Body | Y | end timestamp，UTC timestamp,sec.maximum 7 days |
| pageable | Object | Body | Y |  |
| pageSize | Integer | Body | Y | start page, start from 1 |
| size | Integer | Body | Y | page size, maximum 100 |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | Y | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| total | Long | Body | Y | total number |
| rows | Arrays | Body | Y |  |
| triggerTime | Long | Body | Y | trigger timestamp, UTC timestamp,sec |
| resolveTime | Long | Body | N | resolve timestamp，UTC timestamp,0 or null means happening |
| status | Integer | Body | Y | Status：<br>0:happening<br>1:recovered |
| alarmCode | String | Body | Y | alarm code ,see the device alarm code define as below |
| alarmFaultNum | String | Body | Y | alarm code number |
| alarmLevel | Integer | Body | Y | Level：<br>2：fault<br>1：warn<br>0：info |

## Example:

### Request

```json
{
"deviceSn":"SS32223421213"
"startTimestamp": 1740758400,
"endTimestamp": 1740844800,
"pageable":{"page":"1","pageSize":"50"}
}
```

### Response

```json
{
  "traceId": "dca496b14a1f4f05",
  "code": "200",
  "message": "success",
  "data": {
    "total": "1",
    "rows": [
      {
        "alarmCode": "GridOVP",
        "status": 0,
        "alarmLevel": 2,
        "triggerTime": "1740758400",
        "resolveTime": 0,
        "alarmFaultNum": "001"
      }
    ]
  }
}
```
