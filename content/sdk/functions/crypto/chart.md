---
title: chart
description: OpenBB SDK Function
---

# chart

Load data for Technical Analysis

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/cryptocurrency_helpers.py#L858)]

```python
def plot_chart(prices_df: pd.DataFrame, to_symbol: str = "", from_symbol: str = "", source: str = "", exchange: str = "", interval: str = "", external_axes: Optional[list[matplotlib.axes._axes.Axes]] = None, yscale: str = "linear") -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| prices_df | pd.DataFrame | Cryptocurrency | None | False |
| to_symbol | str | Coin (only used for chart title), by default "" |  | True |
| from_symbol | str | Currency (only used for chart title), by default "" |  | True |
| yscale | str | Scale for y axis of plot Either linear or log | linear | True |


---

## Returns

This function does not return anything

---

