/**
 * Created by cyy on 15/10/21.
 */
class LocaionInfo {
    public id:number = 0;
    public x:number = 0;
    public y1:number = 0;
    public y2:number = 0;
    public type:number = 0;

    public constructor(obj:any) {
        this.id = parseInt(obj["id"]);
        this.x = parseInt(obj["x"]);
        this.y1 = parseInt(obj["y1"]);
        this.y2 = parseInt(obj["y2"]);
        this.type = parseInt(obj["type"]);
    }
}