import { IProxy } from "./IProxy";

/**
 * PureMVC Proxy 接口定义。
 * 
 * 在PureMVC中， IModel类提供对模型对象的访问，通过IProxy命名查找
 *
 * Model实例：
 * 维护IProxy实例的缓存。
 * 提供用于注册，查找和删除Proxy实例的方法。
 */
export interface IModel {
    /**
     * @description 注册Proxy
     * @param {IProxy} proxy Proxy实例
     */
    registerProxy(proxy: IProxy): void;

    /**
     * @description 移除Proxy
     * @param {string} proxyName Proxy名称
     * @return {IProxy} 被移除实例
     */
    removeProxy(proxyName: string): IProxy;

    /**
     * @description 查找Proxy
     * @param proxyName Proxy名称
     * @returns {IProxy} Proxy实例
     */
    retrieveProxy(proxyName: string): IProxy;

    /**
     * @description 判断Proxy是否已被注册
     * @param proxyName Proxy实例名称
     * @return {boolean} 
     */
    hasProxy(proxyName: string): boolean;
}