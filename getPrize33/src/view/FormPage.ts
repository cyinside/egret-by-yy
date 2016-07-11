/**
 * Created by cyy on 16/5/26.
 */
class FormPage extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private fromPage:BitmapDisplay;
    private inputBut:BitmapDisplay;
    private telInput:egret.TextField;
    private nameInput:egret.TextField;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.fromPage = new BitmapDisplay("formPage");
        this.fromPage.alpha = 1;
        this.setVerticalCenter(this.fromPage);
        this.setHorizontalCenter(this.fromPage);
        this.addChild(this.fromPage);

        this.inputBut = new BitmapDisplay("inputBut");
        this.inputBut.anchorOffsetX = this.inputBut.width/2;
        this.inputBut.anchorOffsetY = this.inputBut.height/2;
        this.inputBut.x = this.width/2;
        this.inputBut.y = 850;
        this.inputBut.touchEnabled = true;
        this.addChild(this.inputBut);
        this.inputBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);

        this.nameInput = new egret.TextField;
        this.nameInput.textColor = 0x000000;
        this.nameInput.textAlign = egret.HorizontalAlign.CENTER;
        this.nameInput.y = 340;
        this.nameInput.type = egret.TextFieldType.INPUT;
        this.nameInput.text = "点击输入";
        this.nameInput.width = 200;
        this.setHorizontalCenter(this.nameInput);
        this.addChild(this.nameInput);
        this.nameInput.addEventListener(egret.TouchEvent.TOUCH_TAP,this.txtHandle,this);

        this.telInput = new egret.TextField;
        this.telInput.textColor = 0x000000;
        this.telInput.textAlign = egret.HorizontalAlign.CENTER;
        this.telInput.y = 470;
        this.telInput.type = egret.TextFieldType.INPUT;
        this.telInput.text = "点击输入";
        this.telInput.width = 200;
        this.setHorizontalCenter(this.telInput);
        this.addChild(this.telInput);
        this.telInput.addEventListener(egret.TouchEvent.TOUCH_TAP,this.txtHandle,this);

        Global.addEventListener(DataEvent.INPUTFAIL,this.onFaliHandle,this);
    }

    private txtHandle(e:egret.TouchEvent){
        if(e.currentTarget==this.nameInput){
            this.nameInput.text = "";
        }else if(e.currentTarget==this.telInput){
            this.telInput.text = "";
        }
    }

    private touchHandle(){
        console.log("touch");
        //alert("touch")
        if(this.nameInput.text==""||this.telInput.text==""){
            alert("请把姓名和电话填写完整")
        }else{
            var checknum:number=this.checkMobile(this.telInput.text);
            if(checknum==0){
                alert("请输入正确的电话号码");
            }else{
                this.dataHandle();
            }
        }
    }

    private checkMobile(str){
        var telphone = /^0?1[3|4|5|8][0-9]\d{8}$/;
        var mobilephone =/^0\d{2,3}-?\d{7,8}$/;

        if(telphone.test(str)||mobilephone.test(str)){
            return 1;
        }else{
            return 0;
        }
    }

    private dataHandle(){
        DataModel.inputname = this.nameInput.text;
        DataModel.telnum = parseInt(this.telInput.text);

        //DataModel.getInstance().onTouchHandle2();
    }

    private onFaliHandle(){
        this.inputBut.touchEnabled = true;
    }
}
