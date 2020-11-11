import { ICommand } from "../interfaces/ICommand";
import { IController } from "../interfaces/IController";
import { INotification } from "../interfaces/INotification";
import { IView } from "../interfaces/IView";
import Observer from "../patterns/observer/Observer";
import View from "./view";

export default class Controller implements IController {

    private static _instance: IController;
    protected view: IView = null;
    protected commandMap: { [propName: string]: Function } = null;

    constructor() {
        if (Controller._instance) throw Error("Controller singleton already constructed!");
        Controller._instance = this;
        this.commandMap = {};
        this.initializeController();
    }

    public static get Instance(): IController {
        if (!Controller._instance)
            Controller._instance = new Controller();
        return Controller._instance;
    }

    protected initializeController() {
        this.view = View.Instance;
    }

    public executeCommand(notification: INotification): void {
        let commandClassRef: any = this.commandMap[notification.getName()];
        if (commandClassRef) {
            let command: ICommand = <ICommand>new commandClassRef();
            command.execute(notification);
        }
    }

    public registerCommand(notificationName: string, commandClassRef: Function): void {
        if (!this.commandMap[notificationName]) {
            this.view.registerObserver(notificationName, new Observer(this.executeCommand, this));
        }
        this.commandMap[notificationName] = commandClassRef;
    }

    public removeCommand(notificationName: string): void {
        if (this.hasCommand(notificationName)) {
            this.view.removeObserver(notificationName, this);
            delete this.commandMap[notificationName];
        }
    }

    public hasCommand(notificationName: string): boolean {
        return this.commandMap[notificationName] != null;
    }

}