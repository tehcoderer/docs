---
title: countries
description: OpenBB SDK Function
---

# countries

Display portfolio country allocation compared to the benchmark

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L2581)]

```python
def get_countries_allocation(portfolio_engine: portfolio_model.PortfolioEngine, limit: int = 10, tables: bool = False, recalculate: bool = False) -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| tables | bool | Whether to include separate allocation tables | False | True |
| limit | int | The amount of assets you wish to show, by default this is set to 10 | 10 | True |
| recalculate | bool | Flag to force recalculate allocation if already exists | False | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, Tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]] | DataFrame with combined allocation plus individual allocation if tables is `True`. |
---

