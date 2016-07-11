/**
 * Created by cyy on 15/9/5.
 */
class LoadingUI extends DisplayScene {

    public constructor() {
        super();
        this.width = 640;
        this.height = 1030;
        this.createView();
        this.tw1();
    }

    private rect1:egret.Shape;
    private rect2:egret.Shape;
    private rect3:egret.Shape;
    private rect4:egret.Shape;
    private rect5:egret.Shape;
    private loadingTxt:egret.TextField;
    private createView(){
        this.width = 640;
        this.height = 1030;

        var n:number = 5;
        var rectwidth:number = 10;
        this.rect1 = new egret.Shape;
        this.rect1.graphics.beginFill(0xFFFFFF,1);
        this.rect1.graphics.drawRect(0,0,rectwidth,50);
        this.rect1.graphics.endFill();
        this.rect1.anchorOffsetX = this.rect1.width/2;
        this.rect1.anchorOffsetY = this.rect1.height/2;
        this.setHorizontalCenter(this.rect1);
        this.setVerticalCenter(this.rect1);
        this.addChild(this.rect1);

        this.rect2 = new egret.Shape;
        this.rect2.graphics.beginFill(0xFFFFFF,1);
        this.rect2.graphics.drawRect(0,0,rectwidth,50);
        this.rect2.graphics.endFill();
        this.rect2.anchorOffsetX = this.rect2.width/2;
        this.rect2.anchorOffsetY = this.rect2.height/2;
        this.setHorizontalCenter(this.rect2);
        this.setVerticalCenter(this.rect2);
        this.rect2.x = this.setHorizontalCenter(this.rect2).x - this.rect1.width - n;
        this.addChild(this.rect2);

        this.rect3 = new egret.Shape;
        this.rect3.graphics.beginFill(0xFFFFFF,1);
        this.rect3.graphics.drawRect(0,0,rectwidth,50);
        this.rect3.graphics.endFill();
        this.rect3.anchorOffsetX = this.rect3.width/2;
        this.rect3.anchorOffsetY = this.rect3.height/2;
        this.setHorizontalCenter(this.rect3);
        this.setVerticalCenter(this.rect3);
        this.rect3.x = this.setHorizontalCenter(this.rect3).x + this.rect1.width + n;
        this.addChild(this.rect3);

        this.rect4 = new egret.Shape;
        this.rect4.graphics.beginFill(0xFFFFFF,1);
        this.rect4.graphics.drawRect(0,0,rectwidth,50);
        this.rect4.graphics.endFill();
        this.rect4.anchorOffsetX = this.rect4.width/2;
        this.rect4.anchorOffsetY = this.rect4.height/2;
        this.setHorizontalCenter(this.rect4);
        this.setVerticalCenter(this.rect4);
        this.rect4.x = this.setHorizontalCenter(this.rect4).x - this.rect1.width*2 - n*2;
        this.addChild(this.rect4);

        this.rect5 = new egret.Shape;
        this.rect5.graphics.beginFill(0xFFFFFF,1);
        this.rect5.graphics.drawRect(0,0,rectwidth,50);
        this.rect5.graphics.endFill();
        this.rect5.anchorOffsetX = this.rect5.width/2;
        this.rect5.anchorOffsetY = this.rect5.height/2;
        this.setHorizontalCenter(this.rect5);
        this.setVerticalCenter(this.rect5);
        this.rect5.x = this.setHorizontalCenter(this.rect5).x + this.rect1.width*2 + n*2;
        this.addChild(this.rect5);

        this.loadingTxt = new egret.TextField;
        this.loadingTxt.text = "Loading";
        this.loadingTxt.textColor = 0xFFFFFF;
        this.loadingTxt.anchorOffsetX = this.loadingTxt.width/2;
        this.loadingTxt.anchorOffsetY = this.loadingTxt.height/2;
        this.loadingTxt.x = this.width/2;
        this.loadingTxt.y = 600;
        this.loadingTxt.size = 40;
        //this.loadingTxt.width = 180;
        this.loadingTxt.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.loadingTxt);

        this.setFullScreen();
    }

    private tw1(){
        egret.Tween.get(this.rect4,{loop:false})
            .to({scaleX:1.5,scaleY:1.5},300,egret.Ease.backIn).call(this.tw2,this)
            .to({scaleX:1,scaleY:1},300,egret.Ease.backIn);

        egret.Tween.get(this.rect4,{loop:false})
            .to({alpha:1},300)
            .to({alpha:0.3},300);
    }
    private tw2(){
        egret.Tween.get(this.rect2,{loop:false})
            .to({scaleX:1.5,scaleY:1.5},300,egret.Ease.backIn).call(this.tw3,this)
            .to({scaleX:1,scaleY:1},300,egret.Ease.backIn);

        egret.Tween.get(this.rect2,{loop:false})
            .to({alpha:1},300)
            .to({alpha:0.3},300);

    }
    private tw3(){
       egret.Tween.get(this.rect1,{loop:false})
            .to({scaleX:1.5,scaleY:1.5},300,egret.Ease.backIn).call(this.tw4,this)
            .to({scaleX:1,scaleY:1},300,egret.Ease.backIn);

        egret.Tween.get(this.rect1,{loop:false})
            .to({alpha:1},300)
            .to({alpha:0.3},300);

    }
    private tw4(){
       egret.Tween.get(this.rect3,{loop:false})
            .to({scaleX:1.5,scaleY:1.5},300,egret.Ease.backIn).call(this.tw5,this)
            .to({scaleX:1,scaleY:1},300,egret.Ease.backIn);

        egret.Tween.get(this.rect3,{loop:false})
            .to({alpha:1},300)
            .to({alpha:0.3},300);

    }
    private tw5(){
       egret.Tween.get(this.rect5,{loop:false})
            .to({scaleX:1.5,scaleY:1.5},300,egret.Ease.backIn).call(this.tw1,this)
            .to({scaleX:1,scaleY:1},300,egret.Ease.backIn);

        egret.Tween.get(this.rect5,{loop:false})
            .to({alpha:1},300)
            .to({alpha:0.3},300);

    }

    private n1:number=0;
    private n2:number =0;

    public setProgress(current, total):void {
        //显示进度
        //this.textField.text = "Loading..." + current + "/" + total;
        //var per:number = current/total * 120;//加载的比例
        //this.loadingTxt.text = per.toFixed(0)+"%";

        this.n1+=10;
        if(this.n1>70){
            this.n1 = 70;
        }
        if(total<70){
            this.n2 += Math.floor(70/total)+1;
        }else{
            this.n2++;
        }
        if(this.n2>70){
            this.n2 = 70;
        }
        this.loadingTxt.text = Math.floor(this.n1+(current/total)*100 - this.n2).toString() + "%";
        //console.log(Math.floor(this.n1+(current/total)*100 - this.n2).toString() + "%");
        this.loadingTxt.anchorOffsetX = this.loadingTxt.width/2;
        this.loadingTxt.anchorOffsetY = this.loadingTxt.height/2;
        this.loadingTxt.x = this.width/2;
    }

}
