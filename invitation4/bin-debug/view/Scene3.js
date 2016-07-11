/**
 * Created by cyy on 16/5/18.
 */
var Scene3 = (function (_super) {
    __extends(Scene3, _super);
    function Scene3() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=Scene3,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("p1");
        this.group.addChild(this.bg1);
        this.headImg = new HeadImg1(1);
        this.headImg.y = 905;
        this.headImg.x = 300;
        this.group.addChild(this.headImg);
        this.headImgIcon = new BitmapDisplay("wicon");
        this.headImgIcon.anchorOffsetX = this.headImgIcon.width / 2;
        this.headImgIcon.anchorOffsetY = this.headImgIcon.height / 2;
        this.headImgIcon.y = 85;
        this.headImgIcon.x = 125;
        this.group.addChild(this.headImgIcon);
        this.senterName = new egret.TextField;
        this.senterName.size = 30;
        this.senterName.y = 935;
        this.senterName.x = 360;
        this.senterName.textColor = 0x000000;
        this.senterName.text = ConfigModel.getInstance().uNameTxt;
        this.group.addChild(this.senterName);
        this.leftForWard = new ForWardView;
        this.group.addChild(this.leftForWard);
        this.setVerticalCenter(this.leftForWard);
        this.leftForWard.x = 125;
        this.leftForWard.scaleX = -1;
        this.rightForWard = new ForWardView;
        this.group.addChild(this.rightForWard);
        this.setVerticalCenter(this.rightForWard);
        this.rightForWard.x = this.width - this.rightForWard.width + 25;
        this.shareBut = new BitmapDisplay("shareBut");
        this.group.addChild(this.shareBut);
        this.shareBut.x = 80 + this.shareBut.width / 2;
        this.shareBut.y = 928 + this.shareBut.height / 2;
        this.shareBut.anchorOffsetX = this.shareBut.width / 2;
        this.shareBut.anchorOffsetY = this.shareBut.height / 2;
        this.shareBut.touchEnabled = true;
        this.rect = new BlackRcet;
        this.rect.alpha = 0;
        this.group.addChild(this.rect);
        this.shareinfo = new BitmapDisplay("shareinfo");
        this.shareinfo.x = 440;
        this.shareinfo.y = 160;
        this.shareinfo.anchorOffsetX = this.shareinfo.width / 2;
        this.shareinfo.anchorOffsetY = this.shareinfo.height / 2;
        console.log(this.shareinfo.rotation);
        this.leftForWard.touchEnabled = this.rightForWard.touchEnabled = true;
        this.leftForWard.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changePage, this);
        this.rightForWard.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changePage, this);
        this.rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeShare, this);
        this.shareBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goShareTw, this);
        this.setFullScreen();
        this.setViewRect();
        this.shareButTw();
        ConfigModel.getInstance().updateShare();
    };
    p.changePage = function (evt) {
        if (evt.currentTarget == this.leftForWard) {
            ConfigModel.getInstance().idNum--;
            if (ConfigModel.getInstance().idNum < 1) {
                ConfigModel.getInstance().idNum = Scene3.maxPageNum;
            }
            egret.Tween.get(this.bg1).to({ alpha: 0 }, 200, egret.Ease.sineIn)
                .call(function () {
                this.bg1.setBitmapByName("p" + ConfigModel.getInstance().idNum.toString());
            }, this).to({ alpha: 1 }, 200, egret.Ease.sineIn);
            if (ConfigModel.getInstance().idNum == 1 || ConfigModel.getInstance().idNum == 3) {
                this.senterName.textColor = 0x000000;
            }
            else {
                this.senterName.textColor = 0xFFFFFF;
            }
        }
        else if (evt.currentTarget == this.rightForWard) {
            ConfigModel.getInstance().idNum++;
            if (ConfigModel.getInstance().idNum > Scene3.maxPageNum) {
                ConfigModel.getInstance().idNum = 1;
            }
            egret.Tween.get(this.bg1).to({ alpha: 0 }, 200, egret.Ease.sineIn)
                .call(function () {
                this.bg1.setBitmapByName("p" + ConfigModel.getInstance().idNum.toString());
            }, this).to({ alpha: 1 }, 200, egret.Ease.sineIn);
        }
        if (ConfigModel.getInstance().idNum == 1 || ConfigModel.getInstance().idNum == 3) {
            this.senterName.textColor = 0x000000;
        }
        else {
            this.senterName.textColor = 0xFFFFFF;
        }
        ConfigModel.getInstance().updateShare();
    };
    p.shareHandle = function () {
        this.leftForWard.touchEnabled = false;
        this.rightForWard.touchEnabled = false;
        egret.Tween.get(this.rect).to({ alpha: 1 }, 300, egret.Ease.sineIn).call(function () {
            this.group.addChild(this.shareinfo);
            this.rect.touchEnabled = true;
        }, this);
    };
    p.removeShare = function () {
        this.resetShareBut();
        this.shareButTw();
        this.leftForWard.touchEnabled = true;
        this.rightForWard.touchEnabled = true;
        egret.Tween.get(this.rect).to({ alpha: 0 }, 300, egret.Ease.sineIn).call(function () {
            this.group.removeChild(this.shareinfo);
            this.rect.touchEnabled = false;
        }, this);
    };
    p.goShareTw = function () {
        egret.Tween.removeTweens(this.shareBut);
        egret.Tween.get(this.shareBut).to({ x: 640, y: 0 }, 1000);
        egret.Tween.get(this.shareBut).to({ scaleX: 1.1, scaleY: 1.1 }, 500).to({ scaleX: 0, scaleY: 0 }, 500);
        egret.Tween.get(this.shareBut).to({ rotation: 1280 }, 1000).call(this.shareHandle, this);
    };
    p.shareButTw = function () {
        egret.Tween.get(this.shareinfo, { loop: true }).to({ rotation: 15 }, 600, egret.Ease.sineInOut).to({ rotation: 0 }, 600, egret.Ease.sineInOut);
        egret.Tween.get(this.shareBut, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 500).to({ rotation: 10 }, 150).to({ rotation: -10 }, 150).to({ rotation: 10 }, 150).to({ rotation: 0 }, 150)
            .to({ scaleX: 1, scaleY: 1 }, 500).wait(1500);
    };
    p.resetShareBut = function () {
        this.shareBut.x = 80 + this.shareBut.width / 2;
        this.shareBut.y = 928 + this.shareBut.height / 2;
        this.shareBut.scaleX = this.shareBut.scaleY = 1;
        this.shareBut.rotation = 0;
    };
    Scene3.maxPageNum = 5;
    return Scene3;
}(DisplayScrollerScene));
egret.registerClass(Scene3,'Scene3');
//# sourceMappingURL=Scene3.js.map