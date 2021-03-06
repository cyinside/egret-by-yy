/**
 * Created by cyy on 15/9/9.
 */
var Role = (function (_super) {
    __extends(Role, _super);
    function Role() {
        _super.call(this);
        this.isHole = false;
        this.holdTime = 800;
        this.holdTime2 = 300;
        this.isBingo = false;
        this.mouse = new BitmapDisplay();
    }
    var d = __define,c=Role,p=c.prototype;
    p.buildRole = function (name) {
        this.width = 50;
        this.height = 80;
        this.mouse.alpha = 0;
        this.mouse.touchEnabled = true;
        this.mouse.setBitmapByName(name);
        this.mouse.scaleX = this.mouse.scaleY = 1;
        this.mouse.anchorOffsetX = this.mouse.width / 2;
        this.mouse.anchorOffsetY = this.mouse.height / 2;
        this.addChild(this.mouse);
        this.mouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.scoreHandle, this);
        this.boom = new BitmapDisplay("boom");
        this.boom.anchorOffsetX = this.boom.width / 2;
        this.boom.anchorOffsetY = this.boom.height / 2;
        this.boom.alpha = 0;
        this.addChild(this.boom);
    };
    p.changeSpeed = function (num) {
        switch (num) {
            case 1:
                this.holdTime = 800;
                this.holdTime2 = 100;
                ConfigModel.timeSpeed = 48;
                break;
            case 2:
                this.holdTime = 500;
                this.holdTime2 = 100;
                ConfigModel.timeSpeed = 45;
                break;
            case 3:
                this.holdTime = 200;
                this.holdTime2 = 100;
                ConfigModel.timeSpeed = 43;
                break;
        }
    };
    p.show = function (id, type) {
        this.mouse.touchEnabled = true;
        //if(type == 1){
        //    Global.dispatchEvent(ScoreEvent.ADD_ROLE);
        //}else if(type == 2){
        //    Global.dispatchEvent(ScoreEvent.ADD_ROLE2);
        //}
        this.roleData = ConfigModel.getInstance().getTypeByid(type);
        this.buildRole(this.roleData.name);
        var locationData = ConfigModel.getInstance().getLocationById(id);
        this.mouse.x = locationData.x;
        this.mouse.y = locationData.y1;
        this.boom.x = locationData.x;
        this.boom.y = locationData.y2;
        egret.Tween.get(this.mouse).to({ y: locationData.y2, alpha: 1 }, 300, egret.Ease.backInOut)
            .wait(this.holdTime)
            .to({ y: locationData.y1, alpha: 0 }, 300, egret.Ease.backInOut)
            .call(function () { this.mouse.touchEnabled = false; }, this)
            .call(this.remove, this);
    };
    //public hide(e:egret.TouchEvent){
    //    this.mouse.touchEnabled = false;
    //    console.log(this.roleData.type);
    //
    //    egret.Tween.removeTweens(this.mouse);
    //
    //    egret.Tween.get(this.mouse).to({y:this.mouse.y + 70,alpha:0},300,egret.Ease.sineIn).call(this.remove,this);
    //}
    p.scoreHandle = function () {
        if (this.roleData.type == 2) {
            Global.dispatchEvent(ScoreEvent.ADD_SCORE);
            this.isBingo = true;
            this.boom.alpha = 1;
        }
        else if (this.roleData.type == 1) {
            Global.dispatchEvent(ScoreEvent.CUT_SCORE);
        }
    };
    p.remove = function () {
        this.boom.alpha = 0;
        Global.dispatchEvent(ScoreEvent.REMOVE_CHILD);
    };
    return Role;
}(DisplayScene));
egret.registerClass(Role,'Role');
//# sourceMappingURL=Role.js.map