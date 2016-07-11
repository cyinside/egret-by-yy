/**
 * Created by cyy on 16/6/12.
 */
class GameSeting{
    private static instance:GameSeting;

    public static passNum:number=0;
    public static chapterNum:number=5;
    public static maxTouchNum:number=5;

    public static getInstance():GameSeting{
        if(this.instance == null){
            this.instance = new GameSeting();
        }
        return this.instance;
    }

    public pointLocation(id:number){
        var config:Array<Object> = RES.getRes("config1");
        var locationArr:Array<any> = [];


        switch(id){
            case 1:
                locationArr=config["chapter_1"];
                console.log(locationArr);
                return locationArr;
                break;
            case 2:
                locationArr=config["chapter_2"];
                console.log(locationArr);
                return locationArr;
                break;
            case 3:
                locationArr=config["chapter_3"];
                console.log(locationArr);
                return locationArr;
                break;
            case 4:
                locationArr=config["chapter_4"];
                console.log(locationArr);
                return locationArr;
                break;
            case 5:
                locationArr=config["chapter_5"];
                console.log(locationArr);
                return locationArr;
                break;
            case 6:
                locationArr=[];
        }
        return locationArr;
    }

    public setCenter(obj:egret.DisplayObject,type:number){
        switch (type){
            case 0:
                obj.anchorOffsetX = obj.width/2;
                obj.anchorOffsetY = obj.height/2;
                break;
            case 1:
                obj.anchorOffsetX = obj.width/2;
                obj.anchorOffsetY = obj.height/2;
                obj.x = 640/2;
                break;
        }
    }

}