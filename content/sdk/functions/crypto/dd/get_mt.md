---
title: get_mt
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# get_mt

<Tabs>
<TabItem value="model" label="Model" default>

Returns available messari timeseries

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_model.py#L34)]

```python
def get_available_timeseries(only_free: bool = True) -> pd.DataFrame
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| only_free | bool | Display only timeseries available for free | True | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | available timeseries |
---



</TabItem>
<TabItem value="view" label="View">

Prints table showing messari timeseries list

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_view.py#L49)]

```python
def display_messari_timeseries_list(limit: int = 10, query: str = "", only_free: bool = True, export: str = "") -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | number to show | 10 | True |
| query | str | Query to search across all messari timeseries |  | True |
| only_free | bool | Display only timeseries available for free | True | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>