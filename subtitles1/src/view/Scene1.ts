/**
 * Created by cyy on 15/11/13.
 */
class Scene1 extends DisplayScene{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(){
        this.createScnen();
    }

    private bg1:BitmapDisplay;
    private subtitle:NumberView;
    private subtxtArr:Array<NumberView> = [];
    private dataArr = ConfigModel.dataArr;
    private num:number = 40;
    private createScnen(){
        this.width = 1280;
        this.height = 800;

        this.bg1 = new BitmapDisplay;
        this.bg1.setBitmapByName("bg1");
        //this.bg1.touchEnabled = true;
        this.addChild(this.bg1);
        //this.bg1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.setTestNum,this);

        for(var i:number = 0;i<this.num;i++){
            this.subtitle = new NumberView;
            this.subtitle.x = this.width+this.subtitle.width;
            this.subtitle.y = 50;
            this.addChild(this.subtitle);
            this.subtxtArr.push(this.subtitle);
        }
        console.log(this.subtxtArr);

        this.setFullScreen();
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
        Global.addEventListener(DataEvent.GET_DATA,this.setStatus,this);

    }

    //private setTestNum(){
    //    //var data:DataInfo = new DataInfo;
    //    //Scene1.testNum++;
    //    //data.text = Scene1.testNum.toString();
    //    //this.dataArr.push(data);
    //    //console.log(this.dataArr);
    //    //console.log(Scene1.testNum);
    //
    //    this.setStatus();
    //}

    private setStatus(){
        for(var i:number = 0;i<this.subtxtArr.length;i++){
            var subT:NumberView;
            subT = this.subtxtArr[i];
                for(var j:number = 0;j<this.dataArr.length;j++){
                    var data:DataInfo;
                    data = this.dataArr[j];
                    if(data.read == false&&subT.free == true){
                        var yNum:number = Math.floor(Math.random() * (this.stage.stageHeight-80)+80);
                        var tSize:number = Math.floor(Math.random() * 40+30);
                        var colorNum:number = Math.floor(Math.random() * 5+1);
                        subT.speedNum = Math.floor(Math.random() * 7+3);

                        subT.setInfo(data.text,false,yNum,tSize,colorNum);
                        data.read = true;
                        return;
                    }
            }
        }
    }

    private checkNum(){
        if(this.dataArr.length>this.num) {
            var data:DataInfo;
            data = this.dataArr[0];
            this.dataArr.splice(0,1);
            data = null;
            console.log(this.dataArr);
            this.setStatus();
        }
    }

    private onEnterFrameHandler(e:egret.Event):void{
        this.subtitleIn()
    }

    private subtitleIn(){
        for(var i:number=0;i<this.subtxtArr.length;i++){
            var subT:NumberView;
            subT  = this.subtxtArr[i];
            if(subT.free==false){
                subT.x-= subT.speedNum;
                if(subT.x<-subT.width){
                    subT.x = this.width;
                    if(this.dataArr.length>this.num){
                        subT.free = true;
                        this.checkNum();
                    }
                }
            }
        }
    }

}