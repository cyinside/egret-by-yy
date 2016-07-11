/**
 * Created by cyy on 16/5/26.
 */
class StartScene extends DisplayScrollerScene {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private bg:UIBitmapDisplay;
    private startBut:BitmapDisplay;
    private awardBut:BitmapDisplay;
    private awordPage:AwordPage;
    private removeBut:BitmapDisplay;
    private onAddToStage() {
        this.createScene();
    }

    private createScene() {
        this.width = 640;
        this.height = 1030;

        this.bg = new UIBitmapDisplay("bg0");
        this.group.addChild(this.bg);

        this.startBut = new BitmapDisplay("startBut");
        this.group.addChild(this.startBut);
        this.startBut.anchorOffsetX = this.startBut.width/2;
        this.startBut.anchorOffsetY = this.startBut.height/2;
        this.startBut.x = this.width/2;
        this.startBut.y = 800;
        this.startBut.touchEnabled = true;

        this.awardBut = new BitmapDisplay("awardBut");
        this.setHorizontalCenter(this.awardBut);
        this.awardBut.y = 890;
        this.awardBut.touchEnabled = true;
        this.group.addChild(this.awardBut);
        this.awardBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.getAwardData,this);

        this.awordPage = new AwordPage;

        this.removeBut = new BitmapDisplay("remove");
        this.removeBut.x = 500;
        this.removeBut.y = 30;
        this.removeBut.touchEnabled = true;
        this.removeBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.removeAw,this);

        this.setFullScreen();
        this.setViewRect();

        this.startBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.changeScene,this);

        egret.Tween.get(this.startBut,{loop:true}).to({scaleX:1.1,scaleY:1.1},500).to({rotation:10},150).to({rotation:-10},150).to({rotation:10},150).to({rotation:0},150)
            .to({scaleX:1,scaleY:1},300).wait(800);
        Global.addEventListener(DataEvent.DATACOMPLETE1,this.showAeard,this);
    }

    private changeScene(){
        SceneUtil.changeScene(2);
        this.startMusic();
    }

    private startMusic(){
        var musicDiv = document.getElementById("bgmusic");
        if(musicDiv["paused"]==true){
            musicDiv["play"]();
        }
    }

    private getAwardData(){
        DataModel.getInstance().onTouchHandle2();
    }

    private showAeard(){
        if(DataModel.awordArr[0]==null){
            this.awordPage.setPage(0);
            this.group.addChild(this.awordPage);
        }else{
            this.awordPage.setPage(1);
            this.group.addChild(this.awordPage);
            this.group.addChild(this.removeBut);
        }
        this.startBut.touchEnabled = false;
    }

    private removeAw(){
        this.group.removeChild(this.awordPage);
        if(this.contains(this.removeBut)){
            this.group.removeChild(this.removeBut);
        }
        this.startBut.touchEnabled = true;
    }
}

