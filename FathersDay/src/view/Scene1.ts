class Scene1 extends DisplayScrollerScene{
    public constructor(){
        super();
        this.createScnen();
    }

    private bg1:UIBitmapDisplay;
    private forward:ForWardView;
    private txt:BitmapDisplay;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("p1");
        this.group.addChild(this.bg1);

        this.txt = new BitmapDisplay("1");
        this.setHorizontalCenter(this.txt);
        this.txt.y = 500;
        this.txt.alpha =0;
        this.group.addChild(this.txt);

        this.forward = new ForWardView();
        this.setHorizontalCenter(this.forward);
        this.forward.y = 920;
        this.group.addChild(this.forward);

        this.setFullScreen();
        this.setViewRect();
        this.addTransformation(1,this.sceneTw,this);
    }

    public twInt(){
        this.alpha =0;
        this.y =0;
        this.txt.alpha =0;
        egret.Tween.get(this).to({alpha:1},400).wait(300).call(function(){
            this.txt.alpha =0;
            egret.Tween.get(this.txt).to({alpha:1},1000);});
    }

    private sceneTw(num:number){
        switch (num){
            case -1:
                this.startMusic();
                egret.Tween.get(this).to({y:-this.height,alpha:0},500,egret.Ease.sineIn).call(this.changePage,this);
        }
    }

    private startMusic(){
        var musicDiv = document.getElementById("bgmusic");
        if(musicDiv["paused"]==true){
            musicDiv["play"]();
        }
    }

    public changePage(){
        SceneUtil.changeScene(2);
    }
}