var SoundUtils = (function (_super) {
    __extends(SoundUtils, _super);
    function SoundUtils() {
        _super.call(this);
    }
    var d = __define,c=SoundUtils,p=c.prototype;
    p.play = function (resName, startTime, loops) {
        this.sound = RES.getRes(resName);
        this.channel = this.sound.play(startTime, loops);
    };
    p.stop = function () {
        this.channel.stop();
    };
    return SoundUtils;
}(BaseClass));
egret.registerClass(SoundUtils,'SoundUtils');
//# sourceMappingURL=SoundUtils.js.map