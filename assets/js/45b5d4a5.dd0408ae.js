"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[141],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34838:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:6},l="Networking",i={unversionedId:"networking",id:"networking",title:"Networking",description:"Glue allows for a modular approach at writing netcode by removing the necessity of keeping track of RemoteEvents/RemoteFunctions. These are embedded as singleton objects, instantiated by Glue on runtime. Let's look at a simple example of server-client communication using Glue.Network.",source:"@site/docs/networking.md",sourceDirName:".",slug:"/networking",permalink:"/glue/docs/networking",draft:!1,editUrl:"https://github.com/afrxo/glue/edit/master/docs/networking.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Packages",permalink:"/glue/docs/packages"},next:{title:"Services",permalink:"/glue/docs/services"}},c={},s=[],u={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"networking"},"Networking"),(0,a.kt)("p",null,"Glue allows for a modular approach at writing netcode by removing the necessity of keeping track of RemoteEvents/RemoteFunctions. These are embedded as singleton objects, instantiated by Glue on runtime. Let's look at a simple example of server-client communication using ",(0,a.kt)("inlineCode",{parentName:"p"},"Glue.Network"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Server"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local Glue = require(game:GetService("ReplicatedStorage").Glue)\nlocal Network = Glue.Network\n\n-- Create the NetworkEvent\nlocal Signal = Network.Event("ExampleSignal")\n\n-- Listen to any client events\nSignal:OnEvent(function(Player: Player)\n    print("Ping")\n    -- Fire an event to the client\n    Signal:Fire(Player)\nend)\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Client"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local Glue = require(game:GetService("ReplicatedStorage").Glue)\nlocal Network = Glue.Network\n\n-- Wait for the RemoteSignal to \nlocal Signal = Network.Event("ExampleSignal")\n\n-- Listen to events from the server\nSignal:OnEvent(function()\n    print("Pong")\nend)\n\n-- Fire an event to the server\nSignal:Fire()\n')),(0,a.kt)("h1",{id:"middleware"},"Middleware"),(0,a.kt)("p",null,"What is a middleware? A middleware is an operation or task, that lies between two processes. Middlewares might be useful for cutting down on tasks required by multiple endpoints. Middlewares are embedded as simple functions in Glue, here's a classic example: We would like to log any requests made to an event endpoint, here's how it would look like in Glue:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local Glue = require(game:GetService("ReplicatedStorage").Glue)\nlocal Network = Glue.Network\n\nlocal Signal = Network.Event("ExampleSignal")\n\nlocal LoggerMiddleware = function(Next, Player, ...)\n    warn(string.format("[EVENT LOG] Client %s fired event %s", Player.Name, Signal.Name), ...)\n    Next(Player, ...)\nend\n\nSignal:OnEvent(LoggerMiddleware, function(Player, ...)\n    DoSomething(Player, ...)\nend)\n')),(0,a.kt)("p",null,"The same concept is applicable to NetworkFunctions, the next statement must simply return any values that need to be sent back:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local Glue = require(game:GetService("ReplicatedStorage").Glue)\nlocal Network = Glue.Network\n\nlocal Signal = Network.Function("ExampleSignal")\n\nlocal MultiplierMiddleware = function(Next, Player, Value)\n    return Next(Player, Value * 2)\nend\n\nSignal:OnInvoke(MultiplierMiddleware, function(Player, Value)\n    return Value\nend)\n')))}p.isMDXComponent=!0}}]);