var DataModel = (function () {
    function DataModel() {
        this.idNum = 1;
        this.url = "http://120.24.244.84:5001/";
        this.url2 = "http://120.24.244.84:8000/";
    }
    var d = __define,c=DataModel,p=c.prototype;
    p.onTouchHandle = function () {
        var url = this.url + "getAword";
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
            //DataModel.awordArr = datas["result"];
            DataModel.awordArr = [{ 'aword': "book" }];
            Global.dispatchEvent(DataEvent.DATACOMPLETE, this);
        }
        else if (datacode == 424) {
            alert("通讯失败了");
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
    p.onTouchHandle2 = function () {
        var url = this.url2 + "saveRecord";
        var xnum = Math.floor(Math.random() * 99);
        //var data ={'openid':'od1m6uAqWITdj-REOeIbfqsLJh8E'+xnum,'game':1,'tel':DataModel.telnum,'name':DataModel.inputname,'address':DataModel.addressName};
        var data = { 'openid': __global.openID, 'game': 4, 'tel': DataModel.telnum, 'name': DataModel.inputname, 'address': DataModel.addressName };
        alert(DataModel.telnum + DataModel.inputname.toString() + DataModel.addressName);
        var jsonstr = JSON.stringify(data);
        jsonstr = this.encryptHandle(jsonstr);
        //CGNet.doRequest(url,jsonstr,this.onCompleteHandle2,this.onFailHandle2,this);
    };
    p.onCompleteHandle2 = function (evt) {
        var datas = JSON.parse(evt.target.data);
        console.log("onComplete2" + datas["result"]);
        var datacode = datas["code"];
        var datacode2 = datas["result"];
        if (datacode == 200) {
            if (datacode2 == 1) {
                alert("已经提交过了");
            }
            else {
                alert("提交成功");
            }
        }
        else if (datacode == 424) {
            alert("通讯失败了");
            Global.dispatchEvent(DataEvent.INPUTFAIL, this);
        }
        else if (datacode == 700) {
            alert("活动过期了");
        }
    };
    p.onFailHandle2 = function (evt) {
        alert("网络出问题了!");
        Global.dispatchEvent(DataEvent.INPUTFAIL, this);
    };
    DataModel.getInstance = function () {
        if (this.instance == null) {
            this.instance = new DataModel();
        }
        return this.instance;
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
    DataModel.telnum = 0;
    DataModel.inputname = "";
    DataModel.addressName = "";
    DataModel.awordArr = new Array();
    return DataModel;
}());
egret.registerClass(DataModel,'DataModel');
