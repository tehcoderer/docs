---
title: expo
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# expo

<Tabs>
<TabItem value="model" label="Model" default>

Performs Probabilistic Exponential Smoothing forecasting

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/expo_model.py#L34)]

```python
def get_expo_data(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", trend: str = "A", seasonal: str = "A", seasonal_periods: int = 7, dampen: str = "F", n_predict: int = 5, start_window: float = 0.85, forecast_horizon: int = 5) -> Tuple[List[darts.timeseries.TimeSeries], List[darts.timeseries.TimeSeries], List[darts.timeseries.TimeSeries], Union[float, numpy.ndarray, NoneType], darts.models.forecasting.exponential_smoothing.ExponentialSmoothing]
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, np.ndarray] | Input data. | None | False |
| target_column | Optional[str]: | Target column to forecast. Defaults to "close". | close | True |
| trend | str | Trend component.  One of [N, A, M]<br/>Defaults to ADDITIVE. | A | True |
| seasonal | str | Seasonal component.  One of [N, A, M]<br/>Defaults to ADDITIVE. | A | True |
| seasonal_periods | int | Number of seasonal periods in a year (7 for daily data)<br/>If not set, inferred from frequency of the series. | 7 | True |
| dampen | str | Dampen the function | F | True |
| n_predict | int | Number of days to forecast | 5 | True |
| start_window | float | Size of sliding window from start of timeseries and onwards | 0.85 | True |
| forecast_horizon | int | Number of days to forecast when backtesting and retraining historical | 5 | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[List[TimeSeries], List[TimeSeries], List[TimeSeries], Optional[Union[float, ndarray]], ExponentialSmoothing] | Adjusted Data series,<br/>List of historical fcast values,<br/>List of predicted fcast values,<br/>Optional[float] - precision,<br/>Fit Prob. Expo model object. |
---



</TabItem>
<TabItem value="view" label="View">

Display Probabilistic Exponential Smoothing forecast

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/expo_view.py#L20)]

```python
def display_expo_forecast(data: Union[pd.DataFrame, pd.Series], target_column: str = "close", dataset_name: str = "", trend: str = "A", seasonal: str = "A", seasonal_periods: int = 7, dampen: str = "F", n_predict: int = 5, start_window: float = 0.85, forecast_horizon: int = 5, export: str = "", residuals: bool = False, forecast_only: bool = False, start_date: Optional[datetime.datetime] = None, end_date: Optional[datetime.datetime] = None, naive: bool = False, export_pred_raw: bool = False, external_axes: Optional[List[axes]] = None) -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, np.array] | Data to forecast | None | False |
| dataset_name str | None | The name of the ticker to be predicted | None | True |
| target_column | Optional[str]: | Target column to forecast. Defaults to "close". | close | True |
| trend | str | Trend component.  One of [N, A, M]<br/>Defaults to ADDITIVE. | A | True |
| seasonal | str | Seasonal component.  One of [N, A, M]<br/>Defaults to ADDITIVE. | A | True |
| seasonal_periods | int | Number of seasonal periods in a year<br/>If not set, inferred from frequency of the series. | 7 | True |
| dampen | str | Dampen the function | F | True |
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