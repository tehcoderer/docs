---
title: summary
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# summary

<Tabs>
<TabItem value="model" label="Model" default>

Get technical summary report provided by FinBrain's API

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/technical_analysis/finbrain_model.py#L15)]

```python
def get_technical_summary_report(symbol: str) -> str
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get the technical summary | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| str | technical summary report |
---



</TabItem>
<TabItem value="view" label="View">

Print technical summary report provided by FinBrain's API

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/technical_analysis/finbrain_view.py#L14)]

```python
def technical_summary_report(symbol: str) -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get the technical summary | None | False |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>