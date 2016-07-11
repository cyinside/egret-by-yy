class DataModel{
    private static instance:DataModel;
    public idNum:number = 1;
    public static prizeWord:string = "";
    public static awordArr:Array<any> = new Array();

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
        //var data ={'openid':'od1m6uAqWITdj-REOeIbfqs','name':'wanghua2222','game':4};
        var data ={'openid':__global.openID,'name':__global.nickname,'game':4};
        //alert(__global.openID+"##"+__global.nickname);/***************************************************/
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        //alert("data:"+jsonstr);/***************************************************/
        CGNet.doRequest(url,jsonstr,this.onCompleteHandle,this.onFailHandle,this);/***************************************************/
    }

    private onCompleteHandle(evt:egret.Event)
    {
        var datas = JSON.parse(evt.target.data);
        //alert("onComplete"+ datas["result"]);/***************************************************/
        console.log("onComplete"+ datas["result"]);

        var datacode=datas["code"];
        //alert("code@"+datacode);
        if(datacode==200){
            DataModel.prizeWord = datas["result"].toString();
            Global.dispatchEvent(DataEvent.DATACOMPLETE,this);
        }else if(datacode==424){
            //alert("通讯失败了");
            DataModel.prizeWord = "0";
            Global.dispatchEvent(DataEvent.DATACOMPLETE,this);
            //Global.dispatchEvent(DataEvent.DATAONFAIL,this);
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


    private url2 = "http://120.24.244.84:5001/";
    public onTouchHandle2()
    {
        var url = this.url2 + "getAword";
        //var data ={'openid':'od1m6uAqWITdj-REOeIbfqs','name':'wanghua2222','game':4};
        //alert(__global.openID+"##"+__global.nickname);/***************************************************/
        var data ={'openid':__global.openID,'name':__global.nickname,'game':4};
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        CGNet.doRequest(url,jsonstr,this.onCompleteHandle2,this.onFailHandle2,this);/***************************************************/
    }

    private onCompleteHandle2(evt:egret.Event)
    {
        var datas = JSON.parse(evt.target.data);
        console.log("onComplete"+ datas["result"]);
        var datacode=datas["code"];
        if(datacode==200){
            DataModel.awordArr = datas["result"];
            //DataModel.awordArr = [{'aword':"book"}];
            Global.dispatchEvent(DataEvent.DATACOMPLETE1,this);
        }else if(datacode==424){
            alert("通讯失败了");
            Global.dispatchEvent(DataEvent.DATACOMPLETE1,this);
        }else if(datacode==700){
            alert("活动过期了")
        }
    }

    private onFailHandle2(evt:egret.Event)
    {
        alert("网络出问题了!");
        Global.dispatchEvent(DataEvent.DATAONFAIL1,this);
    }
}