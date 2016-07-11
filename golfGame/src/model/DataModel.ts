class DataModel{
    private static instance:DataModel;
    public idNum:number = 1;
    public static prizeWord:string = "";
    public static awordArr:Array<any> = new Array();
    public static awardName:string = "";

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
        var data ={'openid':'od1m6uAqWI','name':'wanghua2222','game':6};
        //var data ={'openid':__global.openID,'name':__global.nickname,'game':6};
        console.log(__global.openID+"##"+__global.nickname);/***************************************************/
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        //console.log("data:"+jsonstr);/***************************************************/
        CGNet.doRequest(url,jsonstr,this.onCompleteHandle,this.onFailHandle,this);/***************************************************/
    }

    private onCompleteHandle(evt:egret.Event)
    {
        var datas = JSON.parse(evt.target.data);
        console.log("onComplete"+ datas["result"]);/***************************************************/

        var datacode=datas["code"];
        console.log("code@"+datacode);
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
        var data ={'openid':'od1m6uAqWI','name':'wanghua2222','game':6};
        //console.log(__global.openID+"##"+__global.nickname);/***************************************************/
        //var data ={'openid':__global.openID,'name':__global.nickname,'game':6};
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        CGNet.doRequest(url,jsonstr,this.onCompleteHandle2,this.onFailHandle2,this);/***************************************************/
    }

    private onCompleteHandle2(evt:egret.Event)
    {
        var datas = JSON.parse(evt.target.data);
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


    private url3 = "http://120.24.244.84:5001/";
    private awardid:number =0;
    public onTouchHandle3(id:number)
    {
        this.awardid=id;
        var url = this.url3 + "receive";
        var data ={'openid':'od1m6uAqWI','game':6,'receive':DataModel.awardName};
        //var data ={'openid':__global.openID,'game':6,'receive':DataModel.awardName};
        //console.log(__global.openID+"##"+__global.nickname);/***************************************************/
        //var data ={'openid':__global.openID,'name':__global.nickname,'game':6};
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        CGNet.doRequest(url,jsonstr,this.onCompleteHandle3,this.onFailHandle3,this);/***************************************************/
    }

    private onCompleteHandle3(evt:egret.Event)
    {
        var datas = JSON.parse(evt.target.data);
        console.log("onComplete"+ datas);
        var datacode=datas["code"];
        if(datacode==200){
            //DataModel.awordArr = [{'aword':"book"}];
            var event:DataEvent = new DataEvent(DataEvent.DATACOMPLETE2);
            event.awardID = this.awardid;
            Global.dispatchEvent(DataEvent.DATACOMPLETE2, event);
        }else if(datacode==424){
            alert("通讯失败了");
            Global.dispatchEvent(DataEvent.DATACOMPLETE2,this);
        }else if(datacode==700){
            alert("活动过期了")
        }
    }

    private onFailHandle3(evt:egret.Event){
        alert("网络出问题了!");
        Global.dispatchEvent(DataEvent.DATAONFAIL1,this);
    }
}