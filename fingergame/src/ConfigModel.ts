class ConfigModel{
    private static instance:ConfigModel;
    public static wx_title:string = "";
    public static wx_desc:string = "";
    public static wx_friend_desx:string = "";
    public static wx_share:string = "";
    public static version:number = 1;
    public static link:string;
    public static imgURL:string;
    public static pType:number = 0;
    public userName:string = "圣诞了,"+__global.usernickname;

    public static getInstance():ConfigModel{
        if(this.instance == null){
            this.instance = new ConfigModel();
        }
        return this.instance;
    }

    public static getUserName()
    {
        return "圣诞了,"+__global.usernickname;
    }

    public initConfig():void{
        var config:Array<Object> = RES.getRes("config");
        ConfigModel.wx_title = config["wx_default_title"].toString();
        ConfigModel.wx_desc = config["wx_desc"].toString();
        ConfigModel.wx_share = config["wx_share"].toString();
        ConfigModel.version = parseInt(config["version"].toString());
        ConfigModel.link = config["wx_link"].toString();
        ConfigModel.imgURL = config["wx_imgURL"].toString();
    }

}