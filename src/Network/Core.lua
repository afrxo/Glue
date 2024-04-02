--!strict
--[[

    The internal class that handles Networking.

]]

local Dependencies = require(script.Parent.Parent.Dependencies)

local RunService = game:GetService("RunService")
local isServer = RunService:IsServer()
local isClient = RunService:IsClient()

local RemoteFolderName = "Endpoints"

--[[

    Simple string to int hash function.

]]
local function HashStringToInt(s)
    local h = 37
    for c = 1, s:len() do
        h = (bit32.lshift(h, 5) + h) + c * string.byte(s:sub(c, c))
    end
    return h
end


local Dependency = Dependencies.Dependency("NetworkClass")
Dependency:useDependency("NetworkEvent")
Dependency:useDependency("NetworkFunction")

local Network = setmetatable({}, {__metatable = "Network", __index = Dependency})

local RemoteFolder: Folder;
if (isServer) then
    if script.Parent.Parent:FindFirstChild(RemoteFolderName) then
        RemoteFolder = script.Parent.Parent:FindFirstChild(RemoteFolderName)
    else
        RemoteFolder = Instance.new("Folder", script.Parent.Parent)
        RemoteFolder.Name = RemoteFolderName
    end
elseif (isClient) then
    RemoteFolder = script.Parent.Parent:WaitForChild(RemoteFolderName)
end

function Network:MakeMiddlewareFactory(Signal)
    local Index = 0

    local function runCallbacks(Callbacks, args)
        local RootNode = Callbacks[1]

        if (not RootNode) then return end

        local function Next(...)
            Index = Index + 1
            if (Index > #Callbacks) or (#Callbacks == 0) then
                return
            end
            if (Index == #Callbacks) then
                return Callbacks[Index](...)
            else
                return Callbacks[Index](Next, ...)
            end
        end

        if (#Callbacks == 1) then
            return RootNode(table.unpack(args))
        else
            Index = 1
            return RootNode(Next, table.unpack(args))
        end
    end

    return function (...)
        if (#Signal._callbacks >= 1) then
            return runCallbacks(Signal._callbacks, {...})
        end

        if (Signal._connections) then
            for _, connection in Signal._connections do
                runCallbacks(connection.callbacks, {...})
            end
        end
    end
end


--[[

    Initializes a RemoteEvent/RemoteFunction from NetworkSignal info.

]]
function Network:BuildRemoteFromName(Name: string, Type: string)
    local HashedName = tostring(HashStringToInt(Name))
    local RemoteType = "";
    if (Type == "NetworkFunction") then
        RemoteType = "RemoteFunction"
    elseif (Type == "NetworkEvent") then
        RemoteType = "RemoteEvent"
    else
        error("Unknown type: " .. Type)
    end
    if (isServer) then
        local _instance = RemoteFolder:FindFirstChild(HashedName)
        if (_instance) and _instance.ClassName == Type then
            error("Remote " .. Type .. " with name " .. Name .. " already exists.")
        end
        local NewRemoteEndpoint = Instance.new(RemoteType, RemoteFolder)
        NewRemoteEndpoint.Name = HashedName
        return NewRemoteEndpoint
    end

    return RemoteFolder:WaitForChild(HashedName)
end


function Network:GetIncomingMiddleware()
    local Middleware = table.create(100)
    for _,  middleware in ipairs(Dependencies:Capture("IncomingMiddleware")) do
        table.insert(Middleware, middleware.task)
    end
    return Middleware
end


--[[

    Initializes a NetworkEvent.

]]
function Network:BuildNetworkEvent(Event: any)
    Event._remote = self:BuildRemoteFromName(Event.Name, getmetatable(Event) :: string)
    Event._callbacks = {}
    Event._connections = {}

    if (isServer) then
        Event._remote.OnServerEvent:Connect(self:MakeMiddlewareFactory(Event))
    elseif (isClient) then
        Event._remote.OnClientEvent:Connect(self:MakeMiddlewareFactory(Event))
    end
end


--[[

    Initializes a NetworkFunction.

]]
function Network:BuildNetworkFunction(Function: any)
    Function._remote = self:BuildRemoteFromName(Function.Name, getmetatable(Function) :: string)
    Function._callbacks = {}

    if (isServer) then
        Function._remote.OnServerInvoke = self:MakeMiddlewareFactory(Function)
    elseif (isClient) then
        Function._remote.OnClientInvoke = self:MakeMiddlewareFactory(Function)
    end
end


Dependency._dependencyUpdated = function(_, newDependency)
    if (newDependency.tag == "NetworkEvent") then
        Network:BuildNetworkEvent(newDependency)
    elseif (newDependency.tag == "NetworkFunction") then
        Network:BuildNetworkFunction(newDependency)
    end
end

return Network