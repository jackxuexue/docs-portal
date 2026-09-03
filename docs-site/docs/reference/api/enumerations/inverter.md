---
title: Inverter
description: >-
  SOFARCloud OPEN API 2.0 - Reference Enumeration Definition / Inverter.
---

# Inverter

| Field | Unit | Description |
|---|---|---|
| inv$status |  | Inverter Status0：Waiting1：Checking2：On-grid3：Emergency power 4：Recoverable fault5：Permanent fault6：Upgrading7：self-charge8：SVG9：PID |
| inv$countdownTime | second | Power on countdown |
| inv$envTemp1 | ℃ | inverter temperature 1 |
| inv$envTemp2 | ℃ | inverter temperature 2 |
| inv$radiatorTemp1 | ℃ | radiator temperature 1 |
| inv$radiatorTemp2 | ℃ | radiator temperature 2 |
| inv$radiatorTemp3 | ℃ | radiator temperature 3 |
| inv$radiatorTemp4 | ℃ | radiator temperature 4 |
| inv$radiatorTemp5 | ℃ | radiator temperature 5 |
| inv$radiatorTemp6 | ℃ | radiator temperature 6 |
| inv$moduleTemp1 | ℃ | module temperature 1 |
| inv$moduleTemp2 | ℃ | module temperature 2 |
| inv$moduleTemp3 | ℃ | module temperature 3 |
| inv$moduleTemp4 | ℃ | module temperature 4 |
| inv$moduleTemp5 | ℃ | module temperature 5 |
| inv$moduleTemp6 | ℃ | module temperature 6 |
| inv$todayGenTime | minute | today generation time |
| inv$totalGenTime | minute | total generation time |
| inv$totalRunTime | minute | total run time |
| inv$insulationResistance | kΩ | insulation resistance |
| inv$gridFreq | Hz | grid frequency |
| inv$totalActivePower | kW | active power |
| inv$totalReactivePower | kW | reactive power |
| inv$totalApparentPower | kW | total apparent power |
| inv$totalPCCActivePower | kW | total PCC active power |
| inv$R_vol | V | R-phase grid voltage |
| inv$R_cur | A | R-phase current |
| inv$R_activePower | kW | R-phase active power |
| inv$R_reactivePower | kW | R-phase reactive power |
| inv$R_powerFactor | p.u. | R-phase power factor |
| inv$R_PCC_cur | A | R-phase PCC current |
| inv$R_PCC_activePower | kW | R-phase PCC active power |
| inv$R_PCC_ReactivePower | kW | R-phase PCC reactive power |
| inv$R_PCC_powerFactor | p.u. | R-phase PCC power factor |
| inv$S_vol | V | S-phase grid voltage |
| inv$S_cur | A | S-phase current |
| inv$S_activePower | kW | S-phase active power |
| inv$S_reacitvePower | kW | S-phase reactive power |
| inv$S_powerFactor | p.u. | S-phase power factor |
| inv$S_PCC_cur | A | S-phase PCC current |
| inv$S_PCC_activePower | kW | S-phase PCC active power |
| inv$S_PCC_ReactivePower | kW | S-phase PCC reactive power |
| inv$S_PCC_powerFactor | p.u. | S-phase PCC power factor |
|  |  |  |
| inv$T_vol | V | T-phase grid voltage |
| inv$T_cur | A | T-phase current |
| inv$T_activePower | kW | T-phase active power |
| inv$T_reacitvePower | kW | T-phase reactive power |
| inv$T_powerFactor | p.u. | T-phase power factor |
| inv$T_PCC_cur | A | T-phase PCC current |
| inv$T_PCC_activePower | kW | T-phase PCC active power |
| inv$T_PCC_ReactivePower | kW | T-phase PCC reactive power |
| inv$T_PCC_powerFactor | p.u. | T-phase PCC power factor |
|  |  |  |
| inv$totalLoadPower | kW | load power |
| inv$totalPowerFactor | p.u. | total power factor |
|  |  |  |
| inv$load_activePower | kW | load active power |
| inv$load_reacitvePower | kW | load reactive power |
| inv$load_apparentPower | kW | load apparent power |
| inv$load_powerFactor | Hz | load power factor |
|  |  |  |
| inv$load_R_vol | V | R-phase inverter output voltage​ |
| inv$load_R_cur | A | R-phase load current​ |
| inv$load_R_activePower | kW | R-phase load active power​ |
| inv$load_R_reacitvePower | kW | R-phase load reactive power |
| inv$load_R_apparentPower | kVA | R-phase load apparent power​ |
| inv$load_R_Ratio | p.u. | R-phase load crest factor(peak factor) |
| inv$R_E_Vol | V | R-phase emergency load voltage​ |
|  |  |  |
| inv$load_S_vol | V | S-phase inverter output voltage​ |
| inv$load_S_cur | A | S-phase load current​ |
| inv$load_S_activePower | kW | S-phase load active power​ |
| inv$load_S_reacitvePower | kW | S-phase load reactive power |
| inv$load_S_apparentPower | kVA | S-phase load apparent power​ |
| inv$load_S_Ratio | p.u. | S-phase load crest factor(peak factor) |
| inv$S_E_Vol | V | S-phase emergency load voltage​ |
|  |  |  |
| inv$load_T_vol | V | T-phase inverter output voltage​ |
| inv$load_T_cur | A | T-phase load current​ |
| inv$load_T_activePower | kW | T-phase load active power​ |
| inv$load_T_reacitvePower | kW | T-phase load reactive power |
| inv$load_T_apparentPower | kVA | T-phase load apparent power​ |
| inv$load_T_Ratio | p.u. | T-phase load crest factor(peak factor) |
| inv$T_E_Vol | V | T-phase emergency load voltage​ |
|  |  |  |
| inv$pv1Vol | V | PV1 voltage |
| inv$pv2Vol | V | PV2 voltage |
| inv$pv3Vol | V | PV3 voltage |
| inv$pv4Vol | V | PV4 voltage |
| inv$pv5Vol | V | PV5 voltage |
| inv$pv6Vol | V | PV6 voltage |
| inv$pv7Vol | V | PV7 voltage |
| inv$pv8Vol | V | PV8 voltage |
| inv$pv9Vol | V | PV9 voltage |
| inv$pv10Vol | V | PV10 voltage |
| inv$pv11Vol | V | PV11 voltage |
| inv$pv12Vol | V | PV12 voltage |
| inv$pv13Vol | V | PV13 voltage |
| inv$pv14Vol | V | PV14 voltage |
| inv$pv15Vol | V | PV15 voltage |
| inv$pv16Vol | V | PV16 voltage |
| inv$pv1Cur | A | PV1 current |
| inv$pv2Cur | A | PV2 current |
| inv$pv3Cur | A | PV3 current |
| inv$pv4Cur | A | PV4 current |
| inv$pv5Cur | A | PV5 current |
| inv$pv6Cur | A | PV6 current |
| inv$pv7Cur | A | PV7 current |
| inv$pv8Cur | A | PV8 current |
| inv$pv9Cur | A | PV9 current |
| inv$pv10Cur | A | PV10 current |
| inv$pv11Cur | A | PV11 current |
| inv$pv12Cur | A | PV12 current |
| inv$pv13Cur | A | PV13 current |
| inv$pv14Cur | A | PV14 current |
| inv$pv15Cur | A | PV15 current |
| inv$pv16Cur | A | PV16 current |
| inv$pv1Power | kW | PV1 power |
| inv$pv2Power | kW | PV2 power |
| inv$pv3Power | kW | PV3 power |
| inv$pv4Power | kW | PV4 power |
| inv$pv5Power | kW | PV5 power |
| inv$pv6Power | kW | PV6 power |
| inv$pv7Power | kW | PV7 power |
| inv$pv8Power | kW | PV8 power |
| inv$pv9Power | kW | PV9 power |
| inv$pv10Power | kW | PV10 power |
| inv$pv11Power | kW | PV11 power |
| inv$pv12Power | kW | PV12 power |
| inv$pv13Power | kW | PV13 power |
| inv$pv14Power | kW | PV14 power |
| inv$pv15Power | kW | PV15 power |
| inv$pv16Power | kW | PV16 power |
| inv$totalPvPower | kW | total PV power |
|  |  |  |
| inv$bat1Vol | V | battery 1 voltage |
| inv$bat2Vol | V | battery 2 voltage |
| inv$bat3Vol | V | battery 3 voltage |
| inv$bat4Vol | V | battery 4 voltage |
| inv$bat5Vol | V | battery 5 voltage |
| inv$bat6Vol | V | battery 6 voltage |
| inv$bat7Vol | V | battery 7 voltage |
| inv$bat8Vol | V | battery 8 voltage |
| inv$bat9Vol | V | battery 9 voltage |
| inv$bat10Vol | V | battery 10 voltage |
| inv$bat11Vol | V | battery 11 voltage |
| inv$bat12Vol | V | battery 12 voltage |
| inv$bat1Cur | A | battery 1 current |
| inv$bat2Cur | A | battery 2 current |
| inv$bat3Cur | A | battery 3 current |
| inv$bat4Cur | A | battery 4 current |
| inv$bat5Cur | A | battery 5 current |
| inv$bat6Cur | A | battery 6 current |
| inv$bat7Cur | A | battery 7 current |
| inv$bat8Cur | A | battery 8 current |
| inv$bat9Cur | A | battery 9 current |
| inv$bat10Cur | A | battery 10 current |
| inv$bat11Cur | A | battery 11 current |
| inv$bat12Cur | A | battery 12 current |
| inv$bat1Power | kW | battery 1 power |
| inv$bat2Power | kW | battery 2 power |
| inv$bat3Power | kW | battery 3 power |
| inv$bat4Power | kW | battery 4 power |
| inv$bat5Power | kW | battery 5 power |
| inv$bat6Power | kW | battery 6 power |
| inv$bat7Power | kW | battery 7 power |
| inv$bat8Power | kW | battery 8 power |
| inv$bat9Power | kW | battery 9 power |
| inv$bat10Power | kW | battery 10 power |
| inv$bat11Power | kW | battery 11 power |
| inv$bat12Power | kW | battery 12 power |
| inv$bat1EnvTemp | ℃ | battery 1 temperature |
| inv$bat2EnvTemp | ℃ | battery 2 temperature |
| inv$bat3EnvTemp | ℃ | battery 3 temperature |
| inv$bat4EnvTemp | ℃ | battery 4 temperature |
| inv$bat5EnvTemp | ℃ | battery 5 temperature |
| inv$bat6EnvTemp | ℃ | battery 6 temperature |
| inv$bat7EnvTemp | ℃ | battery 7 temperature |
| inv$bat8EnvTemp | ℃ | battery 8 temperature |
| inv$bat9EnvTemp | ℃ | battery 9 temperature |
| inv$bat10EnvTemp | ℃ | battery 10 temperature |
| inv$bat11EnvTemp | ℃ | battery 11 temperature |
| inv$bat12EnvTemp | ℃ | battery 12 temperature |
| inv$bat1SOC | % | battery 1 SOC |
| inv$bat2SOC | % | battery 2 SOC |
| inv$bat3SOC | % | battery 3 SOC |
| inv$bat4SOC | % | battery 4 SOC |
| inv$bat5SOC | % | battery 5 SOC |
| inv$bat6SOC | % | battery 6 SOC |
| inv$bat7SOC | % | battery 7 SOC |
| inv$bat8SOC | % | battery 8 SOC |
| inv$bat9SOC | % | battery 9 SOC |
| inv$bat10SOC | % | battery 10 SOC |
| inv$bat11SOC | % | battery 11 SOC |
| inv$bat12SOC | % | battery 12 SOC |
| inv$bat1SOH | % | battery 1 SOH |
| inv$bat2SOH | % | battery 2 SOH |
| inv$bat3SOH | % | battery 3 SOH |
| inv$bat4SOH | % | battery 4 SOH |
| inv$bat5SOH | % | battery 5 SOH |
| inv$bat6SOH | % | battery 6 SOH |
| inv$bat7SOH | % | battery 7 SOH |
| inv$bat8SOH | % | battery 8 SOH |
| inv$bat9SOH | % | battery 9 SOH |
| inv$bat10SOH | % | battery 10 SOH |
| inv$bat11SOH | % | battery 11 SOH |
| inv$bat12SOH | % | battery 12 SOH |
| inv$bat1Cycle | cycle | Battery 1 Charge Cycles |
| inv$bat2Cycle | cycle | Battery 2 Charge Cycles |
| inv$bat3Cycle | cycle | Battery 3 Charge Cycles |
| inv$bat4Cycle | cycle | Battery 4 Charge Cycles |
| inv$bat5Cycle | cycle | Battery 5 Charge Cycles |
| inv$bat6Cycle | cycle | Battery 6 Charge Cycles |
| inv$bat7Cycle | cycle | Battery 7 Charge Cycles |
| inv$bat8Cycle | cycle | Battery 8 Charge Cycles |
| inv$bat9Cycle | cycle | Battery 9 Charge Cycles |
| inv$bat10Cycle | cycle | Battery 10 Charge Cycles |
| inv$bat11Cycle | cycle | Battery 11 Charge Cycles |
| inv$bat12Cycle | cycle | Battery 12 Charge Cycles |
| inv$totalBatPower | kW | Battery total power |
| inv$avergeBatSOC | % | Battery average SOC |
| inv$avergeBatSOH | % | Battery average SOH |
| inv$batConnectNum | number | Battery connected number |
| bat$BatteryEnergyTotal | kWh | Battery capacity1 |
| BatConfig_Capacity | Ah | Battery capacity2 |
|  |  |  |
| inv$generationToday | kWh | Today generation |
| inv$generationTotal | kWh | Total generation |
| inv$loadTody | kWh | Today Consumption |
| inv$loadTotal | kWh | Total Consumption |
| inv$purchaseToday | kWh | Today grid import |
| inv$purchaseTotal | kWh | Total grid import |
| inv$sellingToday | kWh | Today grid export |
| inv$sellingTotal | kWh | Total grid export |
| inv$chargeToday | kWh | Today charge |
| inv$chargeTotal | kWh | Total charge |
| inv$dischargeToday | kWh | Today discharge |
| inv$dischargeTotal | kWh | Total discharge |
|  |  |  |
| inv$GFCI | mA | GFCI |
| inv$busVol | V | BUS Voltage |
|  |  |  |
| inv$group1ConvergeVol | V | Combiner Voltage-Group 1​​ |
| inv$group2ConvergeVol | V | Combiner Voltage-Group 2 |
| inv$group3ConvergeVol | V | Combiner Voltage-Group 3 |
| inv$group4ConvergeVol | V | Combiner Voltage-Group 4​ |
| inv$group5ConvergeVol | V | Combiner Voltage-Group 5​ |
| inv$group6ConvergeVol | V | Combiner Voltage-Group 6​ |
| inv$group7ConvergeVol | V | Combiner Voltage-Group 7​ |
| inv$group8ConvergeVol | V | Combiner Voltage-Group 8​ |
| inv$group9ConvergeVol | V | Combiner Voltage-Group 9​ |
| inv$group10ConvergeVol | V | Combiner Voltage-Group 10​ |
| inv$group11ConvergeVol | V | Combiner Voltage-Group 11​ |
| inv$group12ConvergeVol | V | Combiner Voltage-Group 12​ |
| inv$group13ConvergeVol | V | Combiner Voltage-Group 13​ |
| inv$group14ConvergeVol | V | Combiner Voltage-Group 14​ |
| inv$group15ConvergeVol | V | Combiner Voltage-Group 15​ |
| inv$group16ConvergeVol | V | Combiner Voltage-Group 16​ |
| inv$group1Branch1Cur | A | String Current-Group 1 Line 1 |
| inv$group2Branch1Cur | A | String Current-Group 2 Line 1 |
| inv$group3Branch1Cur | A | String Current-Group 3 Line 1 |
| inv$group4Branch1Cur | A | String Current-Group 4 Line 1 |
| inv$group5Branch1Cur | A | String Current-Group 5 Line 1 |
| inv$group6Branch1Cur | A | String Current-Group 6 Line 1 |
| inv$group7Branch1Cur | A | String Current-Group 7 Line 1 |
| inv$group8Branch1Cur | A | String Current-Group 8 Line 1 |
| inv$group9Branch1Cur | A | String Current-Group 9 Line 1 |
| inv$group10Branch1Cur | A | String Current-Group 10 Line 1 |
| inv$group11Branch1Cur | A | String Current-Group 11 Line 1 |
| inv$group12Branch1Cur | A | String Current-Group 12 Line 1 |
| inv$group13Branch1Cur | A | String Current-Group 13 Line 1 |
| inv$group14Branch1Cur | A | String Current-Group 14 Line 1 |
| inv$group15Branch1Cur | A | String Current-Group 15 Line 1 |
| inv$group16Branch1Cur | A | String Current-Group 16 Line 1 |
| inv$group1Branch2Cur | A | String Current-Group 1 Line 2 |
| inv$group2Branch2Cur | A | String Current-Group 2 Line 2 |
| inv$group3Branch2Cur | A | String Current-Group 3 Line 2 |
| inv$group4Branch2Cur | A | String Current-Group 4 Line 2 |
| inv$group5Branch2Cur | A | String Current-Group 5 Line 2 |
| inv$group6Branch2Cur | A | String Current-Group 6 Line 2 |
| inv$group7Branch2Cur | A | String Current-Group 7 Line 2 |
| inv$group8Branch2Cur | A | String Current-Group 8 Line 2 |
| inv$group9Branch2Cur | A | String Current-Group 9 Line 2 |
| inv$group10Branch2Cur | A | String Current-Group 10 Line 2 |
| inv$group11Branch2Cur | A | String Current-Group 11 Line 2 |
| inv$group12Branch2Cur | A | String Current-Group 12 Line 2 |
| inv$group13Branch2Cur | A | String Current-Group 13 Line 2 |
| inv$group14Branch2Cur | A | String Current-Group 14 Line 2 |
| inv$group15Branch2Cur | A | String Current-Group 15 Line 2 |
| inv$group16Branch2Cur | A | String Current-Group 16 Line 2 |
| inv$group1Branch3Cur | A | String Current-Group 1 Line 3 |
| inv$group2Branch3Cur | A | String Current-Group 2 Line 3 |
| inv$group3Branch3Cur | A | String Current-Group 3 Line 3 |
| inv$group4Branch3Cur | A | String Current-Group 4 Line 3 |
| inv$group5Branch3Cur | A | String Current-Group 5 Line 3 |
| inv$group6Branch3Cur | A | String Current-Group 6 Line 3 |
| inv$group7Branch3Cur | A | String Current-Group 7 Line 3 |
| inv$group8Branch3Cur | A | String Current-Group 8 Line 3 |
| inv$group9Branch3Cur | A | String Current-Group 9 Line 3 |
| inv$group10Branch3Cur | A | String Current-Group 10 Line 3 |
| inv$group11Branch3Cur | A | String Current-Group 11 Line 3 |
| inv$group12Branch3Cur | A | String Current-Group 12 Line 3 |
| inv$group13Branch3Cur | A | String Current-Group 13 Line 3 |
| inv$group14Branch3Cur | A | String Current-Group 14 Line 3 |
| inv$group15Branch3Cur | A | String Current-Group 15 Line 3 |
| inv$group16Branch3Cur | A | String Current-Group 16 Line 3 |
| inv$group1Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group2Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group3Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group4Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group5Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group6Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group7Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group8Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group9Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group10Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group11Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group12Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group13Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group14Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group15Branch4Cur | A | String Current-Group 16 Line 4 |
| inv$group16Branch4Cur | A | String Current-Group 16 Line 4 |
