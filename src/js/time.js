define(function(){
	function count(){
	    function diff(start,end){
	        return (end.getTime()-start.getTime()) / 1000;
	    }
	    var oTime = document.getElementById("time");
	    var oMinute = document.getElementById("minute");
	    var oSec = document.getElementById("sec");
	    var start = new Date("2018-7-29 20:43:00");
	    var end = new Date("2018-7-30 20:43:00");
	    var t = diff(start,end);
	    var flag = true;
	    function showTime(){
	        if( t < 0 ){
	            flag = false;
	            return ;
	        }
	        //剩余的小时数
	        var h = parseInt( t / 3600 );
	        var m = parseInt((t - h*3600)/60);
	        var s = parseInt( t - h*3600 - m*60 );
	        if(s<10){
	        	s="0"+s;
	        }
	        if(m<10){
	        	m="0"+m;
	        }
	        if(h<10){
	        	h="0"+h;
	        }
	        oTime.innerHTML = h;
	        oMinute.innerHTML = m;
	        oSec.innerHTML = s;
	    }
	    showTime();
	    //定时器控制
	    var timer = setInterval(function(){
	        if( flag ){
	            t--;
	            if( t <= 0 ){
	                clearInterval(timer);
	                oTime.innerHTML = "00";
	        		oMinute.innerHTML = "00";
	        		oSec.innerHTML = "00";
	            }else{
	                showTime();
	            }
	        }
	    },1000)
	}
	return {
	    count : count
	}
})