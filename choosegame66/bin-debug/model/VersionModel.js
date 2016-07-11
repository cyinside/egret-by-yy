var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var VersionModel = (function () {
    function VersionModel() {
    }
    var d = __define,c=VersionModel;p=c.prototype;
    VersionModel.getInstance = function () {
        if (this.instance == null) {
            this.instance = new VersionModel();
        }
        return this.instance;
    };
    VersionModel.initConfig = function () {
        RES.getResAsync("version", VersionModel.getInstance().parseJson, this);
    };
    p.parseJson = function (result) {
        VersionModel.getInstance()._version = parseInt(result[0]["version"]);
    };
    d(p, "version"
        ,function () {
            return VersionModel.getInstance()._version;
        }
    );
    return VersionModel;
})();
egret.registerClass(VersionModel,"VersionModel");
//# sourceMappingURL=VersionModel.js.map