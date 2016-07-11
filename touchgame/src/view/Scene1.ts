/**
 * Created by cyy on 15/11/24.
 */
class Scene1 extends DisplayScene {

    private timeOut1:egret.Timer;
    public constructor() {
        super();
        this.createScene();
        this.tw();

        this.timeOut1 = new egret.Timer(4000,0);
        this.timeOut1.addEventListener(egret.TimerEvent.TIMER,this.setLocation,this);
        this.timeOut1.start();

    }

    private planet:BitmapDisplay;
    private ets:Role;
    private Bboom:BitmapDisplay;
    private createScene(){
        this.width = 640;
        this.height = 1030;

        var num1:number = Math.floor(Math.random()*4+1);
        for(var i:number = 0;i<num1;i++){
            this.ets = new Role;
            this.setLocation();
        }
        this.ets.addEventListener(egret.Event.ENTER_FRAME,this.hitHandle,this);
        this.ets.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);

        this.planet = new BitmapDisplay;
        this.planet.setBitmapByName("planet");
        this.planet.x = 160;
        this.planet.scaleX = this.planet.scaleY = 0.9;
        this.setVerticalCenter(this.planet);
        this.addChild(this.planet);

        this.Bboom = new BitmapDisplay;
        this.Bboom.setBitmapByName("Bboom");
        this.Bboom.scaleX = this.Bboom.scaleY = 0.4;
        this.Bboom.x = 80;
        this.Bboom.y = 150;

        this.setFullScreen();
    }

    private setLocation(){
        for(var i:number = 0;i<4;i++){
            var num:number = Math.floor(Math.random()*3+1);
            console.log(num);

            switch (true){
                case num == 1:
                    this.ets.x = fRandomBy(-this.ets.height,);
                    this.ets.y = 30;
                    break;
                case num == 2:
                    this.ets.x = this.width/2;
                    this.ets.y = -this.ets.height;
                    break;
                case num == 3:
                    this.ets.x = this.width+this.ets.width;
                    this.ets.y = 30;
                    break;
            }
            this.addChild(this.ets);
            egret.Tween.get(this.ets).to({x:this.width/2,y:this.height/2},5000);
        }
    }


    private tw(){
        egret.Tween.get(this.ets).to({x:this.width/2,y:this.height/2},5000);
    }

    private hitHandle(){
        if(HitTestUtil.hitTest(this.planet,this.ets)){
            this.addChild(this.Bboom);
        }
    }

    private touchHandle(){
        egret.Tween.removeTweens(this.ets);
        this.ets.showBoom();
        egret.setTimeout(this.remove,this,600);
    }

    private remove(){
        this.removeChild(this.ets);
        this.ets.hideBoom();
    }

    private fRandomBy(under, over){
    switch(arguments.length){
        case 1: return parseInt(Math.random()*under+1);
        case 2: return parseInt(Math.random()*(over-under+1) + under);
        default: return 0;
    }
}