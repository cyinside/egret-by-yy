class ConfigModel{
    private static instance:ConfigModel;


    public wx_default_title:string = "";
    public wx_title:string = "";
    public wx_friend_desx:string = "";
    public wx_default_friend_desx:string = "";
    public wx_share:string = "";
    public wx_share_img:string = "";
    public wx_link:string = "";
    public wx_share_link:string = "";

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
        this.wx_default_friend_desx = config["wx_default_friend_desx"].toString();
        this.wx_share = config["wx_share"].toString();

        var url:string = location.href.split("#")[0];
        this.wx_share_link = "http://www.joyoungfeld-ad.com/zhaoyang/game/click_game/index.html";
        this.wx_share_img = "http://www.joyoungfeld-ad.com/zhaoyang/app/getPrize3/1/resource/assets/shareIcon.jpg";
    }

    public updataShare(){
        JSSDK.getWeiXinShareTimeline(2,this.wx_default_friend_desx,this.wx_share_link,this.wx_share_img);
        JSSDK.getWeiXinShareAppMessage(2,this.wx_title,this.wx_share_link,this.wx_share_img,this.wx_friend_desx);
    }
}