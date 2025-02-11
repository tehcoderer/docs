---
title: gaintopain
description: OpenBB SDK Function
---

# gaintopain

Get Pain-to-Gain ratio based on historical data

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1207)]

```python
def get_gaintopain_ratio(portfolio_engine: portfolio_model.PortfolioEngine) -> None
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
| pd.DataFrame | DataFrame of the portfolio's gain-to-pain ratio |
---

