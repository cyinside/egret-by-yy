class PinyinToNum{

    public static toNumber(str:string):number{
        var id:number;
        switch(str){
            case "A":
            case "K":
            case "U":
            case "1":
                id = 1;
                break;
            case "B":
            case "L":
            case "V":
            case "2":
                id = 2;
                break;
            case "C":
            case "M":
            case "W":
            case "3":
                id = 3;
                break;
            case "D":
            case "N":
            case "Y":
            case "4":
                id = 4;
                break;
            case "E":
            case "O":
            case "X":
            case "5":
                id = 5;
                break;
            case "F":
            case "P":
            case "Z":
            case "6":
                id = 6;
                break;
            case "G":
            case "Q":
            case "7":
                id = 7;
                break;
            case "H":
            case "R":
            case "8":
                id = 8;
                break;
            case "I":
            case "S":
            case "9":
                id = 9;
                break;
            case "J":
            case "T":
            case "0":
                id = 0;
                break;
            default :
                id = 0;
                break;
        }
        return id;
    }
}