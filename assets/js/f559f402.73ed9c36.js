"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17704],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),l=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=n,y=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return t?a.createElement(y,s(s({ref:r},p),{},{components:t})):a.createElement(y,s({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11914:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(87462),n=(t(67294),t(3905));const o={},s=void 0,c={unversionedId:"features/crypto/onchain/baas/baas",id:"features/crypto/onchain/baas/baas",title:"baas",description:"Display average bid, ask prices, spread for given crypto pair for chosen time",source:"@site/content/terminal/features/crypto/onchain/baas/baas.md",sourceDirName:"features/crypto/onchain/baas",slug:"/features/crypto/onchain/baas/",permalink:"/docs/terminal/features/crypto/onchain/baas/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/crypto/onchain/baas/baas.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"address",permalink:"/docs/terminal/features/crypto/onchain/address/"},next:{title:"balance",permalink:"/docs/terminal/features/crypto/onchain/balance/"}},i={},l=[],p={toc:l};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"usage: baas [-c COIN] [-l N] [-vs VS] [-d DAYS]\n            [-s {date,baseCurrency,quoteCurrency,dailySpread,averageBidPrice,averageAskPrice}]\n            [--descend] [-h] [--export {csv,json,xlsx}]\n")),(0,n.kt)("p",null,"Display average bid, ask prices, spread for given crypto pair for chosen time\nperiod ","[Source: https://graphql.bitquery.io/]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"optional arguments:\n  -c COIN, --coin COIN  ERC20 token symbol or address. (default: None)\n  -l N, --limit N     display N number records (default: 10)\n  -vs VS, --vs VS       Quote currency (default: USDT)\n  -d DAYS, --days DAYS  Number of days to display data for. (default: 10)\n  -s {date,baseCurrency,quoteCurrency,dailySpread,averageBidPrice,averageAskPrice}, --sort {date,baseCurrency,quoteCurrency,dailySpread,averageBidPrice,averageAskPrice}\n                        Sort by given column. (default: date)\n  --descend             Flag to sort in descending order (lowest first)\n                        (default: False)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx}\n                        Export raw data into csv, json, xlsx (default: )\n")))}u.isMDXComponent=!0}}]);