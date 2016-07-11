/**
 * Created by cyy on 15/11/13.
 */
var CharptScene = (function (_super) {
    __extends(CharptScene, _super);
    function CharptScene() {
        _super.call(this);
        this.allroleArr = new Array();
        this.roleArr = new Array();
        this.dropArr = new Array();
        this.maxRoleNum = 64;
        this.starNum = 0;
        this.boomNum = 0;
        this.speedNum = 4;
        this.distance = 0;
        this.charptNum = 0;
        this.rTimeNum = 0;
        this.rTimeCoun = 0;
        this.createScnen();
    }
    var d = __define,c=CharptScene,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("bg");
        this.bg1.touchEnabled = false;
        this.addChild(this.bg1);
        //this.role1 = new Role;
        //this.setHorizontalCenter(this.role1);
        //this.setVerticalCenter(this.role1);
        //this.role1.setRoleType(2);
        //this.addChild(this.role1);
        for (var i = 0; i < this.maxRoleNum; i++) {
            var role = new Role();
            this.allroleArr.push(role);
        }
        this.charptTimer = new egret.Timer(5000, 1);
        this.charptTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.changdeCharpt, this);
        //this.roleTimer = new egret.Timer(1000,2);
        ////this.roleTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.changdeCharpt,this);
        //this.roleTimer.addEventListener(egret.TimerEvent.TIMER,this.pushInDrop,this);
        Global.addEventListener(DataEvent.IS_TOUCH, this.removeRoleDecide, this);
        this.changdeCharpt();
        this.setFullScreen();
    };
    p.changdeCharpt = function () {
        this.charptNum++;
        this.charptCtrl(this.charptNum);
    };
    p.charptCtrl = function (num) {
        switch (num) {
            case 1:
                this.starNum = 1;
                this.boomNum = 1;
                this.speedNum = 4;
                this.distance = 23;
                break;
            case 2:
                this.starNum = 2;
                this.boomNum = 2;
                this.speedNum = 8;
                this.distance = 18;
                break;
            case 3:
                this.starNum = 4;
                this.boomNum = 4;
                this.speedNum = 12;
                this.distance = 15;
                break;
            case 4:
                this.starNum = 8;
                this.boomNum = 8;
                this.speedNum = 16;
                this.distance = 13;
                break;
            case 5:
                this.starNum = 16;
                this.boomNum = 16;
                this.speedNum = 30;
                this.distance = 5;
                break;
        }
        this.setRole();
    };
    p.setRole = function () {
        for (var i = 0; i < this.starNum; i++) {
            this.allroleArr[i].setRoleType(1);
            this.addChild(this.allroleArr[i]);
            this.allroleArr[i].y = -this.allroleArr[i].height - 300;
            this.allroleArr[i].x = this.setX();
            this.allroleArr[i].twspeed = this.speedNum;
            this.roleArr.push(this.allroleArr[i]);
        }
        for (var j = this.starNum; j < this.boomNum + this.starNum; j++) {
            this.allroleArr[j].setRoleType(2);
            this.addChild(this.allroleArr[j]);
            this.allroleArr[j].y = -this.allroleArr[j].height - 300;
            this.allroleArr[j].x = this.setX();
            this.allroleArr[j].twspeed = this.speedNum;
            this.roleArr.push(this.allroleArr[j]);
        }
        //this.roleTimer.reset();
        //this.roleTimer.start();
        this.startGame();
        this.rTimeCoun = 0;
    };
    p.pushInDrop = function () {
        console.log("pushInDrop");
        var id = Math.floor(Math.random() * this.roleArr.length);
        this.dropArr.push(this.roleArr[id]);
        this.roleArr.splice(id, 1);
        console.log(this.dropArr);
    };
    p.roleTw = function () {
        for (var i = 0; i < this.dropArr.length; i++) {
            this.dropArr[i].move(this.speedNum);
            this.dropArr[i].rloeId = i;
            //console.log(i,this.dropArr[i].x,this.dropArr[i].y);
            if (this.dropArr[i].y > this.height + this.dropArr[i].height || this.dropArr[i].is_Touch == true) {
                this.removeRole(i);
                return;
            }
        }
    };
    p.roleTw1 = function () {
        this.role1.move(4);
    };
    p.removeRoleDecide = function (e) {
        if (e.param.is_bingo == true) {
            egret.Tween.get(this.dropArr[e.param.touchID]).to({ x: 0, y: 0 }, 400, egret.Ease.sineIn).call(function () {
                this.dropArr[e.param.touchID].is_Touch = true;
            }, this);
        }
        else {
            this.dropArr[e.param.touchID].is_Touch = true;
        }
    };
    p.removeRole = function (num) {
        this.removeChild(this.dropArr[num]);
        this.dropArr.splice(num, 1);
        if (this.dropArr.length == 0) {
            this.charptTimer.reset();
            this.charptTimer.start();
        }
    };
    p.setX = function () {
        var num = Math.floor(Math.random() * 3 + 1);
        var ex = this.width * (1 / 4);
        console.log(ex);
        switch (num) {
            case 1:
                var x = ex;
                break;
            case 2:
                var x = ex * 2;
                break;
            case 3:
                var x = ex * 3;
                break;
        }
        return x;
    };
    p.rTimer = function () {
        if (this.rTimeCoun == this.boomNum + this.starNum) {
            return;
        }
        this.rTimeNum++;
        console.log("rTimeNum" + this.rTimeNum);
        if (this.rTimeNum > this.distance) {
            this.rTimeCoun++;
            this.rTimeNum = 0;
            this.pushInDrop();
            console.log("rTimeCoun" + this.rTimeCoun);
        }
    };
    p.startGame = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
    };
    p.stopGame = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
    };
    p.onEnterFrameHandler = function () {
        //this.roleTw1();
        this.roleTw();
        this.rTimer();
    };
    return CharptScene;
}(DisplayScene));
egret.registerClass(CharptScene,'CharptScene');
//# sourceMappingURL=CharptScene.js.map