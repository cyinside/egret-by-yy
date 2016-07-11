class ConfigModel{

    private static instance:ConfigModel;

    public wx_default_title:string = "";
    public wx_title:string = "";
    public wx_friend_desx:string = "";
    public wx_share_friend:string = "";
    public wx_share_monent:string = "";
    public wx_share_link:string = "";
    public wx_share_img:string = "";
    public wx_signpackage_url:string = "";
    public url:string = "";
    public server:string = "";

    public static getInstance():ConfigModel{
        if(this.instance == null){
            this.instance = new ConfigModel();
        }
        return this.instance;
    }

    public initConfig():void{
        var config:Array<Object> = RES.getRes("config");

        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_title = config["wx_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_share_friend = config["wx_default_friend_desx"].toString();
        this.url = config["url"].toString();
        var url:string = location.href.split("#")[0];
        this.wx_share_link = url.substring(0,url.indexOf("index.html")+10);
        this.wx_share_img = this.wx_share_link.replace("index.html",config["wx_share_img"].toString());
    }

    public getJssdk(){
        JSSDK.getWeiXinShareAppMessage(ConfigModel.getInstance().wx_title,ConfigModel.getInstance().wx_share_link
            ,ConfigModel.getInstance().wx_share_img,ConfigModel.getInstance().wx_friend_desx);
        JSSDK.getWeiXinShareTimeline(ConfigModel.getInstance().wx_title,ConfigModel.getInstance().wx_share_link
            ,ConfigModel.getInstance().wx_share_img);
    }
}