-- messages
-- Glue error messages.

local errorMessages = {
    zeroArguments = "Zero arguments are not allowed.",
    cannotGetProvider = "Cannot get provider '%s' because it does not exist.",
    cannotGetProviderBeforeStart = "Cannot get provider '%s' before onStart.",
    cannotCreateBindingAfterStart = "Cannot create binding '%s' after onStart.",
    providerAlreadyExists = "Provider '%s' already exists.",
    providerDoesNotExist = "Provider '%s' does not exist.",
    providerNameRequired = "Provider name is required.",
    bindingAlreadyExists = "Binding '%s' already exists.",
    bindingProviderNotFound = "Binding Provider '%s' does not exist.",
    bindingNameRequired = "Binding name required.",
    cannotBindToSelf = "Cannot bind to self.",
    noBindingsImplemented = "'%s' did not implement any bindings from '%s', did you mean to bind to '%s'?",
    glueAlreadyStarted = "Glue has already been started.",
    glueNotStarted = "Glue has not been started.",
    invalidBinding = "Binding name must be a string.",
    invalidExtensions = "Extensions must be a table of mapped functions.",
    invalidExtension = "Extension '%s' must be a function.",
    invalidExtensionName = "Extension '%s' must be a string.",
    invalidProviderDefinition = "Provider definition must be a table.",
    unrecognizedExtension = "Unrecognized extension '%s'.",
    extensionsAlreadySet = "Extensions have already been set.",

    invalidErrorObject = "Invalid error object.",
    unkownErrorMessage = "Unknown error message: ERROR",
}

return errorMessages