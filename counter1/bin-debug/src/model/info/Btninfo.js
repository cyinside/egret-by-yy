var Btninfo = (function () {
    function Btninfo(obj) {
        this.id = parseInt(obj["id"]);
        this.type = obj["type"].toString();
        this.img = obj["img"].toString();
        this.value = parseInt(obj["value"]);
    }
    var __egretProto__ = Btninfo.prototype;
    return Btninfo;
})();
Btninfo.prototype.__class__ = "Btninfo";
