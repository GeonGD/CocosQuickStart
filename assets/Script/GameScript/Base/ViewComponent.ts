const { ccclass, property } = cc._decorator;

@ccclass
export default abstract class ViewComponent extends cc.Component {
    root: cc.Node;

    onLoad() {
        cc.log(`${this.root.name} onLoad`);
        this.root = this.node;
        this.bindUI();
    }

    start() {
        cc.log(`${this.root.name} start`);
    }

    abstract bindUI(): void
}