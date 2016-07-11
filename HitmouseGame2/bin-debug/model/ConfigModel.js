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
        this.locationArr = new Array();
        this.rolArr = new Array();
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
        var roleArr = config["role"];
        var locatArr = config["hole"];
        for (var j = 0; j < locatArr.length; j++) {
            var locatInfo = new LocaionInfo(locatArr[j]);
            this.locationArr.push(locatInfo);
        }
        for (var i = 0; i < roleArr.length; i++) {
            var roleInfo = new RoleInfo(roleArr[i]);
            this.rolArr.push(roleInfo);
        }
        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_title = config["wx_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_default_friend_desx = config["wx_default_friend_desx"].toString();
        this.wx_share = config["wx_share"].toString();
        var url = location.href.split("#")[0];
        this.wx_share_link = url.substring(0, url.indexOf("index.php") + 9);
        this.wx_share_img = this.wx_share_link.replace("index.php", config["wx_share_img"].toString());
    };
    p.getLocationById = function (id) {
        var locationData = this.locationArr[id];
        return locationData;
    };
    p.getTypeByid = function (id) {
        var roleData = this.rolArr[id];
        return roleData;
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
