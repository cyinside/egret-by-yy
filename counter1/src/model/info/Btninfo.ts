class Btninfo{
    public id:number;
    public type:string;
    public img:string;
    public value:number;

    public constructor(obj:any){
        this.id = parseInt(obj["id"]);
        this.type = obj["type"].toString();
        this.img = obj["img"].toString();
        this.value = parseInt(obj["value"]);
    }
}