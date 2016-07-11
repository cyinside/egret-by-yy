var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var QuestionModel = (function () {
    function QuestionModel() {
        this.idNum = 1;
        this.questions = new Array();
        this._userInfo = new UserInfo();
        this.scores = new Array();
        this.results = new Array();
        this.wx_default_title = "";
        this.wx_title = "";
        this.wx_friend_desx = "";
        this.wx_share_friend = "";
        this.wx_share_monent = "";
        this.wx_share_link = "";
        this.wx_share_img = "";
        this.link = "";
    }
    var d = __define,c=QuestionModel;p=c.prototype;
    QuestionModel.getInstance = function () {
        if (this.instance == null) {
            this.instance = new QuestionModel();
        }
        return this.instance;
    };
    p.initConfig = function () {
        var config = RES.getRes("config");
        var questionArr = config["question"];
        var scoreArr = config["score"];
        var reasultArr = config["result"];
        var obj;
        for (var i = 0; i < questionArr.length; i++) {
            obj = questionArr[i];
            var questionInfo = new QuestionInfo(obj);
            QuestionModel.getInstance().questions.push(questionInfo);
        }
        for (var i = 0; i < scoreArr.length; i++) {
            obj = scoreArr[i];
            var scoreInfo = new ScoreInfo(obj);
            QuestionModel.getInstance().scores.push(scoreInfo);
        }
        for (var i = 0; i < reasultArr.length; i++) {
            obj = reasultArr[i];
            var reasultInfo = new ResultInfo(obj);
            QuestionModel.getInstance().results.push(reasultInfo);
        }
        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_title = config["wx_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_share_friend = config["wx_share_friend"].toString();
        this.wx_share_monent = config["wx_share_monent"].toString();
        this.wx_share_link = config["wx_share_link"].toString();
        this.wx_share_img = config["wx_share_img"].toString();
    };
    p.getQuestionInfo = function (id) {
        return this.questions[id - 1];
    };
    d(p, "getQuestionNum"
        ,function () {
            return this.questions.length;
        }
    );
    d(p, "getAnswerNum"
        ,function () {
            return this.questions[0].answers.length;
        }
    );
    d(p, "userInfo"
        ,function () {
            return this._userInfo;
        }
    );
    p.getResultInfoByScore = function (score) {
        var scoreID = 0;
        if (score <= 100 && score >= 85) {
            scoreID = 4;
        }
        else if (score <= 85 && score >= 60) {
            scoreID = 3;
        }
        else if (score <= 60 && score >= 40) {
            scoreID = 2;
        }
        else if (score <= 40) {
            scoreID = 1;
        }
        var resultInfo = this.results[scoreID - 1];
        return resultInfo;
    };
    return QuestionModel;
})();
egret.registerClass(QuestionModel,"QuestionModel");
//# sourceMappingURL=QuestionModel.js.map