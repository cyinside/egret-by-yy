class DisplayScrollerScene extends egret.DisplayObjectContainer{

    private group:eui.Group;
    private scroller:eui.Scroller;

    public constructor(){
        super();
        this.group = new eui.Group();

        this.scroller = new eui.Scroller();
        this.scroller.viewport = this.group;
        this.addChild(this.scroller);
    }

    public setViewRect(width:number = egret.MainContext.instance.stage.stageWidth,height:number = egret.MainContext.instance.stage.stageHeight):void{
        var ua:string = navigator.userAgent.toLowerCase();
        switch (egret.Capabilities.os){
            case "iOS":
                if(ua.indexOf("iphone") != -1){
                    this.scroller.width = width * 2;
                    this.scroller.height = height * 2;
                }else if(ua.indexOf("ipad") != -1){
                    this.scroller.width = width * 2;
                    this.scroller.height = height * 0.85;
                }else{
                    this.scroller.width = width * 2;
                    this.scroller.height = height * 2;
                }
                break;
            case "Android":
            case "Windows Phone":
            case "Mac OS":
                this.scroller.width = width * 2;
                this.scroller.height = height * 2;
                break;
            case "Windows PC":
            case "Unknown":
                if(ua.indexOf("meego") != -1){
                    this.scroller.width = width * 2;
                    this.scroller.height = height * 2;
                }else{
                    this.scroller.width = width;
                    this.scroller.height = height;
                }
                break;
        }
    }

    public addChildByScroller(child: egret.DisplayObject): egret.DisplayObject{
        return this.group.addChild(child);
    }

    public setFullScreen():void{
        this.scaleX = this.scaleY = Math.max(GameConfig.curWidth()/this.width,GameConfig.curHeight()/this.height);
    }

    public setHorizontalCenter(display:egret.DisplayObject):egret.Point{
        display.x = (this.width - display.width * display.scaleX) * 0.5;
        return new egret.Point(display.x,display.y);
    }

    public setVerticalCenter(display:egret.DisplayObject):egret.Point{
        display.y = (this.height - display.height * display.scaleY) * 0.5;
        return new egret.Point(display.x,display.y);
    }
}