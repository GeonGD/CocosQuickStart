import Proxy from "../../Framework/patterns/proxy/Proxy";
import { CommandDefine } from "../GameConst/CommandDefine";
import { LoginRequestRepository } from "../repositories/LoginRequestRepository";
import { LoginResponseRepository } from "../repositories/LoginResponseRepository";

export class LoginRequestProxy extends Proxy {
    public constructor(proxyName: string = null, data: any = null) {
        super(proxyName, data);
    }

    public Post(requestBody: LoginRequestRepository): void {
        this.PostAsync(requestBody);
    }

    public async PostAsync(requestBody: LoginRequestRepository): Promise<void> {
        let responseBody = new LoginResponseRepository();
        responseBody.code = 0;
        responseBody.remark = "登录成功";
        this.sendNotification(CommandDefine.UserLoginResponse, responseBody);
    }
}