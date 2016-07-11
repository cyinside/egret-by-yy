/**
 * Created by cyy on 15/11/13.
 */
class Scene1 extends DisplayScene{
    public constructor(){
        super();
        this.getNum();
        this.createScnen();
    }

    private bg1:BitmapDisplay;
    private bmp:BitmapDisplay;
    private timeOut1:egret.Timer;
    //private luckyNum:number=0;
    public luckyNum:string="0";
    private dateTXT:egret.TextField;
    private dayTXT:egret.TextField;
    private bigDayTXT:egret.TextField;
    private cnDayTXT1:egret.TextField;
    private cnDayTXT2:egret.TextField;

    private getNum(){

        var num:number = Math.floor(Math.random() * 9+1);
        console.log(this.luckyNum);

        var key:string = "value";
        var value:string = "";

        var key1:string = "date";
        var value1:string ="";

        value = egret.localStorage.getItem(key);
        value1 = egret.localStorage.getItem(key1);
        console.log(value1);
        console.log(value);
        var nowDate = new Date();

        if(value){
            if(value1 && value1!= nowDate.toLocaleDateString()){
                this.luckyNum = num.toString();
                //return;
            }else{
                this.luckyNum = value;
            }
            //return;
        }else{
            this.luckyNum = num.toString();
        }
            value = this.luckyNum;
            egret.localStorage.setItem(key,value);


            var thisDate = new Date();
            value1 = thisDate.toLocaleDateString();
            egret.localStorage.setItem(key1,value1);

        __global.onListenHandle(this.onShowHandle);

    }

    private static date1:string = "";
    private onShowHandle(cnMonth,cnDay,gzY,gzM,gzD,cnAnimal)
    {

        Scene1.date1 = gzY+"年"+ConfigModel.getInstance().txt1+cnAnimal+"年"+ConfigModel.getInstance().txt2+gzM+"月"+gzD+"日";
    }

    public curentTime1(){
        var now = new Date();

        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日


        var clock = year + ".";

        if(month < 10)
            clock += "0";

        clock += month + ".";

        if(day < 10)
            clock += "0";

        clock += day + "";

        return(clock);
    }

    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.bg1 = new BitmapDisplay;
        this.bg1.load("resource/assets/"+this.luckyNum+".jpg");
        this.bg1.anchorOffsetX = this.width/2;
        this.bg1.anchorOffsetY = this.height/2;
        this.bg1.x = this.width/2;
        this.bg1.y = this.height/2;
        this.addChild(this.bg1);

        this.dateTXT = new egret.TextField;
        this.dateTXT.text = this.curentTime1().toString();
        this.dateTXT.size = 30;
        this.dateTXT.textColor = 0x000000;
        this.dateTXT.x = 300;
        this.dateTXT.y = 80;
        this.addChild(this.dateTXT);

        this.dayTXT = new egret.TextField;
        this.dayTXT.text = this.curentTime1().toString();
        this.dayTXT.size = 27;
        this.dayTXT.textColor = 0x000000;
        this.dayTXT.x = 480;
        this.dayTXT.y = 80;
        this.addChild(this.dayTXT);

        var nowDayTxt = new Date();
        this.bigDayTXT = new egret.TextField;
        this.bigDayTXT.text = nowDayTxt.getDate().toString();
        this.bigDayTXT.size = 270;
        this.bigDayTXT.textColor = 0x000000;
        this.bigDayTXT.x = 410;
        this.bigDayTXT.y = 400;
        this.bigDayTXT.anchorOffsetX = this.bigDayTXT.width/2;
        this.bigDayTXT.anchorOffsetY = this.bigDayTXT.height/2;
        this.addChild(this.bigDayTXT);


        this.cnDayTXT1 = new egret.TextField;
        this.cnDayTXT1.text = Scene1.date1;
        this.cnDayTXT1.textColor = 0x00000;
        this.cnDayTXT1.x = 90;
        this.cnDayTXT1.y = 280;
        this.cnDayTXT1.size = 25;
        this.cnDayTXT1.width = 10;
        this.cnDayTXT1.wordWrap = true;
        this.addChild(this.cnDayTXT1);

        var chinesedate:ChineseDate1 = new ChineseDate1;
        console.log(chinesedate.getDateToCN());
        this.cnDayTXT2 = new egret.TextField;
        this.cnDayTXT2.text = chinesedate.getDateToCN();
        this.cnDayTXT2.textColor = 0x00000;
        this.cnDayTXT2.x = 130;
        this.cnDayTXT2.y = 280;
        this.cnDayTXT2.size = 25;
        this.cnDayTXT2.width = 15;
        this.cnDayTXT2.wordWrap = true;
        this.addChild(this.cnDayTXT2);

        //this.TXT1 = new egret.TextField;
        //this.TXT1.text = "⎴";
        //this.TXT1.size = 30;
        ////this.TXT1.x = 100;
        ////this.TXT1.y = 300;
        //this.TXT1.textColor = 0x00000;
        //this.addChild(this.TXT1);

        this.setFullScreen();
        this.getNowDay();
        this.getImg();
        console.log(this.curentTime1());

        //console.log(this.cNday.getNowDay);
        //var dateT:string = "今天";
        //console.log(dateT+","+stitle.text
        //    ,ConfigModel.getInstance().wx_share_link,ConfigModel.getInstance().wx_share_img,ConfigModel.getInstance().wx_friend_desx);
    }


    private getNowDay(){
        var nowDay = new Date();
        switch (nowDay.getDay()){
            case 0:
                this.dayTXT.text = "星期天";
                break;
            case 1:
                this.dayTXT.text = "星期一";
                break;
            case 2:
                this.dayTXT.text = "星期二";
                break;
            case 3:
                this.dayTXT.text = "星期三";
                break;
            case 4:
                this.dayTXT.text = "星期四";
                break;
            case 5:
                this.dayTXT.text = "星期五";
                break;
            case 6:
                this.dayTXT.text = "星期六";
                break;
        }
    }

    private myImg:HTMLImageElement = document.createElement("img");
    private getImg(){
        var image = document.getElementById("userImg");
        this.myImg["avaliable"] = true;
        this.myImg["src"] = __global.headimgurl;
        //alert(__global.headimgurl);
        //this.myImg["src"] = "http://www.joyoungfeld-ad.com/zhaoyang/game/FingerGame1/resource/assets/logo.jpg";
        image.style.display = "none";
        image.appendChild(this.myImg);

        this.timeOut1 = new egret.Timer(500,99);                                              /*****时间******/
        this.timeOut1.addEventListener(egret.TimerEvent.TIMER,this.checkImg,this);
        this.timeOut1.start();

    }

    private checkImg(){
        if(this.myImg.complete == true) {
            this.getBitmap();
            this.timeOut1.stop()
        }
    }

    private getBitmap(){
        var texture:egret.Texture = new egret.Texture();
        texture._setBitmapData(this.myImg);

        this.bmp  = new BitmapDisplay;
        this.bmp.setBitmapByTexture(texture);
        this.bmp.scaleX = 160/this.bmp.width;
        this.bmp.scaleY = 160/this.bmp.height;
        this.bmp.anchorOffsetX = this.bmp.width/2;
        this.bmp.anchorOffsetY = this.bmp.height/2;
        this.bmp.x = 125;
        this.bmp.y = 152;
        this.addChild(this.bmp);
        //console.log(this.bmp.width*0.8+"#"+this.bmp.height*0.8);
    }
}