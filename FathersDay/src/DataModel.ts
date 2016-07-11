class DataModel{
    private static instance:DataModel;
    public idNum:number = 1;
    public static prizeWord:string = "";
    public static resultType:number =1;
    public static sumNum:number =0;

    public static getInstance():DataModel{
        if(this.instance == null){
            this.instance = new DataModel();
        }
        return this.instance;
    }

    private url = "http://120.24.244.84:6800/";
    public onTouchHandle()
    {
        var url = this.url + "takePartInActivity";
        //var data ={'openid':'od1m6uAqWITdj-REOeIbfqsLJK8E','name':'wanghua2222','game':1};
        var data ={'openid':__global.openID,'name':__global.nickname,'game':1,'imgurl':__global.headimgurl,'entranceID':10000,'result':DataModel.resultType};
        //var data ={'openid':'od1m6uAqWITdj-REOeIbfqsLJK8E','name':'wanghua2222','game':1,'imgurl':'535464654','entranceID':10000,'result':DataModel.resultType};
        //alert(__global.openID+"##"+__global.nickname);/***************************************************/
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        //alert("data:"+jsonstr);/***************************************************/
        CGNet.doRequest(url,jsonstr,this.onCompleteHandle,this.onFailHandle,this);/***************************************************/
    }

    private onCompleteHandle(evt:egret.Event)
    {
        //alert("onComplete"+ evt.target.data);
        var datas = JSON.parse(evt.target.data);
        //alert("onComplete"+ datas);/***************************************************/
        //console.log("onComplete"+ datas["result"]);

        var datacode=datas["code"];
        //alert("code@"+datacode);
        if(datacode==200){
            DataModel.sumNum =2415+ datas["result"].sum;
            console.log(datas["result"].sum);
            Global.dispatchEvent(DataEvent.DATACOMPLETE,this);
        }else if(datacode==424){
            alert("通讯失败了");
            Global.dispatchEvent(DataEvent.DATACOMPLETE,this);
            //Global.dispatchEvent(DataEvent.DATAONFAIL,this);
        }else if(datacode==700){
            alert("活动过期了")
        }else if(datacode==3000){
            alert("已经投过票了")
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

    private url2 = "http://120.24.244.84:6800/";
    public onTouchHandle2()
    {
        var url = this.url2 + "getInfo";
        var xnum = Math.floor(Math.random()*99);
        //var data ={'openid':'od1m6uAqWITdj-REOeIbfqsLJh8E'+xnum,'game':1,'tel':DataModel.telnum,'name':DataModel.inputname};
        var data ={'openid':__global.openID,'game':1,'result':1};
        //var data ={'openid':'od1m6uAqWITdj-REOeIbfqsLJK8E','name':'wanghua2222','game':1,'result':1};
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        //alert(__global.openID+"@@"+DataModel.telnum+"@@"+DataModel.inputname);/***************************************************/
        CGNet.doRequest(url,jsonstr,this.onCompleteHandle2,this.onFailHandle2,this);
    }

    private onCompleteHandle2(evt:egret.Event)
    {
        //alert("onComplete"+ evt.target.data);
        var datas = JSON.parse(evt.target.data);
        //alert("onComplete2"+ datas["result"]);/***************************************************/
        console.log("onComplete2"+ datas["result"]);

        var datacode=datas["code"];
        var datacode2=datas["result"];
        //alert("code@"+datacode);
        //alert("code2@"+datacode2);
        if(datacode==200){
            DataModel.sumNum =2415+datas["result"].sum;
            Global.dispatchEvent(DataEvent.DATACOMPLETE,this);
            console.log(DataModel.sumNum);
        }else if(datacode==424){
            alert("通讯失败了");
            //Global.dispatchEvent(DataEvent.INPUTFAIL,this);
        }else if(datacode==700){
            alert("活动过期了");
        }
    }

    private onFailHandle2(evt:egret.Event)
    {
        alert("网络出问题了!");
        //Global.dispatchEvent(DataEvent.INPUTFAIL,this);
    }
}