---
title: balance
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# balance

<Tabs>
<TabItem value="model" label="Model" default>

Get account holdings for asset. [Source: Binance]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/binance_model.py#L179)]

```python
def get_balance(from_symbol: str, to_symbol: str = "USDT") -> pd.DataFrame
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| from_symbol | str | Cryptocurrency | None | False |
| to_symbol | str | Cryptocurrency | USDT | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with account holdings for an asset |
---



</TabItem>
<TabItem value="view" label="View">

Prints table showing account holdings for asset. [Source: Binance]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/binance_view.py#L64)]

```python
def display_balance(from_symbol: str, to_symbol: str = "USDT", export: str = "") -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| from_symbol | str | Cryptocurrency | None | False |
| to_symbol | str | Cryptocurrency | USDT | True |
| export | str | Export dataframe data to csv,json,xlsx |  | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>