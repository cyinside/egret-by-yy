var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 15/11/13.
 */
var Scene1 = (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        _super.call(this);
        this.subtxtArr = [];
        this.dataArr = ConfigModel.dataArr;
        this.num = 40;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Scene1;p=c.prototype;
    p.onAddToStage = function () {
        this.createScnen();
    };
    p.createScnen = function () {
        this.width = 1280;
        this.height = 800;
        this.bg1 = new BitmapDisplay;
        this.bg1.setBitmapByName("bg1");
        //this.bg1.touchEnabled = true;
        this.addChild(this.bg1);
        for (var i = 0; i < this.num; i++) {
            this.subtitle = new NumberView;
            this.subtitle.x = this.width + this.subtitle.width;
            this.subtitle.y = 50;
            this.addChild(this.subtitle);
            this.subtxtArr.push(this.subtitle);
        }
        console.log(this.subtxtArr);
        this.setFullScreen();
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
        Global.addEventListener(DataEvent.GET_DATA, this.setStatus, this);
    };
    //private setTestNum(){
    //    //var data:DataInfo = new DataInfo;
    //    //Scene1.testNum++;
    //    //data.text = Scene1.testNum.toString();
    //    //this.dataArr.push(data);
    //    //console.log(this.dataArr);
    //    //console.log(Scene1.testNum);
    //
    //    this.setStatus();
    //}
    p.setStatus = function () {
        for (var i = 0; i < this.subtxtArr.length; i++) {
            var subT;
            subT = this.subtxtArr[i];
            for (var j = 0; j < this.dataArr.length; j++) {
                var data;
                data = this.dataArr[j];
                if (data.read == false && subT.free == true) {
                    var yNum = Math.floor(Math.random() * (this.stage.stageHeight - 80) + 80);
                    var tSize = Math.floor(Math.random() * 40 + 30);
                    var colorNum = Math.floor(Math.random() * 5 + 1);
                    subT.speedNum = Math.floor(Math.random() * 7 + 3);
                    subT.setInfo(data.text, false, yNum, tSize, colorNum);
                    data.read = true;
                    return;
                }
            }
        }
    };
    p.checkNum = function () {
        if (this.dataArr.length > this.num) {
            var data;
            data = this.dataArr[0];
            this.dataArr.splice(0, 1);
            data = null;
            console.log(this.dataArr);
            this.setStatus();
        }
    };
    p.onEnterFrameHandler = function (e) {
        this.subtitleIn();
    };
    p.subtitleIn = function () {
        for (var i = 0; i < this.subtxtArr.length; i++) {
            var subT;
            subT = this.subtxtArr[i];
            if (subT.free == false) {
                subT.x -= subT.speedNum;
                if (subT.x < -subT.width) {
                    subT.x = this.width;
                    if (this.dataArr.length > this.num) {
                        subT.free = true;
                        this.checkNum();
                    }
                }
            }
        }
    };
    return Scene1;
})(DisplayScene);
egret.registerClass(Scene1,"Scene1");
