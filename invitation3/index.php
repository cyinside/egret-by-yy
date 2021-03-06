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
    	return $this->userinfo['avatar'];
    }
}

$testgame = new TestPhp();
$testgame->init();

?>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>保利首届生活方式展邀请函</title>
    <meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="full-screen" content="true"/>
    <meta name="screen-orientation" content="portrait"/>
    <meta name="x5-fullscreen" content="true"/>
    <meta name="360-fullscreen" content="true"/>
    <style>
        html, body {
            -ms-touch-action: none;
            background: #ffffff;
            padding: 0;
            border: 0;
            margin: 0;
            height: 100%;
        }
    </style>

    <!--这个标签为通过egret提供的第三方库的方式生成的 javascript 文件-->
    <!--modules_files_start-->
	<script egret="lib" src="libs/modules/egret/egret.min.js"></script>
	<script egret="lib" src="libs/modules/egret/egret.web.min.js"></script>
	<script egret="lib" src="libs/modules/game/game.min.js"></script>
	<script egret="lib" src="libs/modules/game/game.web.min.js"></script>
	<script egret="lib" src="libs/modules/tween/tween.min.js"></script>
	<script egret="lib" src="libs/modules/eui/eui.min.js"></script>
	<script egret="lib" src="libs/modules/res/res.min.js"></script>
	<script egret="lib" src="libs/modules/socket/socket.min.js"></script>
	<script egret="lib" src="libs/modules/weixinapi/weixinapi.min.js"></script>
	<!--modules_files_end-->

    <!--这个标签为不通过egret提供的第三方库的方式使用的 javascript 文件，请将这些文件放在libs下，但不要放在modules下面。-->
    <!--other_libs_files_start-->
    <!--other_libs_files_end-->

    <!--这个标签会被替换为项目中所有的 javascript 文件-->
    <!--game_files_start-->
	<script src="main.min.js"></script>
	<!--game_files_end-->
</head>
<body>
<div style="margin: auto;width: 100%;height: 100%;" class="egret-player"
		 data-entry-class="GameApp"
         data-orientation="auto"
         data-scale-mode="fixedNarrow"
         data-resolution-mode="retina"
         data-frame-rate="30"
         data-content-width="480"
         data-content-height="800"
         data-show-paint-rect="false"
         data-multi-fingered="2"
         data-show-fps="false" data-show-log="false"
         data-log-filter="" data-show-fps-style="x:0,y:0,size:30">
	</div>
    <img id="img1" src="" hidden>
    <img id="img2" src="" hidden>
    <audio id="bgmusic" src="resource/assets/bgmusic.mp3" loop autoplay></audio>
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








