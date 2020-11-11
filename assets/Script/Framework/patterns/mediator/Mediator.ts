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

    public listNotificationInterests(): string[] {
        return new Array<string>();
    }

    public handleNotification(notification: INotification): void {
    }

    onRegister(): void {
    }

    onRemove(): void {
    }


}