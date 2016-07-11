  /**
    * 网络公共类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 存放网络公共方法 
    * 注意：是异步请求
    */
module Network {

    //发送消息
    //url 网络地址
    //data exp "name='dily'&age:18"
    export function sendInfo(url:string,urlData:string,callback:Function, timeOut:Function, thisObj:any):void{

        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, callback, thisObj);
        if (timeOut) {
            loader.addEventListener(egret.IOErrorEvent.IO_ERROR, timeOut, thisObj);
        }
        var request:egret.URLRequest = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables(urlData);
        loader.load(request);
    }

}



