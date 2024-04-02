"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[469],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(t),g=o,m=c["".concat(u,".").concat(g)]||c[g]||p[g]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},32722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const a={sidebar_position:8},i="Bindings",l={unversionedId:"bindings",id:"bindings",title:"Bindings",description:"Bindings allow providers to have interal methods executed externally, past the Service layer. Let's look at an example:",source:"@site/docs/bindings.md",sourceDirName:".",slug:"/bindings",permalink:"/glue/docs/bindings",draft:!1,editUrl:"https://github.com/afrxo/glue/edit/master/docs/bindings.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"Networking",permalink:"/glue/docs/networking"},next:{title:"Extensions",permalink:"/glue/docs/extensions"}},u={},d=[{value:"Full Example",id:"full-example",level:2}],s={toc:d},c="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bindings"},"Bindings"),(0,o.kt)("p",null,"Bindings allow providers to have interal methods executed externally, past the Service layer. Let's look at an example:"),(0,o.kt)("p",null,"Here we have two providers, one consumer providers that reacts to the vendor provider, and the vendor provider that emits a reaction to the consumer provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local Consumer = Glue.Provider("Consumer1")\n\nfunction Consumer:valueChanged(value: string)\n    print("New value ->", value)\nend\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local Vendor = Glue.Provider("Vendor")\n\nfunction Vendor:onCreate()\n    self.value = "Foo"\nend\n\nfunction Vendor:onStart()\n    self:changeValue("Bar")\nend\n\nfunction Vendor:changeValue(value: string)\n    self.value = value\nend\n')),(0,o.kt)("p",null,"So how do we get the two consumers to react to the vendor provider? Enter Bindings. Bindings are a way to bind a provider to a consumer. Well, how do we bind a provider to a consumer?"),(0,o.kt)("p",null,"To create a binding, you use the createBinding function, that gets passed into ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider.onConfig"),". The key of the binding specifies the name of the binding. ",(0,o.kt)("inlineCode",{parentName:"p"},"createBinding")," returns a symbol, that gets resolved after ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider.onCreate"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function Vendor:onConfig(bindTo, createBinding)\n    self.valueChanged = createBinding()\nend\n")),(0,o.kt)("p",null,"Well, now we created the binding, how do we emit it though? It's pretty simple, the Binding Symbol resolves to a function, so we can simply call it like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function Vendor:changeValue(value: string)\n    self.value = value\n    self.valueChanged(value)\nend\n")),(0,o.kt)("p",null,"If we run this nothing will happen, since we haven't bound the consumer to the vendor provider directly. This step is vital in security so the developer can directly control method invocation. Here's how that looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'function Consumer:onConfig(bindTo, createBinding)\n    bindTo("Vendor")\nend\n')),(0,o.kt)("p",null,"The string passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"bindTo")," must be the name of the provider you are binding to. If the provider does not exist, glue will throw an error."),(0,o.kt)("h2",{id:"full-example"},"Full Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Vendor.lua")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local Vendor = Glue.Provider("Vendor")\n\nfunction Vendor:onConfig(bindTo, createBinding)\n    self.valueChanged = createBinding()\nend\n\nfunction Vendor:onCreate()\n    self.value = "Foo"\nend\n\nfunction Vendor:onStart()\n    self:changeValue("Bar")\nend\n\nfunction Vendor:changeValue(value: string)\n    self.value = value\n    self.valueChanged(value)\nend\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Consumer.lua")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local Consumer = Glue.Provider({"Consumer")\n\nfunction Consumer:onConfig(bindTo, createBinding)\n    bindTo("Vendor")\nend\n\nfunction Consumer:valueChanged(value: string)\n    print("New value from Consumer:", value)\nend\n')))}p.isMDXComponent=!0}}]);