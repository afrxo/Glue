--!strict
-- glueManager.luau
-- Manages glues internal tasks.

local Dependencies = require(script.Parent.Dependencies)

-- Set the configured extensions.
local function UseExtensions(Extensions)
    for extension, transform in pairs(Extensions) do
        local Dependency = Dependencies.Dependency("Extension")
        local ExtensionObject = setmetatable({transform = transform, name = extension}, {__index = Dependency})
        Dependencies:Use(ExtensionObject)
    end
end

-- Get a Provider by name.
function GetProvider(Name: string, forceProvider: boolean?)
    local Provider = table.unpack(Dependencies:Capture("Provider", function(Dependency)
        if (Dependency.Name == Name) then
            return true
        end
        return false
    end))

    if (Provider) then
        if (forceProvider) then
            return Provider
        end
        -- Expose the provider's service if it exists.
        return Provider.Service or Provider
    end

    return
end

return {
    GetProvider = GetProvider;
    UseExtensions = UseExtensions;
}