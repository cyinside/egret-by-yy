/**
 * Created by cyy on 16/6/14.
 */
class MaskScene extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private bg:BitmapDisplay;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.bg = new BitmapDisplay("test5");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.maskLcation,this);

        this.setFullScreen();
    }

    private xyArr:Array<any> = new Array();
    private maskLcation(e:egret.TouchEvent){
        var x:number = Math.floor(e.localX);
        var y:number = Math.floor(e.localY);
        console.log("x"+x+"y"+y);
    }
    //2:x253y236,x57y420
    //3:x202y213,x391y318,x164y294
    //4:x192y269,x165y749,x369y334,x467y371
    //5:x321y307,x119y280,x371y304,x421y417,x86y387

}