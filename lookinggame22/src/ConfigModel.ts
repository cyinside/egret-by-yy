class ConfigModel{
    private static instance:ConfigModel;
    public idNum:number = 1;

    public wx_default_title:string = "";
    public wx_title:string = "";
    public wx_title2:string = "";
    public wx_friend_desx:string = "";
    public wx_share_friend:string = "";
    public wx_share_monent:string = "";
    public wx_share_link:string = "";
    public wx_share_img:string = "";
    public static prizeNum:number = 0;
    //public static prizeArr:Array<any> = [];
    public static prizeWord:string = "";
    public static prizeWordtype:number = 0;
    public static timeTxt:string = "";
    public link:string = "";


    public static getInstance():ConfigModel{
        if(this.instance == null){
            this.instance = new ConfigModel();
        }
        return this.instance;
    }

    public initConfig():void{
        var config:Array<Object> = RES.getRes("config");
        var obj:any;
        this.wx_title = config["wx_title"].toString();
        this.wx_title2 = config["wx_title2"].toString();
        this.wx_default_title = config["wx_default_title"].toString();
        this.wx_friend_desx = config["wx_friend_desx"].toString();
        this.wx_share_friend = config["wx_share_friend"].toString();
        this.wx_share_monent = config["wx_share_monent"].toString();

        var url:string = location.href.split("#")[0];
        this.wx_share_link = url.substring(0,url.indexOf("index.php")+9);
        this.wx_share_img = this.wx_share_link.replace("index.php",config["wx_share_img"].toString());
    }


    private url = "http://www.joyoungfeld-ad.com:5000/";
//////////////////////////////////22222222222/////////////////////////////////////
    public onConnectHandle2()
    {
        var url = this.url + "setprize";
        var data ={'openid':__global.openID,'name':__global.nickname,'type':2};
        //var data ={'openid':'12dq343435','name':'wanghua','type':2};
        //alert(__global.openID+__global.nickname);//TODO
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        //alert("data:"+jsonstr);
        CGNet.doRequest(url,jsonstr,this.onCompleteHandle2,this.onFailHandle2,this);
    }

    private onCompleteHandle2(evt:egret.Event) {
        var datas = JSON.parse(evt.target.data);
        ConfigModel.prizeWord = datas["id"];
         //alert("数据"+datas["id"])//TODO
         //alert(ConfigModel.prizeWord)//TODO
        //ConfigModel.prizeWord = "k";
        ConfigModel.prizeWordtype = datas["type"];
        //ConfigModel.prizeWordtype = 2;
        Global.dispatchEvent(DataEvent.LOADCOMP,this);
    }

    private onFailHandle2(evt:egret.Event)
    {
        alert("网络出问题了!");
        Global.dispatchEvent(DataEvent.LOADFAIL,this);
    }

    private encryptHandle(content)
    {
        var content = __global.cmdToEncrypt(content);
        content = "qSwW"+content.toString();
        content = this.encryptFilter(content);
        return  "openid="+ content;
        //return __global.cmdToEncrypt(content);
    }
    private encryptFilter(content)
    {
        content = content.replace(/\+/g, "-");
        content = content.replace(/\//g,"_");
        content = content.replace(/\=/g," ");
        return content;
    }
}