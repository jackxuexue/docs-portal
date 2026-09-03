---
title: Command Callback
description: >-
  SOFARCloud OPEN API 2.0 - OPENAPI / Command Callback.
---

# Command Callback

When command response from the device, SofarCloud will call back the result to the caller with http post as define below:

| Parameter | Type | Description |
|---|---|---|
| code | String | code |
| message | String | message |
| requestId | String | request id |
| isSuccess | Boolean | success，example: true |
| content | String | device response content |
