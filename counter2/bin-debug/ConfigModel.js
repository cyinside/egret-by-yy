var ConfigModel = (function () {
    function ConfigModel() {
        this.wx_default_title = "";
        this.wx_title = "";
        this.wx_friend_desx = "";
        this.wx_share_friend = "";
        this.wx_share_monent = "";
        this.wx_share_link = "";
        this.wx_share_img = "";
        this.wx_signpackage_url = "";
        this.url = "";
        this.server = "";
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
        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_title = config["wx_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_share_friend = config["wx_default_friend_desx"].toString();
        this.url = config["url"].toString();
        var url = location.href.split("#")[0];
        this.wx_share_link = url.substring(0, url.indexOf("index.html") + 10);
        this.wx_share_img = this.wx_share_link.replace("index.html", config["wx_share_img"].toString());
    };
    p.getJssdk = function () {
        JSSDK.getWeiXinShareAppMessage(ConfigModel.getInstance().wx_title, ConfigModel.getInstance().wx_share_link, ConfigModel.getInstance().wx_share_img, ConfigModel.getInstance().wx_friend_desx);
        JSSDK.getWeiXinShareTimeline(ConfigModel.getInstance().wx_title, ConfigModel.getInstance().wx_share_link, ConfigModel.getInstance().wx_share_img);
    };
    return ConfigModel;
}());
egret.registerClass(ConfigModel,'ConfigModel');
