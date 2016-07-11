var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var JSSDK = (function () {
    function JSSDK() {
    }
    var d = __define,c=JSSDK;p=c.prototype;
    JSSDK.getSignPackage = function (callBack, thisObject) {
        var _this = this;
        if (callBack === void 0) { callBack = null; }
        if (thisObject === void 0) { thisObject = null; }
        var hr = location.href.split("#")[0];
        this.url = "http://www.joyoungfeld-ad.com/php/json.php?url=" + encodeURIComponent(hr);
        var urlloader = new egret.URLLoader();
        var req = new egret.URLRequest(this.url);
        urlloader.load(req);
        req.method = egret.URLRequestMethod.GET;
        urlloader.addEventListener(egret.Event.COMPLETE, function (e) {
            _this.signPackage = JSON.parse(e.target.data);
            //........................................................
            //基本配置
            _this.getWeiXinConfig();
            //下面可以加更多接口,可自行扩展
            //this.getWeiXinShareQQ();//分享QQ
            //this.getWeiXinShareWeiBo();//分享到腾讯微博
            //........................................................
        }, this);
    };
    JSSDK.getWeiXinConfig = function () {
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
    };
    /**
     * 获取微信分享到朋友圈
     */
    JSSDK.getWeiXinShareTimeline = function (title, link, imgUrl) {
        if (title === void 0) { title = ""; }
        if (link === void 0) { link = ""; }
        if (imgUrl === void 0) { imgUrl = ""; }
        var bodyMenuShareTimeline = new BodyMenuShareTimeline();
        bodyMenuShareTimeline.title = title;
        bodyMenuShareTimeline.link = link;
        bodyMenuShareTimeline.imgUrl = imgUrl;
        bodyMenuShareTimeline.trigger = function () {
            //alert('用户点击分享到朋友圈');
        };
        bodyMenuShareTimeline.success = function () {
            //alert('已分享');
        };
        bodyMenuShareTimeline.cancel = function () {
            //alert('已取消');
        };
        bodyMenuShareTimeline.fail = function (res) {
            //alert(JSON.stringify(res));
        };
        wx.onMenuShareTimeline(bodyMenuShareTimeline);
    };
    /**
     * 获取微信分享到朋友
     */
    JSSDK.getWeiXinShareAppMessage = function (title, link, imgUrl, desc) {
        if (title === void 0) { title = ""; }
        if (link === void 0) { link = ""; }
        if (imgUrl === void 0) { imgUrl = ""; }
        if (desc === void 0) { desc = ""; }
        var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
        bodyMenuShareAppMessage.title = title;
        bodyMenuShareAppMessage.link = link;
        bodyMenuShareAppMessage.imgUrl = imgUrl;
        bodyMenuShareAppMessage.desc = desc;
        bodyMenuShareAppMessage.trigger = function () {
            //alert('用户点击发送给朋友');
        };
        bodyMenuShareAppMessage.success = function () {
            //alert('已分享');
        };
        bodyMenuShareAppMessage.cancel = function () {
            //alert('已取消');
        };
        bodyMenuShareAppMessage.fail = function (res) {
            //alert(JSON.stringify(res));
        };
        wx.onMenuShareAppMessage(bodyMenuShareAppMessage);
        //alert('已注册获取“发送给朋友”状态事件');
    };
    /**
     * 获取微信分享到QQ
     */
    p.getWeiXinShareQQ = function () {
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
    };
    /**
     * 获取微信分享到腾讯微博
     */
    p.getWeiXinShareWeiBo = function () {
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
    };
    JSSDK.url = "";
    return JSSDK;
})();
egret.registerClass(JSSDK,"JSSDK");
