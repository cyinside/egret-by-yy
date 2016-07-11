var Smoke = (function (_super) {
    __extends(Smoke, _super);
    function Smoke(dir) {
        _super.call(this);
        this.xEndSpeed = 0;
        this.xSlowSpeed = 0;
        this.xSpeed = 0;
        this.yEndSpeed = 0;
        this.ySlowSpeed = 0;
        this.ySpeed = 0;
        this.alphaSpeed = 0.02;
        this.scaleSpeed = 0.01;
        this.remove = false;
        this.dir = dir;
        this.sp = new egret.Sprite();
        this.sp.graphics.beginFill(0xbcbcbc, 0.6);
        this.sp.graphics.drawCircle(0, 0, 15);
        this.sp.graphics.endFill();
        this.addChild(this.sp);
        this.xEndSpeed = 0.5;
        this.xSlowSpeed = 0.01;
        this.xSpeed = 2;
        this.yEndSpeed = Math.random() * 0.1 + 0.1;
        this.ySlowSpeed = Math.random() * 0.005 + 0.001;
        this.ySpeed = 1;
    }
    var d = __define,c=Smoke,p=c.prototype;
    p.update = function () {
        this.xSpeed -= this.xSlowSpeed;
        if (this.xSpeed <= this.xEndSpeed) {
            this.xSpeed = this.xEndSpeed;
        }
        this.ySpeed -= this.xSlowSpeed;
        if (this.ySpeed <= this.yEndSpeed) {
            this.ySpeed = this.yEndSpeed;
        }
        if (this.dir == 1) {
            this.x -= this.xSpeed;
        }
        else {
            this.x += this.xSpeed;
        }
        this.y += this.ySpeed;
        this.scaleX += this.scaleSpeed;
        this.scaleY += this.scaleSpeed;
        this.sp.alpha -= this.alphaSpeed;
        if (this.sp.alpha <= 0) {
            this.sp.alpha = 0;
            this.remove = true;
        }
    };
    return Smoke;
}(egret.DisplayObjectContainer));
egret.registerClass(Smoke,'Smoke');
//# sourceMappingURL=Smoke.js.map