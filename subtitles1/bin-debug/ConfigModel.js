var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var ConfigModel = (function () {
    function ConfigModel() {
    }
    var d = __define,c=ConfigModel;p=c.prototype;
    ConfigModel.getInstance = function () {
        if (this.instance == null) {
            this.instance = new ConfigModel();
        }
        return this.instance;
    };
    p.getMessage = function () {
        __global.onListenHandle(this.onShowHandle);
    };
    p.onShowHandle = function (data) {
        var message = new DataInfo();
        message.text = data.message;
        ConfigModel.dataArr.push(message);
        console.log(ConfigModel.dataArr);
        if (ConfigModel.dataArr) {
            Global.dispatchEvent(DataEvent.GET_DATA);
        }
    };
    ConfigModel.dataArr = new Array();
    return ConfigModel;
})();
egret.registerClass(ConfigModel,"ConfigModel");
