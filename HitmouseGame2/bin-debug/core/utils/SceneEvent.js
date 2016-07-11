var SceneEvent = (function (_super) {
    __extends(SceneEvent, _super);
    function SceneEvent() {
        _super.apply(this, arguments);
        this.sceneID = 0;
    }
    var d = __define,c=SceneEvent,p=c.prototype;
    SceneEvent.CHANGE_SCENE = "CHANGE_SCENE";
    return SceneEvent;
}(egret.Event));
egret.registerClass(SceneEvent,'SceneEvent');
