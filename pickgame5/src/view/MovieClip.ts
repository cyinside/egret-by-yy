class MovieClip extends egret.DisplayObjectContainer{
    private movieClip:egret.MovieClip;
    private mcDataFactory:egret.MovieClipDataFactory;
    private dataRes:any;
    private state:string = "";
    private movieClipName:string = "";
    private loop:boolean = true;

    public constructor(json:string = "",texture:string="",movieClipName:string = "",state:string="",loop:boolean = true){
        super();
        this.movieClipName = movieClipName;
        this.dataRes = RES.getRes(json);
        var textureRes = RES.getRes(texture);
        this.loop = loop;
        this.mcDataFactory = new egret.MovieClipDataFactory(this.dataRes, textureRes);
        this.movieClip = new egret.MovieClip(this.mcDataFactory.generateMovieClipData(this.movieClipName));
        this.addChild(this.movieClip);
        this.getLabelTotalFrames(this.movieClipName,"labels");
        this.gotoAndPlay(state);
    }

    public update():void
    {
        if(this.movieClip.currentFrame == this.getLabelTotalFrames(this.movieClipName,this.state)){
            this.movieClip.movieClipData = this.mcDataFactory.generateMovieClipData(this.movieClipName);
            if(this.loop){
                this.movieClip.gotoAndPlay(this.state);
            }else{
                this.stop();
            }
            this.dispatchEvent(new egret.Event(egret.Event.COMPLETE));
        }
    }

    set frameRate(frameRate:number){
        this.movieClip.frameRate = frameRate;
    }

    get currentFrame():number{
        return this.movieClip.currentFrame;
    }

    public gotoAndPlay(frame: any, playTimes?: number):void{
        this.state = frame;
        this.movieClip.gotoAndPlay(frame,playTimes);
    }

    public gotoAndStop(frame: any):void{
        this.state = frame;
        this.movieClip.gotoAndStop(frame);
    }

    public stop():void{
        this.movieClip.stop();
    }

    public play():void{
        this.movieClip.stop();
    }

    public dir(value:number):void{
        switch(value){
            case 1:
                this.movieClip.scaleX = Math.abs(this.movieClip.scaleX);
                this.movieClip.x = 0;
                break;
            case -1:
                this.movieClip.scaleX = -Math.abs(this.movieClip.scaleX);
                this.movieClip.x = this.movieClip.width;
                break;
        }
    }

    private getLabelTotalFrames(movieClipName:string,frameLabels:string):number{
        var labelsArr:Array<Object> = this.dataRes["mc"][movieClipName]["labels"];
        for(var i:number = 0;i < labelsArr.length;i++){
            var obj:Object = labelsArr[i];
            if(obj["name"] == frameLabels){
                if(i < labelsArr.length - 1){
                    return parseInt(labelsArr[i + 1]["frame"]) - parseInt(labelsArr[i]["frame"]);
                }else{
                    return this.movieClip.totalFrames - parseInt(this.dataRes["mc"][movieClipName]["frames"].length);
                }
            }
        }
        return 0;
    }

}