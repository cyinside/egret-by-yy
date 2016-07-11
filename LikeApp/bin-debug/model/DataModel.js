var DataModel = (function () {
    function DataModel() {
        this.idNum = 1;
        this.url = "http://120.24.244.84:5002/";
        this.url1 = "http://120.24.244.84:5002/";
    }
    var d = __define,c=DataModel,p=c.prototype;
    DataModel.getInstance = function () {
        if (this.instance == null) {
            this.instance = new DataModel();
        }
        return this.instance;
    };
    p.onTouchHandle = function () {
        var url = this.url + "getInfo";
        //var data = {'openid':"od1m6uAqWITdj-REOeIbfqsLJK8E",'game': 2,'datatype':1};
        var data = { 'openid': __global.openID, 'game': 2, 'datatype': 1 };
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        CGNet.doRequest(url, jsonstr, this.onCompleteHandle, this.onFailHandle, this);
        /***************************************************/
    };
    p.onCompleteHandle = function (evt) {
        var datas = JSON.parse(evt.target.data);
        //alert("onComplete"+ datas["result"]);/***************************************************/
        console.log("onComplete" + datas["result"]);
        var datacode = datas["code"];
        if (datacode == 200) {
            DataModel.userInfoArr = datas["result"].person;
            DataModel.personNum = datas["result"].total;
            Global.dispatchEvent(DataEvent.DATACOMPLETE, this);
        }
        else if (datacode == 424) {
            alert("通讯失败了");
        }
        else if (datacode == 700) {
            alert("活动过期了");
        }
    };
    p.onFailHandle = function (evt) {
        alert("网络出问题了!");
        Global.dispatchEvent(DataEvent.DATAONFAIL, this);
    };
    p.onTouchHandle1 = function () {
        var url = this.url1 + "takePartInActivity";
        var aaa = Math.floor(Math.random() * 99);
        //var data = {'openid': "asakkkddj",'game': 2,'imgurl':"http://www.joyoungfeld-ad.com/zhaoyang/game/lookinggame2/resource/assets/share.jpg",'name': "huhuhuhuh1",'fuid':DataModel.fuUid,'entranceID':1000,'datatype':1};
        var data = { 'openid': __global.openID, 'game': 2, 'imgurl': __global.headimgurl, 'name': __global.nickname, 'fuid': DataModel.fuUid, 'entranceID': 1000, 'datatype': 1 };
        //var data = {'openid':"asdasdasdasda"+aaa.toString(),'game': 2,'imgurl':"sdasdasdasdasd",'name': "yyyyyyyyy",'fuid':DataModel.fuUid,'entranceID':1000,'datatype':1};
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        CGNet.doRequest(url, jsonstr, this.onCompleteHandle1, this.onFailHandle1, this);
    };
    p.onCompleteHandle1 = function (evt) {
        var datas = JSON.parse(evt.target.data);
        console.log("onComplete" + datas["result"]);
        var datacode = datas["code"];
        if (datacode == 200) {
            alert("点赞成功");
            DataModel.userInfoArr = datas["result"].person;
            DataModel.personNum = datas["result"].total;
            DataModel.isExist = datas["result"].isExist;
            console.log(datas["result"].total);
            Global.dispatchEvent(DataEvent.DATACOMPLETE1, this);
        }
        else if (datacode == 424) {
            alert("通讯失败了");
        }
        else if (datacode == 700) {
            alert("活动过期了");
        }
    };
    p.onFailHandle1 = function (evt) {
        alert("网络出问题了!");
        Global.dispatchEvent(DataEvent.DATAONFAIL, this);
    };
    p.encryptHandle = function (content) {
        //alert("encryptHandle");/***************************************************/
        var content = __global.cmdToEncrypt(content);
        content = "qSwW" + content.toString();
        content = this.encryptFilter(content);
        return "openid=" + content;
        //return __global.cmdToEncrypt(content);
    };
    p.encryptFilter = function (content) {
        //alert("encryptFilter");/***************************************************/
        content = content.replace(/\+/g, "-");
        content = content.replace(/\//g, "_");
        content = content.replace(/\=/g, " ");
        return content;
    };
    DataModel.personNum = 0;
    DataModel.fuUid = "10000";
    DataModel.isExist = 0;
    return DataModel;
}());
egret.registerClass(DataModel,'DataModel');
