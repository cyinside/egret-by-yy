var SceneUtil;
(function (SceneUtil) {
    SceneUtil.sceneArr = [];
    //初始化
    function init(container) {
        this.sceneContainer = container;
    }
    SceneUtil.init = init;
    //实例化并addChild场景,如果已实例化则不会再重新创建
    function addScene(scene, sceneClass) {
        if (!scene) {
            var className = egret.getDefinitionByName(egret.getQualifiedClassName(sceneClass));
            var newClass = new className();
            this.sceneContainer.addChild(newClass);
            scene = newClass;
            this.sceneArr.push(scene);
        }
        else {
            this.sceneContainer.addChild(scene);
        }
        return scene;
    }
    SceneUtil.addScene = addScene;
    //removeChild除target以外的场景
    function removeOtherSceneByTarget(targetScene) {
        for (var i = 0; i < this.sceneArr.length; i++) {
            var sceneTemp = this.sceneArr[i];
            if (sceneTemp != targetScene) {
                if (this.sceneContainer.contains(sceneTemp))
                    this.sceneContainer.removeChild(sceneTemp);
            }
        }
    }
    SceneUtil.removeOtherSceneByTarget = removeOtherSceneByTarget;
    function changeScene(sceneID) {
        var data = new SceneEvent(SceneEvent.CHANGE_SCENE);
        data.sceneID = sceneID;
        Global.dispatchEvent(SceneEvent.CHANGE_SCENE, data);
    }
    SceneUtil.changeScene = changeScene;
})(SceneUtil || (SceneUtil = {}));
//# sourceMappingURL=SceneUtil.js.map