var ConfigModel = (function () {
    function ConfigModel() {
        this.idNum = 1;
        this.typeNum = 1;
        //public typeArr:TypeInfo[] = new Array();
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
        this.noTxt = "";
        this.butTxt = "";
        this.uNameTxt = __global.nickname.toString();
        //public uNameTxt:string = "cyy1";
        this.uNameTxt1 = "";
        this.headUrl = __global.headimgurl.toString();
        this.headUrl1 = "http://www.joyoungfeld-ad.com/zhaoyang/game/lookinggame2/resource/assets/share.jpg";
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
        //var typeAr:Array<Object> = config["type"];
        var obj;
        this.wx_title = config["wx_title"].toString();
        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        var url = location.href.split("#")[0];
        this.wx_share_link = url.substring(0, url.indexOf("index.php") + 9);
        this.wx_share_img = this.wx_share_link.replace("index.php", config["wx_share_img"].toString());
        //for(var i:number = 0;i<typeAr.length;i++){
        //    obj = typeAr[i];
        //    var typeInfo:TypeInfo = new TypeInfo(obj);
        //    ConfigModel.getInstance().typeArr.push(typeInfo);
        //}
        //this.updateShare1();
    };
    p.updateShare = function () {
        var link = this.wx_share_link
            + "?inum=" + ConfigModel.getInstance().idNum.toString()
            + "&uname=" + decodeURI(ConfigModel.getInstance().uNameTxt.toString())
            + "&url=" + decodeURI(ConfigModel.getInstance().headUrl.toString())
            + "&end";
        var utitle = ConfigModel.getInstance().uNameTxt;
        JSSDK.getWeiXinShareTimeline(2, this.wx_title + utitle + "终于把话说了出来", link, this.wx_share_img);
        JSSDK.getWeiXinShareAppMessage(2, this.wx_title + utitle + "终于把话说了出来", link, this.wx_share_img, this.wx_friend_desx);
    };
    p.getTypeByID = function () {
        //return this.typeArr[this.typeNum-1].text;
    };
    return ConfigModel;
}());
egret.registerClass(ConfigModel,'ConfigModel');
//# sourceMappingURL=ConfigModel.js.map