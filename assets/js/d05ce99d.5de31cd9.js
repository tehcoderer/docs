"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,l(l({ref:t},i),{},{components:n})):a.createElement(f,l({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,p={unversionedId:"features/common/ta/adosc",id:"features/common/ta/adosc",title:"adosc",description:".. role:: python(code)",source:"@site/sdk/features/common/ta/adosc.md",sourceDirName:"features/common/ta",slug:"/features/common/ta/adosc",permalink:"/docs/sdk/features/common/ta/adosc",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ad",permalink:"/docs/sdk/features/common/ta/ad"},next:{title:"adx",permalink:"/docs/sdk/features/common/ta/adx"}},s={},c=[],i={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,r.kt)("p",null,"|"),(0,r.kt)("p",null,"To obtain charts, make sure to add :python:",(0,r.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,r.kt)("p",null,"{{< highlight python >}}\ncommon.ta.adosc(\ndata: pandas.core.frame.DataFrame,\nuse_open: bool = False,\nfast: int = 3,\nslow: int = 10,\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<p>\nCalculate AD oscillator technical indicator\n</p>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  data : pd.DataFrame\nDataframe of OHLC prices\nuse_open : bool\nWhether to use open prices\nfast: int\nFast value\nslow: int\nSlow value\nchart: bool\nFlag to display chart"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  pd.DataFrame\nDataframe with technical indicator"))),(0,r.kt)("p",null,"|"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,r.kt)("p",null,"{{< highlight python >}}\ncommon.ta.adosc(\ndata: pandas.core.frame.DataFrame,\nfast: int = 3,\nslow: int = 10,\nuse_open: bool = False,\nsymbol: str = '',\nexport: str = '',\nexternal_axes: Optional[List","[matplotlib.axes._axes.Axes]","] = None,\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<p>\nDisplay AD Osc Indicator\n</p>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  data : pd.DataFrame\nDataframe of ohlc prices\nuse_open : bool\nWhether to use open prices in calculation\nfast: int\nLength of fast window\nslow : int\nLength of slow window\nsymbol : str\nStock ticker\nexport : str\nFormat to export data\nexternal_axes : Optional[List","[plt.Axes]","], optional\nExternal axes (3 axes are expected in the list), by default None\nchart: bool\nFlag to display chart"))))}u.isMDXComponent=!0}}]);