/**
 * Created by cyy on 16/6/12.
 */
var GameSeting = (function () {
    function GameSeting() {
    }
    var d = __define,c=GameSeting,p=c.prototype;
    GameSeting.getInstance = function () {
        if (this.instance == null) {
            this.instance = new GameSeting();
        }
        return this.instance;
    };
    p.pointLocation = function (id) {
        var config = RES.getRes("config1");
        var locationArr = [];
        switch (id) {
            case 1:
                locationArr = config["chapter_1"];
                console.log(locationArr);
                return locationArr;
                break;
            case 2:
                locationArr = config["chapter_2"];
                console.log(locationArr);
                return locationArr;
                break;
            case 3:
                locationArr = config["chapter_3"];
                console.log(locationArr);
                return locationArr;
                break;
            case 4:
                locationArr = config["chapter_4"];
                console.log(locationArr);
                return locationArr;
                break;
            case 5:
                locationArr = config["chapter_5"];
                console.log(locationArr);
                return locationArr;
                break;
            case 6:
                locationArr = [];
        }
        return locationArr;
    };
    p.setCenter = function (obj, type) {
        switch (type) {
            case 0:
                obj.anchorOffsetX = obj.width / 2;
                obj.anchorOffsetY = obj.height / 2;
                break;
            case 1:
                obj.anchorOffsetX = obj.width / 2;
                obj.anchorOffsetY = obj.height / 2;
                obj.x = 640 / 2;
                break;
        }
    };
    GameSeting.passNum = 0;
    GameSeting.chapterNum = 5;
    GameSeting.maxTouchNum = 5;
    return GameSeting;
}());
egret.registerClass(GameSeting,'GameSeting');
//# sourceMappingURL=GameSeting.js.map