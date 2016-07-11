/**
 * Created by cyy on 15/11/13.
 */
var Scene1 = (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        _super.call(this);
        this.rect = new egret.Rectangle(50, 980, 540, 20);
        this.imglist = [];
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Scene1,p=c.prototype;
    p.onAddToStage = function () {
        this.createScene();
    };
    p.createScene = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("bg");
        this.group.addChild(this.bg1);
        this.setHorizontalCenter(this.bg1);
        this.bg1.scale9Grid = this.rect;
        this.likeNumTxt = new egret.TextField;
        this.likeNumTxt.text = "";
        this.likeNumTxt.size = 50;
        this.likeNumTxt.textAlign = egret.HorizontalAlign.CENTER;
        this.likeNumTxt.x = 280;
        this.likeNumTxt.y = 895;
        this.group.addChild(this.likeNumTxt);
        this.likeBut = new BitmapDisplay;
        this.likeBut.setBitmapByName("likeBut");
        this.setHorizontalCenter(this.likeBut);
        this.likeBut.y = 740;
        this.group.addChild(this.likeBut);
        this.likeBut.touchEnabled = true;
        this.likeBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        this.setFullScreen();
        this.setViewRect();
        if (DataModel.personNum != 0) {
            this.dataHandle();
        }
        Global.addEventListener(DataEvent.DATACOMPLETE1, this.dataHandle, this);
    };
    p.touchHandle = function () {
        DataModel.getInstance().onTouchHandle1();
    };
    p.dataHandle = function () {
        var ey = 990;
        var ex = 65;
        var dataArr = DataModel.userInfoArr;
        for (var i = 0; i < dataArr.length; i++) {
            if (dataArr[i].imgurl == ConfigModel.headImg) {
                dataArr.splice(i, 1);
                dataArr.unshift({ 'imgurl': ConfigModel.headImg });
            }
        }
        this.createImg(dataArr.length);
        for (var i = 0; i < dataArr.length; i++) {
            if (dataArr[i].imgurl != "") {
                this.imglist[i].spr.load(dataArr[i].imgurl);
            }
            if (i % 5 == 0) {
                ex = 80;
                if (i > 0) {
                    ey += 100;
                }
            }
            this.imglist[i].spr.x = ex;
            this.imglist[i].spr.y = ey;
            this.imglist[i].spr.width = 90;
            this.imglist[i].spr.height = 90;
            this.imglist[i].mask.x = this.imglist[i].spr.x;
            this.imglist[i].mask.y = this.imglist[i].spr.y;
            this.imglist[i].spr.mask = this.imglist[i].mask;
            ex += 100;
        }
        this.likeNumTxt.text = DataModel.personNum.toString();
        this.bg1.height = ey + 160;
        if (DataModel.isExist == 1) {
            alert("你已经参与过了");
        }
    };
    p.createImg = function (length) {
        var tmpnum = length - this.imglist.length;
        if (tmpnum > 0) {
            for (var i = 0; i < tmpnum; i++) {
                var uImg = new BitmapDisplay;
                this.group.addChild(uImg);
                var mask = new BitmapDisplay("mask");
                this.group.addChild(mask);
                this.imglist.push({ 'spr': uImg, 'mask': mask });
            }
        }
    };
    return Scene1;
}(DisplayScrollerScene));
egret.registerClass(Scene1,'Scene1');
