var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var QuestionInfo = (function () {
    function QuestionInfo(obj) {
        this.answers = new Array();
        this.id = parseInt(obj["id"]);
        this.title = obj["title"];
        for (var i = 0; i < obj["answer"].length; i++) {
            var answerInfo = new AnswerInfo(obj["answer"][i]);
            this.answers.push(answerInfo);
        }
    }
    var d = __define,c=QuestionInfo;p=c.prototype;
    return QuestionInfo;
})();
egret.registerClass(QuestionInfo,"QuestionInfo");
//# sourceMappingURL=QuestionInfo.js.map