/**
 * PureMVC Proxy 接口定义。
 * 
 * 在PureMVC中，IProxy实例：
 * 实现一个通用方法，该方法返回实例的名称。
 * 提供用于设置和获取数据对象的方法。
 * 维护对一个或多个模型数据的引用,提供用于处理该数据的方法。
 * 当其模型数据更改时生成INotifications。
 * 封装与用于获取和保留模型数据的本地或远程服务的操作交互
 */
export interface IProxy {
    /**
     * @description 获取proxy的名称
     * @returns {string} 名称
     */
    getProxyName(): string;

    /**
     * @description 设置数据模型
     * @param {any} data 数据
     */
    setData(data: any): void;

    /**
     * @description 获取实例的数据模型
     * @returns {any} 数据
     */
    getData(): any;

    /**
     * @description 注册钩子函数（被子类重写,以了解何时注册实例。）
     */
    onRegister(): void;

    /**
     * @description 移除钩子函数 (由子类重写,以了解何时删除实例)
     */
    onRemove(): void;
}