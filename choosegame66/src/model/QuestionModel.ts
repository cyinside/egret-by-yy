class QuestionModel{
    private static instance:QuestionModel;
    public idNum:number = 1;
    private questions:QuestionInfo[] = new Array();
    private _userInfo:UserInfo = new UserInfo();
    private scores:ScoreInfo[] = new Array();
    private results:ResultInfo[] = new Array();

    public wx_default_title:string = "";
    public wx_title:string = "";
    public wx_friend_desx:string = "";
    public wx_share_friend:string = "";
    public wx_share_monent:string = "";
    public wx_share_link:string = "";
    public wx_share_img:string = "";
    public link:string = "";


    public static getInstance():QuestionModel{
        if(this.instance == null){
            this.instance = new QuestionModel();
        }
        return this.instance;
    }

    public initConfig():void{
        var config:Array<Object> = RES.getRes("config");
        var questionArr:Array<Object> = config["question"];
        var scoreArr:Array<Object> = config["score"];
        var reasultArr:Array<Object> = config["result"];
        var obj:any;
        for (var i:number = 0; i < questionArr.length; i++) {
            obj = questionArr[i];
            var questionInfo:QuestionInfo = new QuestionInfo(obj);
            QuestionModel.getInstance().questions.push(questionInfo);
        }
        for (var i:number = 0; i < scoreArr.length; i++) {
            obj = scoreArr[i];
            var scoreInfo:ScoreInfo = new ScoreInfo(obj);
            QuestionModel.getInstance().scores.push(scoreInfo);
        }

        for (var i:number = 0; i < reasultArr.length; i++) {
            obj = reasultArr[i];
            var reasultInfo:ResultInfo = new ResultInfo(obj);
            QuestionModel.getInstance().results.push(reasultInfo);
        }

        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_title = config["wx_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_share_friend = config["wx_share_friend"].toString();
        this.wx_share_monent = config["wx_share_monent"].toString();
        this.wx_share_link = config["wx_share_link"].toString();
        this.wx_share_img = config["wx_share_img"].toString();
    }

    public getQuestionInfo(id:number):QuestionInfo{
        return this.questions[id - 1];
    }

    get getQuestionNum():number{
        return this.questions.length;
    }

    get getAnswerNum():number{
        return this.questions[0].answers.length;
    }

    get userInfo():UserInfo{
        return this._userInfo;
    }

    public getResultInfoByScore(score:number):ResultInfo{
        var scoreID:number = 0;
        if(score<=100&&score>=85){
            scoreID = 4;
        }else if(score<=85&&score>=60){
            scoreID = 3;
        }else if(score<=60&&score>=40){
            scoreID = 2;
        }else if(score<=40){
            scoreID = 1;
        }
        var resultInfo:ResultInfo = this.results[scoreID - 1];
        return resultInfo;
    }

}