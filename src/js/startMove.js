function startMove(obj, json, func){ //func = complate
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bStop = true; //假设所有运动，都到达目的值了。
		for(var attr in json){
			var iCur = null;
			//获取当前值
			if(attr == "opacity"){
				iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100)
			}else{
				iCur = parseInt(getStyle(obj, attr));
			}

			var speed = (json[attr] - iCur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if(iCur != json[attr]){
				bStop = false;
			}
			
			if(attr == "opacity"){
				iCur += speed;
				obj.style.opacity = iCur / 100;
				obj.style.filter = "alpha(opacity=" + iCur + ")";
			}else{
				obj.style[attr] = iCur + speed + "px";
			}
			
		}
		if(bStop){
			clearInterval(obj.timer);
			if(func){
				func.call(obj);
			}
		}

	}, 30);
}
function getStyle(node, styleName){
	if(node.currentStyle){
		return node.currentStyle[styleName];
	}else{
		return getComputedStyle(node)[styleName];
	}
}
