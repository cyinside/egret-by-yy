var ConfigModel = (function () {
    function ConfigModel() {
        this.idNum = 1;
        this.typeNum = 1;
        this.typeArr = new Array();
        this.unameWidth = 0;
        this.wx_default_title = "";
        this.wx_title = "";
        this.wx_friend_desx = "";
        this.wx_share_friend = "";
        this.wx_share_monent = "";
        this.wx_share_link = "";
        this.wx_share_img = "";
        this.link = "";
        this.isShowPage = false;
        this.contTxt = "";
        this.headUrl = __global.headimgurl.toString();
        this.uname = __global.nickname.toString();
    }
    var d = __define,c=ConfigModel,p=c.prototype;
    //public headUrl:string = "http://www.joyoungfeld-ad.com/zhaoyang/animation/invitation2/shareIcon.jpg";
    ConfigModel.getInstance = function () {
        if (this.instance == null) {
            this.instance = new ConfigModel();
        }
        return this.instance;
    };
    p.initConfig = function () {
        var config = RES.getRes("config");
        var typeAr = config["desx"];
        var obj;
        this.wx_title = config["wx_title"].toString();
        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        var url = location.href.split("#")[0];
        this.wx_share_link = url.substring(0, url.indexOf("index.php") + 9);
        this.wx_share_img = this.wx_share_link.replace("index.php", config["wx_share_img"].toString());
        for (var i = 0; i < typeAr.length; i++) {
            obj = typeAr[i];
            var typeInfo = new TypeInfo(obj);
            ConfigModel.getInstance().typeArr.push(typeInfo);
        }
        this.updateShare1();
    };
    p.updateShare1 = function () {
        var link = this.wx_share_link
            + "?ct=" + decodeURI(ConfigModel.getInstance().contTxt.toString())
            + "&url=" + decodeURI(ConfigModel.getInstance().headUrl.toString())
            + "&end";
        var udesc = ConfigModel.getInstance().contTxt;
        //var utitle:string = ConfigModel.getInstance().getTypeByID()+ConfigModel.getInstance().uNameTxt;
        JSSDK.getWeiXinShareTimeline(2, "我想要的生活是" + udesc + "," + this.uname + "邀请你参加保利首届当代生活方式展", link, this.wx_share_img);
        //JSSDK.getWeiXinShareTimeline(2,this.wx_title,link,this.wx_share_img);
        JSSDK.getWeiXinShareAppMessage(2, this.wx_title, link, this.wx_share_img, "我想要的生活是" + udesc + "," + this.uname + "邀请你参加保利首届当代生活方式展");
    };
    p.getTypeByID = function () {
        return this.typeArr[this.typeNum - 1].text;
    };
    return ConfigModel;
}());
egret.registerClass(ConfigModel,'ConfigModel');
//# sourceMappingURL=ConfigModel.js.map