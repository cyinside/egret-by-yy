class ConfigModel{
    private static instance:ConfigModel;
    public static dataArr:Array<DataInfo> = new Array();

    public static getInstance():ConfigModel{
        if(this.instance == null){
            this.instance = new ConfigModel();
        }
        return this.instance;
    }

    public getMessage(){
        __global.onListenHandle(this.onShowHandle);
    }

    private onShowHandle(data) {
        var message:DataInfo = new DataInfo();
        message.text = data.message;
        ConfigModel.dataArr.push(message);

        console.log(ConfigModel.dataArr);
        if(ConfigModel.dataArr){
            Global.dispatchEvent(DataEvent.GET_DATA);
        }
    }


}