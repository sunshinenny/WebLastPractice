//左边是备选国家存到unsel中
//右边是已选国家寻到sel中
//先把页面上两个select元素中的内容存到两个数组中，现在内存中进行操作，操作完成之后更新到页面上
//把备选国家数组数据放置到备选列表中
var unselCts = new Array("A", "B", "C", "D", "E");//备选国家
var selCts = []; //已选国家
var unsel = document.getElementById("unsel");
updateSel(unselCts, unsel);
//定义移动函数
		function move(btn) {
			var btnContent = btn.textContent;
			
			switch(btnContent) {
				case ">>":
					selCts = selCts.concat(unselCts);
					unselCts = [];
					break;
				case "<<":
					unselCts = unselCts.concat(selCts);
					selCts = [];
					break;
				case ">":
					var opts = document.querySelectorAll("#unsel option");
					for(var i = opts.length - 1; i >= 0; i--) {//从后往前
						if(opts[i].selected) {
							//selCts.push(unselCts.splice(i, 1)[0]);
							selCts.push(unselCts[i]);
							unselCts.splice(i, 1)
							//console.log(selCts);
						}
					}
					break;
				case "<":
					var opts = document.querySelectorAll("#sel option");
					for(var i = opts.length - 1; i >= 0; i--) {//从后往前
						if(opts[i].selected) {
							//selCts.push(unselCts.splice(i, 1)[0]);
							unselCts.push(unselCts[i]);
							selCts.splice(i, 1)
							//console.log(selCts);
						}
					}
					break;
			}
			selCts.sort();
			unselCts.sort();

			updateSel(unselCts, unsel);
			var sel = document.getElementById("sel");
			updateSel(selCts, sel);
		}

		function updateSel(arr, sel) {//数组到列表
			sel.innerHTML = arr.length > 0 ? ("<option>" + arr.join("<\/option><option>") + "<\/option>") : "";
		}
		/*
		for(var i = 0; i < unselCts.length; i++) {
			//var option = new Option(unselCts[i], unselCts[i], );
			//unsel.add(option);
			unsel.innerHTML+="<option>"+unselCts[i]+"</option>"
		}
		*/