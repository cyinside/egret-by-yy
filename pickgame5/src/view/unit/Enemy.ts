class Enemy extends Drop{
    public constructor(type:number){
        super();

        this.bmp = new BitmapDisplay();
        switch (type){
            case DropInfo.BOMB:
                this.bmp.setBitmapByName("bomb");
                this.dropInfo = ConfigModel.getInstance().bombInfo;
                break;
            case DropInfo.PM25:
                this.bmp.setBitmapByName("pm25");
                this.dropInfo = ConfigModel.getInstance().pm25Info;
                break;
        }
        this.addChild(this.bmp);
        //this.drawBorder();
    }
}