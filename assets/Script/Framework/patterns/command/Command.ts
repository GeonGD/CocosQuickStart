import { ICommand } from "../../interfaces/ICommand";
import { INotification } from "../../interfaces/INotification";
import { INotifier } from "../../interfaces/INotifier";
import Notifier from "../observer/Notifier";

export default class Command extends Notifier implements ICommand, INotifier {

    protected subCommands: Function[] = null;

    constructor() {
        super();
        this.subCommands = new Array<Function>();
        this.initializeMacroCommand();
    }

    public initializeMacroCommand() {

    }

    public addSubCommand(commandClassRef: Function): void {
        this.subCommands.push(commandClassRef);
    }

    public execute(notification: INotification): void {
        let subCommands: Function[] = this.subCommands.slice(0);
        let len: number = this.subCommands.length;
        for (let i: number = 0; i < len; i++) {
            let commandClassRef: any = subCommands[i];
            let commandInstance: ICommand = <ICommand>new commandClassRef();
            commandInstance.execute(notification);
        }

        this.subCommands.splice(0);
    }

}