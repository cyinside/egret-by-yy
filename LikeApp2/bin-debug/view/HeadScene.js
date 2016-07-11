/**
 * Created by Administrator on 2016/6/29.
 */
var HeadScene = (function (_super) {
    __extends(HeadScene, _super);
    function HeadScene() {
        _super.call(this);
        this.imglist = [];
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=HeadScene,p=c.prototype;
    p.onAddToStage = function () {
        this.createScene();
    };
    p.createScene = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("headbg");
        this.addChild(this.bg1);
        if (DataModel.personNum != 0) {
            this.dataHandle();
        }
        Global.addEventListener(DataEvent.DATACOMPLETE1, this.dataHandle, this);
    };
    p.dataHandle = function () {
        var ey = 24;
        var ex = 26;
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
            if (i % 6 == 0) {
                ex = 26;
                if (i > 0) {
                    ey += 98;
                }
            }
            this.imglist[i].spr.x = ex;
            this.imglist[i].spr.y = ey;
            this.imglist[i].spr.width = 98;
            this.imglist[i].spr.height = 98;
            ex += 98;
        }
    };
    p.createImg = function (length) {
        var tmpnum = length - this.imglist.length;
        if (tmpnum > 0) {
            for (var i = 0; i < tmpnum; i++) {
                var uImg = new BitmapDisplay;
                this.addChild(uImg);
                this.imglist.push({ 'spr': uImg });
            }
        }
    };
    return HeadScene;
}(DisplayScene));
egret.registerClass(HeadScene,'HeadScene');
