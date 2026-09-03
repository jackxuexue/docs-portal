---
title: Station Real Time Data
description: >-
  SOFARCloud OPEN API 2.0 - Station / Station Real Time Data.
---

# Station Real Time Data

## station real time data

- **Description**: retrieve the station real time data
- **Url**: /station/v2/realTime
- **Method**: post
- **Content-Type**: application/json

## Request Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | accessToken |
| stationId | Long | Body | Y | station id |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | N | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| stationId | Long | Body | Y | station id |
| dataTime | Long | Body | N | timestamp UTC timestamp sec. |
| stationTimezone | String | Body | N | station time zone.<br>such as: Asia/Shanghai |
| batteryPower | Double | Body | N | battery power<br>unit：kW |
| batterySoc | Double | Body | N | battery SOC |
| buyPower | Double | Body | N | grid import power<br>unit：kW |
| buyValue | Double | Body | N | today grid import value<br>unit：kWh |
| chargePower | Double | Body | N | charge power<br>unit：kW |
| chargeValue | Double | Body | N | today charge value<br>unit：kWh |
| disChargePower | Double | Body | N | discharge power<br>unit：kW |
| disChargeValue | Double | Body | N | today discharge value<br>unit：kWh |
| fullPowerHour | Double | Body | N | full power hours |
| generationPower | Double | Body | N | generation power<br>unit：kW |
| generationValue | Double | Body | N | today generation value<br>unit：kWh |
| gridPower | Double | Body | N | grid power<br>unit：kW |
| gridValue | Double | Body | N | today grid value<br>unit：kWh |
| income | Double | Body | N | income |
| installCapacity | Double | Body | N | install capacity<br>unit：kWp |
| monthBuyValue | Double | Body | N | month grid import<br>unit：kWh |
| monthChargeValue | Double | Body | N | month charge<br>unit：kWh |
| monthDisChargeValue | Double | Body | N | month discharge<br>unit：kWh |
| monthGenerationValue | Double | Body | N | month generation<br>unit：kWh |
| monthGridValue | Double | Body | N | month grid<br>unit：kWh |
| monthIncome | Double | Body | N | month income |
| monthUseValue | Double | Body | N | month consumption<br>unit: kWh |
| totalBuyValue | Double | Body | N | total grip import<br>unit：kWh |
| totalChargeValue | Double | Body | N | total charge<br>unit：kWh |
| totalDisChargeValue | Double | Body | N | total discharge<br>unit：kWh |
| totalGenerationValue | Double | Body | N | total generation<br>unit：kWh |
| totalGridValue | Double | Body | N | total grid<br>unit：kWh |
| totalIncome | Double | Body | N | total income |
| totalUseValue | Double | Body | N | total consumption<br>unit：kWh |
| usePower | Double | Body | N | consumption power<br>unit：kW |
| useValue | Double | Body | N | consumption<br>unit：kWh |
| wirePower | Double | Body | N | wire power<br>unit：kWh |
| yearBuyValue | Double | Body | N | year grip import<br>unit：kWh |
| yearChargeValue | Double | Body | N | year charge<br>unit：kWh |
| yearDisChargeValue | Double | Body | N | year discharge<br>unit：kWh |
| yearGenerationValue | Double | Body | N | year generation<br>unit：kWh |
| yearGridValue | Double | Body | N | year grid<br>unit：kWh |
| yearIncome | Double | Body | N | year income |
| yearUseValue | Double | Body | N | year consumption<br>单位：kWh |

## Example

### Request

```json
{
  "stationId": 238589
}
```

### Response

```json
{
  "traceId": "796080a7ed5843fe",
  "code": "200",
  "message": "success",
  "data": {
    "stationId": 238589,
    "generationPower": 0.5,
    "usePower": 0.69,
    "wirePower": -0.21,
    "gridPower": 0,
    "buyPower": -0.21,
    "chargePower": 0,
    "disChargePower": 0,
    "batteryPower": 0,
    "generationValue": 1.51,
    "useValue": 8.35,
    "gridValue": 0,
    "buyValue": 6.75,
    "chargeValue": 0.15,
    "disChargeValue": 0.08,
    "income": 0,
    "monthGenerationValue": 147.44,
    "monthUseValue": 199.33,
    "monthGridValue": 29.32,
    "monthBuyValue": 93.88,
    "monthChargeValue": 61.15,
    "monthDisChargeValue": 46.61,
    "monthIncome": 0,
    "yearGenerationValue": 255.46,
    "yearUseValue": 554.57,
    "yearGridValue": 38.55,
    "yearBuyValue": 357.18,
    "yearChargeValue": 109.58,
    "yearDisChargeValue": 79.03,
    "yearIncome": 0,
    "totalGenerationValue": 255.46,
    "totalUseValue": 554.57,
    "totalGridValue": 38.55,
    "totalBuyValue": 357.18,
    "totalChargeValue": 109.58,
    "totalDisChargeValue": 79.03
  }
}
```
