class AnswerView extends egret.DisplayObjectContainer{
    private id:number;
    private id2:number;
    public bg:BitmapDisplay;
    private contentText:egret.TextField;
    private _answerInfo:AnswerInfo;

    public constructor(id:number,id2:number){
        super();
        this.id = id;
        this.id2 = id2;
        this.initView();
    }

    private initView():void{
        this.bg = new BitmapDisplay();
        this.bg.setBitmapByName("btn" +this.id2.toString()+ this.id.toString());
        console.log("btn" +this.id2.toString()+ this.id.toString());
        //this.bg.width = this.bg.width * 0.9;
        //this.bg.height = this.bg.height * 0.9;
        //this.bg.scaleX = 1.2;
        this.addChild(this.bg);

        this.contentText = new egret.TextField();
        this.contentText.textColor = 0xfff600;
        this.contentText.fontFamily = "黑体";
        this.contentText.lineSpacing = 4;
        this.contentText.width = 250;
        this.contentText.bold = true;
        this.contentText.size = 28;
        this.contentText.x = 35;
        this.contentText.y = 30;
        this.contentText.textAlign = egret.HorizontalAlign.CENTER;
        //this.addChild(this.contentText);
    }

    public setInfo(answerInfo:AnswerInfo):void{
        this._answerInfo = answerInfo;
        //this.contentText.text = answerInfo.text;
    }

    get answerInfo():AnswerInfo{
        return this._answerInfo;
    }

}