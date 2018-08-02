define(function(){
	function addnum(){
//		var a = document.querySelectorAll(".stopmess ul");
//		var s = a.length;
//		
//		console.log(s);	
		function convertStrToObj(str){
			if(!str){
				return {};
			}
			return JSON.parse(str);
		}
		var cookieStr = $.cookie('cart') ? $.cookie('cart') : "";
		let cookieObj = convertStrToObj(cookieStr);
		let num = 0;
		for(var i in cookieObj){
			num += parseFloat(cookieObj[i].num);
//			alert(typeof num)
		}
//		$('#buy').val('购物车(' + num + ")");
		$("#s").html(num);
			
	
	}
	return{
		addnum : addnum
	}
})