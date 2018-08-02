define(function(){
	function slideshow(){
		var $imgs = $('#banner img');
		var $lis = $('#small li');
		var index = 0;
		var num = $imgs.length;
		slide();
		addEvent();
		var timer = null;
		autoPlay();
		function slide(){
	        for(var i = 0; i < num; i++){
	            $imgs[i].style.display = "none";
	            $lis[i].style.backgroundColor = "#666869";
	        }
	        $imgs[index].style.display = "block";
	        $lis[index].style.backgroundColor = "#e56666";
	
	    }
		function addEvent(){
	        $('#ltBtn')[0].onclick = ()=>{
	            index--;
	            if(index == -1){
	                index = num - 1;
	            }
	            slide();
	        }
	        $('#rtBtn')[0].onclick = ()=>{
	            index++;
	            if(index == num){
	                index = 0;
	            }
	            slide();
	        }
	        for(let i = 0; i < num; i++){
	            $lis[i].onclick = ()=>{
	                index = i;
	                slide();
	            }
	        }
	    }
		function autoPlay(){
	        timer = setInterval(()=>{
	            index++;
	            if(index == num){
	                index = 0;
	            }
	            slide();
	        },3000);
	        $('#banner')[0].onmouseover = ()=>{
	            clearInterval(timer);
	            $('span')[0].style.display = "block";
	            $('span')[1].style.display = "block";
				
	            
	        }
	        $('#banner')[0].onmouseout = ()=>{
	            autoPlay();
	            $('span')[0].style.display = "none";
	            $('span')[1].style.display = "none";
	
	        }
	    }
		$('#ltBtn')[0].onmousedown = function(){
			return false;
		}
		$('#rtBtn')[0].onmousedown = function(){
			return false;
		}
	}
	return{
		slideshow : slideshow
	}
});

 
