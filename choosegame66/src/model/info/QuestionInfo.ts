class QuestionInfo{
    public id:number;
    public title:string;
    public answers:AnswerInfo[] = new Array();

    public constructor(obj:Object){
        this.id = parseInt(obj["id"]);
        this.title = obj["title"];
        for (var i:number = 0; i < obj["answer"].length; i++) {
            var answerInfo:AnswerInfo = new AnswerInfo(obj["answer"][i]);
            this.answers.push(answerInfo);
        }
    }
}