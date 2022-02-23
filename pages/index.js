<!DOCTYPE html>
<html>

<head>
	<title>full screen iframe</title>
	<style type="text/css">
		html {
			overflow: auto;
		}
		
		html,
		body,
		div,
		iframe {
			margin: 0px;
			padding: 0px;
			height: 100%;
			border: none;
		}
		
		iframe {
			display: block;
			width: 100%;
			border: none;
			overflow-y: auto;
			overflow-x: hidden;
		}
	</style>
</head>

<body>
	<iframe src="https://docs.google.com/spreadsheets/d/12o1NoJOjsaCVyhl0XXmtQrq29oTNosyft0CGU80WBw4/edit#gid=0"
			frameborder="0"
			marginheight="0"
			marginwidth="0"
			width="100%"
			height="100%"
			scrolling="auto">
</iframe>

</body>

</html>
