class ConfigModel{
    private static instance:ConfigModel;
    public idNum:number = 1;
    private results:ResultInfo[] = new Array();

    public wx_default_title:string = "";
    public wx_title:string = "";
    public wx_friend_desx:string = "";
    public wx_share_friend:string = "";
    public wx_share_monent:string = "";
    public wx_share_link:string = "";
    public wx_share_img:string = "";
    public txt1:string = "";
    public txt2:string = "";
    public link:string = "";


    public static getInstance():ConfigModel{
        if(this.instance == null){
            this.instance = new ConfigModel();
        }
        return this.instance;
    }

    public initConfig():void{
        var config:Array<Object> = RES.getRes("config");
        var reasultArr:Array<Object> = config["result"];
        var obj:any;
        for (var i:number = 0; i < reasultArr.length; i++) {
            obj = reasultArr[i];
            var reasultInfo:ResultInfo = new ResultInfo(obj);
            ConfigModel.getInstance().results.push(reasultInfo);
        }

        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_title = config["wx_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_share_friend = config["wx_share_friend"].toString();
        this.wx_share_monent = config["wx_share_monent"].toString();
        this.txt1 = config["txt1"].toString();
        this.txt2 = config["txt2"].toString();

        var url:string = location.href.split("#")[0];
        this.wx_share_link = url.substring(0,url.indexOf("index.php")+9);
        this.wx_share_img = this.wx_share_link.replace("index.php",config["wx_share_img"].toString())
    }

    public getResultInfoById(score:number):ResultInfo{
        var resultInfo:ResultInfo = this.results[score - 1];
        return resultInfo;
    }

}