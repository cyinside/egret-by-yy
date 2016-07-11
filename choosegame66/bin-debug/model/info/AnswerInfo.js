var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var AnswerInfo = (function () {
    function AnswerInfo(obj) {
        this.id = parseInt(obj["id"]);
        this.text = obj["text"];
        this.score = parseInt(obj["score"]);
    }
    var d = __define,c=AnswerInfo;p=c.prototype;
    return AnswerInfo;
})();
egret.registerClass(AnswerInfo,"AnswerInfo");
//# sourceMappingURL=AnswerInfo.js.map