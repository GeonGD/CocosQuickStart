import { ApplicationFacade } from "./ApplicationFacade";
import { ApplicationGlobal } from "./GameScript/GameConst/ApplicationGlobal";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {
    onLoad() {
        ApplicationGlobal.LoginPanel = this.node;
    }

    start() {
        new ApplicationFacade().startup();
    }
}