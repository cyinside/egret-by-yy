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
    public static score:number = 0;
    public static hole2Arr:Array<any> = new Array();


    public locationArr:Array<LocaionInfo> = new Array();
    public rolArr:Array<RoleInfo> = new Array();
    public static timeSpeed:number = 48;

    public static getInstance():ConfigModel{
        if(this.instance == null){
            this.instance = new ConfigModel();
        }
        return this.instance;
    }

    public initConfig():void{
        var config:Array<Object> = RES.getRes("config1");
        var roleArr:Array<Object> = config["role"];
        var locatArr:Array<Object> = config["hole"];

        for(var j:number = 0;j < locatArr.length;j++){
            var locatInfo:LocaionInfo = new LocaionInfo(locatArr[j]);
            this.locationArr.push(locatInfo);
        }

        for(var i:number = 0;i < roleArr.length;i++){
            var roleInfo:RoleInfo = new RoleInfo(roleArr[i]);
            this.rolArr.push(roleInfo);
        }

        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_title = config["wx_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_default_friend_desx = config["wx_default_friend_desx"].toString();
        this.wx_share = config["wx_share"].toString();

        var url:string = location.href.split("#")[0];
        this.wx_share_link = url.substring(0,url.indexOf("index.php")+9);
        this.wx_share_img =this.wx_share_link.replace("index.php",config["wx_share_img"].toString());
    }

    public getLocationById(id:number):LocaionInfo{
        var locationData:LocaionInfo = this.locationArr[id];
        return locationData;
    }

    public getTypeByid(id:number):RoleInfo{
        var roleData:RoleInfo = this.rolArr[id];
        return roleData;
    }

    public updataShare(){
        JSSDK.getWeiXinShareTimeline(2,this.wx_default_friend_desx,this.wx_share_link,this.wx_share_img);
        JSSDK.getWeiXinShareAppMessage(2,this.wx_title,this.wx_share_link,this.wx_share_img,this.wx_friend_desx);
        //alert(this.wx_title+this.wx_share_link+this.wx_share_img+this.wx_friend_desx);
    }
}