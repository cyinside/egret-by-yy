class DataModel{
    private static instance:DataModel;
    public idNum:number = 1;
    public static telnum:number=0;
    public static inputname:string ="";
    public static addressName:string ="";
    public static awordArr:Array<any> = new Array();

    private url = "http://120.24.244.84:5001/";
    public onTouchHandle()
    {
        var url = this.url + "getAword";
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
            DataModel.awordArr = datas["result"];
            //DataModel.awordArr = [{'aword':"book"}];
            Global.dispatchEvent(DataEvent.DATACOMPLETE,this);
        }else if(datacode==424){
            alert("通讯失败了");
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

    private url2:string="http://120.24.244.84:8000/";
    public onTouchHandle2()
    {
        var url = this.url2 + "saveRecord";
        var xnum = Math.floor(Math.random()*99);
        //var data ={'openid':'od1m6uAqWITdj-REOeIbfqsLJh8E'+xnum,'game':1,'tel':DataModel.telnum,'name':DataModel.inputname,'address':DataModel.addressName};
        var data ={'openid':__global.openID,'game':4,'tel':DataModel.telnum,'name':DataModel.inputname,'address':DataModel.addressName};
        //alert(DataModel.telnum+DataModel.inputname.toString()+DataModel.addressName);
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        CGNet.doRequest(url,jsonstr,this.onCompleteHandle2,this.onFailHandle2,this);
    }

    private onCompleteHandle2(evt:egret.Event)
    {
        var datas = JSON.parse(evt.target.data);
        console.log("onComplete2"+ datas["result"]);

        var datacode=datas["code"];
        var datacode2=datas["result"];
        if(datacode==200){
            if(datacode2==1){
                alert("已经提交过了");
            }else{
                alert("提交成功");
            }
        }else if(datacode==424){
            alert("通讯失败了");
            Global.dispatchEvent(DataEvent.INPUTFAIL,this);
        }else if(datacode==700){
            alert("活动过期了");
        }
    }

    private onFailHandle2(evt:egret.Event)
    {
        alert("网络出问题了!");
        Global.dispatchEvent(DataEvent.INPUTFAIL,this);
    }

    public static getInstance():DataModel{
        if(this.instance == null){
            this.instance = new DataModel();
        }
        return this.instance;
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