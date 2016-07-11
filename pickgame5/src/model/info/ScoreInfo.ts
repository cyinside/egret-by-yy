class ScoreInfo{
    public id:number = 0;
    public score:number = 0;
    public title:string = "";
    public text1:string = "";
    public text2:string = "";

    public constructor(obj:any){
        this.id = parseInt(obj["id"]);
        this.score = parseInt(obj["score"]);
        this.title = obj["title"].toString();
        this.text1 = obj["text1"].toString();
        this.text2 = obj["text2"].toString();
    }
}