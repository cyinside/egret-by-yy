class DropInfo{
    public aspeed:number;
    public maxSpeed:number;
    public type:number;

    public static COIN:number = 1;
    public static PM25:number = 2;
    public static BOMB:number = 3;

    public static DROP_STYLE_SINGLE:number = 1;
    public static DROP_STYLE_TWO_FLANKS:number = 2;
    public static DROP_STYLE_MIDDLE:number = 3;
    public static DROP_STYLE_LEFT:number = 4;
    public static DROP_STYLE_RIGHT:number = 5;

    public constructor(obj:any){
        this.type = parseInt(obj["type"]);
        this.aspeed = parseInt(obj["aspeed"]);
        this.maxSpeed = parseInt(obj["maxSpeed"]);
    }
}