import Facade from "../../care/Facade";
import { IFacade } from "../../interfaces/IFacade";
import { INotifier } from "../../interfaces/INotifier";

export default class Notifier implements INotifier {

    protected facade: IFacade = null;

    constructor() {
        this.facade = Facade.Instance;
    }

    public sendNotification(name: string, body?: any, type?: string): void {
        this.facade.sendNotification(name, body, type);
    }

}