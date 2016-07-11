var ScoreInfo = (function () {
    function ScoreInfo(obj) {
        this.id = 0;
        this.score = 0;
        this.title = "";
        this.text = "";
        this.id = parseInt(obj["id"]);
        this.score = parseInt(obj["score"]);
        this.title = obj["title"].toString();
        this.text = obj["text"].toString();
    }
    var __egretProto__ = ScoreInfo.prototype;
    return ScoreInfo;
})();
ScoreInfo.prototype.__class__ = "ScoreInfo";
