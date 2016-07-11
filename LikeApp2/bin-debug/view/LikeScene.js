/**
 * Created by cyy on 15/11/13.
 */
var LikeScene = (function (_super) {
    __extends(LikeScene, _super);
    function LikeScene() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=LikeScene,p=c.prototype;
    p.onAddToStage = function () {
        this.createScene();
    };
    p.createScene = function () {
        this.width = 640;
        this.height = 1030;
        this.headScene = new HeadScene;
        this.group.addChild(this.headScene);
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("blackMask");
        this.group.addChild(this.bg1);
        this.setHorizontalCenter(this.bg1);
        this.bg1.alpha = 0;
        this.likeInfoText = new BitmapDisplay("infotext");
        this.setHorizontalCenter(this.likeInfoText);
        this.setVerticalCenter(this.likeInfoText);
        this.group.addChild(this.likeInfoText);
        this.likeInfoText.alpha = 0;
        this.likeNumTxt = new egret.TextField;
        this.likeNumTxt.text = DataModel.personNum.toString();
        this.likeNumTxt.size = 35;
        this.likeNumTxt.anchorOffsetX = this.likeNumTxt.width;
        this.likeNumTxt.textColor = 0xffffff;
        this.likeNumTxt.x = 300;
        this.likeNumTxt.y = 190;
        this.likeNumTxt.alpha = 0;
        this.group.addChild(this.likeNumTxt);
        this.likeBut = new BitmapDisplay;
        this.likeBut.setBitmapByName("likeBut");
        this.likeBut.anchorOffsetX = this.likeBut.width / 2;
        this.likeBut.anchorOffsetY = this.likeBut.height / 2;
        this.likeBut.x = this.width / 2;
        this.likeBut.y = 735;
        this.group.addChild(this.likeBut);
        this.likeBut.touchEnabled = true;
        this.likeBut.alpha = 0;
        this.likeBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        this.urlBut = new BitmapDisplay("urlBut");
        this.urlBut.y = 860;
        this.setHorizontalCenter(this.urlBut);
        this.urlBut.touchEnabled = true;
        this.group.addChild(this.urlBut);
        this.urlBut.alpha = 0;
        this.urlBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoUrl, this);
        this.userheadImg = new BitmapDisplay();
        this.userheadImg.load(ConfigModel.headImg);
        this.userheadImg.width = 140;
        this.userheadImg.height = 140;
        this.userheadImg.y = 465;
        this.setHorizontalCenter(this.userheadImg);
        this.group.addChild(this.userheadImg);
        this.userheadImg.alpha = 0;
        this.setFullScreen();
        this.setViewRect();
        Global.addEventListener(DataEvent.DATACOMPLETE1, this.dataHandle, this);
    };
    p.beginTW = function () {
        egret.setTimeout(function () { this.pageTw(1); }, this, 1000);
    };
    p.touchHandle = function () {
        DataModel.getInstance().onTouchHandle1();
    };
    p.dataHandle = function () {
        ConfigModel.headImg = __global.headimgurl;
        //ConfigModel.headImg = "http://www.joyoungfeld-ad.com/zhaoyang/game/lookinggame2/resource/assets/share.jpg";
        this.userheadImg.load(ConfigModel.headImg);
        egret.Tween.get(this.likeBut).to({ scaleX: 0, scaleY: 0 }, 600, egret.Ease.backInOut).call(function () {
            this.likeBut.setBitmapByName("is_likeBut");
            egret.Tween.get(this.likeBut).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.backInOut);
        }, this);
        this.likeNumTxt.text = DataModel.personNum.toString();
        this.likeNumTxt.anchorOffsetX = this.likeNumTxt.width;
        ConfigModel.getInstance().updataShare();
        if (DataModel.isExist == 1) {
            alert("你已经参与过了");
        }
        this.pageTw(2);
    };
    p.pageTw = function (num) {
        switch (num) {
            case 1:
                egret.Tween.get(this.bg1).to({ alpha: 1 }, 800, egret.Ease.sineIn);
                egret.Tween.get(this.likeInfoText).to({ alpha: 1 }, 800, egret.Ease.sineIn);
                egret.Tween.get(this.likeBut).to({ alpha: 1 }, 800, egret.Ease.sineIn);
                egret.Tween.get(this.urlBut).to({ alpha: 1 }, 800, egret.Ease.sineIn);
                egret.Tween.get(this.userheadImg).to({ alpha: 1 }, 800, egret.Ease.sineIn);
                egret.Tween.get(this.likeNumTxt).to({ alpha: 1 }, 800, egret.Ease.sineIn);
                break;
            case 2:
                egret.Tween.get(this.urlBut, { loop: true }).to({ alpha: 0 }, 800, egret.Ease.sineIn).to({ alpha: 1 }, 800, egret.Ease.sineIn);
        }
    };
    p.gotoUrl = function () {
        window.location.href = "http://viewer.maka.im/k/VRXXOZ8P";
    };
    return LikeScene;
}(DisplayScrollerScene));
egret.registerClass(LikeScene,'LikeScene');
