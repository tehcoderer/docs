---
title: autoces
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# autoces

<Tabs>
<TabItem value="model" label="Model" default>

Performs Automatic Complex Exponential Smoothing forecasting

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/autoces_model.py#L28)]

```python
def get_autoces_data(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", seasonal_periods: int = 7, n_predict: int = 5, start_window: float = 0.85, forecast_horizon: int = 5) -> Tuple[Optional[List[type[darts.timeseries.TimeSeries]]], Optional[List[type[darts.timeseries.TimeSeries]]], Optional[List[type[darts.timeseries.TimeSeries]]], Optional[float], Optional[statsforecast.core.StatsForecast]]
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, np.ndarray] | Input data. | None | False |
| target_column | Optional[str]: | Target column to forecast. Defaults to "close". | close | True |
| seasonal_periods | int | Number of seasonal periods in a year (7 for daily data)<br/>If not set, inferred from frequency of the series. | 7 | True |
| n_predict | int | Number of days to forecast | 5 | True |
| start_window | float | Size of sliding window from start of timeseries and onwards | 0.85 | True |
| forecast_horizon | int | Number of days to forecast when backtesting and retraining historical | 5 | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[List[TimeSeries], List[TimeSeries], List[TimeSeries], Optional[float], StatsForecast] | Adjusted Data series,<br/>List of historical fcast values,<br/>List of predicted fcast values,<br/>Optional[float] - precision,<br/>Fit CES model object. |
---



</TabItem>
<TabItem value="view" label="View">

Display Automatic Complex Exponential Smoothing Model

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/autoces_view.py#L20)]

```python
def display_autoces_forecast(data: Union[pd.DataFrame, pd.Series], target_column: str = "close", dataset_name: str = "", seasonal_periods: int = 7, n_predict: int = 5, start_window: float = 0.85, forecast_horizon: int = 5, export: str = "", residuals: bool = False, forecast_only: bool = False, start_date: Optional[datetime.datetime] = None, end_date: Optional[datetime.datetime] = None, naive: bool = False, export_pred_raw: bool = False, external_axes: Optional[List[axes]] = None) -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, np.array] | Data to forecast | None | False |
| dataset_name str | None | The name of the ticker to be predicted | None | True |
| target_column | Optional[str]: | Target column to forecast. Defaults to "close". | close | True |
| seasonal_periods | int | Number of seasonal periods in a year<br/>If not set, inferred from frequency of the series. | 7 | True |
| n_predict | int | Number of days to forecast | 5 | True |
| start_window | float | Size of sliding window from start of timeseries and onwards | 0.85 | True |
| forecast_horizon | int | Number of days to forecast when backtesting and retraining historical | 5 | True |
| export | str | Format to export data |  | True |
| residuals | bool | Whether to show residuals for the model. Defaults to False. | False | True |
| forecast_only | bool | Whether to only show dates in the forecasting range. Defaults to False. | False | True |
| start_date | Optional[datetime] | The starting date to perform analysis, data before this is trimmed. Defaults to None. | None | True |
| end_date | Optional[datetime] | The ending date to perform analysis, data after this is trimmed. Defaults to None. | None | True |
| naive | bool | Whether to show the naive baseline. This just assumes the closing price will be the same<br/>as the previous day's closing price. Defaults to False. | False | True |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>