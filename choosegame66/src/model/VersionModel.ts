class VersionModel{
    private static instance:VersionModel;
    private _version:number;
    private _configVersion:string

    public static getInstance():VersionModel{
        if(this.instance == null){
            this.instance = new VersionModel();
        }
        return this.instance;
    }

    public static initConfig():void{
        RES.getResAsync("version", VersionModel.getInstance().parseJson, this);
    }

    private parseJson(result:Array<any>):void {
        VersionModel.getInstance()._version = parseInt(result[0]["version"]);
    }

    get version():number{
        return VersionModel.getInstance()._version;
    }


}