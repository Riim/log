export declare type THandler = (...args: Array<any>) => void;
export declare type TLog = THandler & {
    setHandler: (handler: THandler) => TLog;
};
export declare const logInfo: TLog;
export declare const logWarn: TLog;
export declare const logError: TLog;
export { logInfo as log, logInfo as info, logWarn as warn, logError as error };
