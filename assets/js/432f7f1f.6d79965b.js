"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var i=2;i<s;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86523:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const s={},a=void 0,p={unversionedId:"features/stocks/dd/supplier/supplier",id:"features/stocks/dd/supplier/supplier",title:"supplier",description:"List of suppliers from ticker provided. Source//CSImarket.com",source:"@site/content/terminal/features/stocks/dd/supplier/supplier.md",sourceDirName:"features/stocks/dd/supplier",slug:"/features/stocks/dd/supplier/",permalink:"/docs/terminal/features/stocks/dd/supplier/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/dd/supplier/supplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sec",permalink:"/docs/terminal/features/stocks/dd/sec/"},next:{title:"disc",permalink:"/docs/terminal/features/stocks/disc/"}},c={},i=[],l={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"usage: supplier [--export {csv,json,xlsx}] [-h]\n")),(0,o.kt)("p",null,"List of suppliers from ticker provided. Source: ",(0,o.kt)("a",{parentName:"p",href:"https://CSImarket.com"},"https://CSImarket.com")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  --export {csv,json,xlsx}\n                        Export dataframe data to csv,json,xlsx file\n  -h, --help            show this help message\n")),(0,o.kt)("img",{width:"1400",alt:"supplier",src:"https://user-images.githubusercontent.com/25267873/124523361-b98e5580-ddee-11eb-94dc-08e4df1b17c0.png"}))}u.isMDXComponent=!0}}]);