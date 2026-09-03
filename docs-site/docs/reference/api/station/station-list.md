---
title: Station List
description: >-
  SOFARCloud OPEN API 2.0 - Station / Station List.
---

# Station List

## station list

- **Description**: retrieve the station list which belongs to this account
- **Url**: /station/v2/page
- **Method**: post
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| name | String | Body | N | station name |
| pageable | Object | Body | N |  |
| page | Integer | Body | N | start page, start from 1 |
| pageSize | Integer | Body | N | page size, maximum 50 |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | N | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| total | Long | Body | Y | total number |
| rows | Arrays | Body | Y |  |
| id | Long | Body | Y | id |
| stationName | String | Body | Y | station name |
| stationPhoto | String | Body | Y | station photo |
| stationAddress | String | Body | Y | station address |
| stationTimezone | String | Body | Y | station timezone |
| stationState | Integer | Body | Y | station state：<br>1：normal<br>2：alarm<br>3：connecting<br>4: Unconnected |
| ownerName | String | Body | Y | owner name |
| ownerEmail | String | Body | Y | owner email |
| productTime | String | Body | Y | grid time（UTC Timestamp） |
| installCapacity | Double | Body | Y | install capacity（kWp) |
| stationType | Integer | Body | Y | station type<br>1：residential<br>2：Commercial and Industrial<br>3：Utility |
| gridType | Integer | Body | Y | system type：<br>1：Full Feed-In<br>2：Self-Consumption<br>3：PV storage System |
| latitude | Double | Body | Y | latitude |
| longitude | Double | Body | Y | longitude |
| generationRevenue | Double | Body | N | generation revenue |
| monetaryUnit | String | Body | N | currency unit,such as RMB |
| totalCost | Double | Body | N | total cost with building this station |
| servicePhoneNum | String | Body | N | installer mobile |
| managerName | String | Body | N | manager name |
| managerEmail | String | Body | N | manager email |
| stationCountry | String | Body | Y | station country |
| staionRatedPower | Double | Body | Y | station rated power（kW） |
| createTime | Long | Body | Y | create timestamp（UTC timestamp） |
| createBy | Long | Body | Y | create account id |

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
"traceId": "12b2acf91aff4246",
"code": "200",
"message": "success",
"data": {
"total":1,
"rows":[{
"id": "654335903946379264",
"stationName": "StationXXXXX",
"stationPhoto": "https://sofar-pic.oss-cn-shenzhen.aliyuncs.com/2023/11/14/a9894483976c4fad9ef5bc45e6e0d90e/plant_photos_2.jpg",
"stationAddress": "广东省深圳市宝安区xxx",
"longitude": 113.910166,
"latitude": 22.56856,
"stationTimezone": "PRC",
"stationType": 1,
"stationState": 4,
"gridType": 1,
"installCapacity": 320,
"monetaryUnit": "CNY",
"generationRevenue": 0,
"totalCost": 0,
"ownerName": "hwj",
"servicePhoneNum": "",
"createdBy": "654332149423542272",
"createTime": "1733813836",
"productTime": "1733813865",
"managerName": "",
"managerEmail": "",
"ownerEmail": "monitor@sofarsolar.com",
"stationCountry": "CN",
"staionRatedPower": 50
}]
}
```
