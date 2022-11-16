"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48978],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),f=n,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18072:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"fama_raw",description:"OpenBB SDK Function"},i="fama_raw",s={unversionedId:"functions/stocks/qa/fama_raw",id:"functions/stocks/qa/fama_raw",title:"fama_raw",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/stocks/qa/fama_raw.md",sourceDirName:"functions/stocks/qa",slug:"/functions/stocks/qa/fama_raw",permalink:"/docs/sdk/functions/stocks/qa/fama_raw",draft:!1,tags:[],version:"current",frontMatter:{title:"fama_raw",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"capm_information",permalink:"/docs/sdk/functions/stocks/qa/capm_information"},next:{title:"historical_5",permalink:"/docs/sdk/functions/stocks/qa/historical_5"}},l={},c=[{value:"stocks_qa_factors_model.get_fama_raw",id:"stocks_qa_factors_modelget_fama_raw",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fama_raw"},"fama_raw"),(0,n.kt)("h2",{id:"stocks_qa_factors_modelget_fama_raw"},"stocks_qa_factors_model.get_fama_raw"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/stocks/quantitative_analysis/factors_model.py'",title:"'openbb_terminal/stocks/quantitative_analysis/factors_model.py'"},"def get_fama_raw() -> DataFrame:\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/quantitative_analysis/factors_model.py#L20"},"Source Code")),(0,n.kt)("p",null,"Description: Gets base Fama French data to calculate risk"),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional")))),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("p",null,"None"),(0,n.kt)("h2",{id:"examples"},"Examples"))}u.isMDXComponent=!0}}]);