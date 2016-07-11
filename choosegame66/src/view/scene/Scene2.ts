class Scene2 extends DisplayScene{

    private bg:BitmapDisplay;
    private progressText:egret.TextField;
    private titleText:egret.TextField;
    private answerArr:AnswerView[] = new Array();
    private questionInfo:QuestionInfo;
    private id:number = 0;
    private click:boolean = false;
    private userInfo:UserInfo;
    private answerViewTemp:AnswerView;
    //private flowerBmp:BitmapDisplay;
    private baseSorce:number = 100;
    private idNum:number = 1;

    public constructor(){
        super();
        this.initView();
    }

    private initView():void{
        this.width = 640;
        this.height = 1030;

        this.bg = new BitmapDisplay();
        this.bg.setBitmapByName("bg3");
        this.addChild(this.bg);
        this.setHorizontalCenter(this.bg);
        this.setVerticalCenter(this.bg);

        this.progressText = new egret.TextField();
        this.progressText.textColor = 0x000000;
        this.addChild(this.progressText);
        this.progressText.y = this.height * 0.06;
        this.progressText.visible = false;

        //this.flowerBmp = new BitmapDisplay();
        //this.setHorizontalCenter(this.flowerBmp);
        //this.addChild(this.flowerBmp);

        this.titleText = new egret.TextField();
        this.titleText.width = this.bg.width * 0.8;
        this.titleText.y = 450;
        this.titleText.size = 30;
        this.titleText.bold = true;
        this.titleText.textColor = 0xffffff;
        this.titleText.textAlign = egret.HorizontalAlign.CENTER;
        //this.addChild(this.titleText);
        this.titleText.alpha = 0;

        this.setbtn();
    }

    private answerView:AnswerView;
    private setbtn(){
        for(var i:number = 0; i < QuestionModel.getInstance().getAnswerNum;i++){
            this.answerView = new AnswerView(i + 1,this.idNum);
            this.addChild(this.answerView);
            this.answerArr.push(this.answerView);
            if(i == 0){
                this.answerView.x = this.width*0.25-this.answerView.width-10;
                this.answerView.y = 600;
            }else if(i == 1){
                this.answerView.x = this.width*0.5-this.answerView.width-30;
                this.answerView.y = 600;
            }else if(i == 2){
                this.answerView.x = this.width*0.75-this.answerView.width-45;
                this.answerView.y = 600;
            }else if(i == 3){
                this.answerView.x = this.width-this.answerView.width-55;
                this.answerView.y = 600;
            }

            this.answerView.touchEnabled = true;
            this.answerView.alpha = 0;
        }

        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onChooseHandler,this);
        this.setFullScreen();

    }

    public next():void{
        if(this.id < QuestionModel.getInstance().getQuestionNum){
            this.id++;
            var questionInfo:QuestionInfo = QuestionModel.getInstance().getQuestionInfo(this.id);
            this.setInfo(questionInfo);
            this.fadeIn();
        }else{
            var dataEvent:DataEvent = new DataEvent(DataEvent.GOTO_SCENE);
            dataEvent.sceneID = 3;
            this.dispatchEvent(dataEvent);
        }
    }

    private fadeIn():void{
        //egret.Tween.get(this.flowerBmp,{loop:false}).to({alpha:1},500,egret.Ease.sineInOut).call(this.fadeInComplete,this);
        egret.Tween.get(this.titleText,{loop:false}).to({alpha:1},500,egret.Ease.sineInOut).call(this.fadeInComplete,this);
        for(var i:number = 0; i < this.answerArr.length;i++){
            var answerView:AnswerView = this.answerArr[i];
            answerView.alpha = 0;

            if(i == 0 || i== 2){
                var targetY:number = 870;
                egret.Tween.get(answerView,{loop:false}).to({alpha:1,y:targetY},500,egret.Ease.sineInOut);
            }else if(i == 1 || i == 3){
                var targetY:number = 870;
                egret.Tween.get(answerView,{loop:false}).to({alpha:1,y:targetY},500,egret.Ease.sineInOut);
            }

        }
    }

    private fadeInComplete():void{
        this.click = true;
    }

    private timeOutID:number;
    private fadeOut(answerViewTemp:AnswerView):void{
        //egret.Tween.get(this.flowerBmp,{loop:false}).to({alpha:0},500,egret.Ease.sineIn);
        egret.Tween.get(this.titleText,{loop:false}).to({alpha:0},500,egret.Ease.sineIn);
        for(var i:number = 0; i < this.answerArr.length;i++){
            var answerView:AnswerView = this.answerArr[i];
            if(answerViewTemp.answerInfo.id == answerView.answerInfo.id){
                this.answerViewTemp = answerView;
                this.timeOutID = egret.setTimeout(this.fadeOut2,this,800);
            }else{
                if(i == 0 || i== 2){
                    var targetY:number = 1000;
                    egret.Tween.get(answerView,{loop:false}).to({alpha:0,y:targetY},800,egret.Ease.sineInOut);
                }else if(i == 1 || i == 3){
                    var targetY:number = 1100;
                    egret.Tween.get(answerView,{loop:false}).to({alpha:0,y:targetY},800,egret.Ease.sineInOut);
                }
                //var targetY:number = this.height * 0.3 + i * this.height*0.1 + 450;
                //egret.Tween.get(answerView,{loop:false}).to({alpha:0,y:targetY},500,egret.Ease.sineInOut);
            }
        }
        this.answerArr = [];
        this.setbtn();
    }

    private fadeOut2():void{
        egret.Tween.get(this.answerViewTemp,{loop:false}).to({alpha:0},300,egret.Ease.sineInOut).call(this.fadeOutComplete,this);
        egret.clearTimeout(this.timeOutID);
    }

    private fadeOutComplete():void{
        this.next();
    }


    private setInfo(questionInfo:QuestionInfo):void{
        this.questionInfo = questionInfo;
        this.userInfo = QuestionModel.getInstance().userInfo;
        this.setProgress();
        this.setTitle();
        this.setAnswer();
    }

    private setProgress():void{
        var textFlow:any = <Array<egret.ITextElement>>[];

        var obj1:Object = new Object();
        obj1["text"] = "测试题";
        obj1["style"] = {"textColor": 0x3a3a3a,"size":30};

        var obj2:Object = new Object();
        obj2["text"] = " 第" + this.questionInfo.id.toString() + "/" + QuestionModel.getInstance().getQuestionNum.toString() + "题";
        obj2["style"] = {"textColor": 0x3a3a3a,"size":25};

        textFlow.push(obj1,obj2);

        this.progressText.textFlow = textFlow;
        this.setHorizontalCenter(this.progressText);
    }

    private setTitle():void{
        this.titleText.text = this.questionInfo.title;
        this.setHorizontalCenter(this.titleText);
        this.bg.dispose();
        this.bg.setBitmapByName("pic_" + this.questionInfo.id.toString());
        this.setFullScreen();
    }

    private setAnswer():void{
        for(var i:number = 0; i < this.answerArr.length;i++){
            var answerView:AnswerView = this.answerArr[i];
            answerView.setInfo(this.questionInfo.answers[i]);
        }
    }

    private onChooseHandler(e:egret.TouchEvent):void{
        if(this.click == true){
            this.idNum++;
            var answerView:AnswerView = e.target;
            this.userInfo.score += answerView.answerInfo.score;
            this.click = false;
            this.fadeOut(answerView);
            console.log(this.userInfo.score);
        }
    }

    public remove():void{
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onChooseHandler,this);
    }
}