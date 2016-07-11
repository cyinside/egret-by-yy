/**
 * Created by Administrator on 2016/7/8.
 */
/**
 * Created by Administrator on 2015/10/13.
 */
class CGNet extends egret.EventDispatcher
{
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
    public static doRequest(reqUrl:string, postData:string, callback:Function, timeOut:Function, thisObj:any) {
        //alert("doRequest");
        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, callback, thisObj);
        if (timeOut) {
            loader.addEventListener(egret.IOErrorEvent.IO_ERROR, timeOut, thisObj);
        }

        var request:egret.URLRequest = new egret.URLRequest(reqUrl);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables(postData);
        loader.load(request);
    }

}
