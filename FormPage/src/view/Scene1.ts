/**
 * Created by cyy on 15/11/13.
 */
class Scene1 extends DisplayScrollerScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private bg1:UIBitmapDisplay;
    private book:BitmapDisplay;
    private txt:BitmapDisplay;
    private but:BitmapDisplay;
    private formPage:FormPage;
    private touchID:number =0;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.bg1 = new UIBitmapDisplay("bg");
        this.group.addChild(this.bg1);

        this.book = new BitmapDisplay;
        this.group.addChild(this.book);

        this.txt = new BitmapDisplay;
        this.txt.y = 180;
        this.group.addChild(this.txt);

        this.but = new BitmapDisplay;
        this.but.y = 800;
        this.but.touchEnabled = true;
        this.group.addChild(this.but);

        this.formPage = new FormPage;
        this.setHorizontalCenter(this.formPage);
        this.setVerticalCenter(this.formPage);
        //this.group.addChild(this.formPage);

        this.setFullScreen();
        this.setViewRect();
        Global.addEventListener(DataEvent.DATACOMPLETE,this.dataHandle,this)
    }

    private dataHandle(){
        var dataArr:Array<any> = DataModel.awordArr;
        if(dataArr.length==0){
            this.touchID = 2;
            this.book.setBitmapByName("nobook");
            this.txt.setBitmapByName("no");
            this.but.setBitmapByName("urlBut");
            this.but.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this)
        }else if(dataArr[0].aword=="book"){
            this.touchID = 1;
            this.book.setBitmapByName("isbook");
            this.txt.setBitmapByName("is");
            this.but.setBitmapByName("formBut");
            this.but.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this)
        }
        this.setHorizontalCenter(this.book);
        this.setVerticalCenter(this.book);
        this.setHorizontalCenter(this.but);
        this.setHorizontalCenter(this.txt);
    }

    private touchHandle(){
        switch (this.touchID){
            case 1:
                this.group.addChild(this.formPage);
                break;
            case 2:
                window.location.href = "http://www.joyoungfeld-ad.com/zhaoyang/game/click_game/index.html";
                break;
        }
    }

}