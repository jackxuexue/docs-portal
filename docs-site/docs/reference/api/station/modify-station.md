---
title: Modify Station
description: >-
  SOFARCloud OPEN API 2.0 - Station / Modify Station.
---

# Modify Station

## modify the station

- **Description**: modify the station
- **Url**: /station/v2/edit
- **Method**: post
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | accessToken |
| id | Long | Body | Y |  |
| stationName | String | Body | N | station name |
| stationPhoto | String | Body | N | station photo |
| stationAddress | String | Body | N | station address |
| latitude | Double | Body | N | latitude |
| longitude | Double | Body | N | longitude |
| stationType | Integer | Body | N | station type<br>1：residential<br>2：Commercial and Industrial<br>3：Utility |
| gridType | Integer | Body | N | system type：<br>1：Full Feed-In<br>2：Self-Consumption<br>3：PV storage System |
| installCapacity | Double | Body | N | install capacity(kWp) |
| productTime | String | Body | N | grid time（UTC Timestamp） |
| generationRevenue | Double | Body | N | generation revenue |
| monetaryUnit | String | Body | N | currency unit,such as RMB |
| totalCost | Double | Body | N | total cost |
| ownerName | String | Body | N | owner name |
| ownerId | Long | Body | N | owner account ID |
| ownerCorpId | Long | Body | N | owner corporation ID |
| servicePhoneNum | String | Body | N | installer mobile |
| managerName | String | Body | N | manager name |
| managerEmail | String | Body | N | manager email |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | N | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | N |  |

## Example

### Request

```json
{
  "id": 720313252520792064,
  "stationName": "2222222222",
  "stationPhoto": "https://xxxx.jpg",
  "stationAddress": "XXXX",
  "latitude": 22.314702,
  "longitude": 114.19581,
  "stationType": 1,
  "gridType": 1,
  "installCapacity": 1,
  "productTime": "1749608844413",
  "generationRevenue": 0,
  "monetaryUnit": "1",
  "totalCost": 1,
  "ownerName": "yy",
  "ownerId": 12321321231,
  "servicePhoneNum": "12345612312",
  "managerName": "yy",
  "managerEmail": "yy@mailto.plus"
}
```

### Response

```json
{
  "traceId": "250a2e7463944351",
  "code": "200",
  "message": "success"
}
```
