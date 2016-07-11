var ConfigModel = (function () {
    function ConfigModel() {
        this.idNum = 1;
        this.wx_default_title = "";
        this.wx_title = "";
        this.wx_friend_desx = "";
        this.wx_share_friend = "";
        this.wx_share_monent = "";
        this.wx_share_link = "";
        this.wx_share_img = "";
        this.link = "";
    }
    var d = __define,c=ConfigModel,p=c.prototype;
    ConfigModel.getInstance = function () {
        if (this.instance == null) {
            this.instance = new ConfigModel();
        }
        return this.instance;
    };
    p.initConfig = function () {
        var config = RES.getRes("config");
        var obj;
        this.wx_title = config["wx_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_share_friend = config["wx_share_friend"].toString();
        this.wx_share_monent = config["wx_share_monent"].toString();
        var url = location.href.split("#")[0];
        this.wx_share_link = url.substring(0, url.indexOf("index.php") + 9);
        this.wx_share_img = this.wx_share_link.replace("index.php", config["wx_share_img"].toString());
    };
    return ConfigModel;
})();
egret.registerClass(ConfigModel,'ConfigModel');
//# sourceMappingURL=ConfigModel.js.map