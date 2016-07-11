class Coin extends Drop{
    public constructor(){
        super();

        this.dropInfo = ConfigModel.getInstance().coinInfo;

        var id:number = Math.floor(Math.random()*6+1);
        this.bmp = new BitmapDisplay();
        this.bmp.setBitmapByName("coin_" + id.toString());
        this.addChild(this.bmp);

        //this.drawBorder();
    }

}