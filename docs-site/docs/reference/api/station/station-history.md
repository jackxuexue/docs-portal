---
title: Station History
description: >-
  SOFARCloud OPEN API 2.0 - Station / Station History.
---

# Station History

- **Description**: station history data
- **Url**: /station/v2/history
- **Method**: post
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | accessToken |
| stationId | Long | Body | Y | station id |
| time | String | Body | Y | start time format<br>when timeType value is<br>1： yyyy-MM-dd<br>2:  yyyy-MM<br>3:  yyyy<br>4:  yyyy |
| paramList | Arrays | Body | Y | parameter list, see define below |
| timeType | Integer | Body | Y | time type<br>1：frame data<br>2：date<br>3：month<br>4：year |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | N | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| rows | Arrays | Body | N |  |
| storageName | String | Body | Y | parameter name |
| unit | String | Body | Y | unit |
| timeSeries | String | Arrays | Y |  |
| dateTime | String | Body | Y | time format when timeType is<br>1： UTC timestamp<br>2:  yyyy-MM-dd<br>3:  yyyy-MM<br>4:  yyyy |
| value | String | Body | Y | values |

## Example

### Request

```json
{
  "stationId": 238589,
  "timeType": 1,
  "time": "2025-03-17",
  "paramList": [
    "generationPower"
  ]
}
```

### Response

```json
{
  "traceId": "250a2e7463944351",
  "code": "200",
  "message": "success",
  "data": {
    "rows": [
      {
        "storageName": "generationPower",
        "unit": "kW",
        "timeSeries": [
          {
            "dateTime": "1742162400",
            "value": "0.00"
          }
        ]
      }
    ]
  }
}
```

| TimeType | Parameter | Description |
|---|---|---|
| frame data | generationPower | generation power |
|  | gridPower | grid power |
|  | usePower | consumption power |
|  | chargePower | charge power |
| date,month,year data | generationValue | generation value |
|  | sellingValue | grid export value |
|  | purchaseValue | grid import value |
|  | useValue | consumption value |
|  | chargeValue | charge value |
|  | dischargeValue | discharge value |
