--!strict
-- types.luau
-- Type definitions for public Glue API

--> Networking

--[=[
    @type Middleware (Next: (...any) -> (), ...) -> (...any)
    @within Network
]=]
export type Middleware = ((...any) -> (...any))
export type EventConnection = {
	Connected: boolean,
	Disconnect: (EventConnection) -> ()
}

export type NetworkEvent = {
	Fire: ((NetworkEvent, ...any) -> ()) & ((NetworkEvent, player: Player, ...any) -> ()),
	Once: (NetworkEvent, ...Middleware) -> EventConnection,
	FireAll: (NetworkEvent, ...any) -> (),
	OnEvent: (NetworkEvent, ...Middleware) -> (),
	Connect: (NetworkEvent, ...Middleware) -> EventConnection,
}

export type NetworkFunction = {
	Invoke: ((NetworkFunction, ...any) -> ...any) & ((NetworkFunction, player: Player, ...any) -> ...any),
	OnInvoke: (NetworkFunction, ...Middleware) -> (),
}

export type Network = {
	Event: (Name: string) -> NetworkEvent,
	Function: (Name: string) -> NetworkFunction
}

--> State

export type Map<T> = { [string]: T }
export type Array<T> = { T }


--> Provider

--[=[
	@interface Provider
	@within Glue
	.Name string

	.onConfig: ((Provider, bindTo: (string) -> (), createBinding: () -> ()) -> ())?,
	.onCreate ((Provider) -> ())?
	.onStart ((Provider) -> ())?
	.onTick ((Provider) -> ())?
	.onRender ((Provider) -> ())?
]=]

export type Provider<Interface> = Interface & {
	Name: string,

	onConfig: ((Provider<Interface>, bindTo: (string) -> (), createBinding: () -> ()) -> ())?,
	onCreate: ((Provider<Interface>) -> ())?,
	onStart: ((Provider<Interface>) -> ())?,

	onTick: ((Provider<Interface>, DeltaTime: number) -> ())?,
	onRender: ((Provider<Interface>, DeltaTime: number) -> ())?
}

export type Glue = {
	Version: string,
	LocalPlayer: Player,
	Network: Network,
	Stick: () -> any,
	OnStick: () -> any,
	Provider: <Interface>(Name: string) -> Provider<Interface>,
	Extensions: <Interface>(Extensions: { [string]: ((Provider<Interface>) -> ()) }) -> (),
}

return 1
