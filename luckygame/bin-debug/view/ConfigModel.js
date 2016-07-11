var ConfigModel = (function () {
    function ConfigModel() {
        this.idNum = 1;
        this.results = new Array();
        this.wx_default_title = "";
        this.wx_title = "";
        this.wx_friend_desx = "";
        this.wx_share_friend = "";
        this.wx_share_monent = "";
        this.wx_share_link = "";
        this.wx_share_img = "";
        this.txt1 = "";
        this.txt2 = "";
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
        var reasultArr = config["result"];
        var obj;
        for (var i = 0; i < reasultArr.length; i++) {
            obj = reasultArr[i];
            var reasultInfo = new ResultInfo(obj);
            ConfigModel.getInstance().results.push(reasultInfo);
        }
        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_title = config["wx_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_share_friend = config["wx_share_friend"].toString();
        this.wx_share_monent = config["wx_share_monent"].toString();
        this.txt1 = config["txt1"].toString();
        this.txt2 = config["txt2"].toString();
        var url = location.href.split("#")[0];
        this.wx_share_link = url.substring(0, url.indexOf("index.php") + 9);
        this.wx_share_img = this.wx_share_link.replace("index.php", config["wx_share_img"].toString());
    };
    p.getResultInfoById = function (score) {
        var resultInfo = this.results[score - 1];
        return resultInfo;
    };
    return ConfigModel;
})();
egret.registerClass(ConfigModel,'ConfigModel');
//# sourceMappingURL=ConfigModel.js.map