var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 16/3/31.
 */
var TypeInfo = (function () {
    function TypeInfo(obj) {
        this.id = parseInt(obj["id"]);
        this.text = obj["text"];
    }
    var d = __define,c=TypeInfo;p=c.prototype;
    return TypeInfo;
})();
egret.registerClass(TypeInfo,"TypeInfo");
//# sourceMappingURL=TypeInfo.js.map