window.onload = function createTable() {
    //创建表格
    var json =
        '[{"全选":"", "商铺名":"苹果旗舰店","商品名称":"iPhone X" ,"单价":"¥8000","数量":1, "小计":"¥0"},{"全选":"", "商铺名":"", "商品名称":"iPhone 8","单价":"¥5500","数量":1, "小计":"¥0"},{"全选":"", "商铺名":"小米旗舰店","商品名称":"MIX2S" ,"单价":"¥4000","数量":1, "小计":"¥0"}, {"全选":"", "商铺名":"","商品名称":"小爱" ,"单价":"¥200","数量":1, "小计":"¥0"}]';
    var emps = eval(json);
    //  console.log(emps);
    //创建table
    var table = document.createElement("table");
    //创建thead
    var thead = document.createElement("thead");
    //将thead追加到table下
    table.appendChild(thead);
    var tr = document.createElement("tr"); //创建tr
    thead.appendChild(tr); //将tr追加到thead下
    //遍历emps中第1个对象的每个属性
    for (var key in emps[0]) {
        //创建th
        var th = document.createElement("th");
        //设置th的内容为当前属性名
        th.innerHTML = key;
        tr.appendChild(th); //将th追加到tr中
    }
    //创建tbody
    var tbody = document.createElement("tbody");
    //将tbody追加到table下
    table.appendChild(tbody);
    //遍历emps中每个员工对象
    for (var i = 0; i < emps.length+1; i++) {
        //创建一个tr
        var tr = document.createElement("tr");
        //将tr追加到tbody下
        tbody.appendChild(tr);
        //遍历当前员工的每个属性
        for (var key in emps[i]) {
 
            //创建一个td
            var td = document.createElement("td");
            //将td追加到tr中
            tr.appendChild(td);
            //设置td的内容为当前属性值
            td.innerHTML = emps[i][key];
        }
    }
    //增加total
    var tfoot = document.createElement("tfoot");
    table.appendChild(tfoot);
	//tfoot增加一行
	
    tfoot.appendChild(tr);
    var td = document.createElement("td");
    td.setAttribute("colspan", 5);
    tr.appendChild(td);
    td.innerHTML = "Total:";
    var total = document.createElement("td")
    tr.appendChild(total);
    total.innerHTML = "¥0";
 
    //将table追加id为data的元素下
    document.getElementById("data")
        .appendChild(table);
 
    addItem();
 
    function addItem() {
        //增加全选按钮
        var selAll = document.querySelector("thead th:first-child");
        var selectAll = "<input type=\"checkbox\"onclick=\"selectAll(this)\">";
        var a = "全选";
        selAll.innerHTML = selectAll + a;
        //加入店铺的选择按钮     
        var firstShopSelAll = document.querySelectorAll("tbody tr td:nth-child(2)");
        var addSelButton = "<input type=\"checkbox\"onclick=\"check(this)\" name=\"admin\">";
        for (var i = 0; i < firstShopSelAll.length; i++) {
            if (i % 2 == 1 || i == firstShopSelAll.length - 1) continue;
            var value = firstShopSelAll[i].innerHTML;
            firstShopSelAll[i].innerHTML = addSelButton + value;
        }
        //加入物品的选择按钮     
        var thirdGoods = document.querySelectorAll("tbody tr td:nth-child(3)");
        var addGoodsButton = "<input type=\"checkbox\"onclick=\"checkSel(this)\" name=\"adminID\">";
        for (var i = 0; i < thirdGoods.length; i++) {
            //          if(i==thirdGoods.length-1) continue;
            var value = thirdGoods[i].innerHTML;
            thirdGoods[i].innerHTML = addGoodsButton + value;
        }
        // 增加数量选择的按钮    
        var nums = document.querySelectorAll("tbody tr td:nth-child(5)");
		var smallTotal=document.querySelectorAll("tbody tr td:nth-child(6)");
		var price=document.querySelectorAll("tbody tr td:nth-child(4)");
		for(var p=0;p<nums.length;p++){
			var st=Number(nums[p].innerHTML)*Number(price[p].innerHTML.slice(1));
			smallTotal[p].innerHTML="&yen;"+st;
		}

        var addCutButton = "<button onclick=\"calc(this)\">-</button>";
        var addAddButton = "<button onclick=\"calc(this)\">+</button>";
 
        for (var i = 0; i < nums.length; i++) {
            //          if(i==nums.length-1) continue;
            var numbers = nums[i].innerText;
            var spanNums = "<span>" + numbers + "</span>";
            nums[i].innerHTML = addCutButton + spanNums + addAddButton;
        }

		
		//结束
 
    }
}
 
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
    //获取btn的父元素的上一个兄弟元素 ，把人民币符号去掉  并转化为浮点型  存到price中
    //定义变量total计算  n*price   保留两位小数
    //获取btn的父元素的下一个兄弟元素，设置其内容为 人民币符号+total
    var price = parseFloat(btn.parentNode.previousElementSibling.innerHTML.slice(1));
    var total = n * price;
 
    btn.parentNode.nextElementSibling.innerHTML = "¥" + total.toFixed(2);
    //3、实现total 总计
    //获取总计所造标签td的内容 去掉人民币符号  转化为浮点数
    //"tfoot tr td:last-child" tfoot ->tr->td->last-child用来确定每一行最后一个元素的位置“就是小计”
    var tfoot_td = document.querySelector("tfoot tr td:last-child");
    //以上是红框小计
    //以下是绿框统计
    var chbs = document.querySelectorAll("input[name='adminID']");
    //遍历chbs中每个chb
    var tfoot_td = document.querySelector("tfoot tr td:last-child");
    //设置td的内容为  人民币符号  +计算total加上price保留两位小数
    //var alltotal=parseFloat(tfoot_td.innerHTML.slice(1))+(btn.innerHTML=="+"?price:(-price));
    var listTotal = document.querySelectorAll("tbody tr td:last-child");
 
    var alltotal = 0;
    for (var i = 0; i < listTotal.length; i++) {
        if (chbs[i].checked == true) {
            alltotal += parseFloat(listTotal[i].innerHTML.slice(1));
        }
 
    }
    tfoot_td.innerHTML = "¥" + alltotal.toFixed(2);
 
 
}
 
 
function selectAll(chb) {
    //查找所有input中name为admin的所有元素，即商铺元素；
    var chbs = document.querySelectorAll("input[name='admin']");
    //查找所有input中name为adminID的所有元素，即商品元素；
    var chbs1 = document.querySelectorAll("input[name='adminID']");
    //console.dir(chbs.length);
    //遍历商铺元素，将全选按钮的状态付给商店元素
    for (var i = 0; i < chbs.length; i++) {
        chbs[i].checked = chb.checked;
    }
    //遍历商铺元素，将全选按钮的状态付给商品元素
    for (var i = 0; i < chbs1.length; i++) {
        chbs1[i].checked = chb.checked;
    }
    //以下是统计代码
    var tfoot_td = document.querySelector("tfoot tr td:last-child");
    var listTotal = document.querySelectorAll("tbody tr td:last-child");
    //每次点击该按钮重置alltotal为零；  
    var alltotal = 0;
    for (var i = 0; i < listTotal.length; i++) {
        alltotal += parseFloat(listTotal[i].innerHTML.slice(1));
    } {
        tfoot_td.innerHTML = "¥" + alltotal.toFixed(2);
    }
    if (chb.checked == false) {
        tfoot_td.innerHTML = "¥" + 0;
    }
}
 
 
function check(chb) {
    var chbAll = document.querySelector("table>thead>tr>th>input");
    var chbs = document.querySelectorAll("input[name='admin']"); //商铺选项
    var chbs1 = document.querySelectorAll("input[name='adminID']"); //商品
 
    //当该按钮状态为false,取消全选以及让后两个商品状态跟相对的商铺状态对应
    for (var i = 0; i < chbs1.length; i++) {
        if (i < 2)
        //前两个商品与第一个商铺对应
            chbs1[i].checked = chbs[0].checked;
        else
        //后两个商品与第二个商铺对应
            chbs1[i].checked = chbs[1].checked;
    }
    if (chb.checked == false) {
        chbAll.checked = false;
    }
    //按钮状态为true
    else {
        //所有商铺被选中，全选被选中
        var flag = 0;
        //简单考虑，只要存在没有被选中，更改参数，全选不被选中；
        for (var i = 0; i < chbs.length; i++) {
            if (chbs[i].checked == false) flag = 1;
        }
        if (flag == 0)
            chbAll.checked = true;
        console.dir(flag);
    }
    //总消费
    var tfoot_td = document.querySelector("tfoot tr td:last-child");
    var listTotal = document.querySelectorAll("tbody tr td:last-child");
    var alltotal = 0;
    for (var i = 0; i < chbs1.length; i++) {
        if (chbs1[i].checked == true) {
            alltotal = alltotal + parseFloat(listTotal[i].innerHTML.slice(1));
        }
    } {
        tfoot_td.innerHTML = "¥" + alltotal.toFixed(2);
    }
}
 
 
function checkSel(chb) {
    var chbAll = document.querySelector("table>thead>tr>th>input");
    var chbs = document.querySelectorAll("input[name='admin']"); //商铺选项
    var chbs1 = document.querySelectorAll("input[name='adminID']"); //商品
    //已经全选时进行取消其他按钮操作，取消全选状态
    if (chb.checked == false) {
        chbAll.checked = false;
        for (var i = 0; i < chbs1.length; i++) {
            if (chbs1[i].checked == false) {
                if (i < 2)
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
        for (var i = 0; i < 2; i++) {
            if (chbs1[i].checked == false) flag = 1;
        }
        if (flag == 0)
            chbs[0].checked = true;
        //第二商铺的选中
        for (var i = 2; i < 4; i++) {
            if (chbs1[i].checked == false) flag1 = 1;
        }
        if (flag1 == 0)
            chbs[1].checked = true;
        //全选的选中 
        for (var i = 0; i < chbs.length; i++) {
            if (chbs[i].checked == false) flag2 = 1;
        }
        if (flag2 == 0)
            chbAll.checked = true;
    }
    //计算总消费
    var tfoot_td = document.querySelector("tfoot tr td:last-child");
    //设置td的内容为  人民币符号  +计算total加上price保留两位小数
    //var alltotal=parseFloat(tfoot_td.innerHTML.slice(1))+(btn.innerHTML=="+"?price:(-price));
    var listTotal = document.querySelectorAll("tbody tr td:last-child");
    var alltotal = 0;
    for (var i = 0; i < chbs1.length; i++) {
        if (chbs1[i].checked == true) {
            alltotal = alltotal + parseFloat(listTotal[i].innerHTML.slice(1));
        }
    } {
        tfoot_td.innerHTML = "¥" + alltotal.toFixed(2);
    }
}