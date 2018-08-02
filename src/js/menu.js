define(function(){
	function menu(){
		var $lis = $("#nav_lt ul li");
		var num = 0;
		$lis.click(function(){
			
			if(num % 2 == 0){
				$(this).find("div").css("height","200");
				$(this).addClass("hover1");
				
				num++;
			}else{
				$(this).find("div").css("height","0");
				$(this).removeClass("hover1");
				num++;
			}
		})
		
	}
	return {
		menu : menu
	}
})