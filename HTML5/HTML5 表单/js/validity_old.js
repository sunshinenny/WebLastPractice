	//姓名长度验证
	$(".name").blur(function(){
		if($(this).val().length<3)	$(".nameError").show(1000);
				else $(".nameError").hide(1000);
	})
	//密码验证
	$(".password").blur(function(){
		if($(this).val().length<6) $(".pwdError").show(1000);
				else $(".pwdError").hide(1000);
	})
	$(".dbPassword").blur(function() {
		if($(this).val() != $(".password").val()) {
			$(".dbpwdError").show(1000);
		}
		else $(".dbpwdError").hide(1000);
	})
	//拖动滑动条显示RGB色
	var rgb='#FFFFFF';
	var r="00";
	var g="00";
	var b="00";
	$(".R").change(function(){
		//先使用parseInt将range中的value转成int型，再使用toString转成16进制值，最后赋值给rgb，再表现在界面上
		r=parseInt($(this).val()).toString(16);
		rgb="#"+r+g+b;
		$(".color").val(rgb);
	})
	$(".G").change(function(){
		g=parseInt($(this).val()).toString(16);
		rgb="#"+r+g+b;
		$(".color").val(rgb);
	})
	$(".B").change(function(){
		b=parseInt($(this).val()).toString(16);
		rgb="#"+r+g+b;
		$(".color").val(rgb);
	})