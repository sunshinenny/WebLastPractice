function calc(btn) {
	var check = btn.parentElement.parentElement.children[0].children[0];
	if(check.checked == true) {
		//1、实现点击加减号span中的数字随着变化
		//获取btn的内容
		//获取span的内容
		//如果是加号，就把span中的内容加1
		//否则判断span的值如果>=1,则把span的值减一
		//否则，span=1
		var span = btn.parentElement.children[1];
		var n = Number(span.innerHTML); //span.innerHTML 代表数字
		n += btn.innerHTML == "+" ? 1 : n > 0 ? -1 : 0; //btn.innerHTML 代表按钮
		span.innerHTML = n; //对改变的数字重新赋值
		/**
		 * 如果数量为0,则按钮不可点击
		 */
		var cutButton = btn.parentElement.children[0];
		if(n == 0) {
			cutButton.setAttribute("disabled", null);
		} else {
			cutButton.removeAttribute("disabled");
		}
		//2、实现小计的功能
		//获取btn的父元素的上一个兄弟元素 ，把人民币符号去掉  并转化为浮点型  存到price中
		//定义变量total计算  n*price   保留两位小数
		//获取btn的父元素的下一个兄弟元素，设置其内容为 人民币符号+total
		var price = parseFloat(btn.parentNode.previousElementSibling.innerHTML.slice(1));
		var total = n * price;
		btn.parentNode.nextElementSibling.innerHTML = "&yen" + total.toFixed(2);
		//3、实现total 总计
		//获取总计所造标签td的内容 去掉人民币符号  转化为浮点数
		var tfoot_td = document.querySelector("tfoot tr td:last-child"); //td:last-child 表示所有td标签中最后一个td元素
		//设置td的内容为  人民币符号  +计算total加上price保留两位小数
		//var alltotal=parseFloat(tfoot_td.innerHTML.slice(1))+(btn.innerHTML=="+"?price:n>1?(-price):0);
		var listCheck = document.querySelectorAll("input[name='admin']");
		var listTotal = document.querySelectorAll("tbody tr td:last-child");
		var alltotal = 0;
		for(var i = 0; i < listTotal.length; i++) {
			if(listCheck[i].checked == true) {
				alltotal += parseFloat(listTotal[i].innerHTML.slice(1));
			}
		}
		//判断满100包邮
		if(alltotal >= 100) {
			alltotal = alltotal + 0;
		} else {
			alltotal = alltotal + 15;
		}
		tfoot_td.innerHTML = "&yen" + alltotal.toFixed(2);

	}
}

function selectAll(chb) {
	//查找所有input中name为admin的所有元素，即商铺元素；
	var chbs = document.querySelectorAll("input[name='admin']");
	//遍历商铺元素，将全选按钮的状态付给商店元素
	for(var i = 0; i < chbs.length; i++) {
		chbs[i].checked = chb.checked;
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

	if(chb.checked == false) {
		chbAll.checked = false;
	}
	//按钮状态为true
	else {
		//选中商品开始计算价格
		var flag = 0;
		//简单考虑，只要存在没有被选中，更改参数，全选不被选中；
		for(var i = 0; i < chbs.length; i++) {
			if(chbs[i].checked == false) flag = 1;
		}
		if(flag == 0)
			chbAll.checked = true;
	}
	//总消费
	var tfoot_td = document.querySelector("tfoot tr td:last-child");
	var listTotal = document.querySelectorAll("tbody tr td:last-child");
	var alltotal = 0;
	for(var i = 0; i < chbs.length; i++) {
		//如果被选中的按钮为true 则计算总金额
		if(chbs[i].checked == true) {
			alltotal = alltotal + parseFloat(listTotal[i].innerHTML.slice(1));
		}

	}
	//判断满100包邮
	if(alltotal == 0) {} else {
		if(alltotal >= 100) {
			alltotal = alltotal + 0;
		} else {
			alltotal = alltotal + 15;
		}
		tfoot_td.innerHTML = "&yen" + alltotal.toFixed(2);
	}
}