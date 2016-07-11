var ChapterScene = (function (_super) {
    __extends(ChapterScene, _super);
    function ChapterScene() {
        _super.call(this);
        this.targetX = 0;
        this.dropArr = new Array();
        this.blowArr = new Array();
        this.smokeArr = new Array();
        this.score = 0;
        this.gameOver = false;
        this.configModel = ConfigModel.getInstance();
        this.chapterInfo = this.configModel.chapterInfo;
        this.width = 640;
        this.height = 1030;
        this.bg = new UIBitmapDisplay();
        this.bg.setBitmapByName("bg2");
        this.group.addChild(this.bg);
        this.setHorizontalCenter(this.bg);
        //this.setVerticalCenter(this.bg);
        this.bg.touchEnabled = true;
        this.role = new Role();
        this.role.setState(0);
        this.role.setTargetX(this.width * 0.5);
        this.role.setBaseY(800);
        this.role.x = this.width * 0.5;
        this.role.y = 800;
        this.group.addChild(this.role);
        this.setFullScreen();
        this.setViewRect();
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
        //this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchHandler,this);
        this.dropTimer = new egret.Timer(this.chapterInfo.coinGap);
        this.dropTimer.addEventListener(egret.TimerEvent.TIMER, this.dropTimeHandler, this);
        this.dropTimer.start();
        this.smokeTimer = new egret.Timer(200);
        this.smokeTimer.addEventListener(egret.TimerEvent.TIMER, this.smokeTimeHandler, this);
        this.smokeTimer.start();
        this.scoreText = new egret.TextField();
        this.scoreText.textColor = 0xffffff;
        this.scoreText.text = this.score.toString();
        this.scoreText.size = 30;
        this.scoreText.bold = true;
        this.scoreText.x = 50;
        this.scoreText.y = 20;
        this.group.addChild(this.scoreText);
        Global.addEventListener(MainNotify.onDeviceOrientation, this.onDeviceOrientationHandler, this);
        Global.addEventListener(ScoreEvent.ADD_SCORE, this.addScoreHandler, this);
    }
    var d = __define,c=ChapterScene,p=c.prototype;
    p.onDeviceOrientationHandler = function (e) {
        var angleX = e.param.beta;
        var angleY = e.param.gamma;
        var angleZ = e.param.alpha;
        if (angleY > 0) {
            if (this.role.dir == -1) {
                this.role.right();
            }
        }
        else {
            if (this.role.dir == 1) {
                this.role.left();
            }
        }
    };
    p.onEnterFrameHandler = function (e) {
        this.role.update();
        //this.roleMove();
        //this.smokeMove();
        this.checkBorder();
        this.dropMove();
        this.blowCheck();
    };
    p.dropTimeHandler = function (e) {
        var diffcult = 10;
        if (this.score < 20) {
            diffcult = 12;
        }
        else if (this.score < 40) {
            diffcult = 10;
        }
        else if (this.score < 80) {
            diffcult = 8;
        }
        else if (this.score < 100) {
            diffcult = 6;
        }
        else {
            diffcult = 4;
        }
        if (this.dropTimer.currentCount % diffcult != 0) {
            this.dropStyle(DropInfo.COIN);
        }
        else {
            var value = Math.floor(Math.random() * 2) + 2;
            switch (value) {
                //case DropInfo.PM25:
                //    this.dropStyle(DropInfo.PM25);
                //    break;
                case DropInfo.BOMB:
                    this.dropStyle(DropInfo.BOMB);
                    break;
            }
        }
    };
    p.smokeTimeHandler = function (e) {
        //var smoke:Smoke = new Smoke(this.role.dir);
        //if(this.role.dir == 1){
        //    smoke.x = this.role.x;
        //}else{
        //    smoke.x = this.role.x + this.role.width;
        //}
        //smoke.y = this.role.y + this.role.height * 0.7;
        //this.addChild(smoke);
        //this.smokeArr.push(smoke);
    };
    p.dropStyle = function (type) {
        var style = 0;
        var num = 0;
        switch (type) {
            case DropInfo.COIN:
                style = DropInfo.DROP_STYLE_SINGLE;
                num = 1;
                break;
            //case DropInfo.PM25:
            //    style = Math.floor(Math.random()*3 + 1);
            //    switch (style){
            //        case DropInfo.DROP_STYLE_SINGLE:
            //            num = 1;
            //            break;
            //        case DropInfo.DROP_STYLE_TWO_FLANKS:
            //            num = 2;
            //            break;
            //        case DropInfo.DROP_STYLE_MIDDLE:
            //            num = 2;
            //            break;
            //    }
            //    break;
            case DropInfo.BOMB:
                style = Math.floor(Math.random() * 5 + 1);
                switch (style) {
                    case DropInfo.DROP_STYLE_SINGLE:
                        num = 1;
                        break;
                    case DropInfo.DROP_STYLE_TWO_FLANKS:
                        num = 2;
                        break;
                    case DropInfo.DROP_STYLE_MIDDLE:
                        num = 2;
                        break;
                    case DropInfo.DROP_STYLE_LEFT:
                        num = 5;
                        break;
                    case DropInfo.DROP_STYLE_RIGHT:
                        num = 5;
                        break;
                }
                break;
        }
        this.dropNum(type, style, num);
    };
    p.dropNum = function (type, style, num) {
        var tempDropArr = new Array();
        var enemy;
        for (var i = 0; i < num; i++) {
            switch (type) {
                case DropInfo.COIN:
                    var coin = new Coin();
                    tempDropArr.push(coin);
                    this.dropArr.push(coin);
                    break;
                //case DropInfo.PM25:
                //    enemy = new Enemy(DropInfo.PM25);
                //    tempDropArr.push(enemy);
                //    this.dropArr.push(enemy);
                //    break;
                case DropInfo.BOMB:
                    enemy = new Enemy(DropInfo.BOMB);
                    tempDropArr.push(enemy);
                    this.dropArr.push(enemy);
                    break;
            }
        }
        for (var j = 0; j < tempDropArr.length; j++) {
            var drop = tempDropArr[j];
            switch (style) {
                case DropInfo.DROP_STYLE_SINGLE:
                    drop.x = Math.random() * (this.width - drop.width * 2) + drop.width * 0.5;
                    break;
                case DropInfo.DROP_STYLE_TWO_FLANKS:
                    if (j < tempDropArr.length / 2) {
                        drop.x = j * drop.width + drop.width * 0.5;
                    }
                    else {
                        drop.x = this.width - (j - (tempDropArr.length / 2 - 1)) * drop.width - drop.width * 0.5;
                    }
                    break;
                case DropInfo.DROP_STYLE_MIDDLE:
                    if (j < tempDropArr.length / 2) {
                        drop.x = this.width * 0.5 - (j + 1) * drop.width;
                    }
                    else {
                        drop.x = this.width * 0.5 + (j - (tempDropArr.length / 2 - 1)) * drop.width - drop.width;
                    }
                    break;
                case DropInfo.DROP_STYLE_LEFT:
                    drop.x = j * drop.width + drop.width;
                    drop.y = -(j * drop.height);
                    break;
                case DropInfo.DROP_STYLE_RIGHT:
                    drop.x = this.width - (j * drop.width) - drop.width * 2;
                    drop.y = -(j * drop.height);
                    break;
            }
            this.group.addChild(drop);
        }
    };
    p.dropMove = function () {
        for (var i = this.dropArr.length - 1; i >= 0; i--) {
            var drop = this.dropArr[i];
            drop.move();
            if (drop.out() && drop.markRemove == 0) {
                this.group.removeChild(drop);
                this.dropArr.splice(i, 1);
                return;
            }
            if (HitTestUtil.hitTest(this.role, drop) && drop.markRemove == 0) {
                switch (drop.dropInfo.type) {
                    case DropInfo.COIN:
                        drop.markRemove = 1;
                        egret.Tween.get(drop, { loop: false }).to({ scaleX: 0.5, scaleY: 0.5, alpha: 0.8 }, 300, egret.Ease.sineIn);
                        egret.Tween.get(drop, { loop: false }).to({ x: this.scoreText.x + 50, y: this.scoreText.y + 30 }, 400, egret.Ease.quartInOut).
                            call(this.dropRemove, drop);
                        break;
                    //case DropInfo.PM25:
                    //    this.role.setState(1);
                    //    this.removeChild(drop);
                    //    break;
                    case DropInfo.BOMB:
                        var blow = new BlowUp();
                        this.group.addChild(blow);
                        blow.x = drop.x - drop.width * 0.5;
                        blow.y = drop.y;
                        this.blowArr.push(blow);
                        this.group.removeChild(drop);
                        if (!this.gameOver) {
                            this.gameOver = true;
                        }
                        break;
                }
                this.dropArr.splice(i, 1);
                return;
            }
        }
    };
    p.dropRemove = function () {
        this.parent.removeChild(this);
        Global.dispatchEvent(ScoreEvent.ADD_SCORE);
    };
    p.smokeMove = function () {
        for (var i = this.smokeArr.length - 1; i >= 0; i--) {
            var smoke = this.smokeArr[i];
            smoke.update();
            if (smoke.remove) {
                this.group.removeChild(smoke);
                this.smokeArr.splice(i, 1);
            }
        }
    };
    p.blowCheck = function () {
        for (var i = this.blowArr.length - 1; i >= 0; i--) {
            var blow = this.blowArr[i];
            blow.update();
            if (blow.state == 2) {
                this.group.removeChild(blow);
                this.blowArr.splice(i, 1);
                this.setGameOver();
                break;
            }
        }
    };
    p.checkBorder = function () {
        if (this.role.x < 0) {
            this.role.x = 0;
            this.role.stop();
        }
        else if (this.role.x > this.width - this.role.width) {
            this.role.x = this.width - this.role.width;
            this.role.stop();
        }
    };
    p.onTouchHandler = function (e) {
        this.targetX = e.localX;
        if (this.targetX > this.role.x + this.role.width * 0.5) {
            if (this.role.dir == -1) {
                this.role.right();
            }
            this.role.clickWalk();
        }
        else if (this.targetX < this.role.x + this.role.width * 0.5) {
            if (this.role.dir == 1) {
                this.role.left();
            }
            this.role.clickWalk();
        }
        if (this.targetX < this.role.width * 0.5) {
            this.targetX = this.role.width * 0.5;
        }
        else if (this.targetX > this.width - this.role.width * 1.5) {
            this.targetX = this.width - this.role.width * 1.5;
        }
        this.role.setTargetX(this.targetX);
    };
    p.roleMove = function () {
        if (this.role.speed != 0) {
            this.role.x += this.role.speed;
            if (this.role.speed > 0) {
                if (this.role.x + this.role.width * 0.5 >= this.targetX) {
                    this.role.x = this.targetX - this.role.width * 0.5;
                    this.role.stop();
                }
            }
            else if (this.role.speed < 0) {
                if (this.role.x + this.role.width * 0.5 <= this.targetX) {
                    this.role.x = this.targetX - this.role.width * 0.5;
                    this.role.stop();
                }
            }
        }
    };
    p.addScoreHandler = function (e) {
        this.score += 1;
        //this.score = 30;
        egret.Tween.removeTweens(this.scoreText);
        egret.Tween.get(this.scoreText, { loop: false }).to({ scaleX: 1.5, scaleY: 1.5 }, 100, egret.Ease.sineInOut)
            .call(this.updateScoreText, this).to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.sineInOut);
        if (this.score > 29) {
            //egret.Tween.removeAllTweens();
            this.remove();
            ConfigModel.getInstance().Is_win = true;
            var event = new DataEvent(DataEvent.GOTO_SCENE);
            event.sceneID = 3;
            Global.dispatchEvent(DataEvent.GOTO_SCENE, event);
        }
    };
    p.updateScoreText = function () {
        this.scoreText.text = this.score.toString();
    };
    p.setGameOver = function () {
        if (this.gameOver) {
            this.configModel.roleInfo.score = this.score;
            //egret.Tween.removeAllTweens();
            this.remove();
            var event = new DataEvent(DataEvent.GOTO_SCENE);
            event.sceneID = 4;
            Global.dispatchEvent(DataEvent.GOTO_SCENE, event);
        }
    };
    p.remove = function () {
        //egret.Tween.removeAllTweens();
        while (this.dropArr.length > 0) {
            this.group.removeChild(this.dropArr[0]);
            this.dropArr.splice(0, 1);
        }
        while (this.blowArr.length > 0) {
            this.group.removeChild(this.blowArr[0]);
            this.blowArr.splice(0, 1);
        }
        while (this.dropArr.length > 0) {
            this.group.removeChild(this.dropArr[0]);
            this.dropArr.splice(0, 1);
        }
        while (this.smokeArr.length > 0) {
            this.group.removeChild(this.smokeArr[0]);
            this.smokeArr.splice(0, 1);
        }
        this.dropTimer.stop();
        this.smokeTimer.stop();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
    };
    p.reset = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
        this.dropTimer.reset();
        this.dropTimer.start();
        this.smokeTimer.reset();
        this.smokeTimer.start();
        this.score = 0;
        this.scoreText.text = "0";
        this.gameOver = false;
    };
    return ChapterScene;
}(DisplayScrollerScene));
egret.registerClass(ChapterScene,'ChapterScene');
//# sourceMappingURL=ChapterScene.js.map