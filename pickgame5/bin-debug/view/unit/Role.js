var Role = (function (_super) {
    __extends(Role, _super);
    function Role() {
        _super.call(this);
        this.speed = 0;
        this.maxSpeed = 0;
        this.state = 0; //0:normal 1:slow
        this.dir = 1;
        this.angle = 0;
        this.baseY = 0;
        this.y_speed = 0.01;
        this.easing = 0.05;
        this.targetX = 0;
        this.timeOutID = 0;
        this.configModel = ConfigModel.getInstance();
        this.roleInfo = this.configModel.roleInfo;
        this.role = new MovieClip("role_json", "role_png", "role", "walk", true);
        this.role.scaleX = this.role.scaleY = 1;
        this.role.frameRate = this.roleInfo.frameRate;
        this.addChild(this.role);
        this.buff = new RoleBuff();
        this.addChild(this.buff);
        //this.drawBorder();
    }
    var d = __define,c=Role,p=c.prototype;
    p.drawBorder = function () {
        var sp = new egret.Shape();
        var rect = this.role.getBounds();
        sp.graphics.lineStyle(3, 0xffffff);
        sp.graphics.drawRect(rect.x, rect.y, rect.width, rect.height);
        this.addChild(sp);
    };
    p.clickWalk = function () {
        //this.role.gotoAndPlay("walk");
        //this.speed += this.roleInfo.aspeed;
        //if(this.speed > this.roleInfo.maxSpeed){
        //    this.speed = this.roleInfo.maxSpeed;
        //}
        //if(this.dir == -1){
        //    this.speed*=-1;
        //}
    };
    p.orientationWalk = function () {
        this.speed += this.roleInfo.aspeed;
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if (this.dir == 1) {
            this.x += this.speed;
        }
        else {
            this.x -= this.speed;
        }
    };
    p.left = function () {
        this.role.dir(-1);
        this.dir = -1;
        this.stop();
    };
    p.right = function () {
        this.role.dir(1);
        this.dir = 1;
        this.stop();
    };
    p.stop = function () {
        this.speed = 0;
    };
    p.update = function () {
        this.role.update();
        this.orientationWalk();
        //this.updateX();
        this.updateY();
    };
    p.updateY = function () {
        this.y = this.baseY + Math.sin(this.angle) * 10;
        this.angle += this.y_speed;
    };
    p.updateX = function () {
        var dx = this.targetX - this.x;
        if (Math.abs(dx) < 1) {
            this.x = this.targetX;
        }
        else {
            var vx = dx * this.easing;
            this.x += vx;
        }
    };
    p.setTargetX = function (value) {
        this.targetX = value;
    };
    p.setBaseY = function (value) {
        this.baseY = value;
    };
    p.setState = function (state) {
        this.state = state;
        this.buff.setState(this.state);
        switch (this.state) {
            case 0:
                this.maxSpeed = this.roleInfo.maxSpeed;
                break;
            case 1:
                this.maxSpeed = this.roleInfo.slowSpeed;
                this.timeOutID = egret.setTimeout(this.slowTimeHandler, this, 10000);
                break;
        }
    };
    p.slowTimeHandler = function () {
        this.setState(0);
        egret.clearTimeout(this.timeOutID);
    };
    return Role;
}(egret.DisplayObjectContainer));
egret.registerClass(Role,'Role');
//# sourceMappingURL=Role.js.map