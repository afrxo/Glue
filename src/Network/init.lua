--!strict
--[[

	Entry point for the Networking library.

]]

local Event = require(script:WaitForChild("Event"))
local Function = require(script:WaitForChild("Function"))

--[=[
    @class Network

    Compact networking library.
]=]
local Network = {}

--[=[
    @function Event
    @param Name string
    @return NetworkEvent
    @within Network
    Constructs a NetworkEvent.
]=]
Network.Event, Network.fromRemoteEvent = Event()

--[=[
    @function Function
    @param Name string
    @return NetworkFunction
    @within Network
    Constructs a NetworkFunction.
]=]
Network.Function, Network.fromRemoteFunction = Function()

return Network