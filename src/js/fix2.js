define(function(){
	function fix2(){
		$(window).scroll(function(){
			
            var $t = $(this).scrollTop();
            if ($t > 500) {
            	$('#fix').css('display','block');
                $("#fix").fadeIn(); //淡入 导航慢慢显示出来
            } else {
                $("#fix").fadeOut(); //淡出 导航慢慢消失
            }
            
        });
        $("#fix").click(function(){
	        $('html').animate({"scrollTop":0}, 500);
        })
        
	}
	return{
		fix2 : fix2
	}
})
