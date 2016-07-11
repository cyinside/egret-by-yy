class RoleInfo{
    public id:number = 0;
    public type:number = 0;
    public name:string = "";

    public constructor(obj:any){
        this.id = parseInt(obj["id"]);
        this.type = parseInt(obj["type"]);
        this.name = obj["name"].toString();}
}