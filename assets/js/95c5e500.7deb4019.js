"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Introduction to Comparison Analysis",keywords:["Comparison","analysis","ca","menu","submenu","stocks","compare","correlation","similar","historical","hcorr","volume","income","balance","cashflow","sentiment","scorr","overview","valuation","financial","ownership","performance","technical","tsne","get --source Polygon","get --source Finnhub","get","set","add","rmv","Polygon","Finnhub","Finviz","Yahoo","yFinance","FinBrain","market","watch"],date:"2022-05-27",type:"guides",status:"publish",excerpt:"An Introduction to Comparison Analysis, within the Stocks Menu, with a brief overview of the features."},i=void 0,s={unversionedId:"features/stocks/ca/ca",id:"features/stocks/ca/ca",title:"Introduction to Comparison Analysis",description:"The Comparison Analysis menu provides the user with tools for:",source:"@site/content/terminal/features/stocks/ca/ca.md",sourceDirName:"features/stocks/ca",slug:"/features/stocks/ca/",permalink:"/docs/terminal/features/stocks/ca/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/ca/ca.md",tags:[],version:"current",frontMatter:{title:"Introduction to Comparison Analysis",keywords:["Comparison","analysis","ca","menu","submenu","stocks","compare","correlation","similar","historical","hcorr","volume","income","balance","cashflow","sentiment","scorr","overview","valuation","financial","ownership","performance","technical","tsne","get --source Polygon","get --source Finnhub","get","set","add","rmv","Polygon","Finnhub","Finviz","Yahoo","yFinance","FinBrain","market","watch"],date:"2022-05-27",type:"guides",status:"publish",excerpt:"An Introduction to Comparison Analysis, within the Stocks Menu, with a brief overview of the features."},sidebar:"tutorialSidebar",previous:{title:"whatif",permalink:"/docs/terminal/features/stocks/bt/whatif/"},next:{title:"balance",permalink:"/docs/terminal/features/stocks/ca/balance/"}},c={},l=[{value:"How to use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"To run a demonstration of the commands presented here, in the OpenBB Terminal, run this command from the home menu: <code>exe routines/comparison_demo.openbb</code>",id:"to-run-a-demonstration-of-the-commands-presented-here-in-the-openbb-terminal-run-this-command-from-the-home-menu-exe-routinescomparison_demoopenbb",level:2},{value:"How to use",id:"how-to-use-1",level:2},{value:"Examples",id:"examples-1",level:2}],m={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Comparison Analysis menu provides the user with tools for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"searching and populating a list of companies that are similar to the loaded\nticker."),(0,r.kt)("li",{parentName:"ul"},"building a correlation matrix."),(0,r.kt)("li",{parentName:"ul"},"comparing the price and volume history of multiple companies."),(0,r.kt)("li",{parentName:"ul"},"comparing financial statements, technical performance, and ownership\nstatistics of otherwise similar companies."),(0,r.kt)("li",{parentName:"ul"},"comparing sentiment of similar companies."),(0,r.kt)("li",{parentName:"ul"},"building a list of companies to use features from the",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/portfolio/po/",target:"_blank"},"Portfolio Optimization menu"),".")),(0,r.kt)("p",null,"To use all features in this menu, the following"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/#accessing-other-sources-of-data-via-api-keys",target:"_blank"},"API keys (free)")," must be obtained by the user:",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://finnhub.io/",target:"_blank"},"Finnhub"),"`get --source Finnhub`"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://polygon.io/",target:"_blank"},"Polygon"),"`get --source Polygon`")),(0,r.kt)("p",null,"It is not necessary to load a ticker from the"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},"stocks"),"menu to use these features. Enter the Comparison Analysis submenu by typing `ca` and pressing `ENTER` (\u23ce).",(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171148283-2cbb5942-dc56-4276-a30c-7cbc045627a1.png"},(0,r.kt)("img",{alt:"Comparison Analysis Menu",src:"https://user-images.githubusercontent.com/46355364/171148283-2cbb5942-dc56-4276-a30c-7cbc045627a1.png"})),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"To add a primary ticker, or to swap it for another, enter ",(0,r.kt)("inlineCode",{parentName:"p"},"ticker AMZN"),". The\ncommand has three sources, use: ",(0,r.kt)("inlineCode",{parentName:"p"},"get --source Finnhub"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"get --source Polygon"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," to access the different sources. Sources may return different results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ca/ $ get\n[Finviz] Similar Companies: WMT, BIG, BJ, COST, DG, DLTR, OLLI, PSMT, TGT, TUEM\n\n(\ud83e\udd8b) /stocks/ca/ $ get --source Polygon\n[Polygon] Similar Companies: WMT, AMZN, COST, EBAY, DLTR, KSS, JCP, TGT, M, DG\n\n(\ud83e\udd8b) /stocks/ca/ $ get --source Finnhub\n[Finnhub] Similar Companies: WMT, COST, BJ, PSMT\n")),(0,r.kt)("p",null,"Using any of these commands will automatically populate the list of similar\ncompanies for analysis. Furthermore, ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"rmv")," allows the user to make\nmodifications, or create a list from scratch."),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171148589-08cc106f-4e1d-4d94-92b5-09190f1798d4.png"},(0,r.kt)("img",{alt:"Get similar companies for analysis",src:"https://user-images.githubusercontent.com/46355364/171148589-08cc106f-4e1d-4d94-92b5-09190f1798d4.png"})),(0,r.kt)("p",null,"To show a correlation matrix, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"hcorr")," command. The start dates can be\nmodified, which changes the results, to show correlation over different periods.\nFor example, obtain a one year correlation matrix with ",(0,r.kt)("inlineCode",{parentName:"p"},"hcorr"),":"),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171148882-a0f1c57a-6761-4fbc-a03f-e5213a52c7f0.png"},(0,r.kt)("img",{alt:"One year correlation matrix",src:"https://user-images.githubusercontent.com/46355364/171148882-a0f1c57a-6761-4fbc-a03f-e5213a52c7f0.png"})),(0,r.kt)("p",null,"Or, by adjusting the date, it is possible to define a correlation matrix with a\ndifferent time horizon, e.g ",(0,r.kt)("inlineCode",{parentName:"p"},"hcorr -s 2022-01-01"),":"),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171149853-1a84e9af-7099-4a72-b687-01f2e32d0485.png"},(0,r.kt)("img",{alt:"YTD correlation matrix",src:"https://user-images.githubusercontent.com/46355364/171149853-1a84e9af-7099-4a72-b687-01f2e32d0485.png"})),(0,r.kt)("p",null,"The list of similar companies can be compared by a number of fundamental\nmetrics."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"valuation")," displays earnings and valuation multiples."),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171150439-31cbe514-e676-4814-8b4b-a6087e2d417a.png"},(0,r.kt)("img",{alt:"Valuation",src:"https://user-images.githubusercontent.com/46355364/171150439-31cbe514-e676-4814-8b4b-a6087e2d417a.png"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"performance")," compares technical performance of similar companies:"),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171150577-9333c3a2-a60e-47e9-86e9-206187744b2a.png"},(0,r.kt)("img",{alt:"Performance",src:"https://user-images.githubusercontent.com/46355364/171150577-9333c3a2-a60e-47e9-86e9-206187744b2a.png"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sentiment")," is a chart from"),(0,r.kt)("a",{href:"https://finbrain.tech",target:"_blank"},"Finbrain")," that shows sentiment over the last ten days.",(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171150795-cdff5c5e-c0c8-4ca3-ba60-3f148ba80a22.png"},(0,r.kt)("img",{alt:"Performance",src:"https://user-images.githubusercontent.com/46355364/171150795-cdff5c5e-c0c8-4ca3-ba60-3f148ba80a22.png"})),(0,r.kt)("p",null,"This list of similar companies can be imported directly to the"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/portfolio/po/",target:"_blank"},"Portfolio Optimization")," menu by using the command, `po`.",(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171150890-e96722cd-6f18-41a3-b720-bbb3ecaeb4c8.png"},(0,r.kt)("img",{alt:"PO Menu",src:"https://user-images.githubusercontent.com/46355364/171150890-e96722cd-6f18-41a3-b720-bbb3ecaeb4c8.png"})),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The correlation matrix can also be used in other ways, like measuring sectors or\nasset classes. The chart below is a daily, price-normalized, comparison of S&P,\nNASDAQ, and BTC futures."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ca/ $ ticker F\n\n(\ud83e\udd8b) /stocks/ca/ $ historical -n\n")),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171151014-ce034108-7efd-456c-b37a-f41fb6b8aa91.png"},(0,r.kt)("img",{alt:"Historical",src:"https://user-images.githubusercontent.com/46355364/171151014-ce034108-7efd-456c-b37a-f41fb6b8aa91.png"})),(0,r.kt)("p",null,"This is a chart of the NASDAQ 100 Index, and three different futures contracts\nthat are trading against it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ca/ $ set ^NDX,NQH23.CME,NQZ22.CME,NQ=F\n[Custom] Similar Companies: ^NDX, NQH23.CME, NQZ22.CME, NQ=F\n\n(\ud83e\udd8b) /stocks/ca/ $ historical\n")),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171151179-3aa6c72c-0590-4926-9b47-f1741c87813a.png"},(0,r.kt)("img",{alt:"Historical NASDAQ 100",src:"https://user-images.githubusercontent.com/46355364/171151179-3aa6c72c-0590-4926-9b47-f1741c87813a.png"})),(0,r.kt)("p",null,"Compare financial statements of the ten largest US banks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ca/ $ set C,USB,WFC,JPM,TD,GS,PNC,TFC,BAC,COF\n[Custom] Similar Companies: C, USB, WFC, JPM, TD, COF, PNC, TFC, BAC, GS\n(\ud83e\udd8b) /stocks/ca/ $ cashflow\n")),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171151317-5077646d-7488-46ae-9899-515d49f0f114.png"},(0,r.kt)("img",{alt:"Cashflow comparison of the ten largest US banks",src:"https://user-images.githubusercontent.com/46355364/171151317-5077646d-7488-46ae-9899-515d49f0f114.png"})),(0,r.kt)("p",null,"Compare the income statements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ca/ $ income\n")),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171151496-ea1d07ab-de45-4cf0-aa3e-5119101ef861.png"},(0,r.kt)("img",{alt:"Income statements of the ten largest US banks",src:"https://user-images.githubusercontent.com/46355364/171151496-ea1d07ab-de45-4cf0-aa3e-5119101ef861.png"})),(0,r.kt)("h2",{id:"to-run-a-demonstration-of-the-commands-presented-here-in-the-openbb-terminal-run-this-command-from-the-home-menu-exe-routinescomparison_demoopenbb"},"To run a demonstration of the commands presented here, in the OpenBB Terminal, run this command from the home menu: ",(0,r.kt)("inlineCode",{parentName:"h2"},"exe routines/comparison_demo.openbb")),(0,r.kt)("p",null,"title: Introduction to Comparison Analysis keywords: ","['Comparison', 'analysis',\n'ca', 'menu', 'submenu', 'stocks', 'compare', 'correlation', 'similar',\n'historical', 'hcorr', 'volume', 'income', 'balance', 'cashflow', 'sentiment',\n'scorr', 'overview', 'valuation', 'financial', 'ownership', 'performance',\n'technical', 'tsne', 'get --source Polygon', 'get --source Finnhub', 'get',\n'set', 'add', 'rmv', 'Polygon', 'Finnhub', 'Finviz', 'Yahoo', 'yFinance',\n'FinBrain', 'market', 'watch']",' date: "2022-05-27" type: guides status: publish\nexcerpt: "An Introduction to Comparison Analysis, within the Stocks Menu, with a\nbrief overview of the features."'),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The Comparison Analysis menu provides the user with tools for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"searching and populating a list of companies that are similar to the loaded\nticker."),(0,r.kt)("li",{parentName:"ul"},"building a correlation matrix."),(0,r.kt)("li",{parentName:"ul"},"comparing the price and volume history of multiple companies."),(0,r.kt)("li",{parentName:"ul"},"comparing financial statements, technical performance, and ownership\nstatistics of otherwise similar companies."),(0,r.kt)("li",{parentName:"ul"},"comparing sentiment of similar companies."),(0,r.kt)("li",{parentName:"ul"},"building a list of companies to use features from the",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/portfolio/po/",target:"_blank"},"Portfolio Optimization menu"),".")),(0,r.kt)("p",null,"To use all features in this menu, the following"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/#accessing-other-sources-of-data-via-api-keys",target:"_blank"},"API keys (free)")," must be obtained by the user:",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://finnhub.io/",target:"_blank"},"Finnhub"),"`get --source Finnhub`"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://polygon.io/",target:"_blank"},"Polygon"),"`get --source Polygon`")),(0,r.kt)("p",null,"It is not necessary to load a ticker from the"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},"stocks"),"menu to use these features. Enter the Comparison Analysis submenu by typing `ca` and pressing `ENTER` (\u23ce).",(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171148283-2cbb5942-dc56-4276-a30c-7cbc045627a1.png"},(0,r.kt)("img",{alt:"Comparison Analysis Menu",src:"https://user-images.githubusercontent.com/46355364/171148283-2cbb5942-dc56-4276-a30c-7cbc045627a1.png"})),(0,r.kt)("h2",{id:"how-to-use-1"},"How to use"),(0,r.kt)("p",null,"To add a primary ticker, or to swap it for another, enter ",(0,r.kt)("inlineCode",{parentName:"p"},"ticker AMZN"),". The\ncommand has three sources, use: ",(0,r.kt)("inlineCode",{parentName:"p"},"get --source Finnhub"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"get --source Polygon"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," to access the different sources. Sources may return different results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ca/ $ get\n[Finviz] Similar Companies: WMT, BIG, BJ, COST, DG, DLTR, OLLI, PSMT, TGT, TUEM\n\n(\ud83e\udd8b) /stocks/ca/ $ get --source Polygon\n[Polygon] Similar Companies: WMT, AMZN, COST, EBAY, DLTR, KSS, JCP, TGT, M, DG\n\n(\ud83e\udd8b) /stocks/ca/ $ get --source Finnhub\n[Finnhub] Similar Companies: WMT, COST, BJ, PSMT\n")),(0,r.kt)("p",null,"Using any of these commands will automatically populate the list of similar\ncompanies for analysis. Furthermore, ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"rmv")," allows the user to make\nmodifications, or create a list from scratch."),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171148589-08cc106f-4e1d-4d94-92b5-09190f1798d4.png"},(0,r.kt)("img",{alt:"Get similar companies for analysis",src:"https://user-images.githubusercontent.com/46355364/171148589-08cc106f-4e1d-4d94-92b5-09190f1798d4.png"})),(0,r.kt)("p",null,"To show a correlation matrix, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"hcorr")," command. The start dates can be\nmodified, which changes the results, to show correlation over different periods.\nFor example, obtain a one year correlation matrix with ",(0,r.kt)("inlineCode",{parentName:"p"},"hcorr"),":"),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171148882-a0f1c57a-6761-4fbc-a03f-e5213a52c7f0.png"},(0,r.kt)("img",{alt:"One year correlation matrix",src:"https://user-images.githubusercontent.com/46355364/171148882-a0f1c57a-6761-4fbc-a03f-e5213a52c7f0.png"})),(0,r.kt)("p",null,"Or, by adjusting the date, it is possible to define a correlation matrix with a\ndifferent time horizon, e.g ",(0,r.kt)("inlineCode",{parentName:"p"},"hcorr -s 2022-01-01"),":"),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171149853-1a84e9af-7099-4a72-b687-01f2e32d0485.png"},(0,r.kt)("img",{alt:"YTD correlation matrix",src:"https://user-images.githubusercontent.com/46355364/171149853-1a84e9af-7099-4a72-b687-01f2e32d0485.png"})),(0,r.kt)("p",null,"The list of similar companies can be compared by a number of fundamental\nmetrics."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"valuation")," displays earnings and valuation multiples."),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171150439-31cbe514-e676-4814-8b4b-a6087e2d417a.png"},(0,r.kt)("img",{alt:"Valuation",src:"https://user-images.githubusercontent.com/46355364/171150439-31cbe514-e676-4814-8b4b-a6087e2d417a.png"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"performance")," compares technical performance of similar companies:"),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171150577-9333c3a2-a60e-47e9-86e9-206187744b2a.png"},(0,r.kt)("img",{alt:"Performance",src:"https://user-images.githubusercontent.com/46355364/171150577-9333c3a2-a60e-47e9-86e9-206187744b2a.png"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sentiment")," is a chart from"),(0,r.kt)("a",{href:"https://finbrain.tech",target:"_blank"},"Finbrain")," that shows sentiment over the last ten days.",(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171150795-cdff5c5e-c0c8-4ca3-ba60-3f148ba80a22.png"},(0,r.kt)("img",{alt:"Performance",src:"https://user-images.githubusercontent.com/46355364/171150795-cdff5c5e-c0c8-4ca3-ba60-3f148ba80a22.png"})),(0,r.kt)("p",null,"This list of similar companies can be imported directly to the"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/portfolio/po/",target:"_blank"},"Portfolio Optimization")," menu by using the command, `po`.",(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171150890-e96722cd-6f18-41a3-b720-bbb3ecaeb4c8.png"},(0,r.kt)("img",{alt:"PO Menu",src:"https://user-images.githubusercontent.com/46355364/171150890-e96722cd-6f18-41a3-b720-bbb3ecaeb4c8.png"})),(0,r.kt)("h2",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,"The correlation matrix can also be used in other ways, like measuring sectors or\nasset classes. The chart below is a daily, price-normalized, comparison of S&P,\nNASDAQ, and BTC futures."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ca/ $ ticker F\n\n(\ud83e\udd8b) /stocks/ca/ $ historical -n\n")),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171151014-ce034108-7efd-456c-b37a-f41fb6b8aa91.png"},(0,r.kt)("img",{alt:"Historical",src:"https://user-images.githubusercontent.com/46355364/171151014-ce034108-7efd-456c-b37a-f41fb6b8aa91.png"})),(0,r.kt)("p",null,"This is a chart of the NASDAQ 100 Index, and three different futures contracts\nthat are trading against it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ca/ $ set ^NDX,NQH23.CME,NQZ22.CME,NQ=F\n[Custom] Similar Companies: ^NDX, NQH23.CME, NQZ22.CME, NQ=F\n\n(\ud83e\udd8b) /stocks/ca/ $ historical\n")),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171151179-3aa6c72c-0590-4926-9b47-f1741c87813a.png"},(0,r.kt)("img",{alt:"Historical NASDAQ 100",src:"https://user-images.githubusercontent.com/46355364/171151179-3aa6c72c-0590-4926-9b47-f1741c87813a.png"})),(0,r.kt)("p",null,"Compare financial statements of the ten largest US banks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ca/ $ set C,USB,WFC,JPM,TD,GS,PNC,TFC,BAC,COF\n[Custom] Similar Companies: C, USB, WFC, JPM, TD, COF, PNC, TFC, BAC, GS\n(\ud83e\udd8b) /stocks/ca/ $ cashflow\n")),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171151317-5077646d-7488-46ae-9899-515d49f0f114.png"},(0,r.kt)("img",{alt:"Cashflow comparison of the ten largest US banks",src:"https://user-images.githubusercontent.com/46355364/171151317-5077646d-7488-46ae-9899-515d49f0f114.png"})),(0,r.kt)("p",null,"Compare the income statements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ca/ $ income\n")),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171151496-ea1d07ab-de45-4cf0-aa3e-5119101ef861.png"},(0,r.kt)("img",{alt:"Income statements of the ten largest US banks",src:"https://user-images.githubusercontent.com/46355364/171151496-ea1d07ab-de45-4cf0-aa3e-5119101ef861.png"})),(0,r.kt)("p",null,"To run a demonstration of the commands presented here, in the OpenBB Terminal,\nrun this command from the home menu: ",(0,r.kt)("inlineCode",{parentName:"p"},"exe routines/comparison_demo.openbb")))}u.isMDXComponent=!0}}]);