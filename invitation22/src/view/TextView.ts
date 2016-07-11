/**
 * Created by cyy on 16/3/29.
 */
class TextView extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private noText:egret.TextField;
    private butText:egret.TextField;
    private noTxtCont:egret.TextField;
    private butTxtCont:egret.TextField;
    private createScnen() {
        this.noText = new egret.TextField;
        this.addChild(this.noText);

        this.noTxtCont = new egret.TextField;
        this.noTxtCont.y = 40;
        this.addChild(this.noTxtCont);

        this.butText = new egret.TextField;
        this.butText.y = 80;
        this.addChild(this.butText);

        this.butTxtCont = new egret.TextField;
        this.butTxtCont.y = 120;
        this.addChild(this.butTxtCont);

        this.noText.text = "不是";
        this.butText.text = "而是";
        this.noTxtCont.text = ConfigModel.getInstance().noTxt;
        this.butTxtCont.text = ConfigModel.getInstance().butTxt;
    }

    public setInfo(id:number){
        switch (id){
            case 1:
                this.butText.textColor =this.noText.textColor =this.noTxtCont.textColor =this.butTxtCont.textColor = 0x5166a1;
                this.noText.size = this.butText.size = 30;
                this.butTxtCont.size = this.noTxtCont.size = 26;
                this.noText.anchorOffsetX = this.noText.width/2;
                this.butText.anchorOffsetX = this.butText.width/2;
                this.noTxtCont.anchorOffsetX = this.noTxtCont.width/2;
                this.butTxtCont.anchorOffsetX = this.butTxtCont.width/2;

                this.noText.x = this.butText.x = this.noTxtCont.x = this.butTxtCont.x = this.width/2;
                break;
            case 2:
                this.butText.textColor =this.noText.textColor =this.noTxtCont.textColor =this.butTxtCont.textColor = 0x00436d;
                this.noText.size = this.butText.size = 40;
                this.noText.anchorOffsetX = this.butText.anchorOffsetX = this.noTxtCont.anchorOffsetX = this.butTxtCont.anchorOffsetX = 0;
                this.noText.x = this.butText.x = this.noTxtCont.x = this.butTxtCont.x = 0;
                break;
            case 3:
                this.butText.textColor =this.noText.textColor =this.noTxtCont.textColor =this.butTxtCont.textColor = 0x578633;
                this.noText.size = this.butText.size = 40;
                this.noText.anchorOffsetX = this.butText.anchorOffsetX = this.noTxtCont.anchorOffsetX = this.butTxtCont.anchorOffsetX = 0;
                this.noText.x = this.butText.x = this.noTxtCont.x = this.butTxtCont.x = 0;
                break;
            case 4:
                this.butText.textColor =this.noText.textColor =this.noTxtCont.textColor =this.butTxtCont.textColor = 0xffaaf;
                this.noText.size = this.butText.size = 40;
                this.noText.anchorOffsetX = this.butText.anchorOffsetX = this.noTxtCont.anchorOffsetX = this.butTxtCont.anchorOffsetX = 0;
                this.noText.x = this.butText.x = this.noTxtCont.x = this.butTxtCont.x = 0;
                break;
            case 5:
                this.butText.textColor =this.noText.textColor =this.noTxtCont.textColor =this.butTxtCont.textColor = 0xffffff;
                this.noText.size = this.butText.size = 40;
                this.noText.anchorOffsetX = this.butText.anchorOffsetX = this.noTxtCont.anchorOffsetX = this.butTxtCont.anchorOffsetX = 0;
                this.noText.x = this.butText.x = this.noTxtCont.x = this.butTxtCont.x = 0;
                break;
            case 6:
                this.butText.textColor =this.noText.textColor =this.noTxtCont.textColor =this.butTxtCont.textColor = 0xffffff;
                this.noText.size = this.butText.size = 40;
                this.noText.anchorOffsetX = this.butText.anchorOffsetX = this.noTxtCont.anchorOffsetX = this.butTxtCont.anchorOffsetX = 0;
                this.noText.x = this.butText.x = this.noTxtCont.x = this.butTxtCont.x = 0;
                break;
            case 7:
                this.butText.textColor =this.noText.textColor =this.noTxtCont.textColor =this.butTxtCont.textColor = 0xffffff;
                this.noText.size = this.butText.size = 40;
                this.noText.anchorOffsetX = this.butText.anchorOffsetX = this.noTxtCont.anchorOffsetX = this.butTxtCont.anchorOffsetX = 0;
                this.noText.x = this.butText.x = this.noTxtCont.x = this.butTxtCont.x = 0;
                break;
        }
        this.noTxtCont.text = ConfigModel.getInstance().noTxt;
        this.butTxtCont.text = ConfigModel.getInstance().butTxt;
    }
}