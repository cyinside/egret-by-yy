var MovieClip = (function (_super) {
    __extends(MovieClip, _super);
    function MovieClip(json, texture, movieClipName, state, loop) {
        if (json === void 0) { json = ""; }
        if (texture === void 0) { texture = ""; }
        if (movieClipName === void 0) { movieClipName = ""; }
        if (state === void 0) { state = ""; }
        if (loop === void 0) { loop = true; }
        _super.call(this);
        this.state = "";
        this.movieClipName = "";
        this.loop = true;
        this.movieClipName = movieClipName;
        this.dataRes = RES.getRes(json);
        var textureRes = RES.getRes(texture);
        this.loop = loop;
        this.mcDataFactory = new egret.MovieClipDataFactory(this.dataRes, textureRes);
        this.movieClip = new egret.MovieClip(this.mcDataFactory.generateMovieClipData(this.movieClipName));
        this.addChild(this.movieClip);
        this.getLabelTotalFrames(this.movieClipName, "labels");
        this.gotoAndPlay(state);
    }
    var d = __define,c=MovieClip,p=c.prototype;
    p.update = function () {
        if (this.movieClip.currentFrame == this.getLabelTotalFrames(this.movieClipName, this.state)) {
            this.movieClip.movieClipData = this.mcDataFactory.generateMovieClipData(this.movieClipName);
            if (this.loop) {
                this.movieClip.gotoAndPlay(this.state);
            }
            else {
                this.stop();
            }
            this.dispatchEvent(new egret.Event(egret.Event.COMPLETE));
        }
    };
    d(p, "frameRate",undefined
        ,function (frameRate) {
            this.movieClip.frameRate = frameRate;
        }
    );
    d(p, "currentFrame"
        ,function () {
            return this.movieClip.currentFrame;
        }
    );
    p.gotoAndPlay = function (frame, playTimes) {
        this.state = frame;
        this.movieClip.gotoAndPlay(frame, playTimes);
    };
    p.gotoAndStop = function (frame) {
        this.state = frame;
        this.movieClip.gotoAndStop(frame);
    };
    p.stop = function () {
        this.movieClip.stop();
    };
    p.play = function () {
        this.movieClip.stop();
    };
    p.dir = function (value) {
        switch (value) {
            case 1:
                this.movieClip.scaleX = Math.abs(this.movieClip.scaleX);
                this.movieClip.x = 0;
                break;
            case -1:
                this.movieClip.scaleX = -Math.abs(this.movieClip.scaleX);
                this.movieClip.x = this.movieClip.width;
                break;
        }
    };
    p.getLabelTotalFrames = function (movieClipName, frameLabels) {
        var labelsArr = this.dataRes["mc"][movieClipName]["labels"];
        for (var i = 0; i < labelsArr.length; i++) {
            var obj = labelsArr[i];
            if (obj["name"] == frameLabels) {
                if (i < labelsArr.length - 1) {
                    return parseInt(labelsArr[i + 1]["frame"]) - parseInt(labelsArr[i]["frame"]);
                }
                else {
                    return this.movieClip.totalFrames - parseInt(this.dataRes["mc"][movieClipName]["frames"].length);
                }
            }
        }
        return 0;
    };
    return MovieClip;
}(egret.DisplayObjectContainer));
egret.registerClass(MovieClip,'MovieClip');
//# sourceMappingURL=MovieClip.js.map