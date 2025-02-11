---
title: om
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# om

<Tabs>
<TabItem value="model" label="Model" default>

Get omega ratio

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L2034)]

```python
def get_omega(portfolio_engine: portfolio_model.PortfolioEngine, threshold_start: float = 0, threshold_end: float = 1.5) -> pd.DataFrame
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| threshold_start | float | annualized target return threshold start of plotted threshold range | 0 | True |
| threshold_end | float | annualized target return threshold end of plotted threshold range | 1.5 | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with portfolio omega ratio |
---



</TabItem>
<TabItem value="view" label="View">

Display omega ratio

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L1802)]

```python
def display_omega(portfolio_engine: portfolio_model.PortfolioEngine, threshold_start: float = 0, threshold_end: float = 1.5) -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| threshold_start | float | annualized target return threshold start of plotted threshold range | 0 | True |
| threshold_end | float | annualized target return threshold end of plotted threshold range | 1.5 | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>