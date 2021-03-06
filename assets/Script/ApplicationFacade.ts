import { OpenLoginPanelCommand } from "./GameScript/Command/OpenLoginPanelCommand";
import { UserLoginRequestCommand } from "./GameScript/Command/UserLoginRequestCommand";
import Facade from "./Framework/care/Facade";
import { CommandDefine } from "./GameScript/GameConst/CommandDefine";
import { ProxyDefine } from "./GameScript/GameConst/ProxyDefine";
import { LoginRequestProxy } from "./GameScript/Proxy/LoginRequestProxy";

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