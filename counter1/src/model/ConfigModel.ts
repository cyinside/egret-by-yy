class ConfigModel{
    private static instance:ConfigModel;

    private static btnArr:Array<Btninfo> = new Array();
    public scoreArr:Array<ScoreInfo> = new Array();

    public wx_default_title:string = "";
    public wx_title:string = "";
    public wx_friend_desx:string = "";
    public wx_default_friend_desx:string = "";
    public wx_share:string = "";
    public wx_share_img:string = "";
    public wx_link:string = "";

    public static getInstance():ConfigModel{
        if(this.instance == null){
            this.instance = new ConfigModel();
        }
        return this.instance;
    }

    public initConfig():void{
        var config:Array<Object> = RES.getRes("config");
        var buttonInfArr:Array<Object> = config["countbtn"];

        for (var i:number = 0; i < buttonInfArr.length; i++) {
            var buttonInfo = new Btninfo(buttonInfArr[i]);
            ConfigModel.btnArr.push(buttonInfo);
        }

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
        this.wx_link = config["wx_share_link"].toString();
        this.wx_share_img = config["wx_share_img"].toString();

        //this.link = "http://www.joyoungfeld-ad.com/zhaoyang/game/photogame1/" + ConfigModel.getInstance().version.toString() +
        //    "/index.html";
        //this.thumbnail = "http://www.joyoungfeld-ad.com/zhaoyang/game/photogame1/" + ConfigModel.getInstance().version.toString() +
        //    "/resource/assets/thumbnail.jpg";
    }
    public getBtnInfo(id:number):Btninfo{
        var btnData:Btninfo = ConfigModel.btnArr[id-1];
        return btnData;
    }

    public getLevelByScore(id:number):ScoreInfo{
        var scoreInfo:ScoreInfo = this.scoreArr[id-1];
        return scoreInfo;
    }

}