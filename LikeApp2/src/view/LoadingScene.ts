class LoadingScene extends DisplayScrollerScene{
    private bg:UIBitmapDisplay;
    private loading:BitmapDisplay;

    private textField:egret.TextField;
    public constructor() {
        super();
        this.width = 640;
        this.height = 1030;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.createView();
    }

    private createView():void {
        this.bg = new UIBitmapDisplay("loadBg");
        this.group.addChild(this.bg);

        this.loading = new BitmapDisplay("loading");
        this.addChild(this.loading);
        this.setHorizontalCenter(this.loading);
        this.setVerticalCenter(this.loading);

        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 650;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";

        this.setHorizontalCenter(this.textField);

        this.setFullScreen();
        this.setViewRect();
    }

    public setProgress(current, total):void {
        this.textField.text = "Loading..." + Math.floor((current/total)*100) + "%";
        this.setHorizontalCenter(this.textField);
    }
}
