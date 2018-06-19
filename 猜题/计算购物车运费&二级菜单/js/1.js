function toggle(span){
			//项目需求
			//如果当前span的class是open
				//设置当前span的class为closed
				//ul的class设置为hide
				//否则，找有没有span的class是open的元素保存在openspan
					//如果找到设置openspan的class为closed
					//ul的class设置为hide
					//否则设置当前span的class为open
					//ul的class为show
			//var ul=span.nextElementSibling;
			if(span.className=="open"){
				span.className="closed";
				span.nextElementSibling.className="hide";
			}else{
				
				span.className="open";
				span.nextElementSibling.className="show";
				
			}
		
		}