<?php
include 'weixin/auth.php';

class TestPhp
{
	private $userinfo;

	function __construct()
	{

	}

	function init()
	{
		session_start();
		$options = array(
        	'token'=>'xfabkyvl', //填写你设定的key
        	'appid'=>'wx88d82872d5f72c7c', //填写高级调用功能的app id, 请在微信开发模式后台查询
        	'appsecret'=>'7456dafacae9cf0adfda733758a70f84' //填写高级调用功能的密钥
        );
		$auth = new wxauth($options);
		$this->userinfo = $auth->wxuser;
		$_SESSION['uid'] = $this->userinfo['open_id'];
	}

	function getNickName()
	{
		return $this->userinfo['nickname'];
	}

	function getOpenID()
    {
    	return $this->userinfo['open_id'];
    }

	function getHeadimgurl()
    {
    	return $this->userinfo['headimgurl'];
    }
}

$testgame = new TestPhp();
$testgame->init();

?>

<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>Egret</title>
    <meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="full-screen" content="true"/>
    <meta name="screen-orientation" content="portrait"/>
    <meta name="x5-fullscreen" content="true"/>
    <meta name="360-fullscreen" content="true"/>
    <style>
        html, body {
            -ms-touch-action: none;
            background: #888888;
            padding: 0;
            border: 0;
            margin: 0;
            height: 100%;
        }
    </style>

    <!--这个标签为通过egret提供的第三方库的方式生成的 javascript 文件-->
    <!--modules_files_start-->
	<script egret="lib" src="libs/modules/egret/egret.js" src-release="libs/modules/egret/egret.min.js"></script>
	<script egret="lib" src="libs/modules/egret/egret.web.js" src-release="libs/modules/egret/egret.web.min.js"></script>
	<script egret="lib" src="libs/modules/game/game.js" src-release="libs/modules/game/game.min.js"></script>
	<script egret="lib" src="libs/modules/game/game.web.js" src-release="libs/modules/game/game.web.min.js"></script>
	<script egret="lib" src="libs/modules/tween/tween.js" src-release="libs/modules/tween/tween.min.js"></script>
	<script egret="lib" src="libs/modules/eui/eui.js" src-release="libs/modules/eui/eui.min.js"></script>
	<script egret="lib" src="libs/modules/res/res.js" src-release="libs/modules/res/res.min.js"></script>
	<script egret="lib" src="libs/modules/socket/socket.js" src-release="libs/modules/socket/socket.min.js"></script>
	<script egret="lib" src="libs/modules/weixinapi/weixinapi.js" src-release="libs/modules/weixinapi/weixinapi.min.js"></script>
	<!--modules_files_end-->

    <!--这个标签为不通过egret提供的第三方库的方式使用的 javascript 文件，请将这些文件放在libs下，但不要放在modules下面。-->
    <!--other_libs_files_start-->
    <!--other_libs_files_end-->

    <!--这个标签会被替换为项目中所有的 javascript 文件-->
    <!--game_files_start-->
	<script egret="game" src="bin-debug/GameApp.js"></script>
	<script egret="game" src="bin-debug/LoadingUI.js"></script>
	<script egret="game" src="bin-debug/Main.js"></script>
	<script egret="game" src="bin-debug/VideoExample.js"></script>
	<script egret="game" src="bin-debug/core/views/BasePanel.js"></script>
	<script egret="game" src="bin-debug/core/component/EButton.js"></script>
	<script egret="game" src="bin-debug/core/views/GameScene.js"></script>
	<script egret="game" src="bin-debug/core/utils/UtilsClass/LEvent.js"></script>
	<script egret="game" src="bin-debug/core/utils/UtilsClass/LListener.js"></script>
	<script egret="game" src="bin-debug/componentExt/VerticalTipsPanel.js"></script>
	<script egret="game" src="bin-debug/core/component/AlertPanel.js"></script>
	<script egret="game" src="bin-debug/core/component/ShareIconRender.js"></script>
	<script egret="game" src="bin-debug/core/config/GameConfig.js"></script>
	<script egret="game" src="bin-debug/componentExt/ShareIconPanel.js"></script>
	<script egret="game" src="bin-debug/core/component/EImage.js"></script>
	<script egret="game" src="bin-debug/core/component/ETabBar.js"></script>
	<script egret="game" src="bin-debug/core/component/ETextField.js"></script>
	<script egret="game" src="bin-debug/core/component/EToggleButton.js"></script>
	<script egret="game" src="bin-debug/core/component/EToggleSwitch.js"></script>
	<script egret="game" src="bin-debug/core/component/TipsManager.js"></script>
	<script egret="game" src="bin-debug/core/component/TipsPanel.js"></script>
	<script egret="game" src="bin-debug/core/data/GlobalData.js"></script>
	<script egret="game" src="bin-debug/core/data/PropertiesAnalyzer.js"></script>
	<script egret="game" src="bin-debug/core/net/Network.js"></script>
	<script egret="game" src="bin-debug/core/net/SocketManager.js"></script>
	<script egret="game" src="bin-debug/core/notification/MainNotify.js"></script>
	<script egret="game" src="bin-debug/core/utils/EffectUtils.js"></script>
	<script egret="game" src="bin-debug/core/utils/Global.js"></script>
	<script egret="game" src="bin-debug/core/utils/JSSDK.js"></script>
	<script egret="game" src="bin-debug/core/utils/NativeApi.js"></script>
	<script egret="game" src="bin-debug/core/utils/RegUtils.js"></script>
	<script egret="game" src="bin-debug/core/utils/UtilsClass/BitmapBlink.js"></script>
	<script egret="game" src="bin-debug/core/utils/md5.js"></script>
	<script egret="game" src="bin-debug/core/views/BitmapDisplay.js"></script>
	<script egret="game" src="bin-debug/core/views/DisplayScene.js"></script>
	<script egret="game" src="bin-debug/core/views/PanelManager.js"></script>
	<script egret="game" src="bin-debug/core/views/PopUpManager.js"></script>
	<script egret="game" src="bin-debug/core/views/StageUtil.js"></script>
	<script egret="game" src="bin-debug/view/GameOverPanel.js"></script>
	<script egret="game" src="bin-debug/view/GamePanel.js"></script>
	<script egret="game" src="bin-debug/view/Scene1.js"></script>
	<script egret="game" src="bin-debug/view/SharePanel.js"></script>
	<script egret="game" src="bin-debug/view/Tdcode.js"></script>
	<!--game_files_end-->
</head>
<body>
<div style="margin: auto;width: 100%;height: 100%;" class="egret-player"
		 data-entry-class="GameApp"
         data-orientation="auto"
         data-scale-mode="showAll"
         data-resolution-mode="retina"
         data-frame-rate="30"
         data-content-width="480"
         data-content-height="800"
         data-show-paint-rect="false"
         data-multi-fingered="2"
         data-show-fps="false" data-show-log="false"
         data-log-filter="" data-show-fps-style="x:0,y:0,size:30">
	</div>
    <script>
    	var nickname = '<?php echo $testgame->getNickName();?>';
    	var openID = '<?php echo $testgame->getOpenID();?>';
    	var headimgurl = '<?php echo $testgame->getHeadimgurl();?>';
    </script>
    <script>
        egret.runEgret();
    </script>
</body>
</html>
