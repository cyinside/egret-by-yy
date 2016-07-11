class DisplayScrollerScene extends DisplayScene{

    public group:eui.Group;
    private scroller:eui.Scroller;

    public constructor(){
        super();
        this.group = new eui.Group();

        this.scroller = new eui.Scroller();
        this.scroller.viewport = this.group;
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
}