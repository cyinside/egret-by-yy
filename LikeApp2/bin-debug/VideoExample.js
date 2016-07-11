var VideoExample = (function (_super) {
    __extends(VideoExample, _super);
    function VideoExample() {
        var _this = this;
        _super.call(this);
        [0, 1].forEach(function (i) {
            var video = new egret.Video();
            video.x = 50;
            video.y = i * 280 + 20;
            video.width = 427;
            video.height = 240;
            video.fullscreen = false;
            video.poster = "resource/assets/poster.png";
            video.once(egret.TouchEvent.TOUCH_TAP, _this.playVideo, _this);
            video.load("resource/assets/trailer.mp4");
            _this.addChild(video);
            var text = new egret.TextField();
            text.text = "Loading";
            text.x = 50;
            text.y = (i + 1) * 280 - 20;
            video.addEventListener(egret.Event.COMPLETE, function (e) { return text.text = "Loaded, click video to play"; }, _this);
            _this.addChild(text);
        });
    }
    var d = __define,c=VideoExample,p=c.prototype;
    p.playVideo = function (e) {
        console.log(this);
        var video = e.target;
        video.play(1);
        video.once(egret.TouchEvent.TOUCH_TAP, this.stopVideo, this);
        video.once(egret.Event.ENDED, this.stopVideo, this);
    };
    p.stopVideo = function (e) {
        var video = e.target;
        video.removeEventListener(egret.Event.ENDED, this.stopVideo, this);
        video.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.stopVideo, this);
        video.pause();
        video.once(egret.TouchEvent.TOUCH_TAP, this.playVideo, this);
    };
    return VideoExample;
}(egret.DisplayObjectContainer));
egret.registerClass(VideoExample,'VideoExample');
