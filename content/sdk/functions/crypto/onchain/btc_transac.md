---
title: btc_transac
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# btc_transac

<Tabs>
<TabItem value="model" label="Model" default>

Returns BTC confirmed transactions [Source: https://api.blockchain.info/]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/blockchain_model.py#L62)]

```python
def get_btc_confirmed_transactions() -> pd.DataFrame
```

---

## Parameters

This function does not take any parameters.

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | BTC confirmed transactions |
---



</TabItem>
<TabItem value="view" label="View">

Returns BTC confirmed transactions [Source: https://api.blockchain.info/]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/blockchain_view.py#L88)]

```python
def display_btc_confirmed_transactions(start_date: str = "2010-01-01", end_date: str = None, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| start_date | str | Initial date, format YYYY-MM-DD | 2010-01-01 | True |
| end_date | str | Final date, format YYYY-MM-DD | None | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>