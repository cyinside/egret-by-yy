var Coin = (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        _super.call(this);
        this.dropInfo = ConfigModel.getInstance().coinInfo;
        var id = Math.floor(Math.random() * 6 + 1);
        this.bmp = new BitmapDisplay();
        this.bmp.setBitmapByName("coin_" + id.toString());
        this.addChild(this.bmp);
        //this.drawBorder();
    }
    var d = __define,c=Coin,p=c.prototype;
    return Coin;
}(Drop));
egret.registerClass(Coin,'Coin');
//# sourceMappingURL=Coin.js.map