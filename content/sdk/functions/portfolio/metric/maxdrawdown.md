---
title: maxdrawdown
description: OpenBB SDK Function
---

# maxdrawdown

Method that retrieves maximum drawdown ratio for portfolio and benchmark selected

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1158)]

```python
def get_maximum_drawdown_ratio(portfolio_engine: portfolio_model.PortfolioEngine) -> pd.DataFrame
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with maximum drawdown for portfolio and benchmark for different periods |
---

