import { INotification } from "./INotification";

/**
 * PureMVC Controller 接口定义
 */
export interface IController {

    /**
     * @description 执行用户命令
     * @param {INotification} notification 通知
     */
    executeCommand(notification: INotification): void;
    /**
     * @description 注册命令
     * @param {string} notificationName 命令名称
     * @param {Function} commandClassRef 命令构造方法
     */
    registerCommand(notificationName: string, commandClassRef: Function): void;

    /**
     * @description 移除命令
     * @param {string} notificationName
     */
    removeCommand(notificationName: string): void;

    /**
     * @description 查找命令是否已注册
     * @param notificationName 命令名称
     * @return {boolean}
     */
    hasCommand(notificationName: string): boolean;
}