import ViewComponent from "../Base/ViewComponent";

export class LoginPanelView extends ViewComponent {

    private loginButton: cc.Button = null;
    private tipsLabel: cc.Label = null;


    bindUI(): void {
        this.loginButton = this.root.getChildByName("login").getComponent(cc.Button);
        this.tipsLabel = this.root.getChildByName("label").getComponent(cc.Label);
    }

    public setLoginEvent(callback: Function): void {
        this.loginButton.node.on(cc.Node.EventType.TOUCH_END, callback, this);
    }

    public setTips(text: string) {
        this.tipsLabel.string = text;
    }

}