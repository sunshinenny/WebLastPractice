window.onload=function chh(){//初始化total
		var total=document.getElementById('total');
		var chooseBox=document.getElementsByTagName('input');
		//默认是全选状态
		for(var q=0;q<7;q++){//一共只有4个input
			chooseBox[q].checked=false;
		}
		//重置total
		calcAll();
	}
	function calc(btn){//计算单个产品的总价值
		//进行数量和单个商品总价的计算
		//找到按钮的父节点->上一个兄弟节点
		var goodMoney=Number(btn.parentElement.previousElementSibling.innerHTML.slice(1));
		//商品的数量
		var goodNums;
		//判断按钮动作，进而确定读取哪一个兄弟节点的数据
		if(btn.innerText=='-'){
			goodNums=Number(btn.nextElementSibling.innerHTML)
			if(goodNums>0){
				goodNums--;
				btn.nextElementSibling.innerText=goodNums;
			}
		}
		if(btn.innerText=='+'){
			goodNums=Number(btn.previousElementSibling.innerHTML)+1;
			btn.previousElementSibling.innerText=goodNums;
		}
		//计算该商品的总价值
		var calcMoney=goodMoney*goodNums;
		//写入小计中
		btn.parentElement.nextElementSibling.innerHTML='¥'+calcMoney;
		//重置total
		calcAll();
		
	}
	function calcAll(){//计算total
		//获取标签名为td的标签，并存入名字为td的数组中
		var td=document.getElementsByTagName('td');
		//通过id获取total的位置
		var total=document.getElementById('total');
		//获取标签名为input的标签，并存入名字为choose的数组中	
		var choose=document.getElementsByTagName('input');
		//定义一个拥有7个长度的数组
		var k=new Array(7);
		//通过循环改变k的值，用于总值的计算
		for(var p=2;p<7;p++){
			//p=4时，为商店全选按钮，故跳过，不跳过也没有影响
			if(p==4) continue;
			//如果被选中，则k=1
			if(choose[p].checked==true)	k[p]=1;
			//如果没有选中，则k=0
			else k[p]=0;
		}
		//将指定td中的字符串截取后转为数字，并与系数k进行计算，通过相加的办法得到total的值
		var i=Number(td[5].innerHTML.slice(1))*k[2]+Number(td[11].innerHTML.slice(1))*k[3]+Number(td[17].innerHTML.slice(1))*k[5]+Number(td[23].innerHTML.slice(1))*k[6];
		//写入total
		total.innerHTML='¥'+i;
	}
	
//下面是有关checkBox的操作

	function selectAll(box){//全选
	//获取标签名为input的标签，并存入名字为i的数组中
	var i=document.getElementsByTagName('input');
	//通过循环，一次赋值
		for(var j=1;j<7;j++)
		//将i[j]的值设定为传参而来的box的值，目的是快捷
			i[j].checked=box.checked;
}

	function checkSel(box,shopNum){//当勾选按钮时，判断需不需要勾选“全选”
		//获取标签名为input的标签，并存入名字为i的数组中
		var i=document.getElementsByTagName('input');
		//判断单独店铺需不需要勾选“全选”
		selCheck(shopNum);
		//以下为总全选按钮的判断
		//定义计数器js，目的是在仅仅勾选一个按钮的时候，可以进行判断是否需要勾选“总全选”
		//定义判断条件flag，flag=1时，为全选
		var js=0; 
		var flag=1;
		//通过循环改变计数器&flag
		for(var j=1;j<7;j++){
				//从1变成0，表示没有全选
				if(i[j].checked==false)	flag=0;
				else js++;
			}
		//如果js=6，则全部按钮都被选中，则勾选总全选按钮
		if(js==6) i[0].checked=true;
		//双重保险
		if(flag==1) i[0].checked=true;
		//如果不符合条件，则把“总全选”设为false
		else i[0].checked=false;
		//重置total
		calcAll();
	}
	
	function selCheck(shopNum){//检查商店的物品是否全选//shopNum是此商店所在的input按钮的位置
		//获取标签名为input的标签，并存入名字为inputTag的数组中
		var inputTag=document.getElementsByTagName('input');
		//shopNum+1 & shopNum+2 为商店中的两个商品
		//如果商品数目多于两个，用循环判断是否相同，并加一个flag用以判断
		if(inputTag[shopNum+1].checked==inputTag[shopNum+2].checked){
			//如果相同，设置成第一个商品的属性
			//如果两个商品都是true，那么商店全选肯定就是true。都是false，则一定是false
			inputTag[shopNum].checked=inputTag[shopNum+1].checked;
		}
		//如果不相同，一定为false
		else inputTag[shopNum].checked=false;
	}	
	
function selectShop(itself,shopNum){
		//获取标签名为input的标签，并存入名字为inputTag的数组中
		var inputTag=document.getElementsByTagName('input');
		//获取此商店的货物
		var shouldChange=shopNum+2;
		//通过循环修改值
		for(var i=shopNum+1;i<shouldChange+1;i++){
			inputTag[i].checked=itself.checked;
		}
		//判断“总全选”按钮是否需要勾选
		checkSel(itself,shopNum);
		//重置total
		calcAll();
}