---
title: Create Station
description: >-
  SOFARCloud OPEN API 2.0 - Station / Create Station.
---

# Create Station

## create station

- **Description**: create a station in SofarCloud
- **Url**: /station/v2/create
- **Method**: post
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | accessToken |
| stationName | String | Body | N | station name |
| stationPhoto | String | Body | Y | station photo |
| stationAddress | String | Body | Y | station address |
| stationTimezone | String | Body | Y | station time zone |
| latitude | Double | Body | Y | latitude |
| longitude | Double | Body | Y | longitude |
| stationType | Integer | Body | Y | station type<br>1：residential<br>2：Commercial and Industrial<br>3：Utility |
| gridType | Integer | Body | Y | system type：<br>1：Full Feed-In<br>2：Self-Consumption<br>3：PV storage System |
| installCapacity | Double | Body | Y | install capacity（kWp) |
| productTime | String | Body | Y | grid time（UTC Timestamp） |
| generationRevenue | Double | Body | N | generation revenue |
| monetaryUnit | String | Body | N | currency unit,such as RMB |
| totalCost | Double | Body | N | total cost |
| ownerName | String | Body | N | owner name |
| ownerId | Long | Body | N | owner account ID |
| ownerCorpId | Long | Body | N | owner corporation ID |
| servicePhoneNum | String | Body | N | installer mobile |
| managerName | String | Body | N | manager name |
| managerEmail | String | Body | N | manager email |
| deviceInfo | Arrays | Body | Y | device info list |
| snNum | String | Body | Y | device serial number |
| deviceName | String | Body | N | device name |
| deviceType | Integer | Body | Y | Device Type：<br>1：Inverter<br>2：Logger |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | N | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | N |  |

## 示例

- **请求参数**: {<br>&quot;stationName&quot;: &quot;2222222222&quot;,<br>&quot;stationPhoto&quot;: &quot;https://xxxx.png&quot;,<br>&quot;stationAddress&quot;: &quot;XXXXX-station&quot;,<br>&quot;stationTimezone&quot;: &quot;PRC&quot;,<br>&quot;latitude&quot;: 22.314702,<br>&quot;longitude&quot;: 114.19581,<br>&quot;stationType&quot;: 1,<br>&quot;gridType&quot;: 1,<br>&quot;installCapacity&quot;: 1,<br>&quot;productTime&quot;: &quot;1749543874917&quot;,<br>&quot;generationRevenue&quot;: 0,<br>&quot;monetaryUnit&quot;: &quot;1&quot;,<br>&quot;totalCost&quot;: 1,<br>&quot;ownerName&quot;: &quot;yy@mailto.plus&quot;,<br>&quot;ownerId&quot;: 12321321231,<br>&quot;servicePhoneNum&quot;: &quot;12345612312&quot;,<br>&quot;managerName&quot;: &quot;yy@mailto.plus&quot;,<br>&quot;managerEmail&quot;: &quot;yy@mailto.plus&quot;,<br>&quot;deviceInfo&quot;: [<br>{<br>&quot;snNum&quot;: &quot;4117520360&quot;,<br>&quot;deviceType&quot;: 2,<br>&quot;deviceName&quot;: &quot;&quot;<br>}<br>]<br>}
- **返回值**: {<br>&quot;traceId&quot;: &quot;250a2e7463944351&quot;,<br>&quot;code&quot;: &quot;200&quot;,<br>&quot;message&quot;: &quot;success&quot;<br>}
