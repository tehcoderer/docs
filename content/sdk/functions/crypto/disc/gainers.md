---
title: gainers
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# gainers

<Tabs>
<TabItem value="model" label="Model" default>

Shows Largest Gainers - coins which gain the most in given period. [Source: CoinGecko]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/pycoingecko_model.py#L260)]

```python
def get_gainers(interval: str = "1h", limit: int = 50, sortby: str = "market_cap_rank") -> pd.DataFrame
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Time interval by which data is displayed. One from [1h, 24h, 7d, 14d, 30d, 60d, 1y] | 1h | True |
| limit | int | Number of records to display | 50 | True |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to<br/>API documentation (see /coins/markets in https://www.coingecko.com/en/api/documentation) | market_cap_rank | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Top Gainers  - coins which gain most in price in given period of time.<br/>Columns: Symbol, Name, Volume, Price, %Change_{interval}, Url |
---



</TabItem>
<TabItem value="view" label="View">

Prints table showing Largest Gainers - coins which gain the most in given period. [Source: CoinGecko]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/pycoingecko_view.py#L100)]

```python
def display_gainers(interval: str = "1h", limit: int = 20, sortby: str = "market_cap_rank", export: str = "") -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Time period by which data is displayed. One from [1h, 24h, 7d, 14d, 30d, 60d, 1y] | 1h | True |
| limit | int | Number of records to display | 20 | True |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to<br/>API documentation (see /coins/markets in https://www.coingecko.com/en/api/documentation) | market_cap_rank | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>