---
title: perf
description: OpenBB SDK Function
---

# perf

Get portfolio performance vs the benchmark

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1833)]

```python
def get_performance_vs_benchmark(portfolio_engine: portfolio_model.PortfolioEngine, show_all_trades: bool = False) -> pd.DataFrame
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| show_all_trades | bool | Whether to also show all trades made and their performance (default is False) | False | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with portfolio performance vs the benchmark |
---

