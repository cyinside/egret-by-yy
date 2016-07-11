class ConfigModel{
    private static instance:ConfigModel;

    public roleInfo:RoleInfo;
    public coinInfo:DropInfo;
    public pm25Info:DropInfo;
    public bombInfo:DropInfo;
    public chapterInfo:ChapterInfo;
    public scoreArr:Array<ScoreInfo> = new Array();

    public wx_default_title:string = "";
    public wx_title:string = "";
    public wx_friend_desx:string = "";
    public wx_default_friend_desx:string = "";
    public wx_share:string = "";
    public wx_share_img:string = "";
    public wx_share_link:string = "";
    public Is_win:boolean = false;


    public ruleName:string = "";
    public rule:string = "";

    public static getInstance():ConfigModel{
        if(this.instance == null){
            this.instance = new ConfigModel();
        }
        return this.instance;
    }

    public initConfig():void{
        var config:Array<Object> = RES.getRes("config");
        this.roleInfo = new RoleInfo(config["role"]);
        this.coinInfo = new DropInfo(config["coin"]);
        this.pm25Info = new DropInfo(config["pm25"]);
        this.bombInfo = new DropInfo(config["bomb"]);
        this.chapterInfo = new ChapterInfo(config["chapter"]);
        this.ruleName = config["rule_name"].toString();
        this.rule = config["rule"].toString();

        var tempScoreArr:Array<Object> = config["level"];
        for (var i:number = 0; i < tempScoreArr.length; i++) {
            var scoreInfo:ScoreInfo = new ScoreInfo(tempScoreArr[i]);
            this.scoreArr.push(scoreInfo);
        }

        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_title = config["wx_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_default_friend_desx = config["wx_default_friend_desx"].toString();
        this.wx_share = config["wx_share"].toString();
        var url:string = location.href.split("#")[0];
        this.wx_share_link = url.substring(0,url.indexOf("index.html")+10);
        this.wx_share_img = this.wx_share_link.replace("index.html",config["wx_share_img"].toString());

        //this.link = "http://www.joyoungfeld-ad.com/zhaoyang/game/photogame1/" + ConfigModel.getInstance().version.toString() +
        //    "/index.html";
        //this.thumbnail = "http://www.joyoungfeld-ad.com/zhaoyang/game/photogame1/" + ConfigModel.getInstance().version.toString() +
        //    "/resource/assets/thumbnail.jpg";
    }

    public reset():void{
        this.roleInfo.score = 0;
    }

    public getLevelByScore(score:number):ScoreInfo{
        var scoreInfo:ScoreInfo = this.scoreArr[0];
        for (var i:number = this.scoreArr.length - 1; i > 0; i--) {
            scoreInfo = this.scoreArr[i];
            if(score >= scoreInfo.score){
                return scoreInfo;
            }
        }
        return scoreInfo;
    }
}