class DisplayScrollerScene extends egret.DisplayObjectContainer{

    public group:eui.Group;
    private scroller:eui.Scroller;

    public constructor(){
        super();
        this.group = new eui.Group();

        this.scroller = new eui.Scroller();
        this.scroller.viewport = this.group;
        this.scroller.bounces = true;
        this.addChild(this.scroller);
    }


    public setViewRect(width:number = document.body.clientWidth,height:number = document.body.clientHeight):void{
        var ua:string = navigator.userAgent.toLowerCase();
        var value:number = 2;
        switch (egret.Capabilities.os){
            case "iOS":
                if(ua.indexOf("iphone") != -1){
                    this.scroller.width = width * value;
                    this.scroller.height = height * value;
                }else if(ua.indexOf("ipad") != -1){
                    this.scroller.width = width * value;
                    this.scroller.height = height * 0.835;
                }else{
                    this.scroller.width = width * value;
                    this.scroller.height = height * value;
                }
                break;
            case "Android":
            case "Windows Phone":
            case "Mac OS":
                this.scroller.width = width * value;
                this.scroller.height = height * value;
                break;
            case "Windows PC":
            case "Unknown":
                if(ua.indexOf("meego") != -1){
                    this.scroller.width = width * value;
                    this.scroller.height = height * value;
                }else{
                    this.scroller.width = width;
                    this.scroller.height = height;
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