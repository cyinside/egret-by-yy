module SceneUtil {

    export var sceneContainer:egret.DisplayObjectContainer;

    export var sceneArr:Array<egret.DisplayObjectContainer> = [];

    //初始化
    export function init(container:egret.DisplayObjectContainer):void {
        this.sceneContainer = container;
    }

    //实例化并addChild场景,如果已实例化则不会再重新创建
    export function addScene(scene:egret.DisplayObjectContainer, sceneClass:any):egret.DisplayObjectContainer {
        if (!scene) {
            var className:any = egret.getDefinitionByName(egret.getQualifiedClassName(sceneClass));
            var newClass:any = new className();
            this.sceneContainer.addChild(newClass);
            scene = newClass;
            this.sceneArr.push(scene);
        } else {
            this.sceneContainer.addChild(scene);
        }
        return <egret.DisplayObjectContainer>scene;
    }

    //removeChild除target以外的场景
    export function removeOtherSceneByTarget(targetScene:egret.DisplayObjectContainer):void {
        for (var i:number = 0; i < this.sceneArr.length; i++) {
            var sceneTemp:egret.DisplayObjectContainer = this.sceneArr[i];
            if (sceneTemp != targetScene) {
                if (this.sceneContainer.contains(sceneTemp))
                    this.sceneContainer.removeChild(sceneTemp);
            }
        }
    }

    export function changeScene(sceneID:number){
        var data:SceneEvent = new SceneEvent(SceneEvent.CHANGE_SCENE);
        data.sceneID = sceneID;
        Global.dispatchEvent(SceneEvent.CHANGE_SCENE,data);
    }
}