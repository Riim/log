let logInfo_handler = console.log.bind(console);
let logWarn_handler = console.warn.bind(console);
let logError_handler = console.error.bind(console);
export const logInfo = (...args) => {
    logInfo_handler.apply(null, args);
};
logInfo.setHandler = (handler) => {
    logInfo_handler = handler;
    return logInfo;
};
export const logWarn = (...args) => {
    logWarn_handler.apply(null, args);
};
logWarn.setHandler = (handler) => {
    logWarn_handler = handler;
    return logWarn;
};
export const logError = (...args) => {
    logError_handler.apply(null, args);
};
logError.setHandler = (handler) => {
    logError_handler = handler;
    return logError;
};
export { logInfo as log, logInfo as info, logWarn as warn, logError as error };
