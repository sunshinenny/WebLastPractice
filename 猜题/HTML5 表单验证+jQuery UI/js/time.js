 var SysSecond;  
 var InterValObj;  
 $(document).ready(function() {  
  SysSecond = 100; // 这里获取倒计时的起始时间  
  InterValObj = window.setInterval(SetRemainTime, 1000); // 间隔函数，1 秒执行  
 });  
   
 // 将时间减去 1 秒，计算分、秒  
 function SetRemainTime() {  
  if (SysSecond > 0) {  
   SysSecond = SysSecond - 1;  
   var second = Math.floor(SysSecond % 60);             // 计算秒       
   var minite = Math.floor((SysSecond / 60) % 60);      // 计算分  
   
   $("#remainTime").html("自定义功能①：倒计时——"+  minite + "分" + second + "秒");  
  } else {// 剩余时间小于或等于 0 的时候，就停止间隔函数  
  // window.clearInterval(InterValObj);  
   // 这里可以添加倒计时时间为 0 后需要执行的事件  
   //window.location.href = 'http://www.baidu.com';  
  }  
 }  