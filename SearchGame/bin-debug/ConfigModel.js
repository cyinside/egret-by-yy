var ConfigModel = (function () {
    function ConfigModel() {
        this.wx_default_title = "";
        this.wx_title = "";
        this.wx_friend_desx = "";
        this.wx_default_friend_desx = "";
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
        var config = RES.getRes("config1");
        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_title = config["wx_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_default_friend_desx = config["wx_default_friend_desx"].toString();
        this.wx_share = config["wx_share"].toString();
        var url = location.href.split("#")[0];
        this.wx_share_link = url.substring(0, url.indexOf("index.html") + 10);
        this.wx_share_img = "http://www.joyoungfeld-ad.com/zhaoyang/app/getPrize3/1/resource/assets/shareIcon.jpg";
    };
    p.updataShare = function () {
        JSSDK.getWeiXinShareTimeline(2, this.wx_default_friend_desx, this.wx_share_link, this.wx_share_img);
        JSSDK.getWeiXinShareAppMessage(2, this.wx_title, this.wx_share_link, this.wx_share_img, this.wx_friend_desx);
        //alert(this.wx_title+this.wx_share_link+this.wx_share_img+this.wx_friend_desx);
    };
    ConfigModel.score = 0;
    ConfigModel.hole2Arr = new Array();
    ConfigModel.timeSpeed = 48;
    return ConfigModel;
}());
egret.registerClass(ConfigModel,'ConfigModel');
//# sourceMappingURL=ConfigModel.js.map