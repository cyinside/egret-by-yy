/**
 * Created by Administrator on 2016/6/30.
 */
var Scene1 = (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        _super.call(this);
        this.beginX = 0;
        this.beginY = 0;
        this.endX = 0;
        this.endY = 0;
        this.imgID = 1;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Scene1,p=c.prototype;
    p.onAddToStage = function () {
        this.createScene();
    };
    p.createScene = function () {
        this.width = 640;
        this.height = 1030;
        this.bg = new BitmapDisplay;
        this.bg.setBitmapByName("bg");
        this.addChild(this.bg);
        this.setHorizontalCenter(this.bg);
        this.text = new BitmapDisplay;
        this.text.setBitmapByName("text1");
        this.text.alpha = 0;
        this.addChild(this.text);
        this.text.y = 600;
        this.setHorizontalCenter(this.text);
        this.left = new BitmapDisplay("left1");
        this.left.y = 20;
        this.left.x = -this.left.width;
        this.addChild(this.left);
        this.right = new BitmapDisplay("right1");
        this.right.y = 20;
        this.right.x = this.width;
        this.addChild(this.right);
        //this.addTransformation(1,this.sceneTw,this);
        this.touchEnabled = true;
        this.forward = new ForWardView();
        this.setHorizontalCenter(this.forward);
        this.forward.y = 995;
        this.forward.alpha = 0.6;
        this.addChild(this.forward);
        this.setFullScreen();
        this.inTw();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchend, this);
    };
    p.touchBegin = function (e) {
        this.beginX = e.stageX;
        this.beginY = e.stageY;
    };
    p.touchend = function (e) {
        this.endX = e.stageX;
        this.endY = e.stageY;
        this.touchHandle(this.beginX, this.beginY, this.endX, this.endY);
    };
    p.touchHandle = function (beginX, beginY, endX, endY) {
        if (beginX === void 0) { beginX = 0; }
        if (beginY === void 0) { beginY = 0; }
        if (endX === void 0) { endX = 0; }
        if (endY === void 0) { endY = 0; }
        if (endY - beginY < -50) {
            this.imgID++;
            if (this.imgID > 3) {
                var event = new DataEvent(DataEvent.GOTO_SCENE);
                event.sceneID = 3;
                Global.dispatchEvent(DataEvent.GOTO_SCENE, event);
            }
            this.outTw();
        }
        else if (endY - beginY > 50) {
            this.imgID--;
            if (this.imgID < 1) {
                this.imgID = 1;
                return;
            }
            this.outTw();
        }
        console.log(this.imgID);
    };
    //private sceneTw(num:number){
    //    console.log(num)
    //    switch (num){
    //        case 1:
    //            this.imgID--;
    //            if(this.imgID<1){
    //                return;
    //            }
    //            this.outTw();
    //            break;
    //        case -1:
    //            this.imgID++;
    //            if(this.imgID>3){
    //                var event:DataEvent = new DataEvent(DataEvent.GOTO_SCENE);
    //                event.sceneID = 3;
    //                Global.dispatchEvent(DataEvent.GOTO_SCENE,event);
    //            }
    //            this.outTw();
    //            break;
    //    }
    //}
    p.inTw = function () {
        egret.Tween.get(this.left).to({ x: 0 }, 800, egret.Ease.backInOut);
        egret.Tween.get(this.right).to({ x: this.width - this.right.width }, 800, egret.Ease.backInOut);
        egret.Tween.get(this.text).to({ y: 580, alpha: 1 }, 800, egret.Ease.sineIn);
    };
    p.outTw = function () {
        egret.Tween.get(this.text).to({ y: 600, alpha: 0 }, 800, egret.Ease.sineIn);
        egret.Tween.get(this.left).to({ x: -this.left.width }, 800, egret.Ease.backInOut);
        egret.Tween.get(this.right).to({ x: this.width }, 800, egret.Ease.backInOut).call(function () {
            this.left.setBitmapByName("left" + this.imgID.toString());
            this.right.setBitmapByName("right" + this.imgID.toString());
            this.text.setBitmapByName("text" + this.imgID.toString());
            this.setHorizontalCenter(this.text);
            this.inTw();
        }, this);
    };
    return Scene1;
}(DisplayScene));
egret.registerClass(Scene1,'Scene1');
