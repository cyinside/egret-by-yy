var RoleInfo = (function () {
    function RoleInfo(obj) {
        this.id = 0;
        this.type = 0;
        this.name = "";
        this.id = parseInt(obj["id"]);
        this.type = parseInt(obj["type"]);
        this.name = obj["name"].toString();
    }
    var d = __define,c=RoleInfo,p=c.prototype;
    return RoleInfo;
}());
egret.registerClass(RoleInfo,'RoleInfo');
//# sourceMappingURL=RoleInfo.js.map