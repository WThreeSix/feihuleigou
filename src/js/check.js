define(function(){
	function check(){
		var qx= document.getElementsByName("more")[0];
	    var gb = document.getElementsByName("gb");
	    qx.onclick = function(){
	        //让后面操作的复选框的 checked值 和当前点击的复选框的checked值保持一致
	        //alert( qxObj.checked );
	        for( var i = 0 ; i < gb.length ; i++ ){
	            gb[i].checked = this.checked;
	        }
	    }
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
		check:check
	}
})