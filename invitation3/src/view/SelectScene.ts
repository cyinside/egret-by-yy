/**
 * Created by cyy on 16/3/31.
 */
class SelectScene extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private selectBg:UIBitmapDisplay;
    private but1:ButtonView;
    private but2:ButtonView;
    private but3:ButtonView;
    private but4:ButtonView;
    private but5:ButtonView;
    private but6:ButtonView;
    private but7:ButtonView;
    private contTXT:egret.TextField;
    private inputTXT:egret.TextField;
    private nike:BitmapDisplay;
    private isTou:boolean = false;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.selectBg = new UIBitmapDisplay("selectBg");
        this.addChild(this.selectBg);

        this.but1 = new ButtonView(1);
        this.but1.anchorOffsetX = this.but1.width/2;
        this.but1.anchorOffsetY = this.but1.height/2;
        this.addChild(this.but1);

        this.but2 = new ButtonView(2);
        this.but2.anchorOffsetX = this.but2.width/2;
        this.but2.anchorOffsetY = this.but2.height/2;
        this.addChild(this.but2);

        this.but3 = new ButtonView(3);
        this.but3.anchorOffsetX = this.but3.width/2;
        this.but3.anchorOffsetY = this.but3.height/2;
        this.addChild(this.but3);

        this.but4 = new ButtonView(4);
        this.but4.anchorOffsetX = this.but4.width/2;
        this.but4.anchorOffsetY = this.but4.height/2;
        this.addChild(this.but4);

        this.but5 = new ButtonView(5);
        this.but5.anchorOffsetX = this.but5.width/2;
        this.but5.anchorOffsetY = this.but5.height/2;
        this.addChild(this.but5);

        this.but6 = new ButtonView(6);
        this.but6.anchorOffsetX = this.but6.width/2;
        this.but6.anchorOffsetY = this.but6.height/2;
        this.addChild(this.but6);

        this.but7 = new ButtonView(7);
        this.but7.anchorOffsetX = this.but7.width/2;
        this.but7.anchorOffsetY = this.but7.height/2;
        this.but7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.okHandle,this);
        this.addChild(this.but7);

        this.contTXT = new egret.TextField;
        this.contTXT.y = 600;
        this.contTXT.size = 35;
        this.contTXT.text = "我向往的生活是";
        this.contTXT.anchorOffsetX = this.contTXT.width/2;
        this.contTXT.x = this.width/2;
        this.addChild(this.contTXT);

        this.inputTXT = new egret.TextField;
        this.inputTXT.text = "点击输入";
        this.inputTXT.touchEnabled = true;
        this.inputTXT.type = egret.TextFieldType.INPUT;
        this.inputTXT.textAlign = egret.HorizontalAlign.CENTER;
        this.inputTXT.width = 200;
        this.inputTXT.x = 220;
        this.inputTXT.y = 485;
        this.inputTXT.size = 22;
        this.inputTXT.textColor = 0x000000;
        this.inputTXT.addEventListener(egret.TouchEvent.TOUCH_TAP,this.txtTouchHandle,this);
        this.addChild(this.inputTXT);

        this.nike = new BitmapDisplay("nike");
        this.nike.alpha = 0;
        this.addChild(this.nike);
        this.nike.anchorOffsetX = this.nike.width/2;
        this.nike.anchorOffsetY = this.nike.height/2;
        this.nike.y = this.height-this.nike.width+15;
        this.nike.x = this.width-this.nike.width+10;

        this.setFullScreen();
        this.setlocation();
        this.addListen();
    }

    private touchHandle(evt:egret.TouchEvent){
        this.contTXT.text = "点击输入";
        switch (evt.currentTarget){
            case this.but1:
                ConfigModel.getInstance().typeNum = 1;
                this.iconTw(this.but1);
                break;
            case this.but2:
                ConfigModel.getInstance().typeNum = 2;
                this.iconTw(this.but2);
                break;
            case this.but3:
                ConfigModel.getInstance().typeNum = 3;
                this.iconTw(this.but3);
                break;
            case this.but4:
                ConfigModel.getInstance().typeNum = 4;
                this.iconTw(this.but4);
                break;
            case this.but5:
                ConfigModel.getInstance().typeNum = 5;
                this.iconTw(this.but5);
                break;
            case this.but6:
                ConfigModel.getInstance().typeNum = 6;
                this.iconTw(this.but6);
                break;
        }
        this.isTou = true;
        this.inputTXT.text = "点击输入"
    }

    private setlocation(){
        var x1:number = this.width*0.25;
        var x2:number = this.width*0.5;
        var x3:number = this.width*0.75;
        var y1:number = 175;
        var y2:number = 310;

        this.but1.x = x1;
        this.but1.y = y1;

        this.but2.x = x2;
        this.but2.y = y1;

        this.but3.x = x3;
        this.but3.y = y1;

        this.but4.x = x1;
        this.but4.y = y2;

        this.but5.x = x2;
        this.but5.y = y2;

        this.but6.x = x3;
        this.but6.y = y2;

        this.but7.x = this.width/2;
        this.but7.y = 700;
    }

    private iconTw(obj:ButtonView){
        this.nike.alpha = 1;
        this.nike.y = obj.y;
        this.nike.x = obj.x;

        this.setlocation();
    }

    private okHandle(){
        if(this.isTou == true){
            ConfigModel.getInstance().contTxt = ConfigModel.getInstance().getTypeByID();
            ConfigModel.getInstance().updateShare1();
        }else{
            if(this.inputTXT.text == "点击输入"|| this.inputTXT.text == ""){
                alert("请输入或选择生活方式");
                return;
            }
            ConfigModel.getInstance().contTxt = this.inputTXT.text;
            ConfigModel.getInstance().updateShare1();
        }

        console.log(ConfigModel.getInstance().contTxt);
        Global.dispatchEvent(DataEvent.GOTOSCENE2,this);
    }

    private txtTouchHandle(){
        this.nike.alpha = 0;
        this.inputTXT.text = "";
        this.isTou = false;
    }

    public addListen(){
        this.but1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
    }

    public touchControl(isTouch:boolean = true){
        this.but1.touchEnabled=this.but2.touchEnabled=this.but3.touchEnabled=this.but4.touchEnabled=
            this.but5.touchEnabled=this.but6.touchEnabled=this.but7.touchEnabled=isTouch;
    }
}