---
title: Device statistics data
description: >-
  SOFARCloud OPEN API 2.0 - Device / Device statistics data.
---

# Device statistics data

- **Description**: retrieve the device real time data
- **Url**: /device/v2/statistics
- **Method**: post
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| deviceSn | String | Body | Y | device serial number |
| timeType | Integer | Body | Y | time type:<br>1: every day statistics within 30 days<br>2: every month statistics within 12 months<br>3: years |
| startTime | String | Body | Y | start time, the format depends on timeType value<br>1：yyyy-MM<br>2：yyyy<br>3：yyyy |
| endTime | String | Body | Y | end time, the format depends on timeType value<br>1：yyyy-MM<br>2：yyyy<br>3: yyyy |
| params | Arrays | Body | Y | the parameters list for what you want to get, see |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | Y | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| statistics | Arrays | Body | Y | statistics data list |
| paramName | String | Body | Y | parameter name, see the description as below |
| valueList | Arrays | Body | Y |  |
| dateTime | String | Body | Y | date time, the format depends on timeType value<br>1：yyyy-MM-dd<br>2：yyyy-MM<br>3：yyyy |
| value | String | Body | Y | value |

## Example:

### Request

```json
{
  "deviceSn": "SS32223421213",
  "timeType": 1,
  "startTime": "2025-03",
  "endTime": "2025-03",
  "params": [
    "generationEnergy"
  ]
}
```

### Response

```json
{
  "traceId": "796080a7ed5843fe",
  "code": "200",
  "message": "success",
  "data": {
    "statistics": [
      {
        "paramName": "generationEnergy",
        "valueList": [
          {
            "dateTime": "2025-03-01",
            "value": "83.04"
          },
          {
            "dateTime": "2025-03-02",
            "value": "81.28"
          }
        ]
      }
    ]
  }
}
```

Parameters description：

| Parameter | Description | Unit |
|---|---|---|
| generationEnergy | generation energy | kWh |
| consumptionEnergy | consumption energy | kWh |
| sellingEnergy | selling energy<br>(grid export energy) | kWh |
| purchaseEnergy | purchase Energy<br>(grid import energy) | kWh |
| chargeEnergy | charge energy | kWh |
| dischargeEnergy | discharge energy | kWh |
