---
sidebar_position: 9
---

# Extensions

An extension simply adds functionality or transformation to a provider during runtime. Extensions are useful for *collectively* modifying providers externally within the Glue Intialization pipeline.

Glue provides two modifiable extensions:
- `beforeCreate`: This extension is run before the provider is created.
- `beforeStart`: This extension is run before the provider is started.

How do you specifiy an extension?

```lua
Glue.Extensions({
    beforeCreate = function(provider)

    end,
    beforeStart = function(provider)

    end
})
```

## Logger - Extenstion

A built-in logger.

```lua
local Services = {}
Glue.Extensions({
    beforeCreate = function(provider)
        provider._log = function(msg)
            print(`[{provider.Name}] {msg}`)
        end
    end
})
```
```lua
function Provider:onStart()
	self._log("Hello world.")
end
```
