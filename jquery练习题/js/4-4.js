//左边是备选国家存到unsel中
	//右边是已选国家寻到sel中
	//先把页面上两个select元素中的内容存到两个数组中，现在内存中进行操作，操作完成之后更新到页面上
console.log(document.getElementById("unsel")			
							.innerHTML.replace(/^\s+|\s+$/g,""));
	var unselCts=document.getElementById("unsel")			
							.innerHTML.trim()
							.replace(/^<option>|<\/option>$/g,"")//slice(8,-9)
							.split(/<\/option>\s*<option>/);
	console.log(unselCts);
	var selCts=[];

	var sel=document.getElementById("sel");
	//console.log(sel);
	var unsel=document.getElementById("unsel");
	//console.log(unsel);
		function move(btn){
			switch (btn.textContent)
			{
			case ">>":
				selCts=selCts.concat(unselCts);
				unselCts=[];
				break;
			case "<<":
				unselCts=unselCts.concat(selCts);
				selCts=[];
				break;
			case ">":
				var opts=document.querySelectorAll("#unsel option");
				//把unselCts中选中的国家删除，直接添加到已选国家里
				//找到unselCts中option的属性是selected
				for(var i=opts.length-1;i>=0;i--){
					if(opts[i].selected){
						selCts.push(unselCts.splice(i,1)[0]);
					}
				}
				break;
          
			case "<":
				var opts=document.querySelectorAll("#sel option");
				for(var i=opts.length-1;i>=0;i--){
					if(opts[i].selected){
					unselCts.push(selCts.splice(i,1)[0]);
					}
				}
				break;
			}
			selCts.sort();
			unselCts.sort();
			update(selCts,sel);
			update(unselCts,unsel);
		}

		function update(arr,sel){
			sel.innerHTML=(arr.length==0)?"":"<option>"+arr.join("<\/option><option>")+"<\/option>";
		}