 class NumberView extends egret.DisplayObjectContainer{

    private txt:egret.TextField;
    public free:boolean = true;
    public speedNum:number = 0;

    public constructor(){
        super();

        this.txt = new egret.TextField();
        this.txt.size = 30;
        this.txt.bold = true;
        //this.txt.stroke = 1;
        //this.txt.strokeColor = 0xFFFFFF;
        this.txt.bold = true;
        this.addChild(this.txt);

        this.free = true;
    }
    
    public setInfo(txt:string,free:boolean,y:number,size:number,color:number):void{
        this.txt.text = txt;
        this.free = free;
        this.txt.y = y;
        this.txt.size = size;

        switch (color){
            case 1:this.txt.textColor = 0xf58220;
                break;
            case 2:this.txt.textColor = 0x7fb80e;
                break;
            case 3:this.txt.textColor = 0x50b7c1;
                break;
            case 4:this.txt.textColor = 0xffd400;
                break;
            case 5:this.txt.textColor = 0x33a3dc;
                break;
        }
    }
}