import { IController } from "../interfaces/IController";
import { IFacade } from "../interfaces/IFacade";
import { IMediator } from "../interfaces/IMediator";
import { IModel } from "../interfaces/IModel";
import { INotification } from "../interfaces/INotification";
import { IProxy } from "../interfaces/IProxy";
import { IView } from "../interfaces/IView";
import Notification from "../patterns/observer/Notification";
import Controller from "./Controller";
import Model from "./Model";
import View from "./view";

export default class Facade implements IFacade {

    protected static _instance: IFacade;

    protected model: IModel = null;
    protected view: IView = null;
    protected controller: IController = null;

    constructor() {
        if (Facade._instance) throw Error("Facade singleton already constructed!");
        Facade._instance = this;
        this.initializeFacade();
    }

    public static get Instance(): IFacade {
        if (!Facade._instance)
            Facade._instance = new Facade();
        return Facade._instance;
    }

    protected initializeFacade(): void {
        this.initializeModel();
        this.initializeController();
        this.initializeView();
    }

    protected initializeModel(): void {
        if (!this.model) {
            this.model = Model.Instance;
        }
    }

    protected initializeController(): void {
        if (!this.controller) {
            this.controller = Controller.Instance;
        }
    }

    protected initializeView(): void {
        if (!this.view) {
            this.view = View.Instance;
        }
    }

    public registerCommand(notificationName: string, commandClassRef: Function): void {
        this.controller.registerCommand(notificationName, commandClassRef);
    }

    public removeCommand(notificationName: string): void {
        this.controller.removeCommand(notificationName);
    }

    public hasCommand(notificationName: string): boolean {
        return this.controller.hasCommand(notificationName);
    }

    public registerProxy(proxy: IProxy): void {
        this.model.registerProxy(proxy);
    }

    public retrieveProxy(proxyName: string): IProxy {
        return this.model.retrieveProxy(proxyName);
    }

    public removeProxy(proxyName: string): IProxy {
        let proxy: IProxy;
        if (this.model) {
            proxy = this.model.removeProxy(proxyName);
        }
        return proxy
    }

    public hasProxy(proxyName: string): boolean {
        return this.model.hasProxy(proxyName);
    }

    public registerMediator(mediator: IMediator): void {
        if (this.view) {
            this.view.registerMediator(mediator);
        }
    }

    public retrieveMediator(mediatorName: string): IMediator {
        return this.view.retrieveMediator(mediatorName);
    }

    public removeMediator(mediatorName: string): IMediator {
        let mediator: IMediator;
        if (this.view) {
            mediator = this.view.removeMediator(mediatorName);
        }
        return mediator;
    }

    public hasMediator(mediatorName: string): boolean {
        return this.view.hasMediator(mediatorName);
    }

    public notifyObservers(notification: INotification): void {
        if (this.view) {
            this.view.notifyObservers(notification);
        }
    }

    public sendNotification(name: string, body: any = null, type: string = null): void {
        this.notifyObservers(new Notification(name, body, type));
    }

}