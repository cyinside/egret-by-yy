var ConfigModel = (function () {
    function ConfigModel() {
        this.scoreArr = new Array();
        this.wx_default_title = "";
        this.wx_title = "";
        this.wx_friend_desx = "";
        this.wx_default_friend_desx = "";
        this.wx_share = "";
        this.wx_share_img = "";
        this.wx_link = "";
    }
    var __egretProto__ = ConfigModel.prototype;
    ConfigModel.getInstance = function () {
        if (this.instance == null) {
            this.instance = new ConfigModel();
        }
        return this.instance;
    };
    __egretProto__.initConfig = function () {
        var config = RES.getRes("config");
        var buttonInfArr = config["countbtn"];
        for (var i = 0; i < buttonInfArr.length; i++) {
            var buttonInfo = new Btninfo(buttonInfArr[i]);
            ConfigModel.btnArr.push(buttonInfo);
        }
        var tempScoreArr = config["level"];
        for (var i = 0; i < tempScoreArr.length; i++) {
            var scoreInfo = new ScoreInfo(tempScoreArr[i]);
            this.scoreArr.push(scoreInfo);
        }
        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_title = config["wx_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_default_friend_desx = config["wx_default_friend_desx"].toString();
        this.wx_share = config["wx_share"].toString();
        this.wx_link = config["wx_share_link"].toString();
        this.wx_share_img = config["wx_share_img"].toString();
        //this.link = "http://www.joyoungfeld-ad.com/zhaoyang/game/photogame1/" + ConfigModel.getInstance().version.toString() +
        //    "/index.html";
        //this.thumbnail = "http://www.joyoungfeld-ad.com/zhaoyang/game/photogame1/" + ConfigModel.getInstance().version.toString() +
        //    "/resource/assets/thumbnail.jpg";
    };
    __egretProto__.getBtnInfo = function (id) {
        var btnData = ConfigModel.btnArr[id - 1];
        return btnData;
    };
    __egretProto__.getLevelByScore = function (id) {
        var scoreInfo = this.scoreArr[id - 1];
        return scoreInfo;
    };
    ConfigModel.btnArr = new Array();
    return ConfigModel;
})();
ConfigModel.prototype.__class__ = "ConfigModel";
