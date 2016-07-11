/**
 * Created by cyy on 16/4/12.
 */
var LotteryPage = (function (_super) {
    __extends(LotteryPage, _super);
    function LotteryPage() {
        _super.call(this);
        this.timeNum = 0;
        this.gameDiv = document.createElement("div");
        this.myImg = document.createElement("img");
        this.createScnen();
    }
    var d = __define,c=LotteryPage,p=c.prototype;
    p.createScnen = function () {
        this.bg2 = new BitmapDisplay();
        this.wordView = new BitmapDisplay();
        this.setHorizontalCenter(this.wordView);
        this.wordView.anchorOffsetX = this.wordView.width / 2;
        this.wordView.y = 125;
        this.retryBut1 = new BitmapDisplay("retryBut1");
        this.retryBut1.touchEnabled = true;
        this.retryBut1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setRetry, this);
        this.gameDiv.setAttribute("id", "gameDiv");
        this.gameDiv.style.width = "60%";
        this.gameDiv.style.position = "absolute";
        this.gameDiv.style.zIndex = "99";
        this.gameDiv.style.top = "60%";
        this.gameDiv.style.left = "33%";
        this.gameDiv.style.display = "";
        this.myImg.src = "resource/assets/qcode.jpg";
        this.myImg.style.width = "58%";
    };
    p.setLResult = function () {
        var word = ConfigModel.prizeWord;
        var wordtype = ConfigModel.prizeWordtype;
        if (word.indexOf("100") != -1) {
            this.removeChild(this.bg2);
            Global.dispatchEvent(DataEvent.GAMERETRY, this);
            JSSDK.getWeiXinShareAppMessage(2, ConfigModel.getInstance().wx_title, ConfigModel.getInstance().wx_share_link, ConfigModel.getInstance().wx_share_img, ConfigModel.getInstance().wx_title2);
            JSSDK.getWeiXinShareTimeline(2, ConfigModel.getInstance().wx_title2, ConfigModel.getInstance().wx_share_link, ConfigModel.getInstance().wx_share_img);
            console.log(ConfigModel.getInstance().wx_title2);
            return;
        }
        else {
            document.body.appendChild(this.gameDiv);
            this.gameDiv.appendChild(this.myImg);
            if (word.indexOf("film") != -1) {
                this.addChild(this.bg2);
                this.bg2.setBitmapByName("film");
            }
            else {
                this.bg2.setBitmapByName("bigprize");
                if (wordtype == 1) {
                    this.wordView.anchorOffsetX = this.wordView.width / 2;
                    this.wordView.x = 417 / 2 - 15;
                    console.log(ConfigModel.prizeWord);
                    console.log("surface");
                }
                else {
                    this.addChild(this.bg2);
                    this.addChild(this.wordView);
                    this.wordView.setBitmapByName(ConfigModel.prizeWord);
                    this.wordView.anchorOffsetX = this.wordView.width / 2;
                    this.wordView.x = 417 / 2;
                    this.gameDiv.style.top = "56%";
                    console.log(ConfigModel.prizeWord);
                    console.log("kindle");
                }
            }
            this.addChild(this.retryBut1);
            this.retryBut1.y = this.bg2.y + this.bg2.height + 30;
            this.retryBut1.anchorOffsetX = this.retryBut1.width / 2;
            this.retryBut1.x = 417 / 2;
            JSSDK.getWeiXinShareAppMessage(2, ConfigModel.getInstance().wx_title, ConfigModel.getInstance().wx_share_link, ConfigModel.getInstance().wx_share_img, "我在" + ConfigModel.timeTxt + "秒内抽中了保利超级壕礼，我才是大牌！");
            JSSDK.getWeiXinShareTimeline(2, "我在" + ConfigModel.timeTxt + "秒内抽中了保利超级壕礼，我才是大牌！", ConfigModel.getInstance().wx_share_link, ConfigModel.getInstance().wx_share_img);
            console.log(ConfigModel.getInstance().wx_title + ConfigModel.timeTxt + "秒内抽中了保利超级壕礼，我才是大牌！");
        }
    };
    p.setRetry = function () {
        this.removeChild(this.wordView);
        this.removeChild(this.bg2);
        this.removeChild(this.retryBut1);
        Global.dispatchEvent(DataEvent.GAMERETRY1, this);
        document.body.removeChild(this.gameDiv);
    };
    return LotteryPage;
}(DisplayScene));
egret.registerClass(LotteryPage,'LotteryPage');
//# sourceMappingURL=LotteryPage.js.map