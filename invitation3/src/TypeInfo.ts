/**
 * Created by cyy on 16/3/31.
 */
class TypeInfo{
    public id:number;
    public text:string;

    public constructor(obj:Object){
        this.id = parseInt(obj["id"]);
        this.text = obj["text"];
    }
}