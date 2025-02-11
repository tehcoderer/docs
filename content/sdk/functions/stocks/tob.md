---
title: tob
description: OpenBB SDK Function
---

# tob

Get top of book bid and ask for ticker on exchange [CBOE.com]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/cboe_model.py#L12)]

```python
def get_top_of_book(symbol: str, exchange: str = "BZX") -> Tuple[pd.DataFrame, pd.DataFrame]
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to get | None | False |
| exchange | str | Exchange to look at.  Can be `BZX`,`EDGX`, `BYX`, `EDGA` | BZX | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DatatFrame | Dataframe of Bids |
---

