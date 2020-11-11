import { IModel } from "../interfaces/IModel";
import { IProxy } from "../interfaces/IProxy";

/**
 * PureMVC Model 接口定义
 */
export default class Model implements IModel {

    protected static _instance: IModel;
    protected proxyMap: { [propName: string]: IProxy } = null;

    constructor() {
        if (Model._instance) throw Error("Model singleton already constructed!");
        Model._instance = this;
        this.proxyMap = {};
        this.initializeModel();
    }

    public static get Instance(): IModel {
        if (!Model._instance) {
            Model._instance = new Model();
        }
        return Model._instance;
    }

    /**
     * @description 初始化单例Model
     */
    protected initializeModel() {

    }

    public registerProxy(proxy: IProxy): void {
        this.proxyMap[proxy.getProxyName()] = proxy;
        proxy.onRegister();
    }

    public removeProxy(proxyName: string): IProxy {
        let proxy: IProxy = this.proxyMap[proxyName];
        if (proxy != null) {
            delete this.proxyMap[proxyName];
            proxy.onRemove();
        }
        return proxy;
    }

    public retrieveProxy(proxyName: string): IProxy {
        return this.proxyMap[proxyName] || null;
    }

    public hasProxy(proxyName: string): boolean {
        return this.proxyMap[proxyName] != null;
    }

}