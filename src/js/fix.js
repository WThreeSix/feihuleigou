define(function(){
	function fix1(){
		$(window).scroll(function(){
			
            var $t = $(this).scrollTop();
            if ($t > 500) {
            	$('#fix').css('display','block');
                $("#fix").fadeIn(); //淡入 导航慢慢显示出来
            } else {
                $("#fix").fadeOut(); //淡出 导航慢慢消失
            }
            
        });
        $("#dingbu").click(function(){
	        $('html').animate({"scrollTop":0}, 500);
        })
        $("#miaosha").click(function(){
	        $('html').animate({"scrollTop":685}, 500);
        })
        $("#stopping").click(function(){
	        $('html').animate({"scrollTop":970}, 500);
        })
        
	}
	return{
		fix1 : fix1
	}
})
