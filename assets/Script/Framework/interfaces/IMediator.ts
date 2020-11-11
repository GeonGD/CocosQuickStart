import { INotification } from "./INotification";
/**
 * PureMVC Mediator 接口定义。
 * 
 * Mediator实例：
 * 实现一个通用方法，该方法返回IMediator实例所有注册的INotification列表
 * 实现INotification回调方法
 * 注册或删除时的钩子方法
 * 充当一个或多个视图组件（例如文本框或文本框）之间的中介控件，维护引用并协调其行为
 * 在PureMVC应用程序中，这是添加事件侦听器及其实现的处理程序，响应并生成INotifications
 * 
 * 当IMediator在 IView 中注册时，IView 将调用IMediator的listNotificationInterests方法，IMediator将返回 INotification 名称列表
 * IView将创建一个 Observer 对象以获得通知。
 * 封装该IMediator的handleNotification方法，用于处理INotification发送的通知
 */
export interface IMediator {
    /**
     * @description 获取Mediator名称
     * @return {string} Mediator名称
     */
    getMediatorName(): string;

    /**
     * @description 获取视图组件（getter）
     * @returns {any} 视图组件
     */
    getViewComponent(): any;

    /**
     * @description 设置视图组件（setter）
     * @param {any} viewComponent 视图组件
     */
    setViewComponent(viewComponent: any): void;

    /**
     * @description 获取INotification名称列表
     * @returns {string[]} INotification名称列表
     */
    listNotificationInterests(): string[];

    /**
     * @description 用于处理notification通知
     * @param {INotification} notification 通知实例
     */
    handleNotification(notification: INotification): void;

    /**
     * @description 注册钩子函数（被子类重写,以了解何时注册实例。）
     */
    onRegister(): void;
    /**
     * @description 移除钩子函数 (由子类重写,以了解何时删除实例)
     */
    onRemove(): void;
}