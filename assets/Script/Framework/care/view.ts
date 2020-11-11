import { IMediator } from "../interfaces/IMediator";
import { INotification } from "../interfaces/INotification";
import { IObserver } from "../interfaces/IObserver";
import { IView } from "../interfaces/IView";
import Mediator from "../patterns/mediator/Mediator";
import Observer from "../patterns/observer/Observer";

export default class View implements IView {

    private static _instance: IView;
    protected mediatorMap: { [propName: string]: IMediator } = null;
    protected observerMap: { [propName: string]: IObserver[] } = null;

    constructor() {
        if (View._instance) throw Error("View singleton already constructed!");

        View._instance = this;
        this.mediatorMap = {};
        this.observerMap = {};
        this.initializeView();
    }

    public static get Instance(): IView {
        if (!View._instance)
            View._instance = new View();
        return View._instance;
    }

    protected initializeView() {

    }

    public registerObserver(notificationName: string, observer: IObserver): void {
        let observers: IObserver[] = this.observerMap[notificationName];
        if (observers) {
            observers.push(observer);
        } else {
            this.observerMap[notificationName] = [observer];
        }
    }

    public removeObserver(notificationName: string, notifyContext: any): void {
        let observers: IObserver[] = this.observerMap[notificationName];
        let i: number = observers.length;
        while (i--) {
            let observer: IObserver = observers[i];
            if (observer.compareNotifyContext(notifyContext)) {
                observers.splice(i, 1);
                break;
            }
        }

        if (observers.length == 0) {
            delete this.observerMap[notificationName];
        }
    }

    public notifyObservers(notification: INotification): void {
        let notificationName: string = notification.getName();

        let observersRef: IObserver[] = this.observerMap[notificationName];
        if (observersRef) {
            let observers = observersRef.slice(0);
            let len: number = observers.length;
            for (let i = 0; i < len; i++) {
                let observer: IObserver = observers[i];
                observer.notifyObserver(notification);
            }
        }
    }

    public registerMediator(mediator: IMediator): void {
        let name: string = mediator.getMediatorName();

        if (this.mediatorMap[name]) return;

        this.mediatorMap[name] = mediator;

        let interests: string[] = mediator.listNotificationInterests();
        let len: Number = interests.length;

        if (len > 0) {
            let observer: IObserver = new Observer(mediator.handleNotification, mediator);
            for (let i: number = 0; i < len; i++)
                this.registerObserver(interests[i], observer);
        }
        mediator.onRegister();
    }

    public retrieveMediator(mediatorName: string): IMediator {
        return this.mediatorMap[mediatorName] || null;
    }

    public removeMediator(mediatorName: string): IMediator {
        let mediator: IMediator = this.mediatorMap[mediatorName];
        if (!mediator) return null;

        let interests: string[] = mediator.listNotificationInterests();
        let i: number = interests.length;
        while (i--) {
            this.removeObserver(interests[i], mediator);
        }

        delete this.mediatorMap[mediatorName];

        mediator.onRemove();
        return mediator;
    }

    public hasMediator(mediatorName: string): boolean {
        return this.mediatorMap[mediatorName] != null;
    }

}