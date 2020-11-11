import { IMediator } from "./IMediator";
import { INotification } from "./INotification";
import { IObserver } from "./IObserver";

/**
 * PureMVC View 接口定义。
 *
 * View实例：
 * 维护IMediator实例缓存。
 * 提供用于注册，查找和删除IMediator的方法。
 * 在注册或删除IMediator钩子函数。
 * 管理Observer列表中的每个INotification。
 * 将INotification添加到Observer列表中。
 * 提供一种广播INotification的方法。
 * 在接受INotification时通知对应IObserver。
 */
export interface IView {
    /**
     * @description 注册Observer
     * @param {string} notificationName Observer实例名称
     * @param {IObserver} observer Observer实例
     */
    registerObserver(notificationName: string, observer: IObserver): void;
    /**
     * @description 移除Observer实例
     * @param {string} notificationName Observer实例名称
     * @param {any} notifyContext Observer对象
     */
    removeObserver(notificationName: string, notifyContext: any): void;
    /**
     * @description 通知IObserver以获得特定的INotification。
     * @param {INotification} notification 通知实例
     */
    notifyObservers(notification: INotification): void;

    /**
     * @description 注册IMediator实例
     * @param {IMediator} mediator
     */
    registerMediator(mediator: IMediator): void;
    /**
     * @description 查找IMediator实例
     * @param mediatorName IMediator实例名称
     * @returns {IMediator} IMediator实例
     */
    retrieveMediator(mediatorName: string): IMediator;
    /**
     * @description 移除IMediator实例
     * @param mediatorName IMediator实例名称
     * @returns {IMediator} IMediator实例
     */
    removeMediator(mediatorName: string): IMediator;
    /**
     * @description IMediator实例是否已注册
     * @param mediatorName IMediator实例名称
     * @returns {boolean}
     */
    hasMediator(mediatorName: string): boolean;
}