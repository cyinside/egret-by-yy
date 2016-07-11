class ScoreInfo{
    public id:number = 0;
    public score:number = 0;
    public title:string = "";
    public text:string = "";

    public constructor(obj:any){
        this.id = parseInt(obj["id"]);
        this.score = parseInt(obj["score"]);
        this.title = obj["title"].toString();
        this.text = obj["text"].toString();
    }
}