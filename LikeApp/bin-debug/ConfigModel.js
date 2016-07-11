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
        var config = RES.getRes("config");
        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_title = config["wx_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_default_friend_desx = config["wx_default_friend_desx"].toString();
        this.wx_share = config["wx_share"].toString();
        var url = location.href.split("#")[0];
        this.wx_share_link = url.substring(0, url.indexOf("index.php") + 9);
        this.wx_share_img = this.wx_share_link.replace("index.php", config["wx_share_img"].toString());
        ConfigModel.headImg = __global.headimgurl;
        //ConfigModel.headImg = "http://wx.qlogo.cn/mmopen/Q3auHgzwzM5s2KD1YxzIEEI5zzA7fdyXgmKMaia5FMVPcUxnrJA2Du0TTek5ogsRgic8W0ibkAy59icqL3vWMj8xeFCZ2eBj093iaaHItsurfDaA/0";
        ConfigModel.uID = __global.openID;
        //ConfigModel.uID = "od1m6uAqWITdj-REOeIbfqsLJK8E";
        //ConfigModel.uName = "cyy"
    };
    p.updataShare = function () {
        var link = this.wx_share_link
            + "?uID=" + ConfigModel.uID.toString()
            + "&end";
        //console.log(link);
        JSSDK.getWeiXinShareTimeline(2, this.wx_default_friend_desx, link, this.wx_share_img);
        JSSDK.getWeiXinShareAppMessage(2, this.wx_title, link, this.wx_share_img, this.wx_friend_desx);
    };
    ConfigModel.headImg = "";
    ConfigModel.uID = "";
    ConfigModel.uName = "";
    return ConfigModel;
}());
egret.registerClass(ConfigModel,'ConfigModel');
