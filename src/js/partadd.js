define(function(){
	function partadd(){
		let s=nb.value;
		$("#jia").click(function(){
			s++;
			$("#nb").val(s);
		})
		$("#jian").click(function(){
			s--;
			if(s<1){
				s = 1;
			}
			$("#nb").val(s);
		})	
		$("#buyss").click(function(e){
	//		alert(nb.value);
			var goodId = "sp36";
			var goodName = "维肯VK28移动电源5200mAh玫瑰金";
			var goodPrice = 59;
			var goodSrc = "images/particular/xiao.jpg";
			var cookieStr = $.cookie('cart') ? $.cookie('cart') : "";
			var cookieObj = convertStrToObj(cookieStr);
			if(goodId in cookieObj){
				cookieObj[goodId].num ++;
			}else{
				cookieObj[goodId] = {
					"name" : goodName,
					"src" : goodSrc,
					"price" : goodPrice,
					"num" : nb.value
				}
			}
			$.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
			window.location.href = "buycar.html";
			
		})
		$("#buys").click(function(){
			var goodId = "sp36";
			var goodName = "维肯VK28移动电源5200mAh玫瑰金";
			var goodPrice = 59;
			var goodSrc = "images/particular/xiao.jpg";
			var cookieStr = $.cookie('cart') ? $.cookie('cart') : "";
			var cookieObj = convertStrToObj(cookieStr);
			if(goodId in cookieObj){
				cookieObj[goodId].num ++;
			}else{
				cookieObj[goodId] = {
					"name" : goodName,
					"src" : goodSrc,
					"price" : goodPrice,
					"num" : nb.value
				}
			}
			$.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
			window.location.href = "buycar.html";
		})
		
		function convertStrToObj(str){
		if(!str){
			return {};
		}
		return JSON.parse(str);
		}
	}
		
	
	return {
		partadd : partadd
	}
})