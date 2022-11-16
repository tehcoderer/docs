"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52419],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),c=n,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),l=r(65488),o=r(85162);const i={title:"yret",description:"OpenBB SDK Function"},p="yret",u={unversionedId:"functions/portfolio/yret",id:"functions/portfolio/yret",title:"yret",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/yret.md",sourceDirName:"functions/portfolio",slug:"/functions/portfolio/yret",permalink:"/docs/sdk/functions/portfolio/yret",draft:!1,tags:[],version:"current",frontMatter:{title:"yret",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"var",permalink:"/docs/sdk/functions/portfolio/var"},next:{title:"bullbear",permalink:"/docs/sdk/functions/stocks/ba/bullbear"}},s={},m=[{value:"portfolio_model.get_yearly_returns",id:"portfolio_modelget_yearly_returns",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"portfolio_view.display_yearly_returns",id:"portfolio_viewdisplay_yearly_returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],d={toc:m};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yret"},"yret"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,n.kt)("h2",{id:"portfolio_modelget_yearly_returns"},"portfolio_model.get_yearly_returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_model.py'",title:"'openbb_terminal/portfolio/portfolio_model.py'"},"def get_yearly_returns(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, window: str) -> None:\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1851"},"Source Code")),(0,n.kt)("p",null,"Description: Get yearly returns"),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"portfolio"),(0,n.kt)("td",{parentName:"tr",align:null},"Portfolio"),(0,n.kt)("td",{parentName:"tr",align:null},"Portfolio object with trades loaded"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"window"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"interval to compare cumulative returns and benchmark"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("p",null,"None"),(0,n.kt)("h2",{id:"examples"},"Examples")),(0,n.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,n.kt)("h2",{id:"portfolio_viewdisplay_yearly_returns"},"portfolio_view.display_yearly_returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_view.py'",title:"'openbb_terminal/portfolio/portfolio_view.py'"},"def display_yearly_returns(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, window: str, raw: bool, export: str, external_axes: Union[matplotlib.axes._axes.Axes, NoneType]) -> None:\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L289"},"Source Code")),(0,n.kt)("p",null,"Description: Display yearly returns"),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"portfolio"),(0,n.kt)("td",{parentName:"tr",align:null},"Portfolio"),(0,n.kt)("td",{parentName:"tr",align:null},"Portfolio object with trades loaded"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"window"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"interval to compare cumulative returns and benchmark"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"raw"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"Display raw data from cumulative return"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"export"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Export certain type of data"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,n.kt)("td",{parentName:"tr",align:null},"plt.Axes"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional axes to display plot on"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"None"),(0,n.kt)("h2",{id:"examples-1"},"Examples"))))}c.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(87462),n=r(67294),l=r(86010),o=r(72389),i=r(67392),p=r(7094),u=r(12466);const s="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:r,block:o,defaultValue:d,values:c,groupId:f,className:y}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??b.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),v=(0,i.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=(0,p.U)(),[_,w]=(0,n.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==_&&k.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,r=O.indexOf(t),a=k[r].value;a!==_&&(x(t),w(a),null!=f&&h(f,String(a)))},E=e=>{var t;let r=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;r=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;r=O[t]??O[O.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},y)},k.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:T},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":_===t})}),r??t)}))),r?(0,n.cloneElement)(b.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function c(e){const t=(0,o.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);