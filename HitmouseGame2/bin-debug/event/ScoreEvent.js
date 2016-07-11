var ScoreEvent = (function (_super) {
    __extends(ScoreEvent, _super);
    function ScoreEvent() {
        _super.apply(this, arguments);
    }
    var d = __define,c=ScoreEvent,p=c.prototype;
    ScoreEvent.ADD_SCORE = "add_score";
    ScoreEvent.CUT_SCORE = "cut_score";
    ScoreEvent.REMOVE_CHILD = "remove_child";
    ScoreEvent.ADD_ROLE = "add_role";
    ScoreEvent.ADD_ROLE2 = "add_role2";
    return ScoreEvent;
}(egret.Event));
egret.registerClass(ScoreEvent,'ScoreEvent');
