/**
 *PureMVC Notifier 接口定义。
 *
 */
export interface INotifier {
    /**
     * @description 创建并发送通知
     * @param {string} name 名称
     * @param {any} body 主体
     * @param {string} type 类型
     */
    sendNotification(name: string, body?: any, type?: string): void;
}