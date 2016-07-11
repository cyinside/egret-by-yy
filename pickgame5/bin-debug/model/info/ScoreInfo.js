var ScoreInfo = (function () {
    function ScoreInfo(obj) {
        this.id = 0;
        this.score = 0;
        this.title = "";
        this.text1 = "";
        this.text2 = "";
        this.id = parseInt(obj["id"]);
        this.score = parseInt(obj["score"]);
        this.title = obj["title"].toString();
        this.text1 = obj["text1"].toString();
        this.text2 = obj["text2"].toString();
    }
    var d = __define,c=ScoreInfo,p=c.prototype;
    return ScoreInfo;
}());
egret.registerClass(ScoreInfo,'ScoreInfo');
//# sourceMappingURL=ScoreInfo.js.map