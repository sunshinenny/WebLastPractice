function calc(btn) {
	//1、实现点击加减号span中的数字随着变化
	//获取btn的内容
	//获取span的内容
	//如果是加号，就把span中的内容加1
	//否则判断span的值如果>=1,则把span的值减一
	//否则，span=1
	var span = btn.parentElement.children[1];
	console.log(span);
	var n = Number(span.innerHTML); //强制类型转换成number
	n += btn.innerHTML == "+" ? 1 : n > 0 ? -1 : 0; //如果是加号 则n+1；否则（n>0时，n-1，不然n=1；
	span.innerHTML = n;

	//2、实现小计的功能
	//获取btn的父元素的上一个兄弟元素 ，把人民币符号去掉  并转化为浮点型  存到price中
	//定义变量total计算  n*price   保留两位小数
	//获取btn的父元素的下一个兄弟元素，设置其内容为 人民币符号+total
	var price = parseFloat(btn.parentNode.previousElementSibling.innerHTML.slice(1));
	var total = n * price;

	btn.parentNode.nextElementSibling.innerHTML = "&yen" + total.toFixed(2);
	//3、实现total 总计
	//获取总计所造标签td的内容 去掉人民币符号  转化为浮点数
	//"tfoot tr td:last-child" tfoot ->tr->td->last-child用来确定每一行最后一个元素的位置“就是小计”
	var tfoot_td = document.querySelector("tfoot tr td:last-child");
	//以上是红框小计
	//以下是绿框统计
	var chbs = document.querySelectorAll("input[name='adminID']");
	//遍历chbs中每个chb
	var tfoot_td = document.querySelector("tfoot tr td:last-child");
	//设置td的内容为  人民币符号  +计算total加上price保留两位小数
	//var alltotal=parseFloat(tfoot_td.innerHTML.slice(1))+(btn.innerHTML=="+"?price:(-price));
	var listTotal = document.querySelectorAll("tbody tr td:last-child");

	var alltotal = 0;
	for(var i = 0; i < listTotal.length; i++) {
		if(chbs[i].checked == true) {
			alltotal += parseFloat(listTotal[i].innerHTML.slice(1));
		}

	}
	tfoot_td.innerHTML = "&yen" + alltotal.toFixed(2);

}

function selectAll(chb) {
	//查找所有input中name为admin的所有元素，即商铺元素；
	var chbs = document.querySelectorAll("input[name='admin']");
	//查找所有input中name为adminID的所有元素，即商品元素；
	var chbs1 = document.querySelectorAll("input[name='adminID']");
	//console.dir(chbs.length);
	//遍历商铺元素，将全选按钮的状态付给商店元素
	for(var i = 0; i < chbs.length; i++) {
		chbs[i].checked = chb.checked;
	}
	//遍历商铺元素，将全选按钮的状态付给商品元素
	for(var i = 0; i < chbs1.length; i++) {
		chbs1[i].checked = chb.checked;
	}
	//以下是统计代码
	var tfoot_td = document.querySelector("tfoot tr td:last-child");
	var listTotal = document.querySelectorAll("tbody tr td:last-child");
	//每次点击该按钮重置alltotal为零；	
	var alltotal = 0;
	for(var i = 0; i < listTotal.length; i++) {
		alltotal += parseFloat(listTotal[i].innerHTML.slice(1));
	} {
		tfoot_td.innerHTML = "&yen" + alltotal.toFixed(2);
	}
	if(chb.checked == false) {
		tfoot_td.innerHTML = "&yen" + 0;
	}
}

function check(chb) {
	var chbAll = document.querySelector("table>thead>tr>th>input");
	var chbs = document.querySelectorAll("input[name='admin']"); //商铺选项
	var chbs1 = document.querySelectorAll("input[name='adminID']"); //商品

	//当该按钮状态为false,取消全选以及让后两个商品状态跟相对的商铺状态对应
	for(var i = 0; i < chbs1.length; i++) {
		if(i < 2)
			//前两个商品与第一个商铺对应
			chbs1[i].checked = chbs[0].checked;
		else
			//后两个商品与第二个商铺对应
			chbs1[i].checked = chbs[1].checked;
	}
	if(chb.checked == false) {
		chbAll.checked = false;
	}
	//按钮状态为true
	else {
		//所有商铺被选中，全选被选中
		var flag = 0;
		//简单考虑，只要存在没有被选中，更改参数，全选不被选中；
		for(var i = 0; i < chbs.length; i++) {
			if(chbs[i].checked == false) flag = 1;
		}
		if(flag == 0)
			chbAll.checked = true;
		console.dir(flag);
	}
	//总消费
	var tfoot_td = document.querySelector("tfoot tr td:last-child");
	var listTotal = document.querySelectorAll("tbody tr td:last-child");
	var alltotal = 0;
	for(var i = 0; i < chbs1.length; i++) {
		if(chbs1[i].checked == true) {
			alltotal = alltotal + parseFloat(listTotal[i].innerHTML.slice(1));
		}
	} {
		tfoot_td.innerHTML = "&yen" + alltotal.toFixed(2);
	}
}

function checkSel(chb) {
	var chbAll = document.querySelector("table>thead>tr>th>input");
	var chbs = document.querySelectorAll("input[name='admin']"); //商铺选项
	var chbs1 = document.querySelectorAll("input[name='adminID']"); //商品
	//已经全选时进行取消其他按钮操作，取消全选状态
	if(chb.checked == false) {
		chbAll.checked = false;
		for(var i = 0; i < chbs1.length; i++) {
			if(chbs1[i].checked == false) {
				if(i < 2)
					chbs[0].checked = false;
				else
					chbs[1].checked = false;
			}
		}
	}
	//单击单个按钮，他不在全选状态
	else {
		//被动全选
		var flag = 0,
			flag1 = 0,
			flag2 = 0;
		//第一商铺的选中
		for(var i = 0; i < 2; i++) {
			if(chbs1[i].checked == false) flag = 1;
		}
		if(flag == 0)
			chbs[0].checked = true;
		//第二商铺的选中
		for(var i = 2; i < 4; i++) {
			if(chbs1[i].checked == false) flag1 = 1;
		}
		if(flag1 == 0)
			chbs[1].checked = true;
		//全选的选中	
		for(var i = 0; i < chbs.length; i++) {
			if(chbs[i].checked == false) flag2 = 1;
		}
		if(flag2 == 0)
			chbAll.checked = true;
	}
	//计算总消费
	var tfoot_td = document.querySelector("tfoot tr td:last-child");
	//设置td的内容为  人民币符号  +计算total加上price保留两位小数
	//var alltotal=parseFloat(tfoot_td.innerHTML.slice(1))+(btn.innerHTML=="+"?price:(-price));
	var listTotal = document.querySelectorAll("tbody tr td:last-child");
	var alltotal = 0;
	for(var i = 0; i < chbs1.length; i++) {
		if(chbs1[i].checked == true) {
			alltotal = alltotal + parseFloat(listTotal[i].innerHTML.slice(1));
		}
	} {
		tfoot_td.innerHTML = "&yen" + alltotal.toFixed(2);
	}
}

/**
 * 以下函数为了实现折叠
 */
function toggleAll(button) {
	var tr = document.getElementsByTagName("tr");
	if(button.innerHTML == "v") {
		for(i = 1; i < 6; i++) {
			tr[i].style.display = "none";
			var temp = document.getElementById("hideAll").innerHTML = ">";
		}
	} else {
		for(i = 1; i < 6; i++) {
			tr[i].style.display = "block";
			document.getElementById("hideAll").innerHTML = "v";
		}
	}
}

function toggleShop(button, num) {
	var tr = document.getElementsByTagName("tr");
	if(button.innerHTML == "v") {
		for(i = num; i < num + 1; i++) {
			tr[i].style.display = "none";
			document.getElementById(button.id).innerHTML = ">";
		}
	} else {
		for(i = num; i < num + 1; i++) {
			tr[i].style.display = "block";
			document.getElementById(button.id).innerHTML = "v";
		}
	}
}