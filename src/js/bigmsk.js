define(function(){
	function bigmsk(){
		var div1 = document.getElementById("div1");
		var glass = document.getElementById('glass');
		var img2 = document.getElementById("img2");
		var div2 = document.getElementById("div2");
		var b = document.getElementById("b");
		var ult = document.getElementById("ult")
		$('#div1').mousemove(function(e){
			glass.style.display="block";
			div2.style.display="block";
			var e = e || window.e;
			var [x,y]=[e.clientX,e.clientY];
			
			x-=glass.offsetWidth/2 + 75;
			y-=glass.offsetHeight/2 + 210;
			if(x<0){
				x=0;
			}
			if(y<0){
				y=0;
			}
			var maxw=div1.offsetWidth-glass.offsetWidth-2;
			var maxh=div1.offsetHeight-glass.offsetHeight-2;
			if(x>maxw){x=maxw;}
			if(y>maxh){y=maxh;}
			[glass.style.left, glass.style.top] = [x+'px', y+'px'];
			img2.style.left = -2*x+"px";
			img2.style.top = -2*y+"px";
			div1.onmouseout = function(){
				glass.style.display="none";
				div2.style.display="none";
			}
		});
		b.onmouseover=e=>{
			var el=e.target;
			if(el.nodeName=="IMG"){
				img1.src=img2.src=el.src;
			}
		}
		a.onclick=()=>{
			ult.style.left = "0px";
		}
		c.onclick=()=>{
			ult.style.left = "-280px";
		}
	}
	return {
		bigmsk : bigmsk
	}
})
	
	


