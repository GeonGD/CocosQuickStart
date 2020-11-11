import Facade from "../../Framework/care/Facade";
import { INotification } from "../../Framework/interfaces/INotification";
import Command from "../../Framework/patterns/command/Command";
import { ApplicationGlobal } from "../GameConst/ApplicationGlobal";
import { MediatorDefine } from "../GameConst/MediatorDefine";
import { LoginPanelMediator } from "../Mediator/LoginPanelMediator";


export class OpenLoginPanelCommand extends Command {

    public execute(notification: INotification): void {
        // 此处可以加载prefab页面，demo就不再演示，直接使用加载好的页面 
        Facade.Instance.registerMediator(new LoginPanelMediator(MediatorDefine.LoginPanel, ApplicationGlobal.LoginPanel));
    }
}