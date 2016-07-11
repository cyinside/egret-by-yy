/**
 * Created by cyy on 16/5/20.
 */
class Scene2 extends DisplayScrollerScene{
    public constructor(){
        super();
        this.createScnen();
    }

    private bg1:UIBitmapDisplay;
    private text1:egret.TextField;
    private text2:egret.TextField;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("bg1");
        this.group.addChild(this.bg1);

        this.text1 = new egret.TextField;
        this.text1.text = "点击屏幕";
        this.text1.x = this.width/2-this.text1.width+20;
        this.text1.y = 780;
        this.text1.textColor = 0x3E3E3E;
        this.text1.alpha = 0;
        this.group.addChild(this.text1);

        this.text2 = new egret.TextField;
        this.text2.text = "开始告白";
        this.text2.x = this.text1.x+this.text1.width-20;
        this.text2.y = 820;
        this.text2.textColor = 0x3E3E3E;
        this.text2.alpha = 0;
        this.group.addChild(this.text2);

        this.setFullScreen();
        this.setViewRect();

        egret.setTimeout(function(){this.textTw()},this,1000);
    }

    private textTw(){
        egret.Tween.get(this.text1).to({alpha:1,y:800},800,egret.Ease.sineInOut).call(function(){

            egret.Tween.get(this.text1).to({x:this.width/2-this.text1.width},600,egret.Ease.sineInOut).call(function(){
                egret.Tween.get(this.text2).to({alpha:1,y:800},800,egret.Ease.sineInOut).call(this.setTouch,this)
            },this);

        },this);
    }

    private setTouch(){
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
    }

    private touchHandle(){
        this.startMusic();

        var event:DataEvent = new DataEvent(DataEvent.GOTO_SCENE);
        event.sceneID = 3;
        Global.dispatchEvent(DataEvent.GOTO_SCENE,event);
    }

    private startMusic(){
        var musicDiv = document.getElementById("bgmusic");
        if(musicDiv["paused"]==true){
            musicDiv["play"]();
        }
    }
}