"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[974],{65200:e=>{e.exports=JSON.parse('{"functions":[{"name":"Event","desc":"Constructs a NetworkEvent.","params":[{"name":"Name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"NetworkEvent"}],"function_type":"static","source":{"line":25,"path":"src/Network/init.lua"}},{"name":"Function","desc":"Constructs a NetworkFunction.","params":[{"name":"Name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"NetworkFunction"}],"function_type":"static","source":{"line":34,"path":"src/Network/init.lua"}}],"properties":[],"types":[{"name":"Middleware","desc":"","lua_type":"(Next: (...any) -> (), ...) -> (...any)","source":{"line":11,"path":"src/types.luau"}},{"name":"NetworkEvent","desc":"","fields":[{"name":"OnEvent","lua_type":"(NetworkEvent, ...Middleware) -> ()","desc":""},{"name":"Connect","lua_type":"(NetworkEvent, ...Middleware) -> EventConnection","desc":""},{"name":"Once","lua_type":"(NetworkEvent, ...Middleware) -> EventConnection","desc":""},{"name":"Fire","lua_type":"(NetworkEvent, ...any) -> ()","desc":""},{"name":"FireAll","lua_type":"(NetworkEvent, ...any) -> ()","desc":""}],"source":{"line":28,"path":"src/Network/Event.lua"}},{"name":"NetworkFunction","desc":"","fields":[{"name":"Invoke","lua_type":"((Player, ...any) -> ()) & ((...any) -> ())","desc":""},{"name":"OnInvoke","lua_type":"(function (Player, ...any) -> ())","desc":""}],"source":{"line":22,"path":"src/Network/Function.lua"}}],"name":"Network","desc":"Compact networking library.","source":{"line":16,"path":"src/Network/init.lua"}}')}}]);