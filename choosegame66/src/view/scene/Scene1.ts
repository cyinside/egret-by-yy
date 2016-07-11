class Scene1 extends DisplayScene{

    private bg:BitmapDisplay;
    private startBtn:BitmapDisplay;

    public constructor(){
        super();

        this.width = 640;
        this.height = 1030;

        this.bg = new BitmapDisplay();
        this.bg.setBitmapByName("bg1");
        this.addChild(this.bg);
        this.setHorizontalCenter(this.bg);

        this.startBtn = new BitmapDisplay();
        this.startBtn.setBitmapByName("startBtn");
        this.addChild(this.startBtn);
        this.setHorizontalCenter(this.startBtn);
        this.startBtn.y = 1015;
        this.startBtn.touchEnabled = true;

        this.setFullScreen();
        this.btnTween();

        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchStartHandler,this);
    }

    private touchStartHandler(event:egret.TouchEvent):void{
        var dataEvent:DataEvent = new DataEvent(DataEvent.GOTO_SCENE);
        dataEvent.sceneID = 2;
        this.dispatchEvent(dataEvent);
    }

    public remove():void{
        this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchStartHandler,this);
    }

    private btnTween(){
        egret.Tween.get(this.startBtn,{loop:false}).to({y:865},500,egret.Ease.backInOut);
    }
}