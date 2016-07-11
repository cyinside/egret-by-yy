/**
 * Created by cyy on 16/5/26.
 */
var FormPage = (function (_super) {
    __extends(FormPage, _super);
    function FormPage() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=FormPage,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.fromPage = new BitmapDisplay("formpage");
        this.fromPage.alpha = 1;
        this.setVerticalCenter(this.fromPage);
        this.setHorizontalCenter(this.fromPage);
        this.addChild(this.fromPage);
        this.inputBut = new BitmapDisplay("inputBut");
        this.inputBut.anchorOffsetX = this.inputBut.width / 2;
        this.inputBut.anchorOffsetY = this.inputBut.height / 2;
        this.inputBut.x = this.width / 2;
        this.inputBut.y = 850;
        this.inputBut.touchEnabled = true;
        this.addChild(this.inputBut);
        this.inputBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        this.nameInput = new egret.TextField;
        this.nameInput.textColor = 0x7F7F7F;
        this.nameInput.textAlign = egret.HorizontalAlign.CENTER;
        this.nameInput.y = 200;
        this.nameInput.type = egret.TextFieldType.INPUT;
        this.nameInput.text = "点击输入";
        this.nameInput.width = 200;
        this.nameInput.x = 275;
        this.addChild(this.nameInput);
        this.nameInput.addEventListener(egret.TouchEvent.TOUCH_TAP, this.txtHandle, this);
        this.telInput = new egret.TextField;
        this.telInput.textColor = 0x7F7F7F;
        this.telInput.textAlign = egret.HorizontalAlign.CENTER;
        this.telInput.y = 315;
        this.telInput.type = egret.TextFieldType.INPUT;
        this.telInput.text = "点击输入";
        this.telInput.width = 200;
        this.telInput.x = 270;
        this.addChild(this.telInput);
        this.telInput.addEventListener(egret.TouchEvent.TOUCH_TAP, this.txtHandle, this);
        this.aaddressInput = new egret.TextField;
        this.aaddressInput.textColor = 0x7F7F7F;
        this.aaddressInput.textAlign = egret.HorizontalAlign.LEFT;
        this.aaddressInput.y = 460;
        this.aaddressInput.type = egret.TextFieldType.INPUT;
        this.aaddressInput.text = "点击输入";
        this.aaddressInput.width = 350;
        this.aaddressInput.height = 200;
        this.aaddressInput.multiline = true;
        this.aaddressInput.x = 155;
        this.addChild(this.aaddressInput);
        this.aaddressInput.addEventListener(egret.TouchEvent.TOUCH_TAP, this.txtHandle, this);
        Global.addEventListener(DataEvent.INPUTFAIL, this.onFaliHandle, this);
    };
    p.txtHandle = function (e) {
        if (e.currentTarget == this.nameInput) {
            this.nameInput.text = "";
        }
        else if (e.currentTarget == this.telInput) {
            this.telInput.text = "";
        }
        else if (e.currentTarget == this.aaddressInput) {
            this.aaddressInput.text = "";
        }
    };
    p.touchHandle = function () {
        console.log("touch");
        if (this.nameInput.text == "" || this.telInput.text == "" || this.aaddressInput.text == "" || this.nameInput.text == "点击输入" || this.telInput.text == "点击输入" || this.aaddressInput.text == "点击输入") {
            alert("请把信息填写完整");
        }
        else {
            var checknum = this.checkMobile(this.telInput.text);
            if (checknum == 0) {
                alert("请输入正确的电话号码");
            }
            else {
                this.dataHandle();
            }
        }
    };
    p.checkMobile = function (str) {
        var telphone = /^0?1[3|4|5|8][0-9]\d{8}$/;
        var mobilephone = /^0\d{2,3}-?\d{7,8}$/;
        if (telphone.test(str) || mobilephone.test(str)) {
            return 1;
        }
        else {
            return 0;
        }
    };
    p.dataHandle = function () {
        DataModel.inputname = this.nameInput.text;
        DataModel.telnum = parseInt(this.telInput.text);
        DataModel.addressName = this.aaddressInput.text;
        DataModel.getInstance().onTouchHandle2();
    };
    p.onFaliHandle = function () {
        this.inputBut.touchEnabled = true;
    };
    return FormPage;
}(DisplayScene));
egret.registerClass(FormPage,'FormPage');
