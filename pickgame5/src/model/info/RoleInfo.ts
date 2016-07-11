class RoleInfo{
    public aspeed:number;
    public maxSpeed:number;
    public frameRate:number;
    public slowSpeed:number;

    public score:number = 0;

    public constructor(obj:any){
        this.aspeed = parseInt(obj["aspeed"]);
        this.maxSpeed = parseInt(obj["maxSpeed"]);
        this.frameRate = parseInt(obj["frameRate"]);
        this.slowSpeed = parseInt(obj["slowSpeed"]);
    }
}