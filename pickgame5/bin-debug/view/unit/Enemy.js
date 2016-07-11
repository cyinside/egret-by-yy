var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(type) {
        _super.call(this);
        this.bmp = new BitmapDisplay();
        switch (type) {
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
    var d = __define,c=Enemy,p=c.prototype;
    return Enemy;
}(Drop));
egret.registerClass(Enemy,'Enemy');
//# sourceMappingURL=Enemy.js.map