var ConfigModel = (function () {
    function ConfigModel() {
        this.idNum = 1;
        this.wx_default_title = "";
        this.wx_title = "";
        this.wx_title2 = "";
        this.wx_friend_desx = "";
        this.wx_share_friend = "";
        this.wx_share_monent = "";
        this.wx_share_link = "";
        this.wx_share_img = "";
        this.link = "";
        this.url = "http://www.joyoungfeld-ad.com:5000/";
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
        this.wx_title2 = config["wx_title2"].toString();
        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_share_friend = config["wx_share_friend"].toString();
        this.wx_share_monent = config["wx_share_monent"].toString();
        var url = location.href.split("#")[0];
        this.wx_share_link = url.substring(0, url.indexOf("index.php") + 9);
        this.wx_share_img = this.wx_share_link.replace("index.php", config["wx_share_img"].toString());
    };
    //////////////////////////////////22222222222/////////////////////////////////////
    p.onConnectHandle2 = function () {
        var url = this.url + "setprize";
        var data = { 'openid': __global.openID, 'name': __global.nickname, 'type': 2 };
        //var data ={'openid':'12dq343435','name':'wanghua','type':2};
        //alert(__global.openID+__global.nickname);//TODO
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        //alert("data:"+jsonstr);
        CGNet.doRequest(url, jsonstr, this.onCompleteHandle2, this.onFailHandle2, this);
    };
    p.onCompleteHandle2 = function (evt) {
        var datas = JSON.parse(evt.target.data);
        ConfigModel.prizeWord = datas["id"];
        //alert("数据"+datas["id"])//TODO
        //alert(ConfigModel.prizeWord)//TODO
        //ConfigModel.prizeWord = "k";
        ConfigModel.prizeWordtype = datas["type"];
        //ConfigModel.prizeWordtype = 2;
        Global.dispatchEvent(DataEvent.LOADCOMP, this);
    };
    p.onFailHandle2 = function (evt) {
        alert("网络出问题了!");
        Global.dispatchEvent(DataEvent.LOADFAIL, this);
    };
    p.encryptHandle = function (content) {
        var content = __global.cmdToEncrypt(content);
        content = "qSwW" + content.toString();
        content = this.encryptFilter(content);
        return "openid=" + content;
        //return __global.cmdToEncrypt(content);
    };
    p.encryptFilter = function (content) {
        content = content.replace(/\+/g, "-");
        content = content.replace(/\//g, "_");
        content = content.replace(/\=/g, " ");
        return content;
    };
    ConfigModel.prizeNum = 0;
    //public static prizeArr:Array<any> = [];
    ConfigModel.prizeWord = "";
    ConfigModel.prizeWordtype = 0;
    ConfigModel.timeTxt = "";
    return ConfigModel;
}());
egret.registerClass(ConfigModel,'ConfigModel');
//# sourceMappingURL=ConfigModel.js.map