"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,p(p({ref:t},s),{},{components:n})):r.createElement(h,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={},p=void 0,l={unversionedId:"features/crypto/dd/ps",id:"features/crypto/dd/ps",title:"ps",description:".. role:: python(code)",source:"@site/sdk/features/crypto/dd/ps.md",sourceDirName:"features/crypto/dd",slug:"/features/crypto/dd/ps",permalink:"/docs/sdk/features/crypto/dd/ps",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pr",permalink:"/docs/sdk/features/crypto/dd/pr"},next:{title:"rm",permalink:"/docs/sdk/features/crypto/dd/rm"}},c={},i=[],s={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,"To obtain charts, make sure to add :python:",(0,a.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\ncrypto.dd.ps(\nsymbol: str = 'btc-bitcoin',\nquotes: str = 'USD',\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<p>\nGet all most important ticker related information for given coin id [Source: CoinPaprika]\n\n.. code-block:: json\n\n    {\n        "id": "btc-bitcoin",\n        "name": "Bitcoin",\n        "symbol": "BTC",\n        "rank": 1,\n        "circulating_supply": 17007062,\n        "total_supply": 17007062,\n        "max_supply": 21000000,\n        "beta_value": 0.735327,\n        "first_data_at": "2010-11-14T07:20:41Z",\n        "last_updated": "2018-11-14T07:20:41Z",\n        "quotes": {\n            "USD": {\n                "price": 5162.15941296,\n                "volume_24h": 7304207651.1585,\n                "volume_24h_change_24h": -2.5,\n                "market_cap": 91094433242,\n                "market_cap_change_24h": 1.6,\n                "percent_change_15m": 0,\n                "percent_change_30m": 0,\n                "percent_change_1h": 0,\n                "percent_change_6h": 0,\n                "percent_change_12h": -0.09,\n                "percent_change_24h": 1.59,\n                "percent_change_7d": 0.28,\n                "percent_change_30d": 27.39,\n                "percent_change_1y": -37.99,\n                "ath_price": 20089,\n                "ath_date": "2017-12-17T12:19:00Z",\n                "percent_from_price_ath": -74.3\n            }\n        }\n    }\n</p>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  symbol: str\nId of coin from CoinPaprika\nquotes: str\nComma separated quotes to return e.g quotes = USD, BTC\nchart: bool\nFlag to display chart"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",{parentName:"li"},"  pandas.DataFrame\nMost important ticker related information\nColumns: Metric, Value"))),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\ncrypto.dd.ps(\nfrom_symbol: str = 'BTC',\nto_symbol: str = 'USD',\nexport: str = '',\nchart: bool = False,\n) -> None\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nGet ticker information for single coin [Source: CoinPaprika]\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  from_symbol: str\nCryptocurrency symbol (e.g. BTC)\nto_symbol: str\nQuoted currency\nexport: str\nExport dataframe data to csv,json,xlsx\nchart: bool\nFlag to display chart"))))}u.isMDXComponent=!0}}]);