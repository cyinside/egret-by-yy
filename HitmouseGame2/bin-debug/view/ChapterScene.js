/**
 * Created by cyy on 15/9/9.
 */
var ChapterScene = (function (_super) {
    __extends(ChapterScene, _super);
    function ChapterScene() {
        _super.call(this);
        this.roleArr = new Array();
        this.role2Arr = new Array();
        this.is_fristTime = true;
        this.timeNum = 20;
        this.score = 0;
        this.maxscore = 100;
        this.idnum = 5;
        this.speed = 1;
        this.bmNum = 2;
        this.frameNum = 0;
        this.twNum = 1;
        this.createScene();
    }
    var d = __define,c=ChapterScene,p=c.prototype;
    p.createScene = function () {
        this.width = 640;
        this.height = 1030;
        //this.timeOut1 = new egret.Timer(ConfigModel.timeSpeed,0);
        //this.timeOut1.addEventListener(egret.TimerEvent.TIMER,this.setHole,this);
        this.timeOut2 = new egret.Timer(4000, 3);
        this.timeOut2.addEventListener(egret.TimerEvent.TIMER, this.changeIdNum, this);
        this.timeOut3 = new egret.Timer(1000, 20);
        this.timeOut3.addEventListener(egret.TimerEvent.TIMER, this.timeCounter, this);
        this.timeOut3.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.gameOver, this);
        this.bg = new UIBitmapDisplay("bg");
        this.group.addChild(this.bg);
        for (var i = 0; i < 6; i++) {
            this.role = new Role();
            this.roleArr.push(this.role);
            this.group.addChild(this.role);
        }
        for (var i = 0; i < 5; i++) {
            this.role2 = new Role();
            this.role2Arr.push(this.role2);
            this.group.addChild(this.role2);
        }
        this.scoreTXT = new egret.TextField;
        this.scoreTXT.text = "Score:" + "\n" + this.score;
        this.scoreTXT.size = 30;
        this.scoreTXT.textColor = 0xffc20e;
        this.scoreTXT.bold = true;
        this.scoreTXT.stroke = 3;
        this.scoreTXT.strokeColor = 0xFFFFFF;
        this.scoreTXT.x = 60;
        this.scoreTXT.y = 60;
        this.group.addChild(this.scoreTXT);
        this.timeTXT = new egret.TextField;
        this.timeTXT.text = "Time:" + "\n" + this.score;
        this.timeTXT.size = 30;
        this.timeTXT.textColor = 0xffc20e;
        this.timeTXT.bold = true;
        this.timeTXT.stroke = 3;
        this.timeTXT.strokeColor = 0xFFFFFF;
        this.timeTXT.anchorOffsetX = this.timeTXT.width / 2;
        this.timeTXT.anchorOffsetY = this.timeTXT.height / 2;
        this.timeTXT.x = 340 + this.timeTXT.width / 2;
        this.timeTXT.y = 60 + this.timeTXT.height / 2;
        this.group.addChild(this.timeTXT);
        this.resultTXT = new egret.TextField;
        this.resultTXT.size = 60;
        this.resultTXT.textColor = 0xffc20e;
        this.resultTXT.bold = true;
        this.resultTXT.stroke = 3;
        this.resultTXT.strokeColor = 0xFFFFFF;
        this.resultTXT.y = 400;
        this.blackRect = new BlackRcet;
        this.group.addChild(this.blackRect);
        this.windowBg = new BitmapDisplay("windowBg");
        this.setHorizontalCenter(this.windowBg);
        this.setVerticalCenter(this.windowBg);
        this.windowtxt = new BitmapDisplay("ruletxt");
        this.setHorizontalCenter(this.windowtxt);
        this.setVerticalCenter(this.windowtxt);
        this.okBut = new BitmapDisplay("okBut");
        this.okBut.y = 800;
        this.setHorizontalCenter(this.okBut);
        this.okBut.touchEnabled = true;
        this.retryBut = new BitmapDisplay("retryBut");
        this.retryBut.y = 800;
        this.setHorizontalCenter(this.retryBut);
        this.retryBut.touchEnabled = true;
        this.getPrizeBut = new BitmapDisplay("getprizeBut");
        this.getPrizeBut.y = 800;
        this.setHorizontalCenter(this.getPrizeBut);
        this.getPrizeBut.touchEnabled = true;
        Global.addEventListener(ScoreEvent.ADD_SCORE, this.addScoreHandler, this);
        Global.addEventListener(ScoreEvent.CUT_SCORE, this.cutScoreHandler, this);
        Global.addEventListener(ScoreEvent.REMOVE_CHILD, this.remove, this);
        this.okBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeItem, this);
        this.retryBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeItem, this);
        this.getPrizeBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoPrize, this);
        this.showrule();
        this.setFullScreen();
        this.setViewRect();
        //this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
    };
    p.onEnterFrameHandler = function () {
        this.frameNum++;
        if (this.frameNum > ConfigModel.timeSpeed) {
            this.frameNum = 0;
            this.setHole();
        }
    };
    p.showrule = function () {
        this.group.addChild(this.windowBg);
        this.group.addChild(this.windowtxt);
        this.group.addChild(this.okBut);
    };
    p.changeIdNum = function () {
        this.idnum--;
        this.speed++;
        if (this.speed > 2) {
            this.speed = 3;
        }
        this.role.changeSpeed(this.speed);
        console.log("@@@@@@@@@@@@@@@@@" + this.speed);
        this.bmNum++;
        if (this.bmNum > 4) {
            this.bmNum = 4;
        }
    };
    p.setHole = function () {
        var holeArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        for (var i = 0; i < this.idnum; i++) {
            for (var j = 0; j < holeArr.length; j++) {
                var roleID = Math.floor(Math.random() * holeArr.length);
                holeArr.splice(roleID, 1);
                //console.log(holeArr);
                break;
            }
        }
        this.setRole(holeArr, this.bmNum);
    };
    p.setRole = function (bRoleArr, role2Num) {
        var gRoleArr = new Array;
        for (var i = 0; i < role2Num; i++) {
            for (var j = 0; j < bRoleArr.length; j++) {
                var role2ID = Math.floor(Math.random() * bRoleArr.length);
                gRoleArr.push(bRoleArr[role2ID]);
                //console.log(gRoleArr);
                bRoleArr.splice(role2ID, 1);
                break;
            }
        }
        for (var k = 0; k < gRoleArr.length; k++) {
            var mouse;
            mouse = this.role2Arr[k];
            mouse.show(gRoleArr[k], 1);
            this.group.addChild(this.role);
        }
        for (var n = 0; n < bRoleArr.length; n++) {
            var mouse;
            mouse = this.roleArr[n];
            mouse.show(bRoleArr[n], 0);
            this.group.addChild(this.role2);
        }
    };
    p.addScoreHandler = function () {
        this.score += 5;
        this.twNum++;
        if (this.twNum > 3) {
            this.twNum = 1;
        }
        this.scoreTXT.text = "Score:" + "\n" + this.score.toString();
        this.bingoTW();
    };
    p.cutScoreHandler = function () {
        //this.score -= 100;
        //this.scoreTXT.text = "Score:"+"\n"+this.score.toString();
        this.failTW();
        this.timeNum -= 2;
        if (this.timeNum < 0) {
            this.timeNum = 0;
        }
        this.timeTXT.text = "Time:" + "\n" + this.timeNum.toString();
        this.timeTXT.anchorOffsetX = this.timeTXT.width / 2;
        this.timeTXT.anchorOffsetY = this.timeTXT.height / 2;
    };
    p.timeCounter = function () {
        this.is_fristTime = false;
        this.timeNum--;
        if (this.timeNum < 1) {
            this.timeOut3.stop();
            this.gameOver();
        }
        this.timeTXT.text = "Time:" + "\n" + this.timeNum.toString();
        this.timeTXT.anchorOffsetX = this.timeTXT.width / 2;
        this.timeTXT.anchorOffsetY = this.timeTXT.height / 2;
    };
    p.gameOver = function () {
        if (this.score > this.maxscore) {
            this.gameHandle(1);
        }
        else {
            this.gameHandle(0);
        }
    };
    p.gameHandle = function (num) {
        this.stopAll();
        this.group.addChild(this.blackRect);
        this.group.addChild(this.windowBg);
        this.group.addChild(this.windowtxt);
        switch (num) {
            case 0:
                this.windowtxt.setBitmapByName("failtxt");
                this.group.addChild(this.retryBut);
                break;
            case 1:
                this.windowtxt.setBitmapByName("successtxt");
                this.group.addChild(this.getPrizeBut);
                break;
        }
        this.resultTXT.text = this.score.toString() + "分";
        this.setHorizontalCenter(this.resultTXT);
        this.setHorizontalCenter(this.windowtxt);
        this.group.addChild(this.resultTXT);
    };
    p.remove = function () {
        console.log("remove");
        if (this.contains(this.role)) {
            this.group.removeChild(this.role);
        }
        if (this.contains(this.role2)) {
            this.group.removeChild(this.role2);
        }
    };
    p.failTW = function () {
        ShockUtils.getInstance().shock(ShockUtils.getInstance().SPRITE, this);
        egret.Tween.get(this.timeTXT).to({ scaleX: 1.5, scaleY: 1.5 }, 200).to({ rotation: 10 }, 80).to({ rotation: -10 }, 80).to({ rotation: 10 }, 80).to({ rotation: 0 }, 80)
            .to({ scaleX: 1, scaleY: 1 }, 200);
    };
    p.bingoTW = function () {
        console.log(this.twNum);
        egret.Tween.get(this.scoreTXT).to({ scaleX: 1.5, scaleY: 1.5 }, 300, egret.Ease.backInOut).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.backInOut);
    };
    p.stopAll = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
    };
    p.reset = function () {
        this.timeOut2.reset();
        this.timeOut3.reset();
        this.timeNum = 20;
        this.idnum = 4;
        this.score = 0;
        this.speed = 1;
        this.bmNum = 2;
        this.scoreTXT.text = "Score:" + "\n" + this.score;
        this.timeTXT.text = "Time:" + "\n" + this.timeNum;
        this.timeTXT.anchorOffsetX = this.timeTXT.width / 2;
        this.timeTXT.anchorOffsetY = this.timeTXT.height / 2;
        this.start();
    };
    p.start = function () {
        if (this.contains(this.windowBg)) {
            this.group.removeChild(this.windowBg);
            this.group.removeChild(this.windowtxt);
        }
        this.timeOut2.start();
        this.timeOut3.start();
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
    };
    p.removeItem = function () {
        if (this.contains(this.retryBut)) {
            this.group.removeChild(this.retryBut);
        }
        if (this.contains(this.windowBg)) {
            this.group.removeChild(this.windowBg);
            this.group.removeChild(this.windowtxt);
        }
        if (this.contains(this.okBut)) {
            this.group.removeChild(this.okBut);
        }
        if (this.contains(this.resultTXT)) {
            this.group.removeChild(this.resultTXT);
        }
        if (this.contains(this.blackRect)) {
            this.group.removeChild(this.blackRect);
        }
        if (this.contains(this.getPrizeBut)) {
            this.group.removeChild(this.getPrizeBut);
        }
        this.reset();
    };
    p.gotoPrize = function () {
        SceneUtil.changeScene(3);
    };
    p.init = function () {
        if (this.is_fristTime == true) {
            return 0;
        }
        else {
            this.removeItem();
        }
    };
    return ChapterScene;
}(DisplayScrollerScene));
egret.registerClass(ChapterScene,'ChapterScene');