import { IMediator } from "./IMediator";
import { INotification } from "./INotification";
import { IProxy } from "./IProxy";

/**
 * PureMVC Facade 接口定义
 * 
 * 在PureMVC中，Facade充当核心MVC参与者（模型，视图，控制器）和应用程序的其余部分。
 */
export interface IFacade {
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

    /**
     * @description 注册Proxy
     * @param {IProxy} proxy Proxy实例
     */
    registerProxy(proxy: IProxy): void;
    /**
     * @description 查找Proxy
     * @param proxyName Proxy名称
     * @returns {IProxy} Proxy实例
     */
    retrieveProxy(proxyName: string): IProxy;
    /**
     * @description 移除Proxy
     * @param {string} proxyName Proxy名称
     * @return {IProxy} 被移除实例
     */
    removeProxy(proxyName: string): IProxy;
    /**
     * @description 判断Proxy是否已被注册
     * @param proxyName Proxy实例名称
     * @return {boolean}
     */
    hasProxy(proxyName: string): boolean;

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

    /**
     * @description 通知IObserver以获得特定的INotification。
     * @param {INotification} notification 通知实例
     */
    notifyObservers(notification: INotification): void;

    /**
     * @description 
     * @param {string} name
     * @param {any} body
     * @param {string} type
     */
    sendNotification(name: string, body: any, type: string): void
}