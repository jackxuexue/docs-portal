---
title: Alarm Code
description: >-
  SOFARCloud OPEN API 2.0 - Reference Enumeration Definition / Alarm Code.
---

# Alarm Code

| Alarm Code | Name | Number | Solution |
|---|---|---|---|
| INV_G3_GridOVP | Grid overvoltage | 001 | If the alarm occurs occasionally, it may be due to occasional abnormalities in the power grid. The inverter will automatically return to normal operation after the power grid returns to normal. If the alarm is frequent, check if the grid voltage/frequency is within the acceptable range. If they are normal, check the AC circuit breaker and AC wiring of the inverter. |
| INV_G3_GridUVP | Grid undervoltage | 002 | Please turn off the inverter DC switch, measure the inverter AC port voltage to see if it is normal, and check the AC wiring to see if there are any broken wires or short circuits. |
| INV_G3_GridOFP | Grid overfrequency | 003 | If the alarm occurs occasionally, it may be due to occasional abnormalities in the power grid. The inverter will automatically return to normal operation after the power grid returns to normal. If the alarm is frequent, check if the grid voltage/frequency is within the acceptable range. If they are normal, check the AC circuit breaker and AC wiring of the inverter. If the grid voltage/frequency is not within the acceptable range and the AC wiring is correct, but the alarms are repeated, Please contact maintainer to change the grid overunder-voltage and under-frequency protection values. |
| INV_G3_GridUFP | Grid underfrequency | 004 | If the alarm occurs occasionally, it may be due to occasional abnormalities in the power grid. The inverter will automatically return to normal operation after the power grid returns to normal. If the alarm is frequent, check if the grid voltage/frequency is within the acceptable range. If they are normal, check the AC circuit breaker and AC wiring of the inverter. If the grid voltage/frequency is not within the acceptable range and the AC wiring is correct, but the alarms are repeated, Please contact maintainer to change the grid overunder-voltage and under-frequency protection values. |
| INV_G3_GFCI | Leakage current fault | 005 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_OVRT | High penetration error | 006 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_LVRT | Low penetration error | 007 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_IslandFault | Island Error | 008 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_GridOVPInstant1 | Grid instantaneous overvoltage 1 | 009 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_GridOVPInstant2 | Grid instantaneous overvoltage 2 | 010 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_VGridLineFault | Grid line voltage error | 011 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_InvVoltFault | Inverter voltage error | 012 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_RefluxFault | Anti-reverse overload | 013 | Please check whether the wiring of the meter is normal, if there is no problem with the wiring, please contact the maintainer |
| INV_G3_VGridUnbalance | Grid voltage imbalance | 014 | Please turn off the inverter DC switch, measure the inverter AC port voltage to see if it is normal, and check the AC wiring to see if there are any broken wires or short circuits. |
| INV_G3_InvOVPInstant | Inverter instantaneous overvoltage | 015 | Please contact maintainer |
| INV_G3_GridPhaseMutation | Sudden phase change of power grid | 016 | Please contact maintainer |
| INV_G3_HwADErrIGrid | Grid current sampling error | 017 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault please contact maintainer |
| INV_G3_HwADErrDCI_AC | DCI sampling error (AC) | 018 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault please contact maintainer |
| INV_G3_HwADErrVGrid_DC | Network voltage sampling error (DC) | 019 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault please contact maintainer |
| INV_G3_HwADErrVGrid_AC | Network voltage sampling error (AC) | 020 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault please contact maintainer |
| INV_G3_HwGFCIFault_DC | GFCI sampling error (DC) | 021 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault please contact maintainer |
| INV_G3_HwGFCIFault_AC | GFCI sampling error (AC) | 022 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault please contact maintainer |
| INV_G3_HwADErrDCV | DCV sampling error | 023 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault please contact maintainer |
| INV_G3_HwADErrIdc | Input current sampling error | 024 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault please contact maintainer |
| INV_G3_HwADErrDCI_DC | DCI sampling error (DC) | 025 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault Please contact maintainer |
| INV_G3_HwADErrIdcBranch | Branch current sampling error | 026 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault Please contact maintainer |
| INV_G3_PVLowImpedance | PV-to-ground impedance is low | 027 | Please wait, after 1 hour still alarm please contact maintainer |
| INV_G3_PIDAbnormalOut | PID abnormal output | 028 | Please contact maintainer |
| INV_G3_ConsistentGFCI | Leakage current consistency error | 029 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault please contact maintainer |
| INV_G3_ConsistentVgrid | Network voltage consistency error | 030 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault please contact maintainer |
| INV_G3_ConsistentDCI | DCI consistency error | 031 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault Please contact maintainer |
| INV_G3_N-PE_fault | Neutral ground fault | 032 | Please contact maintainer |
| INV_G3_SpiCommFault_DC | SPI communication error (DC) | 033 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_SpiCommFault_AC | SPI communication error (AC) | 034 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_SChip_Fault | Chip Error (DC) | 035 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_MChip_Fault | Chip Error (AC) | 036 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_HwAuxPowerFault | Auxiliary power error | 037 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_InvSoftStartFail | Inverter soft start failed | 038 | Please turn off the inverter PV switch, wait for 5 minutes and then re-close the switch, if there is still a fault Please contact maintainer |
| INV_G3_ArcShutdownAlarm | Arc shutdown protection | 039 | Please switch off the inverter PV switch and check whether the PV wiring is normal or not. |
| INV_G3_LowLightChkFail | Low light detection failure | 040 | The light is weak, please wait for the light to increase and then observe, if there is still a problem, please contact the technical support |
| INV_G3_RelayFail | Relay detection failed | 041 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_IsoFault | Low insulation resistance | 042 | Please check the insulation resistance between the PV array and the ground (earth), if a short circuit occurs, the fault should be repaired promptly. |
| INV_G3_PEConnectFault | Grounding error | 043 | Please check that the AC output PE wire is grounded. |
| INV_G3_InputConfigError | Input mode setting error | 044 | Please check the inverter's input mode setting (parallel/independent mode). If incorrect, change the input mode. |
| INV_G3_CTDisconnect | CT Error | 045 | Please check that the CT is wired correctly. |
| INV_G3_ReversalConnect | Input reverse connection error | 046 | Please contact maintainer |
| INV_G3_ParallelFault | Parallel error | 047 | Please check whether the parallel line is normal, if the wiring is normal, Please contact maintainer |
| INV_G3_SNTypeFault | Wrong serial number | 048 | Please contact maintainer |
| INV_G3_TempErrBat | Battery temperature protection | 049 | Please make sure that the NTC cable of the built-in BMS battery is properly connected. Make sure the inverter is installed in a cool, well-ventilated place without direct sunlight. Make sure that the inverter is mounted vertically and that the ambient temperature is less than the upper temperature limit of the inverter. |
| INV_G3_TempErrHeatSink1 | Radiator 1 temperature protection | 050 | Please make sure that the NTC cable of the built-in BMS battery is properly connected. Make sure the inverter is installed in a cool, well-ventilated place without direct sunlight. Make sure that the inverter is mounted vertically and that the ambient temperature is less than the upper temperature limit of the inverter. |
| INV_G3_TempErrHeatSink2 | Radiator 2 temperature protection | 051 | Please make sure that the NTC cable of the built-in BMS battery is properly connected. Make sure the inverter is installed in a cool, well-ventilated place without direct sunlight. Make sure that the inverter is mounted vertically and that the ambient temperature is less than the upper temperature limit of the inverter. |
| INV_G3_TempErrHeatSink3 | Radiator 3 temperature protection | 052 | Please make sure that the NTC cable of the built-in BMS battery is properly connected. Make sure the inverter is installed in a cool, well-ventilated place without direct sunlight. Make sure that the inverter is mounted vertically and that the ambient temperature is less than the upper temperature limit of the inverter. |
| INV_G3_TempErrHeatSink4 | Radiator 4 temperature protection | 053 | Please make sure that the NTC cable of the built-in BMS battery is properly connected. Make sure the inverter is installed in a cool, well-ventilated place without direct sunlight. Make sure that the inverter is mounted vertically and that the ambient temperature is less than the upper temperature limit of the inverter. |
| INV_G3_TempErrHeatSink5 | Radiator 5 temperature protection | 054 | Please make sure that the NTC cable of the built-in BMS battery is properly connected. Make sure the inverter is installed in a cool, well-ventilated place without direct sunlight. Make sure that the inverter is mounted vertically and that the ambient temperature is less than the upper temperature limit of the inverter. |
| INV_G3_TempErrHeatSink6 | Radiator 6 temperature protection | 055 | Please make sure that the NTC cable of the built-in BMS battery is properly connected. Make sure the inverter is installed in a cool, well-ventilated place without direct sunlight. Make sure that the inverter is mounted vertically and that the ambient temperature is less than the upper temperature limit of the inverter. |
| INV_G3_TempErrEnv1 | Ambient temperature 1 protection | 057 | Please make sure that the NTC cable of the built-in BMS battery is properly connected. Make sure the inverter is installed in a cool, well-ventilated place without direct sunlight. Make sure that the inverter is mounted vertically and that the ambient temperature is less than the upper temperature limit of the inverter. |
| INV_G3_TempErrEnv2 | Ambient temperature 2 protection | 058 | Please make sure that the NTC cable of the built-in BMS battery is properly connected. Make sure the inverter is installed in a cool, well-ventilated place without direct sunlight. Make sure that the inverter is mounted vertically and that the ambient temperature is less than the upper temperature limit of the inverter. |
| INV_G3_TempErrInv1 | Module 1 temperature protection | 059 | Please make sure that the NTC cable of the built-in BMS battery is properly connected. Make sure the inverter is installed in a cool, well-ventilated place without direct sunlight. Make sure that the inverter is mounted vertically and that the ambient temperature is less than the upper temperature limit of the inverter. |
| INV_G3_TempErrInv2 | Module 2 temperature protection | 060 | Please make sure that the NTC cable of the built-in BMS battery is properly connected. Make sure the inverter is installed in a cool, well-ventilated place without direct sunlight. Make sure that the inverter is mounted vertically and that the ambient temperature is less than the upper temperature limit of the inverter. |
| INV_G3_TempErrInv3 | Module 3 temperature protection | 061 | Please make sure that the NTC cable of the built-in BMS battery is properly connected. Make sure the inverter is installed in a cool, well-ventilated place without direct sunlight. Make sure that the inverter is mounted vertically and that the ambient temperature is less than the upper temperature limit of the inverter. |
| INV_G3_TempDiffErrInv | The module temperature difference is too large | 062 | Please check whether the ambient temperature exceeds 50℃, whether the installation air duct is reserved space, whether the air duct is blocked, if there is no problem, Please contact maintainer. |
| INV_G3_BusRmsUnbalance | Bus RMS unbalance | 065 | Inverter fault, please turn inverter off and wait 5 minutes before turning inverter on. Check to see if the problem is resolved. If not, contact technical support |
| INV_G3_BusInstUnbalance | Bus instantaneous value unbalance | 066 | Inverter fault, please turn inverter off and wait 5 minutes before turning inverter on. Check to see if the problem is resolved. If not, contact technical support |
| INV_G3_BusUVP | Bus undervoltage during grid connection | 067 | Inverter fault, please turn inverter off and wait 5 minutes before turning inverter on. Check to see if the problem is resolved. If not, contact technical support |
| INV_G3_BusZVP | Busbar low voltage | 068 | Inverter fault, please turn inverter off and wait 5 minutes before turning inverter on. Check to see if the problem is resolved. If not, contact technical support |
| INV_G3_PVOVP | PV overvoltage | 069 | Please check if the PV string voltage (Voc) is higher than the maximum input voltage of the inverter. If so, adjust the number of series PV modules and reduce the PV string voltage to fit the input voltage range of the inverter. After correction, the inverter will automatically return to normal. |
| INV_G3_BatOVP | Battery overvoltage | 070 | Please check that the battery over-voltage setting does not match the battery specification. |
| INV_G3_LLCBusOVP | LLCBus overvoltage protection | 071 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_SwBusRmsOVP | Busbar Rms software overvoltage | 072 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_SwBusIOVP | Busbar instantaneous software overvoltage | 073 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_FlyingCapOVP | Flying capacitor overvoltage protection | 074 | Please contact maintainer |
| INV_G3_FlyingCapUVP | Flying capacitor undervoltage protection | 075 | Please contact maintainer |
| INV_G3_PVUVP | PV undervoltage | 076 | Please contact maintainer |
| INV_G3_SwBatOCP | Battery overcurrent software protection | 081 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_DciOCP | Dci over current protection | 082 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_SwIOCP | Output transient current protection | 083 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_SwBuckBoostOCP | BckBst software overcurrent | 084 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_SwAcRmsOCP | Inverter Rms current protection | 085 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_SwPvOCPInstant | PV instantaneous software overcurrent | 086 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_IpvUnbalance | Unbalanced current in parallel PV | 087 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_IacUnbalance | Output current imbalance | 088 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_SwPvOCP | PV software overcurrent protection | 089 | Please turn off the inverter DC switch, measure the inverter AC port voltage to see if it is normal, and check the AC wiring to see if there are any broken wires or short circuits. |
| INV_G3_IbalanceOCP | Balance circuit overcurrent protection | 090 | Please turn off the inverter DC switch, measure the inverter AC port voltage to see if it is normal, and check the AC wiring to see if there are any broken wires or short circuits. |
| INV_G3_ResOver | Resonance protection | 091 | Line inductance too large, Please contact maintainer |
| INV_G3_SwAcCBCFault | Software wave-by-wave current limiting protection | 092 | Sudden changes in grid voltage, please check whether the local grid is normal or not. |
| INV_G3_SwPvBranchOCP | PV branch software overcurrent (enabled by default) | 093 | Please contact maintainer |
| INV_G3_HwLLCBusOVP | LLC busbar hardware overvoltage | 097 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_HwBusOVP | Inverter bus hardware overvoltage | 098 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_HwBuckBoostOCP | BckBst hardware overcurrent | 099 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_HwBatOCP | Battery hardware overcurrent | 100 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_HwPVOCP | PV hardware overcurrent | 102 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_HwACOCP | AC output hardware overcurrent | 103 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_HwDiffOCP | Hardware differential overcurrent | 104 | Please contact maintainer |
| INV_G3_MeterCommFault | Meter communication error | 105 | Please check whether the wiring of the meter is normal, if there is no meter, please turn off the feed-in limit function |
| INV_G3_SNMachineFault | Wrong serial number model | 106 | Please contact maintainer |
| INV_G3_HwVerError | Hardware version mismatch | 107 | Please contact maintainer |
| INV_G3_GeneratorOverload | Generator overload protection | 109 | Please contact maintainer |
| INV_G3_Overload1 | Overload protection 1 | 110 | Please check that the inverter is not operating in an overload condition. |
| INV_G3_Overload2 | Overload protection 2 | 111 | Please check that the inverter is not operating in an overload condition. |
| INV_G3_Overload3 | Overload protection 3 | 112 | Please check that the inverter is not operating in an overload condition. |
| INV_G3_OverTempDerating | Over temperature load reduction | 113 | Please make sure the inverter is installed in a cool, well-ventilated place without direct sunlight. Make sure that the inverter is mounted vertically and that the ambient temperature is less than the upper temperature limit of the inverter. |
| INV_G3_FreqDerating | Frequency load shedding | 114 | Please make sure that the grid frequency and voltage are within acceptable ranges. |
| INV_G3_FreqLoading | Frequency loading | 115 | Please make sure that the grid frequency and voltage are within acceptable ranges. |
| INV_G3_VoltDerating | Voltage drop | 116 | Please make sure that the grid frequency and voltage are within acceptable ranges. |
| INV_G3_VoltLoading | Voltage loading | 117 | Please make sure that the grid frequency and voltage are within acceptable ranges. |
| INV_G3_LowTempDerating | Low temperature load reduction | 118 | Please contact maintainer |
| INV_G3_SpdFail_DC | Lightning protection fault (DC) | 121 | Please contact maintainer |
| INV_G3_SpdFail_AC | Lightning protection fault (AC) | 122 | Please contact maintainer |
| INV_G3_BatLow | Low battery | 124 | Please check if the battery voltage is too low. |
| INV_G3_BatDchgProhibit | Battery discharge warning | 125 | Please check if the battery voltage is too low. |
| INV_G3_BatReversalConnect | Battery input reverse connection protection | 128 | Please check if the battery voltage is too low. |
| INV_G3_PermHwAcOCP | AC hardware overcurrent fault | 129 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_PermBusOVP | Bus overvoltage fault | 130 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_PermHwBusOVP | Bus hardware overvoltage fault | 131 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_PermIpvUnbalance | PV uneven current fault | 132 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_PermEPSBatOCP | EPS battery overcurrent fault | 133 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_PermAcOCPInstant | Output instantaneous overcurrent fault | 134 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_PermIacUnbalance | AC current unbalance fault | 135 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_PermInvStartFail | Inverter soft start failure | 136 | Please contact maintainer |
| INV_G3_PermInCfgError | Input mode setting failure | 137 | Please check the inverter's PV input mode setting (parallel/independent mode) and change the PV input mode if it is incorrect. |
| INV_G3_PermDCOCPInstant | Input overcurrent fault | 138 | Please check the inverter's PV input mode setting (parallel/independent mode) and change the PV input mode if it is incorrect. |
| INV_G3_PermHwDCOCP | Input hardware overcurrent fault | 139 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_PermRelayFail | Relay permanent failure | 140 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_PermBusUnbalance | Bus imbalance fault | 141 | Inverter fault, please turn inverter off, wait 5 minutes and turn inverter back on. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_PermSpdFail_DC | Lightning protection fault (DC) | 142 | Please contact maintainer |
| INV_G3_PermSpdFail_AC | Lightning protection fault (AC) | 143 | Please contact maintainer |
| INV_G3_PermGridRlyFail | Grid relay failure | 144 | Please turn off the inverter and check whether the three-phase voltage is short-circuited to ground, if there is no problem, please contact the technical support |
| INV_G3_USBFault | USB Failure | 145 | Please check the USB port of the inverter. |
| INV_G3_WifiFault | WIFI FAILURE | 146 | Please check the WIFI connection of the inverter. |
| INV_G3_BluetoothFault | Bluetooth failure | 147 | Please check the Bluetooth connection of the inverter. |
| INV_G3_RTCFault | RTC clock failure | 148 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_CommEEPROMFault | Communication board EEPROM error | 149 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_FlashFault | Communication board FLASH error | 150 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_BatPartOffline | Battery Partially Dropped | 151 | Please contact maintainer |
| INV_G3_SafetyVerFault | Safety version error | 152 | Please contact maintainer |
| INV_G3_SCILose_DC | SCI Error (DC) | 153 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_SCILose_AC | SCI Error (AC) | 154 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_SCILose_Fuse | SCI Error (Fuse) | 155 | Internal fault, please turn the inverter off and wait 5 minutes before turning the inverter back on. Check to see if the problem is resolved. If not, contact technical support. |
| INV_G3_SoftVerError | Inconsistent software versions | 156 | Please contact maintainer for upgraded software. |
| INV_G3_BMS1CommFault | Lithium battery 1 communication failure | 157 | Please make sure the battery you are using is compatible with the inverter. CAN communication is recommended. Check for faulty communication cables or communication ports between the battery and the inverter. |
| INV_G3_BMS2CommFault | Lithium battery 2 communication failure | 158 | Please make sure the battery you are using is compatible with the inverter. CAN communication is recommended. Check for faulty communication cables or communication ports between the battery and the inverter. |
| INV_G3_BMS3CommFault | Lithium battery 3 communication failure | 159 | Please make sure the battery you are using is compatible with the inverter. CAN communication is recommended. Check for faulty communication cables or communication ports between the battery and the inverter. |
| INV_G3_BMS4CommFault | Lithium battery 4 communication failure | 160 | Please make sure the battery you are using is compatible with the inverter. CAN communication is recommended. Check for faulty communication cables or communication ports between the battery and the inverter. |
| INV_G3_ForceShutdown | Force shutdown | 161 | The inverter has been subjected to a forced shutdown. |
| INV_G3_RemoteShutdown | Remote shutdown | 162 | The inverter is performing a remote shutdown. |
| INV_G3_Drms0Shutdown | Drms0 shutdown | 163 | Drms0 shutdown is executed on the inverter. |
| INV_G3_PSCommFault | Power station communication failure shutdown | 164 | Please contact maintainer |
| INV_G3_FanFault1 | Fan 1 failure | 169 | Please check if the fan 1 of the inverter is rotating normally. |
| INV_G3_FanFault2 | Fan 2 failure | 170 | Please check if the fan 2 of the inverter is rotating normally. |
| INV_G3_FanFault3 | Fan 3 failure | 171 | Please check if the fan 3 of the inverter is rotating normally. |
| INV_G3_FanFault4 | Fan 4 failure | 172 | Please check if the fan 4 of the inverter is rotating normally. |
| INV_G3_FanFault5 | Fan 5 failure | 173 | Please check if the fan 5 of the inverter is rotating normally. |
| INV_G3_FanFault6 | Fan 6 failure | 174 | Please check if the fan 6 of the inverter is rotating normally. |
| INV_G3_FanFault7 | Fan 7 failure | 175 | Check that the inverter fan 7 is rotating properly. |
| INV_G3_BMS_OVP | BMS overvoltage protection | 177 | Lithium battery internal fault, turn off the inverter and lithium battery, wait 5 minutes and then turn on the inverter and lithium battery. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_BMS_UVP | BMS undervoltage protection | 178 | Lithium battery internal fault, turn off the inverter and lithium battery, wait 5 minutes and then turn on the inverter and lithium battery. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_BMS_OTP | BMS high temperature protection | 179 | Lithium battery internal fault, turn off the inverter and lithium battery, wait 5 minutes and then turn on the inverter and lithium battery. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_BMS_UTP | BMS low temperature protection | 180 | Lithium battery internal fault, turn off the inverter and lithium battery, wait 5 minutes and then turn on the inverter and lithium battery. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_BMS_OCP | BMS overcurrent protection | 181 | Lithium battery internal fault, turn off the inverter and lithium battery, wait 5 minutes and then turn on the inverter and lithium battery. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_BMS_Short | BMS short circuit protection | 182 | Lithium battery internal fault, turn off the inverter and lithium battery, wait 5 minutes and then turn on the inverter and lithium battery. Check if the problem is resolved. If not, contact technical support. |
| INV_G3_BMS_VerFault | Inconsistent BMS versions | 183 | Please contact maintainer |
| INV_G3_BMS_CAN_VerFault | BMSCAN version inconsistency | 184 | Please contact maintainer |
| INV_G3_BMS_CAN_VerLow | BMS_CAN version is too low | 185 | Please contact maintainer |
| INV_G3_BatDischargeHTP | Battery discharge over-temperature protection | 186 | Please contact maintainer |
| INV_G3_BatDischargeLTP | Battery discharge low temperature protection | 187 | Please contact maintainer |
| INV_G3_BatChargeHTP | Battery charging over-temperature protection | 188 | Please contact maintainer |
| INV_G3_AFCICommLose | Arc equipment communication failure | 189 | Please contact maintainer |
| INV_G3_BatChargeLTP | Battery charging low temperature protection | 190 | Please contact maintainer |
| INV_G3_PID_Output_Fail | PID repair failed | 191 | Please contact maintainer |
| INV_G3_PLC_Com_Fail | PLC module heartbeat lost | 192 | Please contact maintainer |
| INV_G3_StrFuseALM1-1 | String fuse open circuit 1-1 | 193 | Please contact maintainer |
| INV_G3_StrFuseALM1-2 | String fuse open circuit 1-2 | 194 | Please contact maintainer |
| INV_G3_StrFuseALM2-1 | String fuse open circuit 2-1 | 195 | Please contact maintainer |
| INV_G3_StrFuseALM2-2 | String fuse open circuit 2-2 | 196 | Please contact maintainer |
| INV_G3_StrFuseALM3-1 | String fuse open circuit 3-1 | 197 | Please contact maintainer |
| INV_G3_StrFuseALM3-2 | String fuse open circuit 3-2 | 198 | Please contact maintainer |
| INV_G3_StrFuseALM4-1 | String fuse open circuit 4-1 | 199 | Please contact maintainer |
| INV_G3_StrFuseALM4-2 | String fuse open circuit 4-2 | 200 | Please contact maintainer |
| INV_G3_StrFuseALM5-1 | String fuse open circuit 5-1 | 201 | Please contact maintainer |
| INV_G3_StrFuseALM5-2 | String fuse open circuit 5-2 | 202 | Please contact maintainer |
| INV_G3_StrFuseALM6-1 | String fuse open circuit 6-1 | 203 | Please contact maintainer |
| INV_G3_StrFuseALM6-2 | String fuse open circuit 6-2 | 204 | Please contact maintainer |
| INV_G3_StrFuseALM7-1 | String fuse open circuit 7-1 | 205 | Please contact maintainer |
| INV_G3_StrFuseALM7-2 | String fuse open circuit 7-2 | 206 | Please contact maintainer |
| INV_G3_StrFuseALM8-1 | String fuse open circuit 8-1 | 207 | Please contact maintainer |
| INV_G3_StrFuseALM8-2 | String fuse open circuit 8-2 | 208 | Please contact maintainer |
| INV_G3_StrFuseALM9-1 | String fuse open circuit 9-1 | 209 | Please contact maintainer |
| INV_G3_StrFuseALM9-2 | String fuse open circuit 9-2 | 210 | Please contact maintainer |
| INV_G3_StrFuseALM10-1 | String fuse open circuit 10-1 | 211 | Please contact maintainer |
| INV_G3_StrFuseALM10-2 | String fuse open circuit 10-2 | 212 | Please contact maintainer |
| INV_G3_StrFuseALM11-1 | String fuse open circuit 11-1 | 213 | Please contact maintainer |
| INV_G3_StrFuseALM11-2 | String fuse open circuit 11-2 | 214 | Please contact maintainer |
| INV_G3_StrFuseALM12-1 | String fuse open circuit 12-1 | 215 | Please contact maintainer |
| INV_G3_StrFuseALM12-2 | String fuse open circuit 12-2 | 216 | Please contact maintainer |
| INV_G3_StrFuseALM13-1 | String fuse open circuit 13-1 | 217 | Please contact maintainer |
| INV_G3_StrFuseALM13-2 | String fuse open circuit 13-2 | 218 | Please contact maintainer |
| INV_G3_StrFuseALM14-1 | String fuse open circuit 14-1 | 219 | Please contact maintainer |
| INV_G3_StrFuseALM14-2 | String fuse open circuit 14-2 | 220 | Please contact maintainer |
| INV_G3_StrFuseALM15-1 | String fuse open circuit 15-1 | 221 | Please contact maintainer |
| INV_G3_StrFuseALM15-2 | String fuse open circuit 15-2 | 222 | Please contact maintainer |
| INV_G3_StrFuseALM16-1 | String fuse open circuit 16-1 | 223 | Please contact maintainer |
| INV_G3_StrFuseALM16-2 | String fuse open circuit 16-2 | 224 | Please contact maintainer |
| INV_G3_InputFuseALM0 | Input fuse open circuit 0 | 225 | Please contact maintainer |
| INV_G3_InputFuseALM1 | Input fuse open circuit 1 | 226 | Please contact maintainer |
| INV_G3_InputFuseALM2 | Input fuse open circuit 2 | 227 | Please contact maintainer |
| INV_G3_InputFuseALM3 | Input fuse open circuit 3 | 228 | Please contact maintainer |
| INV_G3_InputFuseALM4 | Input fuse open circuit 4 | 229 | Please contact maintainer |
| INV_G3_InputFuseALM5 | Input fuse open circuit 5 | 230 | Please contact maintainer |
| INV_G3_InputFuseALM6 | Input fuse open circuit 6 | 231 | Please contact maintainer |
| INV_G3_InputFuseALM7 | Input fuse open circuit 7 | 232 | Please contact maintainer |
| INV_G3_InputFuseALM8 | Input fuse open circuit 8 | 233 | Please contact maintainer |
| INV_G3_InputFuseALM9 | Input fuse open circuit 9 | 234 | Please contact maintainer |
| INV_G3_InputFuseALM10 | Input fuse open circuit 10 | 235 | Please contact maintainer |
| INV_G3_InputFuseALM11 | Input fuse open circuit 11 | 236 | Please contact maintainer |
| INV_G3_InputFuseALM12 | Input fuse open circuit 12 | 237 | Please contact maintainer |
| INV_G3_InputFuseALM13 | Input fuse open circuit 13 | 238 | Please contact maintainer |
| INV_G3_InputFuseALM14 | Input fuse open circuit 14 | 239 | Please contact maintainer |
| INV_G3_InputFuseALM15 | Input fuse open circuit 15 | 240 | Please contact maintainer |
| INV_G3_CombinerOVGp1 | Convergence OVGP fault 1 | 241 | Please contact maintainer |
| INV_G3_CombinerOVGp2 | Convergence OVGP fault 2 | 242 | Please contact maintainer |
| INV_G3_CombinerOVGp3 | Convergence OVGP fault 3 | 243 | Please contact maintainer |
| INV_G3_CombinerOVGp4 | Convergence OVGP fault 4 | 244 | Please contact maintainer |
| INV_G3_CombinerOVGp5 | Convergence OVGP fault 5 | 245 | Please contact maintainer |
| INV_G3_CombinerOVGp6 | Convergence OVGP fault 6 | 246 | Please contact maintainer |
| INV_G3_CombinerOVGp7 | Convergence OVGP fault 7 | 247 | Please contact maintainer |
| INV_G3_CombinerOVGp8 | Convergence OVGP fault 8 | 248 | Please contact maintainer |
| INV_G3_CombinerOVGp9 | Convergence OVGP fault 9 | 249 | Please contact maintainer |
| INV_G3_CombinerOVGp10 | Convergence OVGP fault 10 | 250 | Please contact maintainer |
| INV_G3_CombinerOVGp11 | Convergence OVGP fault 11 | 251 | Please contact maintainer |
| INV_G3_CombinerOVGp12 | Convergence OVGP fault 12 | 252 | Please contact maintainer |
| INV_G3_CombinerOVGp13 | Convergence OVGP fault 13 | 253 | Please contact maintainer |
| INV_G3_CombinerOVGp14 | Convergence OVGP fault 14 | 254 | Please contact maintainer |
| INV_G3_CombinerOVGp15 | Convergence OVGP fault 15 | 255 | Please contact maintainer |
| INV_G3_CombinerOVGp16 | Convergence OVGP fault 16 | 256 | Please contact maintainer |
| INV_G3_CombinerUVGp1 | Confluence UVGP fault 1 | 257 | Please contact maintainer |
| INV_G3_CombinerUVGp2 | Confluence UVGP fault 2 | 258 | Please contact maintainer |
| INV_G3_CombinerUVGp3 | Confluence UVGP fault 3 | 259 | Please contact maintainer |
| INV_G3_CombinerUVGp4 | Confluence UVGP fault 4 | 260 | Please contact maintainer |
| INV_G3_CombinerUVGp5 | Confluence UVGP fault 5 | 261 | Please contact maintainer |
| INV_G3_CombinerUVGp6 | Confluence UVGP fault 6 | 262 | Please contact maintainer |
| INV_G3_CombinerUVGp7 | Confluence UVGP fault 7 | 263 | Please contact maintainer |
| INV_G3_CombinerUVGp8 | Confluence UVGP fault 8 | 264 | Please contact maintainer |
| INV_G3_CombinerUVGp9 | Confluence UVGP fault 9 | 265 | Please contact maintainer |
| INV_G3_CombinerUVGp10 | Confluence UVGP fault 10 | 266 | Please contact maintainer |
| INV_G3_CombinerUVGp11 | Confluence UVGP fault 11 | 267 | Please contact maintainer |
| INV_G3_CombinerUVGp12 | Confluence UVGP fault 12 | 268 | Please contact maintainer |
| INV_G3_CombinerUVGp13 | Confluence UVGP fault 13 | 269 | Please contact maintainer |
| INV_G3_CombinerUVGp14 | Confluence UVGP fault 14 | 270 | Please contact maintainer |
| INV_G3_CombinerUVGp15 | Confluence UVGP fault 15 | 271 | Please contact maintainer |
| INV_G3_CombinerUVGp16 | Confluence UVGP fault 16 | 272 | Please contact maintainer |
| INV_G3_CombinerOC1 | Convergence OC fault 1 | 273 | Please contact maintainer |
| INV_G3_CombinerOC2 | Convergence OC fault 2 | 274 | Please contact maintainer |
| INV_G3_CombinerOC3 | Convergence OC fault 3 | 275 | Please contact maintainer |
| INV_G3_CombinerOC4 | Convergence OC fault 4 | 276 | Please contact maintainer |
| INV_G3_CombinerOC5 | Convergence OC fault 5 | 277 | Please contact maintainer |
| INV_G3_CombinerOC6 | Convergence OC fault 6 | 278 | Please contact maintainer |
| INV_G3_CombinerOC7 | Convergence OC fault 7 | 279 | Please contact maintainer |
| INV_G3_CombinerOC8 | Convergence OC fault 8 | 280 | Please contact maintainer |
| INV_G3_CombinerOC9 | Convergence OC fault 9 | 281 | Please contact maintainer |
| INV_G3_CombinerOC10 | Converging OC fault 10 | 282 | Please contact maintainer |
| INV_G3_CombinerOC11 | Convergence OC fault 11 | 283 | Please contact maintainer |
| INV_G3_CombinerOC12 | Convergence OC fault 12 | 284 | Please contact maintainer |
| INV_G3_CombinerOC13 | Convergence OC fault 13 | 285 | Please contact maintainer |
| INV_G3_CombinerOC14 | Convergence OC fault 14 | 286 | Please contact maintainer |
| INV_G3_CombinerOC15 | Convergence OC fault 15 | 287 | Please contact maintainer |
| INV_G3_CombinerOC16 | Convergence OC fault 16 | 288 | Please contact maintainer |
| INV_G3_CombinerOC17 | Convergence OC fault 17 | 289 | Please contact maintainer |
| INV_G3_CombinerOC18 | Convergence OC fault 18 | 290 | Please contact maintainer |
| INV_G3_CombinerOC19 | Convergence OC fault 19 | 291 | Please contact maintainer |
| INV_G3_CombinerOC20 | Convergence OC fault 20 | 292 | Please contact maintainer |
| INV_G3_CombinerOC21 | Convergence OC fault 21 | 293 | Please contact maintainer |
| INV_G3_CombinerOC22 | Convergence OC fault 22 | 294 | Please contact maintainer |
| INV_G3_CombinerOC23 | Convergence OC fault 23 | 295 | Please contact maintainer |
| INV_G3_CombinerOC24 | Convergence OC fault 24 | 296 | Please contact maintainer |
| INV_G3_CombinerOC25 | Convergence OC fault 25 | 297 | Please contact maintainer |
| INV_G3_CombinerOC26 | Convergence OC fault 26 | 298 | Please contact maintainer |
| INV_G3_CombinerOC27 | Convergence OC fault 27 | 299 | Please contact maintainer |
| INV_G3_CombinerOC28 | Convergence OC fault 28 | 300 | Please contact maintainer |
| INV_G3_CombinerOC29 | Convergence OC fault 29 | 301 | Please contact maintainer |
| INV_G3_CombinerOC30 | Convergence OC fault 30 | 302 | Please contact maintainer |
| INV_G3_CombinerOC31 | Convergence OC fault 31 | 303 | Please contact maintainer |
| INV_G3_CombinerOC32 | Convergence OC fault 32 | 304 | Please contact maintainer |
| INV_G3_CombinerRefluxFault1 | Confluence anti-backflow fault 1 | 337 | Please contact maintainer |
| INV_G3_CombinerRefluxFault2 | Confluence anti-backflow fault 2 | 338 | Please contact maintainer |
| INV_G3_CombinerRefluxFault3 | Confluence anti-backflow fault 3 | 339 | Please contact maintainer |
| INV_G3_CombinerRefluxFault4 | Confluence anti-backflow fault 4 | 340 | Please contact maintainer |
| INV_G3_CombinerRefluxFault5 | Confluence anti-backflow fault 5 | 341 | Please contact maintainer |
| INV_G3_CombinerRefluxFault6 | Confluence anti-backflow fault 6 | 342 | Please contact maintainer |
| INV_G3_CombinerRefluxFault7 | Confluence anti-backflow fault 7 | 343 | Please contact maintainer |
| INV_G3_CombinerRefluxFault8 | Confluence anti-backflow fault 8 | 344 | Please contact maintainer |
| INV_G3_CombinerRefluxFault9 | Confluence anti-backflow fault 9 | 345 | Please contact maintainer |
| INV_G3_CombinerRefluxFault10 | Confluence anti-backflow fault 10 | 346 | Please contact maintainer |
| INV_G3_CombinerRefluxFault11 | Confluence anti-backflow fault 11 | 347 | Please contact maintainer |
| INV_G3_CombinerRefluxFault12 | Confluence anti-backflow fault 12 | 348 | Please contact maintainer |
| INV_G3_CombinerRefluxFault13 | Confluence anti-backflow fault 13 | 349 | Please contact maintainer |
| INV_G3_CombinerRefluxFault14 | Confluence anti-backflow fault 14 | 350 | Please contact maintainer |
| INV_G3_CombinerRefluxFault15 | Confluence anti-backflow fault 15 | 351 | Please contact maintainer |
| INV_G3_CombinerRefluxFault16 | Confluence anti-backflow fault 16 | 352 | Please contact maintainer |
| INV_G3_CombinerRefluxFault17 | Confluence anti-backflow fault 17 | 353 | Please contact maintainer |
| INV_G3_CombinerRefluxFault18 | Confluence anti-backflow fault 18 | 354 | Please contact maintainer |
| INV_G3_CombinerRefluxFault19 | Confluence anti-backflow fault 19 | 355 | Please contact maintainer |
| INV_G3_CombinerRefluxFault20 | Confluence anti-backflow fault 20 | 356 | Please contact maintainer |
| INV_G3_CombinerRefluxFault21 | Confluence anti-backflow fault 21 | 357 | Please contact maintainer |
| INV_G3_CombinerRefluxFault22 | Confluence anti-backflow fault 22 | 358 | Please contact maintainer |
| INV_G3_CombinerRefluxFault23 | Confluence anti-backflow fault 23 | 359 | Please contact maintainer |
| INV_G3_CombinerRefluxFault24 | Confluence anti-backflow fault 24 | 360 | Please contact maintainer |
| INV_G3_CombinerRefluxFault25 | Confluence anti-backflow fault 25 | 361 | Please contact maintainer |
| INV_G3_CombinerRefluxFault26 | Confluence anti-backflow fault 26 | 362 | Please contact maintainer |
| INV_G3_CombinerRefluxFault27 | Confluence anti-backflow fault 27 | 363 | Please contact maintainer |
| INV_G3_CombinerRefluxFault28 | Confluence anti-backflow fault 28 | 364 | Please contact maintainer |
| INV_G3_CombinerRefluxFault29 | Confluence anti-backflow fault 29 | 365 | Please contact maintainer |
| INV_G3_CombinerRefluxFault30 | Confluence anti-backflow fault 30 | 366 | Please contact maintainer |
| INV_G3_CombinerRefluxFault31 | Confluence anti-backflow fault 31 | 367 | Please contact maintainer |
| INV_G3_CombinerRefluxFault32 | Confluence anti-backflow fault 32 | 368 | Please contact maintainer |
| INV_G3_AFCI0 | AFCI Fault 0 | 401 | Please contact maintainer |
| INV_G3_AFCI1 | AFCI Fault 1 | 402 | Please contact maintainer |
| INV_G3_AFCI2 | AFCI Fault 2 | 403 | Please contact maintainer |
| INV_G3_AFCI3 | AFCI Fault 3 | 404 | Please contact maintainer |
| INV_G3_AFCI4 | AFCI Fault 4 | 405 | Please contact maintainer |
| INV_G3_AFCI5 | AFCI Fault 5 | 406 | Please contact maintainer |
| INV_G3_AFCI6 | AFCI Fault 6 | 407 | Please contact maintainer |
| INV_G3_AFCI7 | AFCI Fault 7 | 408 | Please contact maintainer |
| INV_G3_AFCI8 | AFCI Fault 8 | 409 | Please contact maintainer |
| INV_G3_AFCI9 | AFCI Fault 9 | 410 | Please contact maintainer |
| INV_G3_AFCI10 | AFCI Fault 10 | 411 | Please contact maintainer |
| INV_G3_AFCI11 | AFCI Fault 11 | 412 | Please contact maintainer |
| INV_G3_AFCI12 | AFCI Fault 12 | 413 | Please contact maintainer |
| INV_G3_AFCI13 | AFCI Fault 13 | 414 | Please contact maintainer |
| INV_G3_AFCI14 | AFCI Fault 14 | 415 | Please contact maintainer |
| INV_G3_AFCI15 | AFCI Fault 15 | 416 | Please contact maintainer |
| INV_G3_AFCI16 | AFCI Fault 16 | 417 | Please contact maintainer |
| INV_G3_AFCI17 | AFCI Fault 17 | 418 | Please contact maintainer |
| INV_G3_AFCI18 | AFCI Fault 18 | 419 | Please contact maintainer |
| INV_G3_AFCI19 | AFCI Fault 19 | 420 | Please contact maintainer |
| INV_G3_AFCI20 | AFCI Fault 20 | 421 | Please contact maintainer |
| INV_G3_AFCI21 | AFCI Fault 21 | 422 | Please contact maintainer |
| INV_G3_AFCI22 | AFCI Fault 22 | 423 | Please contact maintainer |
| INV_G3_AFCI23 | AFCI Fault 23 | 424 | Please contact maintainer |
| INV_G3_AFCI24 | AFCI Fault 24 | 425 | Please contact maintainer |
| INV_G3_AFCI25 | AFCI Fault 25 | 426 | Please contact maintainer |
| INV_G3_AFCI26 | AFCI Fault 26 | 427 | Please contact maintainer |
| INV_G3_AFCI27 | AFCI Fault 27 | 428 | Please contact maintainer |
| INV_G3_AFCI28 | AFCI Fault 28 | 429 | Please contact maintainer |
| INV_G3_AFCI29 | AFCI Fault 29 | 430 | Please contact maintainer |
| INV_G3_AFCI30 | AFCI Fault 30 | 431 | Please contact maintainer |
| INV_G3_AFCI31 | AFCI Fault 31 | 432 | Please contact maintainer |
| INV_G3_ModifyOVP | Set the overvoltage protection event | 441 | Please contact maintainer |
| INV_G3_VGridNPEOver | Neutral voltage is too high | 449 | Please contact maintainer |
| INV_G3_NLineDisconnect | N line open circuit fault | 451 | Please contact maintainer |
| INV_G3_RoCoFFault | Grid frequency change protection | 452 | Please contact maintainer |
| INV_G3_LostPhaseFault | Phase failure | 453 | Please contact maintainer |
| INV_G3_DCDCFault | DCDC Failure | 465 | Please contact maintainer |
| INV_G3_BCUFault | BCU failure | 466 | Please contact maintainer |
| INV_G3_BMUFault | BMU failure | 467 | Please contact maintainer |
| DCDC_G3_LowBusUVP | Low voltage side undervoltage | 600 | Please contact maintainer |
| DCDC_G3_SwLowBusOVP | Low voltage side overvoltage software | 601 | Please contact maintainer |
| DCDC_G3_HighBusUVP | High voltage side undervoltage | 602 | Please contact maintainer |
| DCDC_G3_SwHighBusOVP | High voltage side overvoltage software | 603 | Please contact maintainer |
| DCDC_G3_FlyCapUnbalanceP | Flying capacitor unbalance | 604 | Please contact maintainer |
| DCDC_G3_SwLowBusOCP | Low voltage side overcurrent software | 605 | Please contact maintainer |
| DCDC_G3_HwArmChipErr | ARM chip failure | 606 | Please contact maintainer |
| DCDC_G3_HwHVPolarityErr | High voltage reverse connection fault | 607 | Please contact maintainer |
| DCDC_G3_HwHighBusOVP | High side overvoltage hardware | 608 | Please contact maintainer |
| DCDC_G3_HwLowBusOVP | Low side overvoltage hardware | 609 | Please contact maintainer |
| DCDC_G3_HwLowBusOCP | Low voltage side overcurrent hardware | 610 | Please contact maintainer |
| DCDC_G3_HwIGBTDrvErr | IGBT driver failure | 611 | Please contact maintainer |
| DCDC_G3_HwVersionErr | Emergency version number error | 612 | Please contact maintainer |
| DCDC_G3_DCDC_IsoFault_DCDC | Insulation failure | 613 | Please contact maintainer |
| DCDC_G3_PEConnectFault_DCDC | Ground Fault | 614 | Please contact maintainer |
| DCDC_G3_DCDC_RelayFail | Relay failure | 615 | Please contact maintainer |
| DCDC_G3_ArmCommFault | ARM communication failure | 616 | Please contact maintainer |
| DCDC_G3_PcsCommFault | PCS communication failure | 617 | Please contact maintainer |
| DCDC_G3_Pcu1CommFault | PCU1 communication failure | 618 | Please contact maintainer |
| DCDC_G3_Pcu2CommFault | PCU2 communication fault | 619 | Please contact maintainer |
| DCDC_G3_Pcu3CommFault | PCU3 communication failure | 620 | Please contact maintainer |
| DCDC_G3_Bms1CommFault_DCDC | BMS1 communication failure | 621 | Please contact maintainer |
| DCDC_G3_Bms2CommFault_DCDC | BMS2 communication failure | 622 | Please contact maintainer |
| DCDC_G3_Bms3CommFault_DCDC | BMS3 communication failure | 623 | Please contact maintainer |
| DCDC_G3_DC1CommFault | DC1 communication failure | 624 | Please contact maintainer |
| DCDC_G3_DC2CommFault | DC2 communication failure | 625 | Please contact maintainer |
| DCDC_G3_DC3CommFault | DC3 communication failure | 626 | Please contact maintainer |
| DCDC_G3_DC4CommFault | DC4 communication failure | 627 | Please contact maintainer |
| DCDC_G3_DC5CommFault | DC5 communication failure | 628 | Please contact maintainer |
| DCDC_G3_DC6CommFault | DC6 communication failure | 629 | Please contact maintainer |
| DCDC_G3_ModuleOTP | Module over temperature | 630 | Please contact maintainer |
| DCDC_G3_HwADZerodrift | Zero Drift | 631 | Please contact maintainer |
| DCDC_G3_HwHvFuseFault | High voltage fuse failure | 632 | Please contact maintainer |
| DCDC_G3_LvSideWakeUpFail | Low voltage side wake-up fault | 633 | Please contact maintainer |
| DCDC_G3_LvSideVakeUpTout | Low voltage side wake-up timeout | 634 | Please contact maintainer |
| DCDC_G3_EnvironmentOTP | Ambient over temperature protection | 635 | Please contact maintainer |
| DCDC_G3_HwflyCapOVP | Flying capacitor overvoltage hardware protection | 636 | Please contact maintainer |
| DCDC_G3_LowVolPolarityErr | Low voltage side reverse connection fault | 637 | Please contact maintainer |
| DCDC_G3_HighVolRelayShort | High voltage side relay short circuit fault | 638 | Please contact maintainer |
| DCDC_G3_HighVolRelayOpenCircuit | High voltage side relay open circuit fault | 639 | Please contact maintainer |
| DCDC_G3_LowVolRelayShort | Low voltage side relay short circuit fault | 640 | Please contact maintainer |
| DCDC_G3_LowVolRelayOpenCircuit | Low voltage side relay open circuit fault | 641 | Please contact maintainer |
| DCDC_G3_HighVolLowVolDismatch | High and low voltage mismatch fault | 643 | Please contact maintainer |
| DCDC_G3_LowVolPrechargeFail | Low voltage side pre-charge failure | 644 | Please contact maintainer |
| DCDC_G3_HighVolPrechargeFail | High voltage side pre-charge failure | 645 | Please contact maintainer |
| INV_G3_TempErrInv4 | Module 4 temperature protection | 313 | Please check whether the air outlet is blocked, restart the inverter, if it still reports error, please contact after-sales service. |
| INV_G3_TempErrInv5 | Module 5 temperature protection | 314 | Please check whether the air outlet is blocked, restart the inverter, if it still reports error, please contact after-sales service. |
| INV_G3_TempErrInv6 | Module 6 temperature protection | 315 | Please check whether the air outlet is blocked, restart the inverter, if it still reports error, please contact after-sales service. |
| INV_G3_N2PEFault | Phase to ground fault | 322 | Please check whether the fire wire is grounded or not |
| INV_G3_BusShortCircuit | Busbar short circuit protection | 333 | Please contact after-sales service for internal failure of the inverter. |
| INV_G3_ARMDSPProVerFault | ARM_DSP protocol version is inconsistent | 442 | Please check whether upgrading to the latest software, if after upgrading the latest software still report error, please contact after-sales service |
| INV_G3_ARMAFCIProVerFault | ARM_AFCI protocol version is inconsistent | 443 | Please check whether to upgrade to the latest software, if after upgrading the latest software still report error, please contact after-sales service |
| INV_G3_ARMDCDCProVerFault | ARM_DCDC protocol version is inconsistent | 444 | Please check if you have upgraded to the latest software, if you still report errors after upgrading the latest software, please contact the after-sales service. |
| INV_G3_SwPvCurBackUp | PV branch software backflow | 454 | Please check whether there is reverse connection of PV module. |
| INV_G3_HwADFaultVInv | Inverter voltage sampling error | 455 | Please re-close the DC and AC switch, if the error is still reported, please contact the after-sales service. |
| INV_G3_ConsistentFaultVbus | Bus voltage consistency error | 457 | Please close the DC and AC switch again, if the error is still reported, please contact the after-sales service. |
| INV_G3_PIDFault | PID Failure | 468 | Please re-close the DC and AC switches, if the error is still reported, please contact the after-sales service. |
| INV_G3_GridPhaseSeq | The grid phase sequence is wrong | 321 | Please contact technical support |
| INV_G3_AntiSC | Short circuit protection | 323 | Please contact technical support |
| INV_G3_AntiSCDeviceFault | Short circuit protection device error | 324 | Please contact technical support |
| INV_G3_DCRelayFault | DC relay error | 325 | Please contact technical support |
| INV_G3_TempErrIGBTLow | Module low temperature protection | 327 | Please contact technical support |
| INV_G3_AcStartTimeOut | AC reverse start timeout | 328 | Please contact technical support |
| INV_G3_HwADFaultCail | Hardware sampling bias error | 385 | Please contact technical support |
| INV_G3_FanFault8 | Fan 8 failure | 386 | Please contact technical support |
| INV_G3_AFCI1CommFault | AFCI1 communication failure | 433 | Please contact technical support |
| INV_G3_AFCI2CommFault | AFCI2 communication failure | 434 | Please contact technical support |
| INV_G3_SwPvBranchOCP2 | PV branch software overcurrent 2 | 450 | Please contact technical support |
| INV_G3_HwADInvalidVInvEPS | Inverter EPS sampling failure | 456 | Please contact technical support |
| INV_G3_HwADErrIBus | Bus current sampling error | 458 | Please contact technical support |
| INV_G3_StorageException | Storage exception | 478 | Please contact technical support |
| INV_G3_BoostShortCircuit | Boost short circuit fault | 334 | Please contact technical support |
| INV_G3_PvPositiveToGroundFault | PV+ short circuit to ground fault | 335 | Please contact technical support |
| INV_G3_DcSwitchTrip1 | DC switch 1 tripped | 381 | Please contact technical support |
| INV_G3_DcSwitchTrip2 | DC switch 2 tripped | 382 | Please contact technical support |
| INV_G3_DcSwitchTrip3 | DC switch 3 tripped | 383 | Please contact technical support |
| INV_G3_DcSwitchTrip4 | DC switch 4 tripped | 384 | Please contact technical support |
| INV_G3_FireToGroundWireShot | Live wire ground wire short circuit fault | 462 | Please contact technical support |
| INV_G3_UnrecoverFireToGroundWireShort | Live wire ground wire short circuit permanent fault | 463 | Please contact technical support |
| 887 | Testing Testing |  | 111 |
| 997 | Test Test 112 |  | 测试测试 |
| 779 | Testing Testing |  | 11 |
| INV | Testing Testing |  | 11 |
| INV_G3_R_Temp_Fault | R phase temperature fault | 001 | Please contact technical support |
| INV_G3_S_Temp_Fault | S phase temperature fault | 002 | Please contact technical support |
| INV_G3_T_Temp_Fault | T phase temperature fault | 003 | Please contact technical support |
| INV_G3_R_NTC_Fault | R phase NTC fault | 009 | Please contact technical support |
| INV_G3_S_NTC_Fault | S phase NTC fault | 010 | Please contact technical support |
| INV_G3_T_NTC_Fault | T phase NTC fault | 011 | Please contact technical support |
| INV_G3_PV1_1_Temp1_Fault | PV1_1 input temperature fault | 017 | Please contact technical support |
| INV_G3_PV1_1_Temp2_Fault | PV1_1 output temperature fault | 018 | Please contact technical support |
| INV_G3_PV1_2_Temp1_Fault | PV1_2 input temperature fault | 019 | Please contact technical support |
| INV_G3_PV1_2_Temp2_Fault | PV1_2 output temperature fault | 020 | Please contact technical support |
| INV_G3_PV1_3_Temp1_Fault | PV1_3 input temperature fault | 021 | Please contact technical support |
| INV_G3_PV1_3_Temp2_Fault | PV1_3 output temperature fault | 022 | Please contact technical support |
| INV_G3_PV1_4_Temp1_Fault | PV1_4 input temperature fault | 023 | Please contact technical support |
| INV_G3_PV1_4_Temp2_Fault | PV1_4 output temperature fault | 024 | Please contact technical support |
| INV_G3_PV2_1_Temp1_Fault | PV2_1 input temperature fault | 025 | Please contact technical support |
| INV_G3_PV2_1_Temp2_Fault | PV2_1 output temperature fault | 026 | Please contact technical support |
| INV_G3_PV2_2_Temp1_Fault | PV2_2 input temperature fault | 027 | Please contact technical support |
| INV_G3_PV2_2_Temp2_Fault | PV2_2 output temperature fault | 028 | Please contact technical support |
| INV_G3_PV2_3_Temp1_Fault | PV2_3 input temperature fault | 029 | Please contact technical support |
| INV_G3_PV2_3_Temp2_Fault | PV2_3 output temperature fault | 030 | Please contact technical support |
| INV_G3_PV2_4_Temp1_Fault | PV2_4 input temperature fault | 031 | Please contact technical support |
| INV_G3_PV2_4_Temp2_Fault | PV2_4 output temperature fault | 032 | Please contact technical support |
| INV_G3_PV3_1_Temp1_Fault | PV3_1 input temperature fault | 033 | Please contact technical support |
| INV_G3_PV3_1_Temp2_Fault | PV3_1 output temperature fault | 034 | Please contact technical support |
| INV_G3_PV3_2_Temp1_Fault | PV3_2 input temperature fault | 035 | Please contact technical support |
| INV_G3_PV3_2_Temp2_Fault | PV3_2 output temperature fault | 036 | Please contact technical support |
| INV_G3_PV3_3_Temp1_Fault | PV3_3 input temperature fault | 037 | Please contact technical support |
| INV_G3_PV3_3_Temp2_Fault | PV3_3 output temperature fault | 038 | Please contact technical support |
| INV_G3_PV3_4_Temp1_Fault | PV3_4 input temperature fault | 039 | Please contact technical support |
| INV_G3_PV3_4_Temp2_Fault | PV3_4 output temperature fault | 040 | Please contact technical support |
| INV_G3_PV4_1_Temp1_Fault | PV4_1 input temperature fault | 041 | Please contact technical support |
| INV_G3_PV4_1_Temp2_Fault | PV4_1 output temperature fault | 042 | Please contact technical support |
| INV_G3_PV4_2_Temp1_Fault | PV4_2 input temperature fault | 043 | Please contact technical support |
| INV_G3_PV4_2_Temp2_Fault | PV4_2 output temperature fault | 044 | Please contact technical support |
| INV_G3_PV4_3_Temp1_Fault | PV4_3 input temperature fault | 045 | Please contact technical support |
| INV_G3_PV4_3_Temp2_Fault | PV4_3 output temperature fault | 046 | Please contact technical support |
| INV_G3_PV4_4_Temp1_Fault | PV4_4 input temperature fault | 047 | Please contact technical support |
| INV_G3_PV4_4_Temp2_Fault | PV4_4 output temperature fault | 048 | Please contact technical support |
| INV_G3_PV5_1_Temp1_Fault | PV5_1 input temperature fault | 049 | Please contact technical support |
| INV_G3_PV5_1_Temp2_Fault | PV5_1 output temperature fault | 050 | Please contact technical support |
| INV_G3_PV5_2_Temp1_Fault | PV5_2 input temperature fault | 051 | Please contact technical support |
| INV_G3_PV5_2_Temp2_Fault | PV5_2 output temperature fault | 052 | Please contact technical support |
| INV_G3_PV5_3_Temp1_Fault | PV5_3 input temperature fault | 053 | Please contact technical support |
| INV_G3_PV5_3_Temp2_Fault | PV5_3 output temperature fault | 054 | Please contact technical support |
| INV_G3_PV5_4_Temp1_Fault | PV5_4 input temperature fault | 055 | Please contact technical support |
| INV_G3_PV5_4_Temp2_Fault | PV5_4 output temperature fault | 056 | Please contact technical support |
| INV_G3_PV6_1_Temp1_Fault | PV6_1 input temperature fault | 057 | Please contact technical support |
| INV_G3_PV6_1_Temp2_Fault | PV6_1 output temperature fault | 058 | Please contact technical support |
| INV_G3_PV6_2_Temp1_Fault | PV6_2 input temperature fault | 059 | Please contact technical support |
| INV_G3_PV6_2_Temp2_Fault | PV6_2 output temperature fault | 060 | Please contact technical support |
| INV_G3_PV6_3_Temp1_Fault | PV6_3 input temperature fault | 061 | Please contact technical support |
| INV_G3_PV6_3_Temp2_Fault | PV6_3 output temperature fault | 062 | Please contact technical support |
| INV_G3_PV6_4_Temp1_Fault | PV6_4 input temperature fault | 063 | Please contact technical support |
| INV_G3_PV6_4_Temp2_Fault | PV6_4 output temperature fault | 064 | Please contact technical support |
| INV_G3_PV7_1_Temp1_Fault | PV7_1 input temperature fault | 065 | Please contact technical support |
| INV_G3_PV7_1_Temp2_Fault | PV7_1 output temperature fault | 066 | Please contact technical support |
| INV_G3_PV7_2_Temp1_Fault | PV7_2 input temperature fault | 067 | Please contact technical support |
| INV_G3_PV7_2_Temp2_Fault | PV7_2 output temperature fault | 068 | Please contact technical support |
| INV_G3_PV7_3_Temp1_Fault | PV7_3 input temperature fault | 069 | Please contact technical support |
| INV_G3_PV7_3_Temp2_Fault | PV7_3 output temperature fault | 070 | Please contact technical support |
| INV_G3_PV7_4_Temp1_Fault | PV7_4 input temperature fault | 071 | Please contact technical support |
| INV_G3_PV7_4_Temp2_Fault | PV7_4 output temperature fault | 072 | Please contact technical support |
| INV_G3_PV8_1_Temp1_Fault | PV8_1 input temperature fault | 073 | Please contact technical support |
| INV_G3_PV8_1_Temp2_Fault | PV8_1 output temperature fault | 074 | Please contact technical support |
| INV_G3_PV8_2_Temp1_Fault | PV8_2 input temperature fault | 075 | Please contact technical support |
| INV_G3_PV8_2_Temp2_Fault | PV8_2 output temperature fault | 076 | Please contact technical support |
| INV_G3_PV8_3_Temp1_Fault | PV8_3 input temperature fault | 077 | Please contact technical support |
| INV_G3_PV8_3_Temp2_Fault | PV8_3 output temperature fault | 078 | Please contact technical support |
| INV_G3_PV8_4_Temp1_Fault | PV8_4 input temperature fault | 079 | Please contact technical support |
| INV_G3_PV8_4_Temp2_Fault | PV8_4 output temperature fault | 080 | Please contact technical support |
| INV_G3_PV1_1_NTC_Fault1 | PV1_1 input NTC fault | 145 | Please contact technical support |
| INV_G3_PV1_1_NTC_Fault2 | PV1_1 output NTC fault | 146 | Please contact technical support |
| INV_G3_PV1_2_NTC_Fault1 | PV1_2 input NTC fault | 147 | Please contact technical support |
| INV_G3_PV1_2_NTC_Fault2 | PV1_2 output NTC fault | 148 | Please contact technical support |
| INV_G3_PV1_3_NTC_Fault1 | PV1_3 input terminal NTC fault | 149 | Please contact technical support |
| INV_G3_PV1_3_NTC_Fault2 | PV1_3 output NTC fault | 150 | Please contact technical support |
| INV_G3_PV1_4_NTC_Fault1 | PV1_4 input terminal NTC fault | 151 | Please contact technical support |
| INV_G3_PV1_4_NTC_Fault2 | PV1_4 output NTC fault | 152 | Please contact technical support |
| INV_G3_PV2_1_NTC_Fault1 | PV2_1 input NTC fault | 153 | Please contact technical support |
| INV_G3_PV2_1_NTC_Fault2 | PV2_1 output NTC fault | 154 | Please contact technical support |
| INV_G3_PV2_2_NTC_Fault1 | PV2_2 input NTC fault | 155 | Please contact technical support |
| INV_G3_PV2_2_NTC_Fault2 | PV2_2 output NTC fault | 156 | Please contact technical support |
| INV_G3_PV2_3_NTC_Fault1 | PV2_3 input terminal NTC fault | 157 | Please contact technical support |
| INV_G3_PV2_3_NTC_Fault2 | PV2_3 output NTC fault | 158 | Please contact technical support |
| INV_G3_PV2_4_NTC_Fault1 | PV2_4 input terminal NTC fault | 159 | Please contact technical support |
| INV_G3_PV2_4_NTC_Fault2 | PV2_4 output NTC fault | 160 | Please contact technical support |
| INV_G3_PV3_1_NTC_Fault1 | PV3_1 input NTC fault | 161 | Please contact technical support |
| INV_G3_PV3_1_NTC_Fault2 | PV3_1 output NTC fault | 162 | Please contact technical support |
| INV_G3_PV3_2_NTC_Fault1 | PV3_2 input terminal NTC fault | 163 | Please contact technical support |
| INV_G3_PV3_2_NTC_Fault2 | PV3_2 output NTC fault | 164 | Please contact technical support |
| INV_G3_PV3_3_NTC_Fault1 | PV3_3 input terminal NTC fault | 165 | Please contact technical support |
| INV_G3_PV3_3_NTC_Fault2 | PV3_3 output NTC fault | 166 | Please contact technical support |
| INV_G3_PV3_4_NTC_Fault1 | PV3_4 input terminal NTC fault | 167 | Please contact technical support |
| INV_G3_PV3_4_NTC_Fault2 | PV3_4 output NTC fault | 168 | Please contact technical support |
| INV_G3_PV4_1_NTC_Fault1 | PV4_1 input NTC fault | 169 | Please contact technical support |
| INV_G3_PV4_1_NTC_Fault2 | PV4_1 output NTC fault | 170 | Please contact technical support |
| INV_G3_PV4_2_NTC_Fault1 | PV4_2 input NTC fault | 171 | Please contact technical support |
| INV_G3_PV4_2_NTC_Fault2 | PV4_2 output NTC fault | 172 | Please contact technical support |
| INV_G3_PV4_3_NTC_Fault1 | PV4_3 input NTC fault | 173 | Please contact technical support |
| INV_G3_PV4_3_NTC_Fault2 | PV4_3 output NTC fault | 174 | Please contact technical support |
| INV_G3_PV4_4_NTC_Fault1 | PV4_4 input NTC fault | 175 | Please contact technical support |
| INV_G3_PV4_4_NTC_Fault2 | PV4_4 output NTC fault | 176 | Please contact technical support |
| INV_G3_PV5_1_NTC_Fault1 | PV5_1 input NTC fault | 177 | Please contact technical support |
| INV_G3_PV5_1_NTC_Fault2 | PV5_1 output NTC fault | 178 | Please contact technical support |
| INV_G3_PV5_2_NTC_Fault1 | PV5_2 input terminal NTC fault | 179 | Please contact technical support |
| INV_G3_PV5_2_NTC_Fault2 | PV5_2 output NTC fault | 180 | Please contact technical support |
| INV_G3_PV5_3_NTC_Fault1 | PV5_3 input terminal NTC fault | 181 | Please contact technical support |
| INV_G3_PV5_3_NTC_Fault2 | PV5_3 output NTC fault | 182 | Please contact technical support |
| INV_G3_PV5_4_NTC_Fault1 | PV5_4 input terminal NTC fault | 183 | Please contact technical support |
| INV_G3_PV5_4_NTC_Fault2 | PV5_4 output NTC fault | 184 | Please contact technical support |
| INV_G3_PV6_1_NTC_Fault1 | PV6_1 input NTC fault | 185 | Please contact technical support |
| INV_G3_PV6_1_NTC_Fault2 | PV6_1 output NTC fault | 186 | Please contact technical support |
| INV_G3_PV6_2_NTC_Fault1 | PV6_2 input terminal NTC fault | 187 | Please contact technical support |
| INV_G3_PV6_2_NTC_Fault2 | PV6_2 output NTC fault | 188 | Please contact technical support |
| INV_G3_PV6_3_NTC_Fault1 | PV6_3 input terminal NTC fault | 189 | Please contact technical support |
| INV_G3_PV6_3_NTC_Fault2 | PV6_3 output NTC fault | 190 | Please contact technical support |
| INV_G3_PV6_4_NTC_Fault1 | PV6_4 input NTC fault | 191 | Please contact technical support |
| INV_G3_PV6_4_NTC_Fault2 | PV6_4 output NTC fault | 192 | Please contact technical support |
| INV_G3_PV7_1_NTC_Fault1 | PV7_1 input NTC fault | 193 | Please contact technical support |
| INV_G3_PV7_1_NTC_Fault2 | PV7_1 output NTC fault | 194 | Please contact technical support |
| INV_G3_PV7_2_NTC_Fault1 | PV7_2 input terminal NTC fault | 195 | Please contact technical support |
| INV_G3_PV7_2_NTC_Fault2 | PV7_2 output NTC fault | 196 | Please contact technical support |
| INV_G3_PV7_3_NTC_Fault1 | PV7_3 input NTC fault | 197 | Please contact technical support |
| INV_G3_PV7_3_NTC_Fault2 | PV7_3 output NTC fault | 198 | Please contact technical support |
| INV_G3_PV7_4_NTC_Fault1 | PV7_4 input terminal NTC fault | 199 | Please contact technical support |
| INV_G3_PV7_4_NTC_Fault2 | PV7_4 output NTC fault | 200 | Please contact technical support |
| INV_G3_PV8_1_NTC_Fault1 | PV8_1 input NTC fault | 201 | Please contact technical support |
| INV_G3_PV8_1_NTC_Fault2 | PV8_1 output NTC fault | 202 | Please contact technical support |
| INV_G3_PV8_2_NTC_Fault1 | PV8_2 input terminal NTC fault | 203 | Please contact technical support |
| INV_G3_PV8_2_NTC_Fault2 | PV8_2 output NTC fault | 204 | Please contact technical support |
| INV_G3_PV8_3_NTC_Fault1 | PV8_3 input NTC fault | 205 | Please contact technical support |
| INV_G3_PV8_3_NTC_Fault2 | PV8_3 output NTC fault | 206 | Please contact technical support |
| INV_G3_PV8_4_NTC_Fault1 | PV8_4 input NTC fault | 207 | Please contact technical support |
| INV_G3_PV8_4_NTC_Fault2 | PV8_4 output NTC fault | 208 | Please contact technical support |
| INV_G3_DCPortTempFault | Abnormal DC terminal temperature | 309 | Please contact technical support |
| INV_G3_ACPortTempFault | Abnormal AC terminal temperature | 310 | Please contact technical support |
| INV_G3_HS1OverTempFault | Radiator 1 over temperature protection |  | Please contact maintainer |
| INV_G3_OverTempFault_Env | Ambient temperature over temperature protection |  | Please contact maintainer |
| INV_G3_SciCommFault | Sci communication failure |  | Please contact maintainer |
| INV_G3_Can1CommFault | Can1 communication failure |  | Please contact maintainer |
| INV_G3_Relay1Fail | Relay 1 Fault |  | Please contact maintainer |
| INV_G3_HS2OverTempFault | Radiator 2 over temperature protection |  | Please contact maintainer |
| INV_G3_Can2CommFault | Can2 communication failure |  | Please contact maintainer |
| INV_G3_Relay2Fail | Relay 2 Fault |  | Please contact maintainer |
| INV_G3_SwBusInstantOVP | Busbar software overvoltage |  | Please contact maintainer |
| INV_G3_SwBusInstantUVP | Bus software undervoltage |  | Please contact maintainer |
| INV_G3_SwBatInstantOVP | Battery software overvoltage |  | Please contact maintainer |
| INV_G3_SwBatInstantUVP | Battery software undervoltage |  | Please contact maintainer |
| INV_G3_SwBatInstantOCP | Battery software overcurrent |  | Please contact maintainer |
| INV_G3_FlyingCap1OVP | Flying capacitor 1 overvoltage |  | Please contact maintainer |
| INV_G3_FlyingCap2OVP | Flying capacitor 2 overvoltage |  | Please contact maintainer |
| INV_G3_HwOCP | Hardware overcurrent |  | Please contact maintainer |
| INV_G3_unrecoverBusAvgOV | Permanent busbar overvoltage |  | Please contact maintainer |
| INV_G3_unrecoverBatAvgUV | Permanent battery undervoltage |  | Please contact maintainer |
| INV_G3_unrecoverOCPInstant | Permanent overcurrent |  | Please contact maintainer |
| INV_G3_unrecoverHwOCP | Permanent hardware overcurrent |  | Please contact maintainer |
| INV_G3_FlyingCap3OVP | Flying capacitor 3 overvoltage |  | Please contact maintainer |
| INV_G3_FlyingCap4OVP | Flying capacitor 4 overvoltage |  | Please contact maintainer |
| INV_G3_FlyingCap1UVP | Flying capacitor 1 undervoltage |  | Please contact maintainer |
| INV_G3_FlyingCap2UVP | Flying capacitor 2 undervoltage |  | Please contact maintainer |
| INV_G3_unrecoverRelay1Fail | Relay 1 permanent fault |  | Please contact maintainer |
| INV_G3_unrecoverRelay2Fail | Relay 2 permanent fault |  | Please contact maintainer |
| INV_G3_FlyingCap3UVP | Flying capacitor 3 undervoltage |  | Please contact maintainer |
| INV_G3_FlyingCap4UVP | Flying capacitor 4 undervoltage |  | Please contact maintainer |
| INV_G3_unrecoverBusSCP | Permanent short circuit protection |  | Please contact maintainer |
| INV_G3_unrecoverBatActFail | Permanent battery activation failed |  | Please contact maintainer |
| INV_G3_unrecoverBusRPP | Permanent BUS reverse connection |  | Please contact maintainer |
| INV_G3_BatteryStateErr | Battery status error |  | Please contact maintainer |
| INV_G3_PWMModeErr | PWM mode error |  | Please contact maintainer |
| INV_G3_BMSVerionErr | BMS version error |  | Please contact maintainer |
| INV_G3_BMSOVOCP | BMS overvoltage and overcurrent fault |  | Please contact maintainer |
| INV_G3_SwBatAvgOCP | Battery average value overcurrent protection |  | Please contact maintainer |
| INV_G3_SwAvgOverloadP | Average value overload protection |  | Please contact maintainer |
| INV_G3_SwBusInstantOCP | Bus software overcurrent |  | Please contact maintainer |
| INV_G3_SwCBCOCP | Software CBC overcurrent protection |  | Please contact maintainer |
| INV_G3_PackIDErr | PackID Error |  | Please contact maintainer |
| INV_G3_StartupBusSCP | Starter bus short circuit protection |  | Please contact maintainer |
| INV_G3_BusAvgUVP | Bus average undervoltage |  | Please contact maintainer |
| INV_G3_ChipClockFault | Chip clock failure |  | Please contact maintainer |
| INV_G3_PCSCanCommFault | Inverter CAN communication failure |  | Please contact maintainer |
| INV_G3_HeatsinkLowTempFault | Radiator low temperature failure |  | Please contact maintainer |
| INV_G3_EnyLowTempFault | Low ambient temperature fault |  | Please contact maintainer |
| INV_G3_ADOffsetCalibrateFault | Sampling offset calibration failure |  | Please contact maintainer |
| INV_G3_RevBatConn | Battery connected reversely |  | Please contact maintainer |
| INV_G3_CirFail | Fuse failure |  | Please contact maintainer |
| INV_G3_State_BusOVDerating | Busbar Overvoltage Load Shedding |  | Please contact technical support. |
| INV_G3_State_CmdPDerating | Active Load Reduction Command |  | Please contact technical support. |
| INV_G3_State_DRMs0Off | DRMs0 Shutdown |  | Please contact technical support. |
| INV_G3_State_DRMsDerating | DRM Removal |  | Please contact technical support. |
| INV_G3_State_FeedInLimitation | Anti-Backflow Load Reduction |  | Please contact technical support. |
| INV_G3_State_ForceOff | Forced shutdown |  | Please contact technical support. |
| INV_G3_State_GridUVDerating | Low Voltage Load Shedding on the Power Grid |  | Please contact technical support. |
| INV_G3_State_IndependenceQCtrl | Independent Active Power Control |  | Please contact technical support. |
| INV_G3_State_InnerDerating | Internal (Other) Offloading |  | Please contact technical support. |
| INV_G3_State_OFDerating | Overfrequency Load Shedding |  | Please contact technical support. |
| INV_G3_State_OverTempDerating | Over-temperature load shedding |  | Please contact technical support. |
| INV_G3_State_OVUVDerating | Grid Overvoltage/Undervoltage Safety Regulation Lo |  | Please contact technical support. |
| INV_G3_State_QLimitedP | Reactive Power Limit Active Power |  | Please contact technical support. |
| INV_G3_State_RefluxCommOff | Communication Interruption Protection Shutdown |  | Please contact technical support. |
| INV_G3_State_RemoteOff | Remote Shutdown |  | Please contact technical support. |
| INV_G3_State_RemotePCtrl | Remote Active Power Control |  | Please contact technical support. |
| INV_G3_State_RemotePFCtrl | Remote PF Control |  | Please contact technical support. |
| INV_G3_State_RemoteQCtrl | Remote Reactive Power Control |  | Please contact technical support. |
| INV_G3_State_UFLoading | Underloaded |  | Please contact technical support. |
