class ScoreInfo{
    public id:number;
    public score:number;

    public constructor(obj:Object){
        this.id = parseInt(obj["id"]);
        this.score = parseInt(obj["score"]);
    }
}