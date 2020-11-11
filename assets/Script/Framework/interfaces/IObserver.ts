import { INotification } from "./INotification";

/** 
 * PureMVC Observer 接口定义。
 * 
 * 在PureMVC中，IObserver实现者承担以下责任：
 * 封装注册对象的回调方法。
 * 封装注册对象的通知内容。
 * 提供用于设置注册对象的方法。
 * 提供一种通知注册对象的方法。
 */
export interface IObserver {
    /**
     * @description 设置通知回调方法
     * @param {Function} notifyMethod
     */
    setNotifyMethod(notifyMethod: Function): void;

    /**
     * @description 设置通知内容
     * @param {any} notifyContext 
     */
    setNotifyContext(notifyContext: any): void;

    /**
     * @description 设置注册对象
     * @param {INotification} notification
     */
    notifyObserver(notification: INotification): void;

    /**
     * @description 将对象与通知内容进行比较
     * @param {any} object 要对比的对象
     * @returns {boolean}
     */
    compareNotifyContext(object: any): boolean;
}