(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.log = {}));
}(this, (function (exports) { 'use strict';

	let logInfo_handler = console.log.bind(console);
	let logWarn_handler = console.warn.bind(console);
	let logError_handler = console.error.bind(console);
	const logInfo = (...args) => {
	    logInfo_handler.apply(null, args);
	};
	logInfo.setHandler = (handler) => {
	    logInfo_handler = handler;
	    return logInfo;
	};
	const logWarn = (...args) => {
	    logWarn_handler.apply(null, args);
	};
	logWarn.setHandler = (handler) => {
	    logWarn_handler = handler;
	    return logWarn;
	};
	const logError = (...args) => {
	    logError_handler.apply(null, args);
	};
	logError.setHandler = (handler) => {
	    logError_handler = handler;
	    return logError;
	};

	exports.error = logError;
	exports.info = logInfo;
	exports.log = logInfo;
	exports.logError = logError;
	exports.logInfo = logInfo;
	exports.logWarn = logWarn;
	exports.warn = logWarn;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
