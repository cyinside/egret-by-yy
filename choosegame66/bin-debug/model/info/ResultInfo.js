var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var ResultInfo = (function () {
    function ResultInfo(obj) {
        this.id = parseInt(obj["id"]);
        this.title1 = obj["title1"];
        this.title2 = obj["title2"];
        this.text = obj["text"];
    }
    var d = __define,c=ResultInfo;p=c.prototype;
    return ResultInfo;
})();
egret.registerClass(ResultInfo,"ResultInfo");
//# sourceMappingURL=ResultInfo.js.map