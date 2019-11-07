export type THandler = (...args: Array<any>) => void;
export type TLog = THandler & { setHandler: (handler: THandler) => TLog };

let logInfo_handler: THandler = console.log.bind(console);
let logWarn_handler: THandler = console.warn.bind(console);
let logError_handler: THandler = console.error.bind(console);

export const logInfo: TLog = (...args) => {
	logInfo_handler.apply(null, args);
};
logInfo.setHandler = (handler: THandler): TLog => {
	logInfo_handler = handler;
	return logInfo;
};

export const logWarn: TLog = (...args) => {
	logWarn_handler.apply(null, args);
};
logWarn.setHandler = (handler: THandler): TLog => {
	logWarn_handler = handler;
	return logWarn;
};

export const logError: TLog = (...args) => {
	logError_handler.apply(null, args);
};
logError.setHandler = (handler: THandler): TLog => {
	logError_handler = handler;
	return logError;
};

export { logInfo as log, logInfo as info, logWarn as warn, logError as error };
