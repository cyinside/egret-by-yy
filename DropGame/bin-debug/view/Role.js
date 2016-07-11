/**
 * Created by Administrator on 2016/6/22.
 */
var Role = (function (_super) {
    __extends(Role, _super);
    function Role() {
        _super.call(this);
        this.twspeed = 4;
        this.type = 0;
        this.is_Touch = false;
        this.rloeId = 0;
        this.createScnen();
    }
    var d = __define,c=Role,p=c.prototype;
    p.createScnen = function () {
        this.rect = new BitmapDisplay("rect");
        this.rect.alpha = 0;
        this.addChild(this.rect);
        this.role = new BitmapDisplay("");
        this.role.scaleX = this.role.scaleY = 1.8;
        this.addChild(this.role);
        //this.boomLigt = new BitmapDisplay("boom1");
        this.rect.touchEnabled = true;
        this.rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.roleTouchHandle, this);
    };
    p.setRoleType = function (num) {
        switch (num) {
            case 1:
                this.type = 1;
                this.role.setBitmapByName("star");
                this.rect.scaleX = this.rect.scaleY = 1.8;
                this.rect.x = -20;
                this.rect.y = -20;
                break;
            case 2:
                this.type = 2;
                this.role.setBitmapByName("boom");
                this.rect.scaleX = this.rect.scaleY = 1.2;
                this.rect.x = 10;
                this.rect.y = 70;
                break;
        }
        this.width = this.role.width;
        this.height = this.role.height;
        this.anchorOffsetX = this.role.scaleX * this.width / 2;
        this.anchorOffsetY = this.role.scaleY * this.height / 2;
    };
    p.move = function (speed) {
        this.y += speed;
        this.rotation += 15;
    };
    p.roleTouchHandle = function () {
        //alert("touch");
        //return;
        var event = new DataEvent(DataEvent.IS_TOUCH);
        var type = this.type;
        switch (type) {
            case 1:
                console.log("1");
                event.is_bingo = true;
                break;
            case 2:
                console.log("2");
                event.is_bingo = false;
                break;
        }
        Global.dispatchEvent(DataEvent.IS_TOUCH, event);
    };
    return Role;
}(egret.DisplayObjectContainer));
egret.registerClass(Role,'Role');
//# sourceMappingURL=Role.js.map