//左边是备选国家存到unsel中
//右边是已选国家寻到sel中
//先把页面上两个select元素中的内容存到两个数组中，现在内存中进行操作，操作完成之后更新到页面上
//把备选国家数组数据放置到备选列表中

var unselCts = new Array("A", "B", "C", "D", "Z", "E"); //备选国家
var selCts = []; //已选国家
var unsel = document.getElementById("unsel");
updateSel(unselCts, unsel);

function updateSel(arr, sel) { //数组到列表
	sel.innerHTML = arr.length > 0 ? ("<option>" + arr.join("<\/option><option>") + "<\/option>") : "";
}

//定义移动函数
$(document).ready(function() {
	var o="sel";
	$("button").click(function() {
		var $operate = $(this).text();
		var $sel = $("#sel");
		var $unsel = $("#unsel");
		switch($operate) {
			case ">>":
				$("#unsel option").appendTo($sel);
				o="sel";
				break;
			case ">":
				$('#unsel option:selected').appendTo($sel);
				o="sel";
				break;
			case "<":
				$("#sel option:selected").appendTo($unsel);
				o="unsel";
				break;
			case "<<":
				$("#sel option").appendTo($unsel);
				o="unsel";
				break;

		}
	})
	$("button").click(function() {
		var t="#"+o;
		alert(t);
		$(t+" option").sort(function(a, b) {
			var aText = $(a).text().toUpperCase();
			var bText = $(b).text().toUpperCase();
			if(aText > bText) return 1;
			if(aText < bText) return -1;
			return 0;
		}).appendTo($(t));
	})
})