import { INotifier } from "../../interfaces/INotifier";
import { IProxy } from "../../interfaces/IProxy";
import Notifier from "../observer/Notifier";

export default class Proxy extends Notifier implements IProxy, INotifier {

    private static NAME: string = "Proxy";
    protected proxyName: string = null;
    protected data: any = null;

    constructor(proxyName: string = null, data: any = null) {
        super();
        this.proxyName = (proxyName != null) ? proxyName : Proxy.NAME;
        if (data != null)
            this.setData(data);
    }

    public getProxyName(): string {
        return this.proxyName;
    }

    public setData(data: any): void {
        this.data = data;
    }

    public getData() {
        return this.data;
    }

    onRegister(): void {

    }

    onRemove(): void {

    }

}