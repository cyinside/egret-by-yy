/**
 * Created by cyy on 15/10/13.
 */
var DataEvent = (function (_super) {
    __extends(DataEvent, _super);
    function DataEvent() {
        _super.apply(this, arguments);
    }
    var __egretProto__ = DataEvent.prototype;
    DataEvent.GOTO_SCENE2 = "gotoScene2";
    DataEvent.GOTO_RESULTPAGE = "gotoResultPage";
    return DataEvent;
})(egret.Event);
DataEvent.prototype.__class__ = "DataEvent";
