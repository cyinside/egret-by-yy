/**
 * Created by kevinlam on 15/6/4.
 */
class BitmapDisplay extends egret.DisplayObjectContainer{
    private bitmap:egret.Bitmap = new egret.Bitmap;
    private size_height:number;
    private size_width:number;

    public constructor(name:string = ""){
        super();
        if(name != "")
            this.setBitmapByName(name);
    }

    public setBitmapByName(name:string):void{
        this.bitmap = this.createBitmapByName(name);
        this.addChild(this.bitmap);
    }

    public createBitmapByName(name:string):egret.Bitmap {
        var texture:egret.Texture = RES.getRes(name);
        this.bitmap.texture = texture;
        return this.bitmap;
    }

    public setBitmapByTexture(texture:egret.Texture):void{
        this.bitmap.texture = texture;
        this.addChild(this.bitmap);
    }

    public load(url:string):void{
        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loader.addEventListener(egret.Event.COMPLETE,this.loadComplete,this);
        loader.load(new egret.URLRequest(url));
    }

    private loadComplete(event:egret.Event):void{
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        this.bitmap = new egret.Bitmap(loader.data);
        this.addChild(this.bitmap);
        this.bitmap.width = this.size_width;
        this.bitmap.height = this.size_height;
        Global.dispatchEvent(DataEvent.loadcomp);
    }

    public dispose():void{
        //if(this.bitmap && this.bitmap.texture)
        //    this.bitmap.texture.
    }


    public setFullScreen():void{
        this.bitmap.scaleX = this.bitmap.scaleY = Math.max(GameConfig.curWidth()/this.bitmap.width,GameConfig.curHeight()/this.bitmap.height);
    }
}