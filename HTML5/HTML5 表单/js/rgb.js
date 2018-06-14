//拖动滑动条显示RGB色
var rgb = '#FFFFFF';
var r = "00";
var g = "00";
var b = "00";
$(".R").change(function() {
	//先使用parseInt将range中的value转成int型，再使用toString转成16进制值，最后赋值给rgb，再表现在界面上
	r = parseInt($(this).val()).toString(16);
	rgb = "#" + r + g + b;
	$(".color").val(rgb);
	$(".colorValue").text(rgb);
})
$(".G").change(function() {
	g = parseInt($(this).val()).toString(16);
	rgb = "#" + r + g + b;
	$(".color").val(rgb);
	$(".colorValue").text(rgb);
})
$(".B").change(function() {
	b = parseInt($(this).val()).toString(16);
	rgb = "#" + r + g + b;
	$(".color").val(rgb);
	$(".colorValue").text(rgb);
})