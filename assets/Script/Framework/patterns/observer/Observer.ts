import { INotification } from "../../interfaces/INotification";
import { IObserver } from "../../interfaces/IObserver";

export default class Observer implements IObserver {

    protected notify: Function = null;
    protected context: any = null;

    constructor(notifyMethod: Function, notifyContext: any) {
        this.setNotifyMethod(notifyMethod);
        this.setNotifyContext(notifyContext);
    }

    private _getNotifyMethod(): Function {
        return this.notify;
    }

    private _getNotifyContext(): any {
        return this.context;
    }

    public setNotifyMethod(notifyMethod: Function): void {
        this.notify = notifyMethod;
    }

    public setNotifyContext(notifyContext: any): void {
        this.context = notifyContext;
    }

    public notifyObserver(notification: INotification): void {
        this._getNotifyMethod().call(this._getNotifyContext(), notification);
    }

    public compareNotifyContext(object: any): boolean {
        return object === this.context;
    }

}