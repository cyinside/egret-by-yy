class DisplayScrollerScene extends egret.DisplayObjectContainer{

    public group:eui.Group;
    public scroller:eui.Scroller;

    public constructor(){
        super();
        this.group = new eui.Group();

        this.scroller = new eui.Scroller();
        this.scroller.viewport = this.group;
        this.addChild(this.scroller);
    }

    public setViewRect(width:number = document.documentElement.clientWidth,height:number = document.documentElement.clientHeight):void{
        var ua:string = navigator.userAgent.toLowerCase();
        switch (egret.Capabilities.os){
            case "iOS":
                if(ua.indexOf("ipad") != -1){
                    this.scroller.width = width * 2;
                    this.scroller.height = height * 0.85;
                }else{
                    if(height < this.height/2){
                        this.scroller.height = height * 2;
                        this.scroller.width = width * 2;
                    }else{
                        this.scroller.height = this.height;
                        this.scroller.width = this.width;
                    }
                }
                break;
            case "Android":
            case "Windows Phone":
            case "Mac OS":
                if(height < this.height/2){
                    this.scroller.height = height * 2;
                    this.scroller.width = width * 2;
                }else{
                    this.scroller.height = this.height;
                    this.scroller.width = this.width;
                }
                break;
            case "Windows PC":
            case "Unknown":
                if(height < this.height/2){
                    this.scroller.height = height * 2;
                    this.scroller.width = width * 2;
                }else{
                    this.scroller.height = this.height;
                    this.scroller.width = this.width;
                }
                break;
        }
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