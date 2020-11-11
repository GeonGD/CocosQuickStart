import { IMediator } from "../../interfaces/IMediator";
import { INotification } from "../../interfaces/INotification";
import { INotifier } from "../../interfaces/INotifier";
import Notifier from "../observer/Notifier";

export default class Mediator extends Notifier implements IMediator, INotifier {

    private static NAME: string = 'Mediator';
    protected mediatorName: string = null;
    protected viewComponent: any = null;

    constructor(mediatorName: string = null, viewComponent: any = null) {
        super();
        this.mediatorName = (mediatorName != null) ? mediatorName : Mediator.NAME;
        this.viewComponent = viewComponent;
    }

    public getMediatorName(): string {
        return this.mediatorName;
    }

    public getViewComponent() {
        return this.viewComponent;
    }

    public setViewComponent(viewComponent: any): void {
        this.viewComponent = viewComponent;
    }

    /**
     * @description 监听事件列表
     */
    public listNotificationInterests(): string[] {
        return new Array<string>();
    }

    /**
     * @description 监听事件处理
     * @param {INotification} notification 接收事件
     */
    public handleNotification(notification: INotification): void {
    }

    onRegister(): void {
    }

    onRemove(): void {
    }


}