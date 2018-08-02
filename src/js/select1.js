define(function(){
	function select1(){
//		var oDiv = document.getElementById("lt_11");
		var $uli = $("#lt_11 ul li");
		var $oli = $("#lt_11 ol li");
		var $clear = $('#clear');
		var $m = $('#m');
		$clear.click(function(){
			$m.html("浏览商品已经清空");
		})
		$oli.addClass("hide");
		$oli[0].className = "show";
		$uli.addClass("normal");
		$uli[0].className = "hover";


		$uli.mouseover(function() {
			var index = $(this).index();
			$uli.removeClass().addClass("normal");
			$(this).removeClass().addClass("hover");
			$oli.removeClass().addClass("hide");
			$oli.eq(index).removeClass().addClass("show");
		});
	}
	return{
		select1 : select1
	}
})