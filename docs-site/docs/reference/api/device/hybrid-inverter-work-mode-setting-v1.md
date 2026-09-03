---
title: Hybrid Inverter Work Mode Setting-V1
description: >-
  SOFARCloud OPEN API 2.0 - Device / Hybrid Inverter Work Mode Setting-V1.
---

# Hybrid Inverter Work Mode Setting-V1

## Hybrid Inverter energy work mode setting

- **Description**: Hybrid Inverter energy work mode setting<br>support model:<br>HYD 3-6K-EP、ESI 3-6K-S1、ME 5-20KTL-3PH、HYD 5-20KTL-3PH
- **Url**: /deviceCmd/v2/energyStorage/set
- **Method**: post
- **Content-Type**: application/json

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| deviceSn | String | Body | Y | device serial number |
| callBackUrl | String | Body | Y | callback url,device response callback with http post example:<br>{<br>&quot;code&quot;: &quot;200&quot;,<br>&quot;message&quot;: &quot;&quot;,<br>&quot;requestId&quot;: &quot;123&quot;,<br>&quot;isSuccess&quot;: true,<br>&quot;content&quot;: &quot;0110111000010530&quot;<br>} |
| mode | Long | Body | Y | WorkMode<br>0：self-consumption<br>1：time of Use<br>2：timing<br>3：passive<br>4: peek shaving<br>5：off-grid<br>6：generator |
| params | Object | Body | N | parameters list |
| timeOfUse | array | Body | N | time of use mode |
| ruleNo | Integer | body | N | rule number:<br>0,1,2,3 |
| enable | Integer | body | N | enable<br>0:disable<br>1:enable |
| startTime | LocalTime | body | N | start charge time (format:&quot;hh:mm&quot;) |
| endTime | LocalTime | body | N | end time of charge (format:&quot;hh:mm&quot;) |
| stopSoc | Integer | body | N | stop SOC(range 30-100,unit:%) |
| chargePower | Integer | body | N | charge Power（W） |
| ruleStartDate | LocalTime | body | N | start time for this rule (format:&quot;:MM-dd&quot;) |
| ruleEndDate | LocalTime | body | N | end time for this rule(format:&quot;:MM-dd&quot;) |
| weekDay | Array | body | N | rule of day repeat(such as :[1,2,3,4,5,6,7]，1-7 is Monday to Sunday) |
| timing | array | Body | Y | Timing mode |
| ruleNo | Integer | body | N | rule number:<br>0,1,2,3 |
| chargeEnable | Integer | body | N | charge enable<br>0:disable<br>1:enable |
| dischargeEnable | Integer | body | N | discharge enable<br>0:disable<br>1:enable |
| chargeStartTime | LocalTime | body | N | charge start time(format :&quot;hh:mm&quot;) |
| chargeEndTime | LocalTime | body | N | charge end time (format:&quot;hh:mm&quot;) |
| dischargeStartTime | LocalTime | body | N | discharge start time(format:&quot;hh:mm&quot;) |
| dischargeEndTime | LocalTime | body | N | discharge end time(format:&quot;hh:mm&quot;) |
| chargePower | Integer | body | N | charge power（W） |
| dischargePower | Integer | body | N | discharge power（W） |
| passive | Object | Body | N | passive mode |
| type | Integer | body | N | type<br>1:charge<br>2:discharge<br>3:idle |
| chargePower | Integer | body | N | charge power（W） |
| peakShaving | Object | Body | Y | peak shaving mode |
| purchasePowerLimit | Integer | body | N | grid import max power（W） |
| offGrid | Object | Body | N | off grid mode1 |
| chargeSource | Integer | body | N | charge source<br>0: charge from grid<br>1: charge from generator |
| generatorMaxPower | Integer | body | N | max generator power（kW） |
| gridMaxPower | Integer | body | N | max grid power（kW） |
| generator | Object | Body | N | generator mode |
| maxPower | Integer | body | N | max generator power（kW） |

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| traceId | String | Body | Y | trace id for request |
| code | String | Body | Y | code（200: success） |
| message | String | Body | N | message for this response |
| data | Object | Body | Y |  |
| requestId | String | body | N | request id for callback |

## Example

### Request

```json
{
"callBackUrl": "http://google.com/xxxx",
"deviceSn": "sn123",
"mode": 1,
"params": {
"timeOfUse": [{ //mode=1
"ruleNo": 1,
"enable": 1,
"startTime": "00:00",
"endTime": "10:00",
"stopSoc": 1,
"chargePower": 1,
"ruleStartDate": "08-04",
"ruleEndDate": "08-04",
"weekDay": [1,2,3,4,5,6,7]
}],
"timing": [{ //mode=2
"ruleNo": 1, //0-3
"chargeEnable": 1,
"disChargeEnable": 1,
"chargeStartTime": "00:00",
"chargeEndTime": "10:00",
"dischargeStartTime": "11:00",
"dischargeEndTime": "20:00",
"chargePower": 1,
"dischargePower": 1
}],
,
"peakShaving": { //mode=4
"purchasePowerLimit": 1
},
"offGrid": { //mode=5
"chargeSource": 1,
"generatorMaxPower": 1,
"gridMaxPower": 1
},
"generator": { //mode=6
"maxPower": 1
}
}
}
```

### Response

```json
{
  "traceId": "8c5f73d2c95b4ab6",
  "code": "0",
  "message": "success",
  "data": {
    "requestId": "712618884892594176"
  }
}
```

### Callback

```json
{
"code": "200",
"message": ""
"requestId": "123",
"isSuccess": true,
"content": "0110111000010530"
}
```
