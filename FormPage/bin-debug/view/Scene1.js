/**
 * Created by cyy on 15/11/13.
 */
var Scene1 = (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        _super.call(this);
        this.touchID = 0;
        this.createScnen();
    }
    var d = __define,c=Scene1,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay("bg");
        this.group.addChild(this.bg1);
        this.book = new BitmapDisplay;
        this.group.addChild(this.book);
        this.txt = new BitmapDisplay;
        this.txt.y = 180;
        this.group.addChild(this.txt);
        this.but = new BitmapDisplay;
        this.but.y = 800;
        this.but.touchEnabled = true;
        this.group.addChild(this.but);
        this.formPage = new FormPage;
        this.setHorizontalCenter(this.formPage);
        this.setVerticalCenter(this.formPage);
        //this.group.addChild(this.formPage);
        this.setFullScreen();
        this.setViewRect();
        Global.addEventListener(DataEvent.DATACOMPLETE, this.dataHandle, this);
    };
    p.dataHandle = function () {
        var dataArr = DataModel.awordArr;
        if (dataArr.length == 0) {
            this.touchID = 2;
            this.book.setBitmapByName("nobook");
            this.txt.setBitmapByName("no");
            this.but.setBitmapByName("urlBut");
            this.but.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        }
        else if (dataArr[0].aword == "book") {
            this.touchID = 1;
            this.book.setBitmapByName("isbook");
            this.txt.setBitmapByName("is");
            this.but.setBitmapByName("formBut");
            this.but.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        }
        this.setHorizontalCenter(this.book);
        this.setVerticalCenter(this.book);
        this.setHorizontalCenter(this.but);
        this.setHorizontalCenter(this.txt);
    };
    p.touchHandle = function () {
        switch (this.touchID) {
            case 1:
                this.group.addChild(this.formPage);
                break;
            case 2:
                window.location.href = "http://www.joyoungfeld-ad.com/zhaoyang/game/click_game/index.html";
                break;
        }
    };
    return Scene1;
}(DisplayScrollerScene));
egret.registerClass(Scene1,'Scene1');
