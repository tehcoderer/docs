"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"bols",description:"OpenBB SDK Function"},o="bols",i={unversionedId:"functions/econometrics/bols",id:"functions/econometrics/bols",title:"bols",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/econometrics/bols.md",sourceDirName:"functions/econometrics",slug:"/functions/econometrics/bols",permalink:"/docs/sdk/functions/econometrics/bols",draft:!1,tags:[],version:"current",frontMatter:{title:"bols",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"bgod",permalink:"/docs/sdk/functions/econometrics/bgod"},next:{title:"bpag",permalink:"/docs/sdk/functions/econometrics/bpag"}},s={},c=[{value:"econometrics_regression_model.get_bols",id:"econometrics_regression_modelget_bols",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bols"},"bols"),(0,a.kt)("h2",{id:"econometrics_regression_modelget_bols"},"econometrics_regression_model.get_bols"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/econometrics/regression_model.py'",title:"'openbb_terminal/econometrics/regression_model.py'"},"def get_bols(regression_variables: List[Tuple], data: Dict[str, pd.DataFrame]) -> None:\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L283"},"Source Code")),(0,a.kt)("p",null,"Description: The between estimator is an alternative, usually less efficient estimator, can can be used to"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"regression_variables"),(0,a.kt)("td",{parentName:"tr",align:null},"list"),(0,a.kt)("td",{parentName:"tr",align:null},"The regressions variables entered where the first variable is"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"the dependent variable."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"dict"),(0,a.kt)("td",{parentName:"tr",align:null},"A dictionary containing the datasets."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"The dataset used, the dependent variable, the independent variable and"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("h2",{id:"examples"},"Examples"))}m.isMDXComponent=!0}}]);