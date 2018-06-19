function calc(btn){
			//1、实现点击加减号span中的数字随着变化
			//获取btn的内容
			//获取span的内容
			//如果是加号，就把span中的内容加1
			//否则判断span的值如果>=1,则把span的值减一
			    //否则，span=1
			var span=btn.parentElement.children[1];
			console.log(span);
			var n=Number(span.innerHTML);//span.innerHTML 代表数字
			n+=btn.innerHTML=="+"?1:n>1?-1:0;//btn.innerHTML 代表按钮
			span.innerHTML=n; //对改变的数字重新赋值

			//2、实现小计的功能
			//获取btn的父元素的上一个兄弟元素 ，把人民币符号去掉  并转化为浮点型  存到price中
			//定义变量total计算  n*price   保留两位小数
			//获取btn的父元素的下一个兄弟元素，设置其内容为 人民币符号+total
			var price=parseFloat(btn.parentNode.previousElementSibling.innerHTML.slice(1));
			var total=n*price;
			btn.parentNode.nextElementSibling.innerHTML="&yen"+total.toFixed(2);
			/*3、实现total 总计
			//获取总计所造标签td的内容 去掉人民币符号  转化为浮点数
			var tfoot_td=document.querySelector("tfoot tr td:last-child");//td:last-child 表示所有td标签中最后一个td元素
			//设置td的内容为  人民币符号  +计算total加上price保留两位小数
			//var alltotal=parseFloat(tfoot_td.innerHTML.slice(1))+(btn.innerHTML=="+"?price:n>1?(-price):0);
			var listTotal=document.querySelectorAll("tbody tr td:last-child");
			var alltotal=0;
			for(var i=0;i<listTotal.length;i++){
				alltotal+=parseFloat(listTotal[i].innerHTML.slice(1));
			}
			tfoot_td.innerHTML="&yen"+alltotal.toFixed(2);*/
		}
//实现total 总计
function Total(){
	        //获取总计所造标签td的内容 去掉人民币符号  转化为浮点数
			var tfoot_td=document.querySelector("tfoot tr td:last-child");//td:last-child 表示所有td标签中最后一个td元素
			
			//设置td的内容为  人民币符号  +计算total加上price保留两位小数
			var listTotal=document.querySelectorAll("tbody tr td:last-child");
			
			//查找table下的tbody下的每行第一个td中input，保存在chbs中
			var chbs=document.querySelectorAll("table>tbody>tr>td:first-child input");
			
			
			
			
			
			var alltotal=0;
			
				for(var j=0;j<chbs.length;j++){
					if(chbs[j].checked==true)
					   alltotal+=parseFloat(listTotal[j].innerHTML.slice(1));
				}
				
				//alltotal+=parseFloat(listTotal[i].innerHTML.slice(1));
			
			tfoot_td.innerHTML="&yen"+alltotal.toFixed(2);
}















//全选操作
function selectAll_1(chb){
      //查找table下的tbody下的每行第一个td中input，保存在chbs中
      var s1= document.getElementById("t1");
			var chbs=s1.querySelectorAll("tbody>tr>td:first-child input");
			//var chbs=document.querySelectorAll("adminID_1");

			
      //遍历chbs中每个chb
			for(var i=0;i<chbs.length;i++){
        //设置当前chb的checked等于chb的checked
		chbs[i].checked=chb.checked;
			}
		}
//全选操作
function selectAll_2(chb){
      //查找table下的tbody下的每行第一个td中input，保存在chbs中
      var s2= document.getElementById("t2");
			var chbs=s2.querySelectorAll("tbody>tr>td:first-child input");
			//var chbs=document.querySelectorAll("adminID_1");

			
      //遍历chbs中每个chb
			for(var i=0;i<chbs.length;i++){
        //设置当前chb的checked等于chb的checked
		chbs[i].checked=chb.checked;
			}
		}
//全选操作
function selectAll_3(chb){
      //查找table下的tbody下的每行第一个td中input，保存在chbs中
      var s3= document.getElementById("t3");
			var chbs=s3.querySelectorAll("tbody>tr>td:first-child input");
			//var chbs=document.querySelectorAll("adminID_1");

			
      //遍历chbs中每个chb
			for(var i=0;i<chbs.length;i++){
        //设置当前chb的checked等于chb的checked
		chbs[i].checked=chb.checked;
			}
		}
//判断是否全部被选中，如果选中全选复选框被选中，反之未被选中
		function checkSel_1(){ 
           var o=document.getElementsByName("adminID_1");
      var count=0,num=0;
      for(var i=0;i<o.length-1;i++)
      {
        if(o[i+1].checked==true)
        {
          count++;
        }
        if(o[i+1].checked==false)
        {
          num++;
        }
      }
      if(count==o.length-1)
      {
        o[0].checked=true;
      }
      if(num>0)
      {
        if(o[0].checked==true)
        {
          o[0].checked=false;
        }
      }
			
        }
		function checkSel_2(){ 
           var o=document.getElementsByName("adminID_2");
      var count=0,num=0;
      for(var i=0;i<o.length-1;i++)
      {
        if(o[i+1].checked==true)
        {
          count++;
        }
        if(o[i+1].checked==false)
        {
          num++;
        }
      }
      if(count==o.length-1)
      {
        o[0].checked=true;
      }
      if(num>0)
      {
        if(o[0].checked==true)
        {
          o[0].checked=false;
        }
      }
			
        }
		function checkSel_3(){ 
           var o=document.getElementsByName("adminID_3");
      var count=0,num=0;
      for(var i=0;i<o.length-1;i++)
      {
        if(o[i+1].checked==true)
        {
          count++;
        }
        if(o[i+1].checked==false)
        {
          num++;
        }
      }
      if(count==o.length-1)
      {
        o[0].checked=true;
      }
      if(num>0)
      {
        if(o[0].checked==true)
        {
          o[0].checked=false;
        }
      }
			
        }