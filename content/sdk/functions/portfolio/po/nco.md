---
title: nco
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# nco

<Tabs>
<TabItem value="model" label="Model" default>

Builds a hierarchical risk parity portfolio

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L2747)]

```python
def get_nco(symbols: List[str], interval: str = "3y", start_date: str = "", end_date: str = "", log_returns: bool = False, freq: str = "D", maxnan: float = 0.05, threshold: float = 0, method: str = "time", codependence: str = "pearson", covariance: str = "hist", objective: str = "minrisk", risk_measure: str = "mv", risk_free_rate: float = 0.0, risk_aversion: float = 1.0, alpha: float = 0.05, a_sim: int = 100, beta: float = None, b_sim: int = None, linkage: str = "single", k: int = None, max_k: int = 10, bins_info: str = "KN", alpha_tail: float = 0.05, leaf_order: bool = True, d_ewma: float = 0.94, value: float = 1.0) -> Tuple[Optional[dict], pd.DataFrame]
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of portfolio tickers | None | False |
| interval | str | interval to look at returns from | 3y | True |
| start_date | str | If not using interval, start date string (YYYY-MM-DD) |  | True |
| end_date | str | If not using interval, end date string (YYYY-MM-DD). If empty use last<br/>weekday. |  | True |
| log_returns | bool | If True calculate log returns, else arithmetic returns. Default value<br/>is False | False | True |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible<br/>values are:<br/><br/>- 'D' for daily returns.<br/>- 'W' for weekly returns.<br/>- 'M' for monthly returns. | D | True |
| maxnan | float | Max percentage of nan values accepted per asset to be included in<br/>returns. | 0.05 | True |
| threshold | float | Value used to replace outliers that are higher to threshold. | 0 | True |
| method | str | Method used to fill nan values. Default value is 'time'. For more information see `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`__. | time | True |
| codependence | str | The codependence or similarity matrix used to build the distance<br/>metric and clusters. The default is 'pearson'. Possible values are:<br/><br/>- 'pearson': pearson correlation matrix. Distance formula:<br/>    .. math:: D_{i,j} = \sqrt{0.5(1-\rho^{pearson}_{i,j})}<br/>- 'spearman': spearman correlation matrix. Distance formula:<br/>    .. math:: D_{i,j} = \sqrt{0.5(1-\rho^{spearman}_{i,j})}<br/>- 'abs_pearson': absolute value pearson correlation matrix. Distance formula:<br/>    .. math:: D_{i,j} = \sqrt{(1-|\rho^{pearson}_{i,j}|)}<br/>- 'abs_spearman': absolute value spearman correlation matrix. Distance formula:<br/>    .. math:: D_{i,j} = \sqrt{(1-|\rho^{spearman}_{i,j}|)}<br/>- 'distance': distance correlation matrix. Distance formula:<br/>    .. math:: D_{i,j} = \sqrt{(1-\rho^{distance}_{i,j})}<br/>- 'mutual_info': mutual information matrix. Distance used is variation information matrix.<br/>- 'tail': lower tail dependence index matrix. Dissimilarity formula:<br/>    .. math:: D_{i,j} = -\log{\lambda_{i,j}}. | pearson | True |
| covariance | str | The method used to estimate the covariance matrix:<br/>The default is 'hist'. Possible values are:<br/><br/>- 'hist': use historical estimates.<br/>- 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.<br/>- 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.<br/>- 'ledoit': use the Ledoit and Wolf Shrinkage method.<br/>- 'oas': use the Oracle Approximation Shrinkage method.<br/>- 'shrunk': use the basic Shrunk Covariance method.<br/>- 'gl': use the basic Graphical Lasso Covariance method.<br/>- 'jlogo': use the j-LoGo Covariance method. For more information see: `c-jLogo`.<br/>- 'fixed': denoise using fixed method. For more information see chapter 2 of `c-MLforAM`.<br/>- 'spectral': denoise using spectral method. For more information see chapter 2 of `c-MLforAM`.<br/>- 'shrink': denoise using shrink method. For more information see chapter 2 of `c-MLforAM`. | hist | True |
| objective | str | Objective function used by the NCO model.<br/>The default is 'MinRisk'. Possible values are:<br/><br/>- 'MinRisk': Minimize the selected risk measure.<br/>- 'Utility': Maximize the risk averse utility function.<br/>- 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.<br/>- 'ERC': Equally risk contribution portfolio of the selected risk measure. | minrisk | True |
| risk_measure | str | The risk measure used to optimize the portfolio. If model is 'NCO',<br/>the risk measures available depends on the objective function.<br/>The default is 'MV'. Possible values are:<br/><br/>- 'MV': Variance.<br/>- 'MAD': Mean Absolute Deviation.<br/>- 'MSV': Semi Standard Deviation.<br/>- 'FLPM': First Lower Partial Moment (Omega Ratio).<br/>- 'SLPM': Second Lower Partial Moment (Sortino Ratio).<br/>- 'VaR': Value at Risk.<br/>- 'CVaR': Conditional Value at Risk.<br/>- 'TG': Tail Gini.<br/>- 'EVaR': Entropic Value at Risk.<br/>- 'WR': Worst Realization (Minimax).<br/>- 'RG': Range of returns.<br/>- 'CVRG': CVaR range of returns.<br/>- 'TGRG': Tail Gini range of returns.<br/>- 'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).<br/>- 'ADD': Average Drawdown of uncompounded cumulative returns.<br/>- 'DaR': Drawdown at Risk of uncompounded cumulative returns.<br/>- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.<br/>- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.<br/>- 'UCI': Ulcer Index of uncompounded cumulative returns.<br/>- 'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).<br/>- 'ADD_Rel': Average Drawdown of compounded cumulative returns.<br/>- 'DaR_Rel': Drawdown at Risk of compounded cumulative returns.<br/>- 'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.<br/>- 'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.<br/>- 'UCI_Rel': Ulcer Index of compounded cumulative returns. | mv | True |
| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns.<br/>Used for 'FLPM' and 'SLPM'. The default is 0. | 0.0 | True |
| risk_aversion | float | Risk aversion factor of the 'Utility' objective function.<br/>The default is 1. | 1.0 | True |
| alpha | float | Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.<br/>The default is 0.05. | 0.05 | True |
| a_sim | float | Number of CVaRs used to approximate Tail Gini of losses. The default is 100. | 100 | True |
| beta | float | Significance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.<br/>The default is None. | None | True |
| b_sim | float | Number of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.<br/>The default is None. | None | True |
| linkage | str | Linkage method of hierarchical clustering. For more information see `linkage <https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html>`__.<br/>The default is 'single'. Possible values are:<br/><br/>- 'single'.<br/>- 'complete'.<br/>- 'average'.<br/>- 'weighted'.<br/>- 'centroid'.<br/>- 'median'.<br/>- 'ward'.<br/>- 'dbht': Direct Bubble Hierarchical Tree. | single | True |
| k | int | Number of clusters. This value is took instead of the optimal number<br/>of clusters calculated with the two difference gap statistic.<br/>The default is None. | None | True |
| max_k | int | Max number of clusters used by the two difference gap statistic<br/>to find the optimal number of clusters. The default is 10. | 10 | True |
| bins_info | str | Number of bins used to calculate variation of information. The default<br/>value is 'KN'. Possible values are:<br/><br/>- 'KN': Knuth's choice method. For more information see `knuth_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.knuth_bin_width.html>`__.<br/>- 'FD': Freedman–Diaconis' choice method. For more information see `freedman_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.freedman_bin_width.html>`__.<br/>- 'SC': Scotts' choice method. For more information see `scott_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.scott_bin_width.html>`__.<br/>- 'HGR': Hacine-Gharbi and Ravier' choice method. | KN | True |
| alpha_tail | float | Significance level for lower tail dependence index. The default is 0.05. | 0.05 | True |
| leaf_order | bool | Indicates if the cluster are ordered so that the distance between<br/>successive leaves is minimal. The default is True. | True | True |
| d | float | The smoothing factor of ewma methods.<br/>The default is 0.94. | None | True |
| value | float | Amount to allocate to portfolio in long positions, by default 1.0 | 1.0 | True |
| value_short | float | Amount to allocate to portfolio in short positions, by default 0.0 | None | True |
| table | bool | True if plot table weights, by default False | None | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[Optional[dict], pd.DataFrame] | Dictionary of portfolio weights,<br/>DataFrame of stock returns. |
---



</TabItem>
<TabItem value="view" label="View">

Builds a hierarchical equal risk contribution portfolio

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L3351)]

```python
def display_nco(symbols: List[str], interval: str = "3y", start_date: str = "", end_date: str = "", log_returns: bool = False, freq: str = "D", maxnan: float = 0.05, threshold: float = 0, method: str = "time", codependence: str = "pearson", covariance: str = "hist", objective: str = "MinRisk", risk_measure: str = "mv", risk_free_rate: float = 0.0, risk_aversion: float = 1.0, alpha: float = 0.05, a_sim: int = 100, beta: float = None, b_sim: int = None, linkage: str = "ward", k: int = None, max_k: int = 10, bins_info: str = "KN", alpha_tail: float = 0.05, leaf_order: bool = True, d_ewma: float = 0.94, value: float = 1.0, table: bool = False) -> Dict
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of portfolio tickers | None | False |
| interval | str | interval to look at returns from | 3y | True |
| start_date | str | If not using interval, start date string (YYYY-MM-DD) |  | True |
| end_date | str | If not using interval, end date string (YYYY-MM-DD). If empty use last<br/>weekday. |  | True |
| log_returns | bool | If True calculate log returns, else arithmetic returns. Default value<br/>is False | False | True |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible<br/>values are:<br/>- 'D' for daily returns.<br/>- 'W' for weekly returns.<br/>- 'M' for monthly returns. | D | True |
| maxnan | float | Max percentage of nan values accepted per asset to be included in<br/>returns. | 0.05 | True |
| threshold | float | Value used to replace outliers that are higher to threshold. | 0 | True |
| method | str | Method used to fill nan values. Default value is 'time'. For more information see `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`__. | time | True |
| model | str | The hierarchical cluster portfolio model used for optimize the<br/>portfolio. The default is 'HRP'. Possible values are:<br/><br/>- 'HRP': Hierarchical Risk Parity.<br/>- 'HERC': Hierarchical Equal Risk Contribution.<br/>- 'NCO': Nested Clustered Optimization. | None | True |
| codependence | str | The codependence or similarity matrix used to build the distance<br/>metric and clusters. The default is 'pearson'. Possible values are:<br/><br/>- 'pearson': pearson correlation matrix. Distance formula:<br/>    .. math:: D_{i,j} = \sqrt{0.5(1-\rho^{pearson}_{i,j})}.<br/>- 'spearman': spearman correlation matrix. Distance formula:<br/>    .. math:: D_{i,j} = \sqrt{0.5(1-\rho^{spearman}_{i,j})}.<br/>- 'abs_pearson': absolute value pearson correlation matrix. Distance formula:<br/>    .. math:: D_{i,j} = \sqrt{(1-|\rho^{pearson}_{i,j}|)}.<br/>- 'abs_spearman': absolute value spearman correlation matrix. Distance formula:<br/>    .. math:: D_{i,j} = \sqrt{(1-|\rho^{spearman}_{i,j}|)}.<br/>- 'distance': distance correlation matrix. Distance formula:<br/>    .. math:: D_{i,j} = \sqrt{(1-\rho^{distance}_{i,j})}.<br/>- 'mutual_info': mutual information matrix. Distance used is variation information matrix.<br/>- 'tail': lower tail dependence index matrix. Dissimilarity formula:<br/>    .. math:: D_{i,j} = -\log{\lambda_{i,j}}. | pearson | True |
| covariance | str | The method used to estimate the covariance matrix:<br/>The default is 'hist'. Possible values are:<br/><br/>- 'hist': use historical estimates.<br/>- 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.<br/>- 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.<br/>- 'ledoit': use the Ledoit and Wolf Shrinkage method.<br/>- 'oas': use the Oracle Approximation Shrinkage method.<br/>- 'shrunk': use the basic Shrunk Covariance method.<br/>- 'gl': use the basic Graphical Lasso Covariance method.<br/>- 'jlogo': use the j-LoGo Covariance method. For more information see: `c-jLogo`.<br/>- 'fixed': denoise using fixed method. For more information see chapter 2 of `c-MLforAM`.<br/>- 'spectral': denoise using spectral method. For more information see chapter 2 of `c-MLforAM`.<br/>- 'shrink': denoise using shrink method. For more information see chapter 2 of `c-MLforAM`. | hist | True |
| objective | str | Objective function used by the NCO model.<br/>The default is 'MinRisk'. Possible values are:<br/><br/>- 'MinRisk': Minimize the selected risk measure.<br/>- 'Utility': Maximize the risk averse utility function.<br/>- 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.<br/>- 'ERC': Equally risk contribution portfolio of the selected risk measure. | MinRisk | True |
| risk_measure | str | The risk measure used to optimize the portfolio. If model is 'NCO',<br/>the risk measures available depends on the objective function.<br/>The default is 'MV'. Possible values are:<br/><br/>- 'MV': Variance.<br/>- 'MAD': Mean Absolute Deviation.<br/>- 'MSV': Semi Standard Deviation.<br/>- 'FLPM': First Lower Partial Moment (Omega Ratio).<br/>- 'SLPM': Second Lower Partial Moment (Sortino Ratio).<br/>- 'VaR': Value at Risk.<br/>- 'CVaR': Conditional Value at Risk.<br/>- 'TG': Tail Gini.<br/>- 'EVaR': Entropic Value at Risk.<br/>- 'WR': Worst Realization (Minimax).<br/>- 'RG': Range of returns.<br/>- 'CVRG': CVaR range of returns.<br/>- 'TGRG': Tail Gini range of returns.<br/>- 'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).<br/>- 'ADD': Average Drawdown of uncompounded cumulative returns.<br/>- 'DaR': Drawdown at Risk of uncompounded cumulative returns.<br/>- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.<br/>- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.<br/>- 'UCI': Ulcer Index of uncompounded cumulative returns.<br/>- 'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).<br/>- 'ADD_Rel': Average Drawdown of compounded cumulative returns.<br/>- 'DaR_Rel': Drawdown at Risk of compounded cumulative returns.<br/>- 'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.<br/>- 'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.<br/>- 'UCI_Rel': Ulcer Index of compounded cumulative returns. | mv | True |
| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns.<br/>Used for 'FLPM' and 'SLPM'. The default is 0. | 0.0 | True |
| risk_aversion | float | Risk aversion factor of the 'Utility' objective function.<br/>The default is 1. | 1.0 | True |
| alpha | float | Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.<br/>The default is 0.05. | 0.05 | True |
| a_sim | float | Number of CVaRs used to approximate Tail Gini of losses. The default is 100. | 100 | True |
| beta | float | Significance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.<br/>The default is None. | None | True |
| b_sim | float | Number of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.<br/>The default is None. | None | True |
| linkage | str | Linkage method of hierarchical clustering. For more information see `linkage <https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html>`__.<br/>The default is 'single'. Possible values are:<br/><br/>- 'single'.<br/>- 'complete'.<br/>- 'average'.<br/>- 'weighted'.<br/>- 'centroid'.<br/>- 'median'.<br/>- 'ward'.<br/>- 'dbht': Direct Bubble Hierarchical Tree. | ward | True |
| k | int | Number of clusters. This value is took instead of the optimal number<br/>of clusters calculated with the two difference gap statistic.<br/>The default is None. | None | True |
| max_k | int | Max number of clusters used by the two difference gap statistic<br/>to find the optimal number of clusters. The default is 10. | 10 | True |
| bins_info | str | Number of bins used to calculate variation of information. The default<br/>value is 'KN'. Possible values are:<br/><br/>- 'KN': Knuth's choice method. For more information see `knuth_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.knuth_bin_width.html>`__.<br/>- 'FD': Freedman–Diaconis' choice method. For more information see `freedman_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.freedman_bin_width.html>`__.<br/>- 'SC': Scotts' choice method. For more information see `scott_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.scott_bin_width.html>`__.<br/>- 'HGR': Hacine-Gharbi and Ravier' choice method. | KN | True |
| alpha_tail | float | Significance level for lower tail dependence index. The default is 0.05. | 0.05 | True |
| leaf_order | bool | Indicates if the cluster are ordered so that the distance between<br/>successive leaves is minimal. The default is True. | True | True |
| d | float | The smoothing factor of ewma methods.<br/>The default is 0.94. | None | True |
| value | float | Amount to allocate to portfolio in long positions, by default 1.0 | 1.0 | True |
| value_short | float | Amount to allocate to portfolio in short positions, by default 0.0 | None | True |
| table | bool | True if plot table weights, by default False | False | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>