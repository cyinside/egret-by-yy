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
    public static headImg:string = "";
    public static uID:string = "";
    public static uName:string = "";
    //public static userheadImg:string = "";

    public static getInstance():ConfigModel{
        if(this.instance == null){
            this.instance = new ConfigModel();
        }
        return this.instance;
    }

    public initConfig():void{

        var config:Array<Object> = RES.getRes("config");
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_default_friend_desx = config["wx_default_friend_desx"].toString();
        this.wx_share = config["wx_share"].toString();

        var url:string = location.href.split("#")[0];
        this.wx_share_link = url.substring(0,url.indexOf("index.php")+9);
        this.wx_share_img = this.wx_share_link.replace("index.php",config["wx_share_img"].toString());

        //ConfigModel.headImg = "http://wx.qlogo.cn/mmopen/Q3auHgzwzM5s2KD1YxzIEEI5zzA7fdyXgmKMaia5FMVPcUxnrJA2Du0TTek5ogsRgic8W0ibkAy59icqL3vWMj8xeFCZ2eBj093iaaHItsurfDaA/0";
        ConfigModel.uID = __global.openID;
        ConfigModel.uName = __global.nickname;
        //ConfigModel.uID = "od1m6uAqWITdj-REOeIbfqsLJK8E";
        //ConfigModel.uName = "cyy"
        var str:string  = config["wx_default_title"].toString();
        str = str.replace("XX",DataModel.personNum.toString());
        this.wx_default_title = str;

        var str1:string  = config["wx_title"].toString();
        str1 = str1.replace("XX",DataModel.personNum.toString());
        this.wx_title =  ConfigModel.uName+str1;
    }

    public updataShare(){
        var link:string = this.wx_share_link
            + "?uID=" + ConfigModel.uID.toString()
            + "&uimg=" + ConfigModel.headImg.toString()
            + "&end";

        //console.log(link);
        JSSDK.getWeiXinShareTimeline(2,this.wx_default_friend_desx,link,this.wx_share_img);
        JSSDK.getWeiXinShareAppMessage(2,this.wx_title,link,this.wx_share_img,this.wx_friend_desx);
    }
}