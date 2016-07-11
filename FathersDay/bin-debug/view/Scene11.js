var Scene11 = (function (_super) {
    __extends(Scene11, _super);
    function Scene11() {
        _super.call(this);
        this.gameDiv = document.createElement("div");
        this.myImg = document.createElement("img");
        this.createScnen();
    }
    var d = __define,c=Scene11,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("end");
        this.group.addChild(this.bg1);
        this.txt = new BitmapDisplay("11");
        this.setHorizontalCenter(this.txt);
        this.txt.y = 200;
        this.txt.alpha = 0;
        this.group.addChild(this.txt);
        this.gameDiv.setAttribute("id", "gameDiv");
        this.gameDiv.style.width = "60%";
        this.gameDiv.style.position = "absolute";
        this.gameDiv.style.zIndex = "99";
        this.gameDiv.style.top = "65%";
        this.gameDiv.style.left = "33%";
        this.gameDiv.style.display = "";
        this.myImg.src = "resource/assets/qcode.jpg";
        this.myImg.style.width = "58%";
        document.body.appendChild(this.gameDiv);
        this.gameDiv.appendChild(this.myImg);
        this.setFullScreen();
        this.setViewRect();
        this.addTransformation(1, this.sceneTw, this);
    };
    p.twInt = function () {
        this.alpha = 0;
        this.y = 0;
        this.txt.alpha = 0;
        egret.Tween.get(this).to({ alpha: 1 }, 400).wait(300).call(function () {
            this.txt.alpha = 0;
            egret.Tween.get(this.txt).to({ alpha: 1 }, 1000);
        });
    };
    p.sceneTw = function (num) {
        switch (num) {
            //case -1:
            //    egret.Tween.get(this).to({y:-this.height,alpha:0},500,egret.Ease.sineIn).call(this.changePage,this);
            //    break;
            case 1:
                egret.Tween.get(this).to({ y: this.height, alpha: 0 }, 500, egret.Ease.sineIn).call(this.changePage1, this);
                break;
        }
    };
    //public changePage(){
    //    SceneUtil.changeScene(11);
    //}
    p.changePage1 = function () {
        SceneUtil.changeScene(10);
    };
    return Scene11;
}(DisplayScrollerScene));
egret.registerClass(Scene11,'Scene11');
//# sourceMappingURL=Scene11.js.map