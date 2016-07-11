var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var ConfigModel = (function () {
    function ConfigModel() {
        this.userName = "圣诞了," + __global.usernickname;
    }
    var d = __define,c=ConfigModel;p=c.prototype;
    ConfigModel.getInstance = function () {
        if (this.instance == null) {
            this.instance = new ConfigModel();
        }
        return this.instance;
    };
    ConfigModel.getUserName = function () {
        return "圣诞了," + __global.usernickname;
    };
    p.initConfig = function () {
        var config = RES.getRes("config");
        ConfigModel.wx_title = config["wx_default_title"].toString();
        ConfigModel.wx_desc = config["wx_desc"].toString();
        ConfigModel.wx_share = config["wx_share"].toString();
        ConfigModel.version = parseInt(config["version"].toString());
        ConfigModel.link = config["wx_link"].toString();
        ConfigModel.imgURL = config["wx_imgURL"].toString();
    };
    ConfigModel.wx_title = "";
    ConfigModel.wx_desc = "";
    ConfigModel.wx_friend_desx = "";
    ConfigModel.wx_share = "";
    ConfigModel.version = 1;
    ConfigModel.pType = 0;
    return ConfigModel;
})();
egret.registerClass(ConfigModel,"ConfigModel");
//# sourceMappingURL=ConfigModel.js.map