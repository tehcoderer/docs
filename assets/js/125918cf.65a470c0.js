"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24994],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=m(a),d=l,k=s["".concat(p,".").concat(d)]||s[d]||c[d]||r;return a?n.createElement(k,o(o({ref:e},u),{},{components:a})):n.createElement(k,o({ref:e},u))}));function d(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},11771:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),r=a(65488),o=a(85162);const i={title:"donchian",description:"OpenBB SDK Function"},p="donchian",m={unversionedId:"functions/common/ta/donchian",id:"functions/common/ta/donchian",title:"donchian",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/common/ta/donchian.md",sourceDirName:"functions/common/ta",slug:"/functions/common/ta/donchian",permalink:"/docs/sdk/functions/common/ta/donchian",draft:!1,tags:[],version:"current",frontMatter:{title:"donchian",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"bbands",permalink:"/docs/sdk/functions/common/ta/bbands"},next:{title:"ema",permalink:"/docs/sdk/functions/common/ta/ema"}},u={},c=[{value:"common_ta_volatility_model.donchian",id:"common_ta_volatility_modeldonchian",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"common_ta_volatility_view.display_donchian",id:"common_ta_volatility_viewdisplay_donchian",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],s={toc:c};function d(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"donchian"},"donchian"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,l.kt)("h2",{id:"common_ta_volatility_modeldonchian"},"common_ta_volatility_model.donchian"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/common/technical_analysis/volatility_model.py'",title:"'openbb_terminal/common/technical_analysis/volatility_model.py'"},"def donchian(data: pd.DataFrame, upper_length: int, lower_length: int) -> DataFrame:\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_model.py#L53"},"Source Code")),(0,l.kt)("p",null,"Description: Calculate Donchian Channels"),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataframe of ohlc prices"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upper_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Length of window to calculate upper channel"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lower_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Length of window to calculate lower channel"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataframe of upper and lower channels")))),(0,l.kt)("h2",{id:"examples"},"Examples")),(0,l.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,l.kt)("h2",{id:"common_ta_volatility_viewdisplay_donchian"},"common_ta_volatility_view.display_donchian"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/common/technical_analysis/volatility_view.py'",title:"'openbb_terminal/common/technical_analysis/volatility_view.py'"},"def display_donchian(data: pd.DataFrame, symbol: str, upper_length: int, lower_length: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_view.py#L112"},"Source Code")),(0,l.kt)("p",null,"Description: Show donchian channels"),(0,l.kt)("h2",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataframe of ohlc prices"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"symbol"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Ticker symbol"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upper_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Length of window to calculate upper channel"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lower_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Length of window to calculate lower channel"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"export"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Format of export file"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"External axes (1 axis is expected in the list), by default None"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("h2",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"None"),(0,l.kt)("h2",{id:"examples-1"},"Examples"))))}d.isMDXComponent=!0},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>d});var n=a(87462),l=a(67294),r=a(86010),o=a(72389),i=a(67392),p=a(7094),m=a(12466);const u="tabList__CuJ",c="tabItem_LNqP";function s(t){var e;const{lazy:a,block:o,defaultValue:s,values:d,groupId:k,className:h}=t,b=l.Children.map(t.children,(t=>{if((0,l.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=d??b.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),g=(0,i.l)(N,((t,e)=>t.value===e.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??(null==(e=b.find((t=>t.props.default)))?void 0:e.props.value)??b[0].props.value;if(null!==y&&!N.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:v}=(0,p.U)(),[_,w]=(0,l.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,m.o5)();if(null!=k){const t=f[k];null!=t&&t!==_&&N.some((e=>e.value===t))&&w(t)}const T=t=>{const e=t.currentTarget,a=x.indexOf(e),n=N[a].value;n!==_&&(O(e),w(n),null!=k&&v(k,String(n)))},D=t=>{var e;let a=null;switch(t.key){case"Enter":T(t);break;case"ArrowRight":{const e=x.indexOf(t.currentTarget)+1;a=x[e]??x[0];break}case"ArrowLeft":{const e=x.indexOf(t.currentTarget)-1;a=x[e]??x[x.length-1];break}}null==(e=a)||e.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},h)},N.map((t=>{let{value:e,label:a,attributes:o}=t;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:t=>x.push(t),onKeyDown:D,onClick:T},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":_===e})}),a??e)}))),a?(0,l.cloneElement)(b.filter((t=>t.props.value===_))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==_})))))}function d(t){const e=(0,o.Z)();return l.createElement(s,(0,n.Z)({key:String(e)},t))}}}]);