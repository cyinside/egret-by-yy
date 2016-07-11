var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var SubtitleInfo = (function () {
    function SubtitleInfo(obj) {
        this.id = parseInt(obj["id"]);
        this.text = obj["text"];
    }
    var d = __define,c=SubtitleInfo;p=c.prototype;
    return SubtitleInfo;
})();
egret.registerClass(SubtitleInfo,"SubtitleInfo");
