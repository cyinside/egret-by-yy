class ShareTipsView extends egret.DisplayObjectContainer{
    private img:BitmapDisplay;
    private contentText:egret.TextField;
    private shape:egret.Shape;

    public constructor(){
        super();
        this.initView();
    }

    private initView():void{
        this.width = 640;
        this.height = 1030;

        this.shape = new egret.Shape();
        this.shape.graphics.beginFill(0x000000,0.8);
        this.shape.graphics.drawRect(0,0,this.width,this.height);
        this.shape.graphics.endFill();
        this.addChild(this.shape);

        this.img = new BitmapDisplay();
        this.img.setBitmapByName("shareTips");
        this.addChild(this.img);
        this.img.x = 250;
        this.img.y = 20;

        this.contentText = new egret.TextField();
        this.contentText.textColor = 0xffffff;
        this.contentText.size = 35;
        this.contentText.bold = true;
        this.contentText.x = 170;
        this.contentText.y = 350;
        this.addChild(this.contentText);
    }

    public setType(type:number):void{
        if(type == 1){
            this.contentText.text = QuestionModel.getInstance().wx_share_friend;
        }else{
            this.contentText.text = QuestionModel.getInstance().wx_share_monent;
        }
    }


}