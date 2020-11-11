import Facade from "../../Framework/care/Facade";
import { INotification } from "../../Framework/interfaces/INotification";
import Command from "../../Framework/patterns/command/Command";
import { ProxyDefine } from "../../Global/ProxyDefine";
import { LoginRequestProxy } from "../Proxy/LoginRequestProxy";
import { LoginRequestRepository } from "../repositories/LoginRequestRepository";

export class UserLoginRequestCommand extends Command {

    public execute(notification: INotification): void {
        let requestBody = notification.getBody() as LoginRequestRepository;
        if (!requestBody) return;

        let proxy = Facade.Instance.retrieveProxy(ProxyDefine.LoginRequest) as LoginRequestProxy;
        proxy.Post(requestBody);
    }

}