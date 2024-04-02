"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[819],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),f=o,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={sidebar_position:9},a="Extensions",l={unversionedId:"extensions",id:"extensions",title:"Extensions",description:"An extension simply adds functionality or transformation to a provider during runtime. Extensions are useful for collectively modifying providers externally within the Glue Intialization pipeline.",source:"@site/docs/extensions.md",sourceDirName:".",slug:"/extensions",permalink:"/glue/docs/extensions",draft:!1,editUrl:"https://github.com/afrxo/glue/edit/master/docs/extensions.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"defaultSidebar",previous:{title:"Bindings",permalink:"/glue/docs/bindings"},next:{title:"VSC Snippets",permalink:"/glue/docs/Guides/snippets"}},s={},p=[{value:"Logger - Extenstion",id:"logger---extenstion",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extensions"},"Extensions"),(0,o.kt)("p",null,"An extension simply adds functionality or transformation to a provider during runtime. Extensions are useful for ",(0,o.kt)("em",{parentName:"p"},"collectively")," modifying providers externally within the Glue Intialization pipeline."),(0,o.kt)("p",null,"Glue provides two modifiable extensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"beforeCreate"),": This extension is run before the provider is created."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"beforeStart"),": This extension is run before the provider is started.")),(0,o.kt)("p",null,"How do you specifiy an extension?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"Glue.Extensions({\n    beforeCreate = function(provider)\n\n    end,\n    beforeStart = function(provider)\n\n    end\n})\n")),(0,o.kt)("h2",{id:"logger---extenstion"},"Logger - Extenstion"),(0,o.kt)("p",null,"A built-in logger."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local Services = {}\nGlue.Extensions({\n    beforeCreate = function(provider)\n        provider._log = function(msg)\n            print(`[{provider.Name}] {msg}`)\n        end\n    end\n})\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'function Provider:onStart()\n    self._log("Hello world.")\nend\n')))}d.isMDXComponent=!0}}]);