"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83379],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,s(s({ref:t},l),{},{components:r})):n.createElement(h,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Introduction to Futures",keywords:["forex","currency","money","hedge","dollar","euro","futures","future","interest","rates","forwards","commodities","bonds","treasuries"],excerpt:"This guide explains how to use the Futures menu and provides a brief description of its sub-menus",geekdocCollapseSection:!0},s=void 0,o={unversionedId:"guides/futures",id:"guides/futures",title:"Introduction to Futures",description:"The Futures menu provides historical prices and the current term structure for an asset. This menu is accessible from the Main menu by typing futures and pressing the enter key.",source:"@site/terminal/guides/futures.md",sourceDirName:"guides",slug:"/guides/futures",permalink:"/docs/terminal/guides/futures",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/guides/futures.md",tags:[],version:"current",frontMatter:{title:"Introduction to Futures",keywords:["forex","currency","money","hedge","dollar","euro","futures","future","interest","rates","forwards","commodities","bonds","treasuries"],excerpt:"This guide explains how to use the Futures menu and provides a brief description of its sub-menus",geekdocCollapseSection:!0},sidebar:"tutorialSidebar",previous:{title:"forex",permalink:"/docs/terminal/guides/forex"},next:{title:"jupyter",permalink:"/docs/terminal/guides/jupyter"}},u={},c=[{value:"How to Use",id:"how-to-use",level:2},{value:'<img width="1233" alt="Historical Price of GE=F & ZQ=F" src="https://user-images.githubusercontent.com/85772166/197642051-a5a02f15-6e5b-464f-9ba9-0d2299488021.png"/>',id:"img-width1233-althistorical-price-of-gef--zqf-srchttpsuser-imagesgithubusercontentcom85772166197642051-a5a02f15-6e5b-464f-9ba9-0d2299488021png",level:2},{value:"How to Use",id:"how-to-use-1",level:2}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Futures menu provides historical prices and the current term structure for an asset. This menu is accessible from the Main menu by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"futures")," and pressing the ",(0,a.kt)("inlineCode",{parentName:"p"},"enter")," key."),(0,a.kt)("img",{width:"1135",alt:"Futures Menu",src:"https://user-images.githubusercontent.com/85772166/197641556-80d83abb-6290-4fc9-b80a-331bcc5751e5.png"}),(0,a.kt)("h2",{id:"how-to-use"},"How to Use"),(0,a.kt)("p",null,"There are three basic functions within this menu:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Search"),(0,a.kt)("li",{parentName:"ul"},"Historical"),(0,a.kt)("li",{parentName:"ul"},"Curve")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Search")," allows the user to find which instruments are supported, and can be searched by the description. For example, searching for silver will return these results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"search -d silver\n")),(0,a.kt)("img",{width:"603",alt:"Search Futures",src:"https://user-images.githubusercontent.com/85772166/197641622-8e90785a-f758-4911-9068-eb4f528f42e9.png"}),(0,a.kt)("p",null,"To view an entire category, attach the ",(0,a.kt)("inlineCode",{parentName:"p"},"--category")," flag to the function and select using the arrow keys."),(0,a.kt)("img",{width:"275",alt:"Futures Categories",src:"https://user-images.githubusercontent.com/85772166/197641664-3e63b68b-a4be-4dd6-a7a8-47e0cbef0b61.png"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"search --category currency\n")),(0,a.kt)("img",{width:"493",alt:"Currency Futures",src:"https://user-images.githubusercontent.com/85772166/197641730-b488d1d0-3f82-4da4-8f07-8973b86e9585.png"}),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"curve")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"historical")," use the ticker symbol shown by the search function, for example, to see a chart of the current Eurodollar Futures term structure, simply enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"`curve GE`\n")),(0,a.kt)("img",{width:"1218",alt:"Eurodollar Futures Curve",src:"https://user-images.githubusercontent.com/85772166/197641789-dc56b59f-e5c3-4186-b88c-9f899cdf650a.png"}),(0,a.kt)("p",null,"The raw data can be printed as a table or exported to a file, by attaching the optional arguments: ",(0,a.kt)("inlineCode",{parentName:"p"},"--raw"),", or, ",(0,a.kt)("inlineCode",{parentName:"p"},"--export {filetype}"),". For example, Global Emissions Offset Futures:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curve GEO --raw\n")),(0,a.kt)("img",{width:"386",alt:"Futures Raw Data",src:"https://user-images.githubusercontent.com/85772166/197641865-aa3c8649-21c2-4217-b921-f426776430b1.png"}),(0,a.kt)("p",null,"The continuous chart is displayed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"historical")," command + the symbol. To see the optional arguments available for the command, deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," flag. For example, the Eurodollar Futures contract for December 2024 expiry is displayed with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"historical GE -s 2015-01-01 -e 2024-12\n")),(0,a.kt)("img",{width:"1205",alt:"Historical Price of GEZ24.CME",src:"https://user-images.githubusercontent.com/85772166/197641999-599e2b0a-4578-4d36-b5c5-704c5ac9a0fa.png"}),(0,a.kt)("p",null,"Multiple continuous charts can be plotted on the same chart by using a comma-separated list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"historical GE,ZQ -s 2007-01-01\n")),(0,a.kt)("h2",{id:"img-width1233-althistorical-price-of-gef--zqf-srchttpsuser-imagesgithubusercontentcom85772166197642051-a5a02f15-6e5b-464f-9ba9-0d2299488021png"},(0,a.kt)("img",{width:"1233",alt:"Historical Price of GE=F & ZQ=F",src:"https://user-images.githubusercontent.com/85772166/197642051-a5a02f15-6e5b-464f-9ba9-0d2299488021.png"})),(0,a.kt)("p",null,"title: Introduction to Futures\nkeywords: ","['forex', 'currency', 'money', 'hedge', 'dollar', 'euro', 'futures', 'future', 'interest', 'rates', 'forwards', 'commodities', 'bonds', 'treasuries']",'\nexcerpt: "This guide explains how to use the Futures menu and provides a brief description of its sub-menus"\ngeekdocCollapseSection: true'),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The Futures menu provides historical prices and the current term structure for an asset. This menu is accessible from the Main menu by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"futures")," and pressing the ",(0,a.kt)("inlineCode",{parentName:"p"},"enter")," key."),(0,a.kt)("img",{width:"1135",alt:"Futures Menu",src:"https://user-images.githubusercontent.com/85772166/197641556-80d83abb-6290-4fc9-b80a-331bcc5751e5.png"}),(0,a.kt)("h2",{id:"how-to-use-1"},"How to Use"),(0,a.kt)("p",null,"There are three basic functions within this menu:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Search"),(0,a.kt)("li",{parentName:"ul"},"Historical"),(0,a.kt)("li",{parentName:"ul"},"Curve")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Search")," allows the user to find which instruments are supported, and can be searched by the description. For example, searching for silver will return these results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"search -d silver\n")),(0,a.kt)("img",{width:"603",alt:"Search Futures",src:"https://user-images.githubusercontent.com/85772166/197641622-8e90785a-f758-4911-9068-eb4f528f42e9.png"}),(0,a.kt)("p",null,"To view an entire category, attach the ",(0,a.kt)("inlineCode",{parentName:"p"},"--category")," flag to the function and select using the arrow keys."),(0,a.kt)("img",{width:"275",alt:"Futures Categories",src:"https://user-images.githubusercontent.com/85772166/197641664-3e63b68b-a4be-4dd6-a7a8-47e0cbef0b61.png"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"search --category currency\n")),(0,a.kt)("img",{width:"493",alt:"Currency Futures",src:"https://user-images.githubusercontent.com/85772166/197641730-b488d1d0-3f82-4da4-8f07-8973b86e9585.png"}),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"curve")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"historical")," use the ticker symbol shown by the search function, for example, to see a chart of the current Eurodollar Futures term structure, simply enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"`curve GE`\n")),(0,a.kt)("img",{width:"1218",alt:"Eurodollar Futures Curve",src:"https://user-images.githubusercontent.com/85772166/197641789-dc56b59f-e5c3-4186-b88c-9f899cdf650a.png"}),(0,a.kt)("p",null,"The raw data can be printed as a table or exported to a file, by attaching the optional arguments: ",(0,a.kt)("inlineCode",{parentName:"p"},"--raw"),", or, ",(0,a.kt)("inlineCode",{parentName:"p"},"--export {filetype}"),". For example, Global Emissions Offset Futures:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curve GEO --raw\n")),(0,a.kt)("img",{width:"386",alt:"Futures Raw Data",src:"https://user-images.githubusercontent.com/85772166/197641865-aa3c8649-21c2-4217-b921-f426776430b1.png"}),(0,a.kt)("p",null,"The continuous chart is displayed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"historical")," command + the symbol. To see the optional arguments available for the command, deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," flag. For example, the Eurodollar Futures contract for December 2024 expiry is displayed with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"historical GE -s 2015-01-01 -e 2024-12\n")),(0,a.kt)("img",{width:"1205",alt:"Historical Price of GEZ24.CME",src:"https://user-images.githubusercontent.com/85772166/197641999-599e2b0a-4578-4d36-b5c5-704c5ac9a0fa.png"}),(0,a.kt)("p",null,"Multiple continuous charts can be plotted on the same chart by using a comma-separated list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"historical GE,ZQ -s 2007-01-01\n")),(0,a.kt)("img",{width:"1233",alt:"Historical Price of GE=F & ZQ=F",src:"https://user-images.githubusercontent.com/85772166/197642051-a5a02f15-6e5b-464f-9ba9-0d2299488021.png"}))}p.isMDXComponent=!0}}]);