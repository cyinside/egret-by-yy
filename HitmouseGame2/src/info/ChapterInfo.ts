class ChapterInfo{
    public coinGap:number;

    public constructor(obj:any){
        this.coinGap = parseInt(obj["coinGap"]);
    }
}