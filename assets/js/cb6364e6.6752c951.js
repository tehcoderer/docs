"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18876],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=l,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5805:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=a(87462),l=(a(67294),a(3905)),r=a(65488),o=a(85162);const i={title:"add_hedge_option",description:"OpenBB SDK Function"},p="add_hedge_option",d={unversionedId:"functions/stocks/options/hedge/add_hedge_option",id:"functions/stocks/options/hedge/add_hedge_option",title:"add_hedge_option",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/stocks/options/hedge/add_hedge_option.md",sourceDirName:"functions/stocks/options/hedge",slug:"/functions/stocks/options/hedge/add_hedge_option",permalink:"/docs/sdk/functions/stocks/options/hedge/add_hedge_option",draft:!1,tags:[],version:"current",frontMatter:{title:"add_hedge_option",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"grhist",permalink:"/docs/sdk/functions/stocks/options/grhist"},next:{title:"calc_delta",permalink:"/docs/sdk/functions/stocks/options/hedge/calc_delta"}},s={},u=[{value:"stocks_options_hedge_model.add_hedge_option",id:"stocks_options_hedge_modeladd_hedge_option",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"stocks_options_hedge_view.add_and_show_greeks",id:"stocks_options_hedge_viewadd_and_show_greeks",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],m={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"add_hedge_option"},"add_hedge_option"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,l.kt)("h2",{id:"stocks_options_hedge_modeladd_hedge_option"},"stocks_options_hedge_model.add_hedge_option"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/stocks/options/hedge/hedge_model.py'",title:"'openbb_terminal/stocks/options/hedge/hedge_model.py'"},"def add_hedge_option(price: float, implied_volatility: float, strike: float, days: float, sign: int) -> tuple:\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/hedge/hedge_model.py#L143"},"Source Code")),(0,l.kt)("p",null,"Description: Determine the delta, gamma and vega value of the portfolio and/or options."),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"price"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"The price."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"implied_volatility"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"The implied volatility."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"strike"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"The strike price."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"days"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of days until expiration. Use annual notation thus a month would be 30 / 360."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sign"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether you have a long (1) or short (-1) position"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("h2",{id:"examples"},"Examples")),(0,l.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,l.kt)("h2",{id:"stocks_options_hedge_viewadd_and_show_greeks"},"stocks_options_hedge_view.add_and_show_greeks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/stocks/options/hedge/hedge_view.py'",title:"'openbb_terminal/stocks/options/hedge/hedge_view.py'"},"def add_and_show_greeks(price: float, implied_volatility: float, strike: float, days: float, sign: int) -> None:\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/hedge/hedge_view.py#L15"},"Source Code")),(0,l.kt)("p",null,"Description: Determine the delta, gamma and vega value of the portfolio and/or options and show them."),(0,l.kt)("h2",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"price"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"The price."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"implied_volatility"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"The implied volatility."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"strike"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"The strike price."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"days"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of days until expiration. Use annual notation thus a month would be 30 / 360."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sign"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether you have a long (1) or short (-1) position"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"returns-1"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("h2",{id:"examples-1"},"Examples"))))}c.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),l=a(67294),r=a(86010),o=a(72389),i=a(67392),p=a(7094),d=a(12466);const s="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:a,block:o,defaultValue:m,values:c,groupId:k,className:g}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,i.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:_}=(0,p.U)(),[y,w]=(0,l.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,d.o5)();if(null!=k){const e=v[k];null!=e&&e!==y&&N.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),n=N[a].value;n!==y&&(O(t),w(n),null!=k&&_(k,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},g)},N.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:E},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,l.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function c(e){const t=(0,o.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}}}]);