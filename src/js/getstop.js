define(function(){
	function getstop(){
		$("#buy").click(function(){
			location.href = "buycar.html";
		});
		$("#close").click(function(){
			$('#alert').css("display","none");
			
		});
		$("#btn1").click(function(){
			$('#alert').css("display","none");
			
		});
	}
	return {
		getstop : getstop
	}
})