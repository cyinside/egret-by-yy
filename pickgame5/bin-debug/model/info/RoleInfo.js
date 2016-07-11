var RoleInfo = (function () {
    function RoleInfo(obj) {
        this.score = 0;
        this.aspeed = parseInt(obj["aspeed"]);
        this.maxSpeed = parseInt(obj["maxSpeed"]);
        this.frameRate = parseInt(obj["frameRate"]);
        this.slowSpeed = parseInt(obj["slowSpeed"]);
    }
    var d = __define,c=RoleInfo,p=c.prototype;
    return RoleInfo;
}());
egret.registerClass(RoleInfo,'RoleInfo');
//# sourceMappingURL=RoleInfo.js.map