var ConfigModel = (function () {
    function ConfigModel() {
        this.scoreArr = new Array();
        this.wx_default_title = "";
        this.wx_title = "";
        this.wx_friend_desx = "";
        this.wx_default_friend_desx = "";
        this.wx_share = "";
        this.wx_share_img = "";
        this.wx_share_link = "";
        this.Is_win = false;
        this.ruleName = "";
        this.rule = "";
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
        this.roleInfo = new RoleInfo(config["role"]);
        this.coinInfo = new DropInfo(config["coin"]);
        this.pm25Info = new DropInfo(config["pm25"]);
        this.bombInfo = new DropInfo(config["bomb"]);
        this.chapterInfo = new ChapterInfo(config["chapter"]);
        this.ruleName = config["rule_name"].toString();
        this.rule = config["rule"].toString();
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
        var url = location.href.split("#")[0];
        this.wx_share_link = url.substring(0, url.indexOf("index.html") + 10);
        this.wx_share_img = this.wx_share_link.replace("index.html", config["wx_share_img"].toString());
        //this.link = "http://www.joyoungfeld-ad.com/zhaoyang/game/photogame1/" + ConfigModel.getInstance().version.toString() +
        //    "/index.html";
        //this.thumbnail = "http://www.joyoungfeld-ad.com/zhaoyang/game/photogame1/" + ConfigModel.getInstance().version.toString() +
        //    "/resource/assets/thumbnail.jpg";
    };
    p.reset = function () {
        this.roleInfo.score = 0;
    };
    p.getLevelByScore = function (score) {
        var scoreInfo = this.scoreArr[0];
        for (var i = this.scoreArr.length - 1; i > 0; i--) {
            scoreInfo = this.scoreArr[i];
            if (score >= scoreInfo.score) {
                return scoreInfo;
            }
        }
        return scoreInfo;
    };
    return ConfigModel;
}());
egret.registerClass(ConfigModel,'ConfigModel');
//# sourceMappingURL=ConfigModel.js.map