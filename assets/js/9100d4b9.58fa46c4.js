"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},c=void 0,l={unversionedId:"features/common/ta/clenow/clenow",id:"features/common/ta/clenow/clenow",title:"clenow",description:"Calculates the Clenow Volatility Adjusted Momentum.",source:"@site/content/terminal/features/common/ta/clenow/clenow.md",sourceDirName:"features/common/ta/clenow",slug:"/features/common/ta/clenow/",permalink:"/docs/terminal/features/common/ta/clenow/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/common/ta/clenow/clenow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cg",permalink:"/docs/terminal/features/common/ta/cg/"},next:{title:"demark",permalink:"/docs/terminal/features/common/ta/demark/"}},i={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: clenow [-p PERIOD] [-h] [--export EXPORT]\n")),(0,o.kt)("p",null,"Calculates the Clenow Volatility Adjusted Momentum."),(0,o.kt)("p",null,"This indicator is calculated by performing a regression on log prices.  The factor is obtained by multiplying the\nregression coefficient with the R2 of the regression.  "),(0,o.kt)("p",null,"An example of the use of this strategy can be found at:\n",(0,o.kt)("a",{parentName:"p",href:"https://www.quant-investing.com/blog/this-easy-to-use-adjusted-slope-momentum-strategy-performed-7-times-better-than-the-market"},"https://www.quant-investing.com/blog/this-easy-to-use-adjusted-slope-momentum-strategy-performed-7-times-better-than-the-market")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"options:\n  -p PERIOD, --period PERIOD\n                        Lookback period for regression (default: 90)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export figure into png, jpg, pdf, svg (default: )\n\nFor more information and examples, use 'about clenow' to access the related guide.\n")))}p.isMDXComponent=!0}}]);