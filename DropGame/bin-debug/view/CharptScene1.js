/**
 * Created by Administrator on 2016/6/27.
 */
var CharptScene1 = (function (_super) {
    __extends(CharptScene1, _super);
    function CharptScene1() {
        _super.call(this);
        this.roleArr = new Array();
        this.maxRoleNum = 64;
        this.starNum = 0;
        this.boomNum = 0;
        this.speedNum = 4;
        this.createScnen();
    }
    var d = __define,c=CharptScene1,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("bg");
        this.group.addChild(this.bg1);
        this.charptCtrl(1);
    };
    p.charptCtrl = function (num) {
        switch (num) {
            case 1:
                this.starNum = 1;
                this.boomNum = 1;
                this.speedNum = 4;
                break;
            case 2:
                this.starNum = 2;
                this.boomNum = 2;
                this.speedNum = 5;
                break;
            case 3:
                this.starNum = 4;
                this.boomNum = 4;
                this.speedNum = 6;
                break;
            case 4:
                this.starNum = 8;
                this.boomNum = 8;
                this.speedNum = 7;
                break;
            case 5:
                this.starNum = 16;
                this.boomNum = 16;
                this.speedNum = 8;
                break;
        }
        this.setRole();
    };
    p.setRole = function () {
        for (var i = 0; i < this.starNum; i++) {
            var role = new Role();
            role.setRoleType(1);
            this.group.addChild(role);
            role.y = -role.height - 300;
            role.x = this.setX();
            role.twspeed = this.speedNum;
        }
        for (var j = this.starNum; j < this.boomNum + this.starNum; j++) {
            var role = new Role();
            role.setRoleType(2);
            this.group.addChild(role);
            role.y = -role.height - 300;
            role.x = this.setX();
            role.twspeed = this.speedNum;
        }
    };
    p.setX = function () {
        var num = Math.floor(Math.random() * 2 + 1);
        switch (num) {
            case 1:
                var x = Math.floor(this.width / 3);
                break;
            case 2:
                var x = Math.floor(this.width / 3) * 2;
                break;
        }
        return x;
    };
    return CharptScene1;
}(DisplayScrollerScene));
egret.registerClass(CharptScene1,'CharptScene1');
//# sourceMappingURL=CharptScene1.js.map