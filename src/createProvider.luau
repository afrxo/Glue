-- createProvider.luau
-- Create and initialize au Provider as an internal dependency.

local types = require(script.Parent.types)
local Error = require(script.Parent.Error)
local Dependencies = require(script.Parent.Dependencies)

return function (Name: string)
    local providerDefinition = { Name = Name }

    if (not providerDefinition.Name) then
        Error.throw(Error.new("providerNameRequired"))
    end

    local provider = table.unpack(Dependencies:Capture("Provider", function(Provider)
        if (Provider.Name == Name) then
            return true
        end

        return false
    end))

    if (provider) then
        Error.throw(Error.new("providerAlreadyExists", Name))
    end

    local Dependency = Dependencies.Dependency("Provider")
    local Provider = setmetatable(providerDefinition, {__index = Dependency, __metatable = "Provider"})

    Dependencies:Use(Provider)
    return Provider :: types.Provider<any>
end