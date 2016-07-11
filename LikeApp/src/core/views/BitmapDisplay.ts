/**
 * Created by kevinlam on 15/6/4.
 */
class BitmapDisplay extends egret.Bitmap{

    public constructor(name:string = ""){
        super();
        if(name != "")
            this.setBitmapByName(name);
    }

    public setBitmapByName(name:string):egret.Texture {
        var texture:egret.Texture = RES.getRes(name);
        this.texture = texture;
        return <egret.Texture>this.texture;
    }

    public setBitmapByTexture(texture:egret.Texture):void{
        this.texture = texture;
    }

    public load(url:string,callBack:Function = null,thisObject: any = null):void {
        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loader.addEventListener(egret.Event.COMPLETE, (e)=> {
            loader = <egret.URLLoader> e.target;
            this.texture = <egret.Texture>loader.data;
            if (callBack && thisObject) {
                callBack.call(thisObject);
            }
        },this);
        loader.load(new egret.URLRequest(url));
    }

    public dispose():void{
        if(this.texture){
            var texture:egret.Texture = <egret.Texture>this.texture;
            texture.dispose();
        }
    }


    public setFullScreen():void {
        this.scaleX = this.scaleY = Math.max(GameConfig.curWidth()/this.width,GameConfig.curHeight()/this.height);
    }
}