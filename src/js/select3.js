define(function(){
	function select3(){
//		var oDiv = document.getElementById("lt_11");
		var $uli = $("#content ul li");
		var $oli = $("#content ol li");
		
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
		select3 : select3
	}
})