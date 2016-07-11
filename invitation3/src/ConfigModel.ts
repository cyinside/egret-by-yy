class ConfigModel{
    private static instance:ConfigModel;
    public idNum:number = 1;
    public typeNum:number = 1;
    public typeArr:TypeInfo[] = new Array();
    public unameWidth:number = 0;

    public wx_default_title:string = "";
    public wx_title:string = "";
    public wx_friend_desx:string = "";
    public wx_share_friend:string = "";
    public wx_share_monent:string = "";
    public wx_share_link:string = "";
    public wx_share_img:string = "";
    public link:string = "";

    public isShowPage:boolean = false;
    public contTxt:string = "";
    public headUrl:string = __global.headimgurl.toString();
    public uname:string = __global.nickname.toString();
    //public headUrl:string = "http://www.joyoungfeld-ad.com/zhaoyang/animation/invitation2/shareIcon.jpg";

    public static getInstance():ConfigModel{
        if(this.instance == null){
            this.instance = new ConfigModel();
        }
        return this.instance;
    }

    public initConfig():void{
        var config:Array<Object> = RES.getRes("config");
        var typeAr:Array<Object> = config["desx"];
        var obj:any;
        this.wx_title = config["wx_title"].toString();
        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();

        var url:string = location.href.split("#")[0];
        this.wx_share_link = url.substring(0,url.indexOf("index.php")+9);
        this.wx_share_img = this.wx_share_link.replace("index.php",config["wx_share_img"].toString());

        for(var i:number = 0;i<typeAr.length;i++){
            obj = typeAr[i];
            var typeInfo:TypeInfo = new TypeInfo(obj);
            ConfigModel.getInstance().typeArr.push(typeInfo);
        }

        this.updateShare1();
    }

    public updateShare1():void{
        var link:string = this.wx_share_link
            + "?ct=" + decodeURI(ConfigModel.getInstance().contTxt.toString())
            + "&url=" + decodeURI(ConfigModel.getInstance().headUrl.toString())
            + "&end";
        var udesc:string = ConfigModel.getInstance().contTxt;
        //var utitle:string = ConfigModel.getInstance().getTypeByID()+ConfigModel.getInstance().uNameTxt;
        JSSDK.getWeiXinShareTimeline(2,"我想要的生活是"+udesc+","+this.uname+"邀请你参加保利首届当代生活方式展",link,this.wx_share_img);
        //JSSDK.getWeiXinShareTimeline(2,this.wx_title,link,this.wx_share_img);
        JSSDK.getWeiXinShareAppMessage(2,this.wx_title,link,this.wx_share_img,"我想要的生活是"+udesc+","+this.uname+"邀请你参加保利首届当代生活方式展");
    }

    public getTypeByID(){
        return this.typeArr[this.typeNum-1].text;
    }

}