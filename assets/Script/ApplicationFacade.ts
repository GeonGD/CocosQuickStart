import { OpenLoginPanelCommand } from "./Command/OpenLoginPanelCommand";
import { UserLoginRequestCommand } from "./Command/UserLoginRequestCommand";
import Facade from "./Framework/care/Facade";
import { CommandDefine } from "./Global/CommandDefine";
import { ProxyDefine } from "./Global/ProxyDefine";
import { LoginRequestProxy } from "./Proxy/LoginRequestProxy";

export class ApplicationFacade extends Facade {
    public initializeController(): void {
        super.initializeController();

        this.registerCommand(CommandDefine.OpenLoginPanel, OpenLoginPanelCommand);
        this.registerCommand(CommandDefine.UserLoginRequest, UserLoginRequestCommand);
    }

    public initializeModel(): void {
        super.initializeModel();

        this.registerProxy(new LoginRequestProxy(ProxyDefine.LoginRequest));
    }

    public initializeView(): void {
        super.initializeView();
    }

    public startup(): void {
        this.sendNotification(CommandDefine.OpenLoginPanel);
    }
}