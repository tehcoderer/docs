---
title: brnn
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# brnn

<Tabs>
<TabItem value="model" label="Model" default>

Performs Block RNN forecasting

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/brnn_model.py#L22)]

```python
def get_brnn_data(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", n_predict: int = 5, train_split: float = 0.85, past_covariates: str = None, forecast_horizon: int = 5, input_chunk_length: int = 14, output_chunk_length: int = 5, model_type: str = "LSTM", n_rnn_layers: int = 1, dropout: float = 0.0, batch_size: int = 32, n_epochs: int = 100, learning_rate: float = 0.001, model_save_name: str = "brnn_model", force_reset: bool = True, save_checkpoints: bool = True) -> Tuple[Optional[List[darts.timeseries.TimeSeries]], Optional[List[darts.timeseries.TimeSeries]], Optional[List[darts.timeseries.TimeSeries]], Optional[float], Optional[type[darts.models.forecasting.forecasting_model.GlobalForecastingModel]]]
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, pd.DataFrame] | Input Data | None | False |
| target_column | str | Target column to forecast. Defaults to "close". | close | True |
| n_predict | int | Days to predict. Defaults to 5. | 5 | True |
| train_split | float | Train/val split. Defaults to 0.85. | 0.85 | True |
| past_covariates | str | Multiple secondary columns to factor in when forecasting. Defaults to None. | None | True |
| forecast_horizon | int | Forecast horizon when performing historical forecasting. Defaults to 5. | 5 | True |
| input_chunk_length | int | Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14. | 14 | True |
| output_chunk_length | int | The length of the forecast of the model. Defaults to 5. | 5 | True |
| model_type | str | Either a string specifying the RNN module type ("RNN", "LSTM" or "GRU"). Defaults to "LSTM". | LSTM | True |
| n_rnn_layers | int | Number of layers in the RNN module. Defaults to 1. | 1 | True |
| dropout | float | Fraction of neurons affected by Dropout. Defaults to 0.0. | 0.0 | True |
| batch_size | int | Number of time series (input and output sequences) used in each training pass. Defaults to 32. | 32 | True |
| n_epochs | int | Number of epochs over which to train the model. Defaults to 100. | 100 | True |
| learning_rate | float | Defaults to 1e-3. | 0.001 | True |
| model_save_name | str | Name for model. Defaults to "brnn_model". | brnn_model | True |
| force_reset | bool | If set to True, any previously-existing model with the same name will be reset (all checkpoints will be<br/>discarded). Defaults to True. | True | True |
| save_checkpoints | bool | Whether or not to automatically save the untrained model and checkpoints from training. Defaults to True. | True | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| E501 | Adjusted Data series,<br/>Historical forecast by best RNN model,<br/>list of Predictions,<br/>Mean average precision error,<br/>Best BRNN Model. |
---



</TabItem>
<TabItem value="view" label="View">

Display BRNN forecast

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/brnn_view.py#L20)]

```python
def display_brnn_forecast(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", dataset_name: str = "", n_predict: int = 5, past_covariates: str = None, train_split: float = 0.85, forecast_horizon: int = 5, input_chunk_length: int = 14, output_chunk_length: int = 5, model_type: str = "LSTM", n_rnn_layers: int = 1, dropout: float = 0.0, batch_size: int = 16, n_epochs: int = 100, learning_rate: float = 0.001, model_save_name: str = "rnn_model", force_reset: bool = True, save_checkpoints: bool = True, export: str = "", residuals: bool = False, forecast_only: bool = False, start_date: Optional[datetime.datetime] = None, end_date: Optional[datetime.datetime] = None, naive: bool = False, export_pred_raw: bool = False, external_axes: Optional[List[axes]] = None) -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, pd.DataFrame] | Input Data | None | False |
| target_column | str | Target column to forecast. Defaults to "close". | close | True |
| dataset_name | str | The name of the ticker to be predicted |  | True |
| n_predict | int | Days to predict. Defaults to 5. | 5 | True |
| train_split | float | Train/val split. Defaults to 0.85. | 0.85 | True |
| past_covariates | str | Multiple secondary columns to factor in when forecasting. Defaults to None. | None | True |
| forecast_horizon | int | Forecast horizon when performing historical forecasting. Defaults to 5. | 5 | True |
| input_chunk_length | int | Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14. | 14 | True |
| output_chunk_length | int | The length of the forecast of the model. Defaults to 5. | 5 | True |
| model_type | str | Either a string specifying the RNN module type ("RNN", "LSTM" or "GRU"). Defaults to "LSTM". | LSTM | True |
| n_rnn_layers | int | Number of layers in the RNN module. Defaults to 1. | 1 | True |
| dropout | float | Fraction of neurons affected by Dropout. Defaults to 0.0. | 0.0 | True |
| batch_size | int | Number of time series (input and output sequences) used in each training pass. Defaults to 32. | 16 | True |
| n_epochs | int | Number of epochs over which to train the model. Defaults to 101. | 100 | True |
| learning_rate | float | Defaults to 1e-3. | 0.001 | True |
| model_save_name | str | Name for model. Defaults to "brnn_model". | rnn_model | True |
| force_reset | bool | If set to True, any previously-existing model with the same name will be reset<br/>(all checkpoints will be discarded). Defaults to True. | True | True |
| save_checkpoints | bool | Whether or not to automatically save the untrained model and checkpoints from training.<br/>Defaults to True. | True | True |
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