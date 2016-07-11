var DataEvent = (function (_super) {
    __extends(DataEvent, _super);
    function DataEvent() {
        _super.apply(this, arguments);
        this.sceneID = 0;
    }
    var d = __define,c=DataEvent,p=c.prototype;
    DataEvent.CHANGE_SCENE = "CHANGE_SCENE";
    return DataEvent;
}(egret.Event));
egret.registerClass(DataEvent,'DataEvent');
