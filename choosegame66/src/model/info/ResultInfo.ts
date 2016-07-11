class ResultInfo{
    public id:number;
    public title1:string;
    public title2:string;
    public text:string;

    public constructor(obj:Object){
        this.id = parseInt(obj["id"]);
        this.title1 = obj["title1"];
        this.title2 = obj["title2"];
        this.text = obj["text"];
    }
}