import { INotification } from "../../interfaces/INotification";

export default class Notification implements INotification {

    protected name: string = null;
    protected body: any = null;
    protected type: string = null;

    constructor(name: string, body: any = null, type: string = null) {
        this.name = name;
        this.body = body;
        this.type = type;
    }

    public getName(): string {
        return this.name;
    }

    public setBody(body: any): void {
        this.body = body;
    }

    public getBody(): any {
        this.body;
    }

    public setType(type: string): void {
        this.type = type;
    }

    public getType(): string {
        return this.type;
    }

    public toString(): string {
        let msg: string = "Notification Name: " + this.getName();
        msg += "\nBody:" + ((this.getBody() == null) ? "null" : this.getBody().toString());
        msg += "\nType:" + ((this.getType() == null) ? "null" : this.getType());
        return msg;
    }

}