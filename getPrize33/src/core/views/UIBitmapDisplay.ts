class UIBitmapDisplay extends eui.Image{

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

    public load(url:string):void{
        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loader.addEventListener(egret.Event.COMPLETE,this.loadComplete,this);
        loader.load(new egret.URLRequest(url));
    }

    private loadComplete(event:egret.Event):void{
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        this.texture = <egret.Texture>loader.data;
    }

    public dispose():void{
        if(this.texture){
            var texture:egret.Texture = <egret.Texture>this.texture;
            texture.dispose();
        }
    }


    public setFullScreen():void{
        this.scaleX = this.scaleY = Math.max(GameConfig.curWidth()/this.width,GameConfig.curHeight()/this.height);
    }
}