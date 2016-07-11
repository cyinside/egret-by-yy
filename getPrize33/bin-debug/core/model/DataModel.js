var DataModel = (function () {
    function DataModel() {
        this.idNum = 1;
        this.url = "http://120.24.244.84:5001/";
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
        //var data ={'openid':'od1m6uAqWITdj-REOeIbfqsLJK8E','name':'wanghua2222','game':3};
        var data = { 'openid': __global.openID, 'name': __global.nickname, 'game': 3 };
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        CGNet.doRequest(url, jsonstr, this.onCompleteHandle, this.onFailHandle, this); /***************************************************/
    };
    p.onCompleteHandle = function (evt) {
        var datas = JSON.parse(evt.target.data);
        console.log("onComplete" + datas["result"]);
        var datacode = datas["code"];
        if (datacode == 200) {
            DataModel.prizeWord = datas["result"].toString();
            //DataModel.prizeWord = "0";
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
    DataModel.prizeWord = "";
    DataModel.telnum = 0;
    DataModel.inputname = "";
    return DataModel;
}());
egret.registerClass(DataModel,'DataModel');
