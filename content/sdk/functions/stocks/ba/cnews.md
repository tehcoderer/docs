---
title: cnews
description: OpenBB SDK Function
---

# cnews

Get news from a company. [Source: Finnhub]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/behavioural_analysis/finnhub_model.py#L20)]

```python
def get_company_news(symbol: str, start_date: str = None, end_date: str = None) -> List[Dict]
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | company ticker to look for news articles | None | False |
| start_date | str | date to start searching articles, with format YYYY-MM-DD | None | True |
| end_date | str | date to end searching articles, with format YYYY-MM-DD | None | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| List | term to search on the news articles |
---

