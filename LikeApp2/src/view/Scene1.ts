/**
 * Created by Administrator on 2016/6/30.
 */
class Scene1 extends DisplayScene{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(){
        this.createScene();
    }

    private bg:BitmapDisplay;
    private left:BitmapDisplay;
    private right:BitmapDisplay;
    private text:BitmapDisplay;
    private forward:ForWardView;
    private beginX:number =0;
    private beginY:number=0;
    private endX:number =0;
    private endY:number=0;
    private imgID:number=1;
    private createScene() {
        this.width = 640;
        this.height = 1030;

        this.bg = new BitmapDisplay;
        this.bg.setBitmapByName("bg");
        this.addChild(this.bg);
        this.setHorizontalCenter(this.bg);

        this.text = new BitmapDisplay;
        this.text.setBitmapByName("text1");
        this.text.alpha =0;
        this.addChild(this.text);
        this.text.y = 600;
        this.setHorizontalCenter(this.text);

        this.left = new BitmapDisplay("left1");
        this.left.y = 20;
        this.left.x = -this.left.width;
        this.addChild(this.left);

        this.right = new BitmapDisplay("right1");
        this.right.y = 20;
        this.right.x = this.width;
        this.addChild(this.right);

        //this.addTransformation(1,this.sceneTw,this);
        this.touchEnabled = true;

        this.forward = new ForWardView();
        this.setHorizontalCenter(this.forward);
        this.forward.y = 995;
        this.forward.alpha = 0.6;
        this.addChild(this.forward);

        this.setFullScreen();
        this.inTw();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.touchend,this);
    }


    private touchBegin(e:egret.TouchEvent){
        this.beginX = e.stageX;
        this.beginY = e.stageY;
    }

    private touchend(e:egret.TouchEvent){
        this.endX = e.stageX;
        this.endY = e.stageY;

        this.touchHandle(this.beginX,this.beginY,this.endX,this.endY);
    }

    private touchHandle(beginX:number =0,beginY:number = 0,endX:number = 0,endY:number = 0){
        if(endY-beginY<-50){
            this.imgID++;
            if(this.imgID>3){
                var event:DataEvent = new DataEvent(DataEvent.GOTO_SCENE);
                event.sceneID = 3;
                Global.dispatchEvent(DataEvent.GOTO_SCENE,event);
            }
            this.outTw();
        }else if(endY-beginY>50){
            this.imgID--;
            if(this.imgID<1){
                this.imgID=1;
                return;
            }
                this.outTw();
        }
        console.log(this.imgID)
    }

    //private sceneTw(num:number){
    //    console.log(num)
    //    switch (num){
    //        case 1:
    //            this.imgID--;
    //            if(this.imgID<1){
    //                return;
    //            }
    //            this.outTw();
    //            break;
    //        case -1:
    //            this.imgID++;
    //            if(this.imgID>3){
    //                var event:DataEvent = new DataEvent(DataEvent.GOTO_SCENE);
    //                event.sceneID = 3;
    //                Global.dispatchEvent(DataEvent.GOTO_SCENE,event);
    //            }
    //            this.outTw();
    //            break;
    //    }
    //}

    private inTw(){
        egret.Tween.get(this.left).to({x:0},800,egret.Ease.backInOut);
        egret.Tween.get(this.right).to({x:this.width-this.right.width},800,egret.Ease.backInOut);
        egret.Tween.get(this.text).to({y:580,alpha:1},800,egret.Ease.sineIn);
    }

    private outTw(){
        egret.Tween.get(this.text).to({y:600,alpha:0},800,egret.Ease.sineIn);
        egret.Tween.get(this.left).to({x:-this.left.width},800,egret.Ease.backInOut);
        egret.Tween.get(this.right).to({x:this.width},800,egret.Ease.backInOut).call(
            function(){
                this.left.setBitmapByName("left"+this.imgID.toString());
                this.right.setBitmapByName("right"+this.imgID.toString());
                this.text.setBitmapByName("text"+this.imgID.toString());
                this.setHorizontalCenter(this.text);
                this.inTw();
            },this);
    }
}