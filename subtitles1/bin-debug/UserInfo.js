var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var UserInfo = (function () {
    function UserInfo() {
        this.id = 0;
        //public num:string = "";
        this.free = true;
    }
    var d = __define,c=UserInfo;p=c.prototype;
    p.setInfo = function (free) {
        //this.id = id;
        this.free = free;
        //this.num = String(id).substr(1,3);
    };
    return UserInfo;
})();
egret.registerClass(UserInfo,"UserInfo");
