/**
 * Created by cyy on 15/11/13.
 */
class Scene1 extends DisplayScene{
    public constructor(){
        super();
        this.createScnen();
    }

    private bg1:BitmapDisplay;
    private inputTXT:egret.TextField;
    private inputBtn:BitmapDisplay;
    private timeOut1:egret.Timer;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.bg1 = new BitmapDisplay;
        this.bg1.setBitmapByName("bg1");
        this.addChild(this.bg1);

        this.inputTXT = new egret.TextField;
        this.inputTXT.text = "输入";
        this.inputTXT.size = 40;
        this.inputTXT.x = 100;
        this.inputTXT.y = 350;
        this.inputTXT.anchorOffsetY = this.inputTXT.height/2;
        this.inputTXT.height = 200;
        this.inputTXT.width = 450;
        this.inputTXT.textColor = 0x000000;
        this.inputTXT.touchEnabled = true;
        this.inputTXT.type = egret.TextFieldType.INPUT;
        this.inputTXT.wordWrap = true;
        this.inputTXT.multiline = true;
        this.addChild(this.inputTXT);
        //this.inputTXT.maxChars = 15;
        this.inputTXT.addEventListener(egret.TouchEvent.TOUCH_TAP,this.txtHandle,this);

        this.inputBtn = new BitmapDisplay;
        this.inputBtn.setBitmapByName("start");
        this.setHorizontalCenter(this.inputBtn);
        this.inputBtn.y = 700;
        this.addChild(this.inputBtn);
        this.inputBtn.touchEnabled = true;
        this.inputBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);

        this.setFullScreen();

        this.timeOut1 = new egret.Timer(1000,5);
        this.timeOut1.addEventListener(egret.TimerEvent.TIMER,this.timeControl1,this);
        this.timeOut1.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timeControl,this);
    }

    private txtHandle(){
        this.inputTXT.text = "";
        this.inputTXT.type = egret.TextFieldType.INPUT;
        this.inputTXT.wordWrap = true;
        this.inputTXT.multiline = true;
        //this.inputTXT.maxChars = 15;
    }
    private touchHandle(){
        if(this.inputTXT.text == "输入"||this.inputTXT.text == ""){
            alert("请输入内容")
        }else{
            console.log(this.inputTXT.text);
            __global.sendMessageToServer(this.inputTXT.text);
            if(this.inputTXT.text.length>15){
                alert("字数超出15字");
                return;
            }
            this.inputTXT.text = "请等待";
            this.inputTXT.type = egret.TextFieldType.DYNAMIC;
            this.inputBtn.touchEnabled = false;
            this.timeOut1.start();
        }
    }

    private timeControl(){
        this.inputTXT.text = "输入";
        this.inputTXT.type = egret.TextFieldType.INPUT;
        this.inputBtn.touchEnabled = true;
        this.num = 6;
        this.timeOut1.reset();
        this.timeOut1.stop();
    }

    private num:number = 6;
    private timeControl1(){
        this.num--;
        this.inputTXT.text = "请等待"+this.num.toString()+"秒";
        this.inputTXT.type = egret.TextFieldType.DYNAMIC;
    }
}