/**
 * Created by Administrator on 2016/7/8.
 */
/**
 * Created by Administrator on 2015/10/13.
 */
var CGNet = (function (_super) {
    __extends(CGNet, _super);
    function CGNet() {
        _super.apply(this, arguments);
    }
    var d = __define,c=CGNet,p=c.prototype;
    /**
     * ????????????
     * @param reqUrl http://www.aaa.com
     * @param postData uid=0&name="ch"&money=999
     * @param callback ???????
     * var loader:egret.URLLoader = <egret.URLLoader> event.target;
     * var data:egret.URLVariables = loader.data;
     * var js = eval("(" + data.toString() + ")");
     * @param timeOut ???????
     * @param thisObj
     */
    CGNet.doRequest = function (reqUrl, postData, callback, timeOut, thisObj) {
        //alert("doRequest");
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, callback, thisObj);
        if (timeOut) {
            loader.addEventListener(egret.IOErrorEvent.IO_ERROR, timeOut, thisObj);
        }
        var request = new egret.URLRequest(reqUrl);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables(postData);
        loader.load(request);
    };
    return CGNet;
}(egret.EventDispatcher));
egret.registerClass(CGNet,'CGNet');
//# sourceMappingURL=CGNet.js.map