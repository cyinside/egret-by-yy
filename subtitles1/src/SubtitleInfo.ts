class SubtitleInfo{
    public id:number;
    public text:string;

    public constructor(obj:Object){
        this.id = parseInt(obj["id"]);
        this.text = obj["text"];
    }
}