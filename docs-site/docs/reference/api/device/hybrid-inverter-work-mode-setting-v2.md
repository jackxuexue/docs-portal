---
title: Hybrid Inverter Work Mode Setting-V2
description: >-
  SOFARCloud OPEN API 2.0 - Device / Hybrid Inverter Work Mode Setting-V2.
---

# Hybrid Inverter Work Mode Setting-V2

## Hybrid Inverter energy work mode setting

- **Description**: Hybrid Inverter energy work mode setting<br>support model:<br>ESI-5/6/8/9.9/10/12K-T1,BT5000A,HYD-3/3.6/4/4.6/5/6/7/7.6/8K-LS1-PRO,HYD-29.9/30/40/49.9/50/60K-T1,HYD-5/6/6.5/8/9.9/10/12/15/20K-LT1,HYD-5/6/7.5/8/10/12/14/16K-LSP1,HYD-14.9/15/20/25/29.9/30K-T1,80-125KTLX-G4-ESS,ESI-8/9.99/10/12K-S1
- **Url**: /deviceCmd/v2/energyStorage/setV2
- **Method**: post
- **Content-Type**: application/json

## Response Parameters

| Parameter | Data Type | Type | Require | Description |
|---|---|---|---|---|
| Authorization | String | Header | Y | token |
| deviceSn | String | Body | Y | device serial number |
| callBackUrl | String | Body | Y | callback url,device response callback with http post example:<br>{<br>&quot;code&quot;: &quot;200&quot;,<br>&quot;message&quot;: &quot;&quot;,<br>&quot;requestId&quot;: &quot;123&quot;,<br>&quot;isSuccess&quot;: true,<br>&quot;content&quot;: &quot;0110111000010530&quot;<br>} |
| mode | Long | Body | Y | WorkMode<br>0：self-consumption<br>1：time of Use<br>3：passive<br>4: peek shaving<br>7：feed-in priority |
| params | Object | Body | N | parameters list |
| self-consumption | Object | Body | N | self-consumption mode |
| enable | Integer | body | N | enable<br>0:disable<br>1:enable |
| startTime | LocalTime | body | N | start charge time (format:&quot;hh:mm&quot;) |
| endTime | LocalTime | body | N | end time of charge (format:&quot;hh:mm&quot;) |
| stopSoc | Integer | body | N | stop SOC(range 30-100,unit:%) |
| chargePower | Integer | body | N | charge Power（W） |
| ruleStartDate | LocalTime | body | N | start time for this rule (format:&quot;:MM-dd&quot;) |
| ruleEndDate | LocalTime | body | N | end time for this rule(format:&quot;:MM-dd&quot;) |
| weekDay | Array | body | N | rule of day repeat(such as :[1,2,3,4,5,6,7]，1-7 is Monday to Sunday) |
| gridPurchase | Integer | body | N | Grid electricity purchase:<br>0:disable<br>1:enable |
| batterPriority | Integer | body | N | Battery priority enable:<br>0:disable<br>1:enable |
| targetSoc | Integer | body | N | target SOC(range 0-100,unit:%) |
| timeOfUse | array | Body | N | time of use mode |
| ruleNo | Integer | body | N | rule number:<br>0,1,2,3,4 |
| enable | Integer | body | N | enable<br>0:disable<br>1:enable |
| startTime | LocalTime | body | N | start charge time (format:&quot;hh:mm&quot;) |
| endTime | LocalTime | body | N | end time of charge (format:&quot;hh:mm&quot;) |
| stopSoc | Integer | body | N | stop SOC(range 30-100,unit:%) |
| chargePower | Integer | body | N | charge Power（W） |
| ruleStartDate | LocalTime | body | N | start time for this rule (format:&quot;:MM-dd&quot;) |
| ruleEndDate | LocalTime | body | N | end time for this rule(format:&quot;:MM-dd&quot;) |
| weekDay | Array | body | N | rule of day repeat(such as :[1,2,3,4,5,6,7]，1-7 is Monday to Sunday) |
| modeControl | Integer | body | N | modeControl:WorkMode<br>0.Forced charging<br>1.Forced discharge<br>2.peek shaving<br>3.feed-in priority<br>4.Self-generation and self-consumption |
| peakShaving | Object | Body | Y | peak shaving mode |
| chargePower | Integer | body | N | charge Power（W） |
| enable | Integer | body | N | enable<br>0:disable<br>1:enable |
| stopSoc | Integer | body | N | stop SOC(range 30-100,unit:%) |
| feedInPriority | Object | Body | N | feedInPriority mode |
| feedInPriority | Integer | body | N | feedInPriority power（W） |

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
"selfUse": { //mode=0
"enable": 1,
"startTime": "00:00",
"endTime": "10:00",
"stopSoc": 1,
"chargePower": 1,
"ruleStartDate": "08-04",
"ruleEndDate": "08-04",
"weekDay": [1,2,3,4,5,6,7],
"gridPurchase": 1,
"batteryPriority": 1,
"targetSoc": 100
},
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
"peakShaving": { //mode=4
"chargePower": 100,
"enable": 1,
"stopSoc": 100
},
"feedInPriority": { //mode=7
"feedInPriority": 100
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
