var ConfigModel = (function () {
    function ConfigModel() {
        this.wx_default_title = "";
        this.wx_title = "";
        this.wx_default_desc = "";
        this.wx_desc = "";
        this.wx_share = "";
        this.wx_share_img = "";
        this.wx_link = "";
        this.wx_share_link = "";
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
        this.wx_default_desc = config["wx_default_desc"].toString();
        this.wx_desc = config["wx_desc"].toString();
        var url = location.href.split("#")[0];
        this.wx_share_link = url.substring(0, url.indexOf("index.html") + 10);
        this.wx_share_img = this.wx_share_link.replace("index.html", config["wx_share_img"].toString());
    };
    p.updataShare = function () {
        JSSDK.getWeiXinShareTimeline(2, this.wx_desc, this.wx_share_link, this.wx_share_img);
        JSSDK.getWeiXinShareAppMessage(2, this.wx_title, this.wx_share_link, this.wx_share_img, this.wx_default_desc);
        //alert(this.wx_title+this.wx_share_link+this.wx_share_img+this.wx_friend_desx);
    };
    return ConfigModel;
}());
egret.registerClass(ConfigModel,'ConfigModel');
//# sourceMappingURL=ConfigModel.js.map