var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var ScoreInfo = (function () {
    function ScoreInfo(obj) {
        this.id = parseInt(obj["id"]);
        this.score = parseInt(obj["score"]);
    }
    var d = __define,c=ScoreInfo;p=c.prototype;
    return ScoreInfo;
})();
egret.registerClass(ScoreInfo,"ScoreInfo");
//# sourceMappingURL=ScoreInfo.js.map