/**
 * Created by cyy on 16/1/27.
 */
class ChineseDate1 extends DisplayScene {
    public constructor() {
        super();
    }

     public getDateToCN(){
         var myDate = new Date();
         var nowDay:number = myDate.getDate();
         var nowMouth:number = myDate.getMonth();

         var cnDate:string = this.getMouth(nowMouth+1)+"月"+this.getDay(nowDay)+"日";

         return cnDate;
     }

    public getMouth(mouth){
        switch (mouth){
            case 1:
                return "一";
            break;
            case 2:
                return "二";
            break;
            case 3:
                return "三";
            break;
            case 4:
                return "四";
            break;
            case 5:
                return "五";
            break;
            case 6:
                return "六";
            break;
            case 7:
                return "七";
            break;
            case 8:
                return "八";
            break;
            case 9:
                return "九";
            break;
            case 10:
                return "十";
            break;
            case 11:
                return "十一";
            break;
            case 12:
                return "十二";
            break;
        }
    }

    private getDay(day){
        switch (day){
            case 1:
                return "一";
                break;
            case 2:
                return "二";
                break;
            case 3:
                return "三";
                break;
            case 4:
                return "四";
                break;
            case 5:
                return "五";
                break;
            case 6:
                return "六";
                break;
            case 7:
                return "七";
                break;
            case 8:
                return "八";
                break;
            case 9:
                return "九";
                break;
            case 10:
                return "十";
                break;
            case 11:
                return "十一";
                break;
            case 12:
                return "十二";
                break;
            case 13:
                return "十三";
                break;
            case 14:
                return "十四";
                break;
            case 15:
                return "十五";
                break;
            case 16:
                return "十六";
                break;
            case 17:
                return "十七";
                break;
            case 18:
                return "十八";
                break;
            case 19:
                return "十九";
                break;
            case 20:
                return "二十";
                break;
            case 21:
                return "廿一";
                break;
            case 22:
                return "廿二";
                break;
            case 23:
                return "廿三";
                break;
            case 24:
                return "廿四";
                break;
            case 25:
                return "廿五";
                break;
            case 26:
                return "廿六";
                break;
            case 27:
                return "廿七";
                break;
            case 28:
                return "廿八";
                break;
            case 29:
                return "廿九";
                break;
            case 30:
                return "三十";
                break;
            case 31:
                return "三十一";
                break;
        }
    }
}
