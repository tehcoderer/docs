---
title: top_nfts
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# top_nfts

<Tabs>
<TabItem value="model" label="Model" default>

Get top nft collections [Source: https://dappradar.com/]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/dappradar_model.py#L79)]

```python
def get_top_nfts(sortby: str = "", limit: int = 10) -> pd.DataFrame
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data |  | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | NFTs Columns: Name, Protocols, Floor Price [$], Avg Price [$], Market Cap [$], Volume [$] |
---



</TabItem>
<TabItem value="view" label="View">

Prints table showing top nft collections [Source: https://dappradar.com/]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/dappradar_view.py#L20)]

```python
def display_top_nfts(limit: int = 10, sortby: str = "", export: str = "") -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | 10 | True |
| sortby | str | Key by which to sort data |  | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>