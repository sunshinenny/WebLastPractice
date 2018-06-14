	function toggle(li){
			var div=document.getElementById(li.id.replace('tab','content'));
			if(div.style.zIndex!=1){
				var hasZindex=document.querySelector("#container div[style]");
				//console.log(hasZindex);
				hasZindex.removeAttribute("style");
				//console.log(hasZindex);
			
			}
				div.style.zIndex=1;
		}	