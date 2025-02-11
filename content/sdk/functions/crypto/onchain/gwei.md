---
title: gwei
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# gwei

<Tabs>
<TabItem value="model" label="Model" default>

Returns the most recent Ethereum gas fees in gwei

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethgasstation_model.py#L13)]

```python
def get_gwei_fees() -> pd.DataFrame
```

---

## Parameters

This function does not take any parameters.

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | four gas fees and durations<br/>    (fees for slow, average, fast and<br/>    fastest transactions in gwei and<br/>    its average durations in seconds) |
---



</TabItem>
<TabItem value="view" label="View">

Current gwei fees

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethgasstation_view.py#L14)]

```python
def display_gwei_fees(export: str = "") -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>