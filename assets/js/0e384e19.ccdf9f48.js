"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:3},i="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Here's how to start Glue:",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/glue/docs/intro",draft:!1,editUrl:"https://github.com/afrxo/glue/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/glue/docs/install"},next:{title:"Bootstrap",permalink:"/glue/docs/bootstrap"}},c={},p=[{value:"Execution Model",id:"execution-model",level:3},{value:"Creating a Provider",id:"creating-a-provider",level:3}],u={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Here's how to start Glue:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local Glue = require(game:GetService("ReplicatedStorage").Glue)\n\nGlue.Stick()\n')),(0,o.kt)("p",null,"Here's how to start Glue and ",(0,o.kt)("strong",{parentName:"p"},"additionally")," catch any execution errors, using ",(0,o.kt)("a",{parentName:"p",href:"https://eryn.io/roblox-lua-promise"},"Promises"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local Glue = require(game:GetService("ReplicatedStorage").Glue)\n\nGlue.Stick():catch(warn)\n')),(0,o.kt)("h3",{id:"execution-model"},"Execution Model"),(0,o.kt)("p",null,"Providers have two built-in lifecycle methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreate")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"onStart")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Glue.Stick")," calls ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreate")," on all Providers before calling ",(0,o.kt)("inlineCode",{parentName:"p"},"onStart"),", and rendering the Framework as started. Glue will wait for any yielding processes to commence during ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreate")," until it calls ",(0,o.kt)("inlineCode",{parentName:"p"},"onStart"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Glue.Stick -> Provider.onCreate & yield -> Provider.onStart -> Glue.OnStick\n")),(0,o.kt)("h3",{id:"creating-a-provider"},"Creating a Provider"),(0,o.kt)("p",null,"Here is how to create and start provider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local Glue = require(game:GetService("ReplicatedStorage").Glue)\n\n-- Creating the Provider\nlocal ExampleProvider = Glue.Provider( { Name = "ExampleProvider" } )\n\n-- Attaching the onCreate lifeycle method\nfunction ExampleProvider:onCreate()\n    print("I have been created!")\nend\n\n-- Attaching the onStart lifecyle method\nfunction ExampleProvider:onStart()\n    print("I have been started!")\nend\n\n-- Starting Glue\nGlue.Stick():catch(warn)\n')))}s.isMDXComponent=!0}}]);