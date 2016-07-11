class DataModel{
    private static instance:DataModel;
    public idNum:number = 1;
    public static prizeWord:string = "";
    public static telnum:number=0;
    public static inputname:string ="";

    public static getInstance():DataModel{
        if(this.instance == null){
            this.instance = new DataModel();
        }
        return this.instance;
    }

    private url = "http://120.24.244.84:5001/";
    public onTouchHandle()
    {
        var url = this.url + "setAword";
        //var data ={'openid':'od1m6uAqWITdj-REOeIbfqsLJK8E','name':'wanghua2222','game':3};
        var data ={'openid':__global.openID,'name':__global.nickname,'game':3};
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        CGNet.doRequest(url,jsonstr,this.onCompleteHandle,this.onFailHandle,this);/***************************************************/
    }

    private onCompleteHandle(evt:egret.Event)
    {
        var datas = JSON.parse(evt.target.data);
        console.log("onComplete"+ datas["result"]);
        var datacode=datas["code"];
        if(datacode==200){
            DataModel.prizeWord = datas["result"].toString();
            //DataModel.prizeWord = "0";
            Global.dispatchEvent(DataEvent.DATACOMPLETE,this);
        }else if(datacode==424){
            //alert("通讯失败了");
            DataModel.prizeWord = "0";
            Global.dispatchEvent(DataEvent.DATACOMPLETE,this);
        }else if(datacode==700){
            alert("活动过期了")
        }
    }

    private onFailHandle(evt:egret.Event)
    {
        alert("网络出问题了!");
        Global.dispatchEvent(DataEvent.DATAONFAIL,this);
    }

    private encryptHandle(content)
    {
        //alert("encryptHandle");/***************************************************/
        var content = __global.cmdToEncrypt(content);
        content = "qSwW"+content.toString();
        content = this.encryptFilter(content);
        return  "openid="+ content;
        //return __global.cmdToEncrypt(content);
    }
    private encryptFilter(content)
    {
        //alert("encryptFilter");/***************************************************/
        content = content.replace(/\+/g, "-");
        content = content.replace(/\//g,"_");
        content = content.replace(/\=/g," ");
        return content;
    }
}