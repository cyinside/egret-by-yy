/**
 * Created by cyy on 16/5/20.
 */
class BlackRcet extends DisplayScrollerScene{
    public constructor(){
        super();
        this.createScnen();
    }

    private rect:egret.Shape;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.rect = new egret.Shape;
        this.rect.graphics.beginFill(0x000000,0.6);
        this.rect.graphics.drawRect(0,0,this.width,this.height);
        this.rect.graphics.endFill();
        this.addChild(this.rect);
    }
}