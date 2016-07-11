class AnswerInfo{
    public id:number;
    public text:string;
    public score:number;

    public constructor(obj:Object){
        this.id = parseInt(obj["id"]);
        this.text = obj["text"];
        this.score = parseInt(obj["score"]);
    }
}