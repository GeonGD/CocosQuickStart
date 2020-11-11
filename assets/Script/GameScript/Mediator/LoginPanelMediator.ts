import { INotification } from "../../Framework/interfaces/INotification";
import Mediator from "../../Framework/patterns/mediator/Mediator";
import { CommandDefine } from "../GameConst/CommandDefine";
import { LoginRequestRepository } from "../repositories/LoginRequestRepository";
import { LoginResponseRepository } from "../repositories/LoginResponseRepository";
import { LoginPanelView } from "../View/LoginPanelView";

export class LoginPanelMediator extends Mediator {
    private readonly loginPanelView: LoginPanelView = null;

    public constructor(mediatorName: string = null, viewComponent: any = null) {
        super(mediatorName, viewComponent);

        if (viewComponent == null) {
            return;
        }

        let viewNode = viewComponent as cc.Node;
        if (!viewNode) {
            return;
        }

        this.loginPanelView = viewNode.addComponent(LoginPanelView);
        this.bindListener();
    }

    private bindListener(): void {
        let requestBody = new LoginRequestRepository();
        requestBody.userName = "error-maker";
        requestBody.userPassword = "error-maker";

        this.loginPanelView.setLoginEvent(() => this.sendNotification(CommandDefine.UserLoginRequest, requestBody));
    }

    public listNotificationInterests(): string[] {
        return [
            CommandDefine.UserLoginResponse,
            CommandDefine.UserLoginRequest
        ];
    }

    public handleNotification(notification: INotification): void {
        switch (notification.getName()) {
            case CommandDefine.UserLoginResponse:
                {
                    let response = notification.getBody() as LoginResponseRepository;
                    this.loginPanelView.setTips(response.remark);
                    break;
                }
        }
    }
}