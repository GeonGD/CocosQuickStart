import { ApplicationFacade } from "./ApplicationFacade";
import { ApplicationGlobal } from "./Global/ApplicationGlobal";

export default class Main extends cc.Component {
    onLoad() {
        ApplicationGlobal.LoginPanel = this.node;
    }

    start() {
        new ApplicationFacade().startup();
    }

    // update (dt) {}
}