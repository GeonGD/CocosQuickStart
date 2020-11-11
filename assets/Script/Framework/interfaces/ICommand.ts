import { INotification } from "./INotification";
import { INotifier } from "./INotifier";

/**
 * PureMVC Command 接口定义
 */
export interface ICommand extends INotifier {

    /**
     * @description 执行用户命令，发送通知
     * @param {INotification} notification 通知
     */
    execute(notification: INotification): void;
}