class JSSDK{

    private static url:string = "";
    private static signPackage:SignPackage;

    public static getSignPackage(callBack:Function = null,thisObject: any = null):void {
        var hr: string = location.href.split("#")[0];
        this.url = "http://www.joyoungfeld-ad.com/php/json.php?url=" + encodeURIComponent(hr);
        var urlloader = new egret.URLLoader();
        var req = new egret.URLRequest(this.url);
        urlloader.load(req);
        req.method = egret.URLRequestMethod.GET;
        urlloader.addEventListener(egret.Event.COMPLETE, (e)=> {
            this.signPackage = <SignPackage>JSON.parse(e.target.data);
            //........................................................
            //基本配置
            this.getWeiXinConfig();

            //下面可以加更多接口,可自行扩展
            //alert("签名OK");
            //JSSDK.getWeiXinShareAppMessage();
            //JSSDK.getWeiXinShareTimeline();
            //this.getWeiXinShareQQ();//分享QQ
            //this.getWeiXinShareWeiBo();//分享到腾讯微博
            //........................................................
            if(thisObject)
                callBack.call(thisObject);
        }, this);
    }


    private static getWeiXinConfig() {
        var bodyConfig = new BodyConfig();
        bodyConfig.debug = false;
        bodyConfig.appId = this.signPackage.appId;
        bodyConfig.timestamp = this.signPackage.timestamp;
        bodyConfig.nonceStr = this.signPackage.nonceStr;
        bodyConfig.signature = this.signPackage.signature;
        bodyConfig.jsApiList = [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
        ];
        wx.config(bodyConfig);
    }

    /**
     * 获取微信分享到朋友圈
     */
    public static getWeiXinShareTimeline(type:number = 1,title:string = "",link:string = "",imgUrl:string = "",success:Function = null,cancel:Function = null,thisObject:any = null) {
        var bodyMenuShareTimeline = new BodyMenuShareTimeline();
        if(type == 1) {
            bodyMenuShareTimeline.title = ConfigModel.getInstance().wx_title ;
            bodyMenuShareTimeline.link = ConfigModel.getInstance().wx_share_link;
            bodyMenuShareTimeline.imgUrl = ConfigModel.getInstance().wx_share_img;
        }else if(type == 2){
            bodyMenuShareTimeline.title = title;
            bodyMenuShareTimeline.link = link;
            bodyMenuShareTimeline.imgUrl = imgUrl;
        };

        bodyMenuShareTimeline.trigger = ()=> {
                //alert('用户点击分享到朋友圈');
        };
        bodyMenuShareTimeline.success = ()=> {
                //alert('已分享');
            if(thisObject)
                success.call(thisObject);
        };
        bodyMenuShareTimeline.cancel = ()=> {
                //alert('已取消');
            if(thisObject)
                cancel.call(thisObject);
        };
        bodyMenuShareTimeline.fail = (res)=> {
                //alert(JSON.stringify(res));
        };
        wx.onMenuShareTimeline(bodyMenuShareTimeline);
    }

    /**
     * 获取微信分享到朋友
     */
    public static getWeiXinShareAppMessage(type:number = 1,title:string = "",link:string = "",imgUrl:string = "",desc:string = "",success:Function = null,cancel:Function = null,thisObject:any = null){
        var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
        if(type == 1) {
            bodyMenuShareAppMessage.title = ConfigModel.getInstance().wx_title;
            bodyMenuShareAppMessage.link = ConfigModel.getInstance().wx_share_link;
            bodyMenuShareAppMessage.imgUrl = ConfigModel.getInstance().wx_share_img;
            bodyMenuShareAppMessage.desc = ConfigModel.getInstance().wx_friend_desx;
        }else if(type == 2){
            bodyMenuShareAppMessage.title = title;
            bodyMenuShareAppMessage.link = link;
            bodyMenuShareAppMessage.imgUrl = imgUrl;
            bodyMenuShareAppMessage.desc = desc;
        };
        bodyMenuShareAppMessage.trigger = ()=> {
                //alert('用户点击发送给朋友');
        };
        bodyMenuShareAppMessage.success = ()=> {
                //alert('已分享');
            if(thisObject)
                success.call(thisObject);
        };
        bodyMenuShareAppMessage.cancel = ()=> {
                //alert('已取消');
            if(thisObject)
                cancel.call(thisObject);
        };
        bodyMenuShareAppMessage.fail = (res)=> {
                //alert(JSON.stringify(res));
        };
        wx.onMenuShareAppMessage(bodyMenuShareAppMessage);
        //alert('已注册获取“发送给朋友”状态事件');
    }

    /**
     * 获取微信分享到QQ
     */
    private getWeiXinShareQQ(){
        //this.btn_shareqq.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=> {
        //    var bodyMenuShareQQ = new BodyMenuShareQQ();
        //    bodyMenuShareQQ.title = this.title.text;
        //    bodyMenuShareQQ.desc = this.desc.text;
        //    bodyMenuShareQQ.link = this.link.text;
        //    bodyMenuShareQQ.imgUrl = this.imgUrl.text;
        //    bodyMenuShareQQ.trigger = ()=> {
        //        alert('用户点击分享到QQ');
        //    };
        //    bodyMenuShareQQ.complete = (res)=> {
        //        alert(JSON.stringify(res));
        //    };
        //    bodyMenuShareQQ.success = ()=> {
        //        alert('已分享');
        //    };
        //    bodyMenuShareQQ.cancel = ()=> {
        //        alert('已取消');
        //    };
        //    bodyMenuShareQQ.fail = (res)=> {
        //        alert(JSON.stringify(res));
        //    };
        //    wx.onMenuShareQQ(bodyMenuShareQQ);
        //    alert('已注册获取“分享到QQ”状态事件');
        //}, this);
    }

    /**
     * 获取微信分享到腾讯微博
     */
    private getWeiXinShareWeiBo(){
        //this.btn_shareweibo.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=> {
        //    var bodyMenuShareWeibo = new BodyMenuShareWeibo();
        //    bodyMenuShareWeibo.title = this.title.text;
        //    bodyMenuShareWeibo.desc = this.desc.text;
        //    bodyMenuShareWeibo.link = this.link.text;
        //    bodyMenuShareWeibo.imgUrl = this.imgUrl.text;
        //    bodyMenuShareWeibo.trigger = ()=> {
        //        alert('用户点击分享到微博');
        //    };
        //    bodyMenuShareWeibo.complete = (res)=> {
        //        alert(JSON.stringify(res));
        //    };
        //    bodyMenuShareWeibo.success = ()=> {
        //        alert('已分享');
        //    };
        //    bodyMenuShareWeibo.cancel = ()=> {
        //        alert('已取消');
        //    };
        //    bodyMenuShareWeibo.fail = (res)=> {
        //        alert(JSON.stringify(res));
        //    };
        //    wx.onMenuShareWeibo(bodyMenuShareWeibo);
        //    alert('已注册获取“分享到微博”状态事件');
        //}, this);
    }
}

interface SignPackage {
    appId:string;
    nonceStr:string;
    timestamp:number;
    signature:string;
    url:string;
}