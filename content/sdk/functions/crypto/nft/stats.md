---
title: stats
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# stats

<Tabs>
<TabItem value="model" label="Model" default>

Get stats of a nft collection [Source: opensea.io]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/nft/opensea_model.py#L17)]

```python
def get_collection_stats(slug: str) -> pd.DataFrame
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| slug | str | Opensea collection slug. If the name of the collection is Mutant Ape Yacht Club the slug is mutant-ape-yacht-club | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | collection stats |
---



</TabItem>
<TabItem value="view" label="View">

Prints table showing collection stats. [Source: opensea.io]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/nft/opensea_view.py#L15)]

```python
def display_collection_stats(slug: str, export: str) -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| slug | str | Opensea collection slug.<br/>If the name of the collection is Mutant Ape Yacht Club the slug is mutant-ape-yacht-club | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>