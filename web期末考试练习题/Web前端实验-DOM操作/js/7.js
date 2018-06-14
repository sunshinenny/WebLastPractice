//获得焦点：元素从不可操作到可操作   onfoucs()事件
//失去焦点：元素从可操作到不可操作   onblur()事件
/*function getFocus(txt){
	txt.style.class="txt_focus";
	txt.parentElement.nextElementSibling.firstChildElement.class="vali_Info";
}*/
function getFocus(txt){
  //设置txt的class为txt_focus
  txt.setAttribute("class","txt_focus");
  //找到旁边的div,清除其class
  txt.parentElement.nextElementSibling.firstElementChild//.className=""
												.removeAttribute("class");
}
function valiName(txt){
//定义正则reg,10个以内的字母，数字或下划线的组合，不可不填
	var reg=/^\w{1,10}$/;
//调用vali，传入txt和reg作为参数，返回调用的结果
	var result=vali(txt,reg);
}
function valiPwd(txt){
//定义正则reg,6位数字
	var reg=/^[0-9]{6}$/;
//调用vali，传入txt和reg作为参数，返回调用的结果
	var result=vali(txt,reg);
}
function vali(txt,reg){
  //清除txt的class
  txt.removeAttribute("class");
  //找到旁边的div
  var div=txt.parentElement.nextElementSibling.firstElementChild;
  //如果用reg，验证txt的value，通过
  if(reg.test(txt.value)){
    //设置div的class为vali_success
	 div.setAttribute("class","vali_success");
    //返回true
	 return true;
  }else{
  //否则
    //设置div的class为vali_fail
	 div.setAttribute("class","vali_fail");
    //返回false
	 return false;
  }
}
