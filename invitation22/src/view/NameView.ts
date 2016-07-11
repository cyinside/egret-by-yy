/**
 * Created by cyy on 16/3/29.
 */
class NameView extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private nameTxt:egret.TextField;
    public static unameWidth:number = 0;
    private createScnen(){
        this.nameTxt = new egret.TextField;
        this.nameTxt.text = ConfigModel.getInstance().getTypeByID()+ConfigModel.getInstance().uNameTxt;
        console.log(ConfigModel.getInstance().getTypeByID());
        //NameView.unameWidth = this.nameTxt.width;
        this.nameTxt.multiline = false;

        this.addChild(this.nameTxt);
    }

    public setInfo(id:number){
        switch (id){
            case 1:
                this.nameTxt.textColor = 0x626262;
                this.nameTxt.size = 26;
                //this.nameTxt.width = NameView.unameWidth;
                this.nameTxt.anchorOffsetX = 0;
                this.nameTxt.multiline = false;
                break;
            case 2:
                this.nameTxt.textColor = 0x626262;
                this.nameTxt.size = 26;
                //this.nameTxt.width = NameView.unameWidth;
                this.nameTxt.anchorOffsetX = this.nameTxt.width/2;
                this.nameTxt.multiline = false;
                break;
            case 3:
                this.nameTxt.textColor = 0x626262;
                this.nameTxt.size = 26;
                //this.nameTxt.width = 30;
                this.nameTxt.anchorOffsetX = this.nameTxt.width;
                break;
            case 4:
                this.nameTxt.textColor = 0xffffff;
                this.nameTxt.size = 30;
                    //this.nameTxt.width = NameView.unameWidth;
                this.nameTxt.anchorOffsetX = this.nameTxt.width/2;
                this.nameTxt.multiline = false;
                break;
            case 5:
                this.nameTxt.textColor = 0xffffff;
                this.nameTxt.size = 30;
                    //this.nameTxt.width = NameView.unameWidth;
                this.nameTxt.anchorOffsetX = 0;
                this.nameTxt.multiline = false;
                break;
            case 6:
                this.nameTxt.textColor = 0xffffff;
                this.nameTxt.size = 25;
                    //this.nameTxt.width = NameView.unameWidth;
                this.nameTxt.anchorOffsetX = 0;
                this.nameTxt.multiline = false;
                break;
            case 7:
                this.nameTxt.textColor = 0xffffff;
                this.nameTxt.size = 30;
                //this.nameTxt.width = NameView.unameWidth;
                this.nameTxt.anchorOffsetX = this.nameTxt.width/2;
                this.nameTxt.multiline = false;
                break;
        }
        this.nameTxt.text = ConfigModel.getInstance().getTypeByID()+ConfigModel.getInstance().uNameTxt;
    }
}