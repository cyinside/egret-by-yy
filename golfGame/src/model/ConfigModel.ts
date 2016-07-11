class ConfigModel{
    private static instance:ConfigModel;


    public wx_default_title:string = "";
    public wx_title:string = "";
    public wx_default_desc:string = "";
    public wx_desc:string = "";
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
        this.wx_default_desc = config["wx_default_desc"].toString();
        this.wx_desc = config["wx_desc"].toString();

        var url:string = location.href.split("#")[0];
        this.wx_share_link = url.substring(0,url.indexOf("index.html")+10);
        this.wx_share_img =this.wx_share_link.replace("index.html",config["wx_share_img"].toString());
    }

    public updataShare(){
        JSSDK.getWeiXinShareTimeline(2,this.wx_desc,this.wx_share_link,this.wx_share_img);
        JSSDK.getWeiXinShareAppMessage(2,this.wx_title,this.wx_share_link,this.wx_share_img,this.wx_default_desc);
        //alert(this.wx_title+this.wx_share_link+this.wx_share_img+this.wx_friend_desx);
    }
}