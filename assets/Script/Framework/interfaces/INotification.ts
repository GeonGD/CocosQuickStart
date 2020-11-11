/**
 * PureMVC Notification 接口定义。
 * 
 * PureMVC不依赖底层事件模型，例如JavaScript DOM API中提供的模型,并且TypeScript没有固有的事件模型
 * 
 * PureMVC中实现的Observer模式可支持事件驱动应用程序与模型，视图和控制器之间的通信。
 */
export interface INotification {
    /**
     * @description 实例的名称
     * @return {string}
     */
    getName(): string;

    /**
     * @description 设置实例主体
     * @param {any} body
     */
    setBody(body: any): void;

    /**
     * @description 获取实例主体
     * @returns {any}
     */
    getBody(): any

    /**
     * @description 设置类型
     * @param {string} type
     */
    setType(type: string): void

    /**
     * @description 获取类型
     * @returns {string}
     */
    getType(): string

    /**
     * @description
     * @return {string}
     */
    toString(): string;

}