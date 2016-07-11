var DataModel = (function () {
    function DataModel() {
        this.idNum = 1;
        this.url = "http://120.24.244.84:5001/";
        this.url2 = "http://120.24.244.84:5001/";
        this.url3 = "http://120.24.244.84:5001/";
        this.awardid = 0;
    }
    var d = __define,c=DataModel,p=c.prototype;
    DataModel.getInstance = function () {
        if (this.instance == null) {
            this.instance = new DataModel();
        }
        return this.instance;
    };
    p.onTouchHandle = function () {
        var url = this.url + "setAword";
        var data = { 'openid': 'od1m6uAqWI', 'name': 'wanghua2222', 'game': 6 };
        //var data ={'openid':__global.openID,'name':__global.nickname,'game':6};
        console.log(__global.openID + "##" + __global.nickname); /***************************************************/
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        //console.log("data:"+jsonstr);/***************************************************/
        CGNet.doRequest(url, jsonstr, this.onCompleteHandle, this.onFailHandle, this); /***************************************************/
    };
    p.onCompleteHandle = function (evt) {
        var datas = JSON.parse(evt.target.data);
        console.log("onComplete" + datas["result"]); /***************************************************/
        var datacode = datas["code"];
        console.log("code@" + datacode);
        if (datacode == 200) {
            DataModel.prizeWord = datas["result"].toString();
            Global.dispatchEvent(DataEvent.DATACOMPLETE, this);
        }
        else if (datacode == 424) {
            //alert("通讯失败了");
            DataModel.prizeWord = "0";
            Global.dispatchEvent(DataEvent.DATACOMPLETE, this);
        }
        else if (datacode == 700) {
            alert("活动过期了");
        }
    };
    p.onFailHandle = function (evt) {
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
    p.onTouchHandle2 = function () {
        var url = this.url2 + "getAword";
        var data = { 'openid': 'od1m6uAqWI', 'name': 'wanghua2222', 'game': 6 };
        //console.log(__global.openID+"##"+__global.nickname);/***************************************************/
        //var data ={'openid':__global.openID,'name':__global.nickname,'game':6};
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        CGNet.doRequest(url, jsonstr, this.onCompleteHandle2, this.onFailHandle2, this); /***************************************************/
    };
    p.onCompleteHandle2 = function (evt) {
        var datas = JSON.parse(evt.target.data);
        var datacode = datas["code"];
        if (datacode == 200) {
            DataModel.awordArr = datas["result"];
            //DataModel.awordArr = [{'aword':"book"}];
            Global.dispatchEvent(DataEvent.DATACOMPLETE1, this);
        }
        else if (datacode == 424) {
            alert("通讯失败了");
            Global.dispatchEvent(DataEvent.DATACOMPLETE1, this);
        }
        else if (datacode == 700) {
            alert("活动过期了");
        }
    };
    p.onFailHandle2 = function (evt) {
        alert("网络出问题了!");
        Global.dispatchEvent(DataEvent.DATAONFAIL1, this);
    };
    p.onTouchHandle3 = function (id) {
        this.awardid = id;
        var url = this.url3 + "receive";
        var data = { 'openid': 'od1m6uAqWI', 'game': 6, 'receive': DataModel.awardName };
        //var data ={'openid':__global.openID,'game':6,'receive':DataModel.awardName};
        //console.log(__global.openID+"##"+__global.nickname);/***************************************************/
        //var data ={'openid':__global.openID,'name':__global.nickname,'game':6};
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        CGNet.doRequest(url, jsonstr, this.onCompleteHandle3, this.onFailHandle3, this); /***************************************************/
    };
    p.onCompleteHandle3 = function (evt) {
        var datas = JSON.parse(evt.target.data);
        console.log("onComplete" + datas);
        var datacode = datas["code"];
        if (datacode == 200) {
            //DataModel.awordArr = [{'aword':"book"}];
            var event = new DataEvent(DataEvent.DATACOMPLETE2);
            event.awardID = this.awardid;
            Global.dispatchEvent(DataEvent.DATACOMPLETE2, event);
        }
        else if (datacode == 424) {
            alert("通讯失败了");
            Global.dispatchEvent(DataEvent.DATACOMPLETE2, this);
        }
        else if (datacode == 700) {
            alert("活动过期了");
        }
    };
    p.onFailHandle3 = function (evt) {
        alert("网络出问题了!");
        Global.dispatchEvent(DataEvent.DATAONFAIL1, this);
    };
    DataModel.prizeWord = "";
    DataModel.awordArr = new Array();
    DataModel.awardName = "";
    return DataModel;
}());
egret.registerClass(DataModel,'DataModel');
//# sourceMappingURL=DataModel.js.map