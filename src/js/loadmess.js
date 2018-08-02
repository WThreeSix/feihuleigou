define(function(){
	function loadmess(){
		
		let cookieStr = $.cookie('cart') ? $.cookie('cart') : "";
		if(!cookieStr){
			$('.blank').css('display','block');
		}else{
			let cookieObj = convertCookieStrToCookieObj(cookieStr);
			for(var key in cookieObj){
				let good = cookieObj[key];
				let str = `
					<ul class="goodInfo" data-good-id="${key}">
						<li><input type="checkbox" name="gb" id="" value="" /></li>
						<li><img src="${good.src}" alt="" /></li>
						<li>${good.name}</li>
						<li class="num">
							<a href="javascript:;" class="minus">-</a>
							<input type="text" name="" id="" value="${good.num}" />
							<a href="javascript:;" class="plus">+</a>
						</li>
						<li>${good.price}</li>
						<li class="total">${good.price * good.num}</li>
						<li><a href="javascript:;" class="del">删除</a></li>
					</ul>
				`;
				$('.stopmess').append(str);

			}
			
			
			//	删除
				allp = 0;
				let all = $(".total");
				all.each(function(){
					allp = parseFloat(allp+parseFloat($(this).html()));
				})
				$("#allpri").html(allp);
				let $dels = $('.goodInfo .del');
				$dels.each(function(){
					$(this).click(function(){
						let id = $(this).parents('.goodInfo').remove().attr('data-good-id');
						let cookieStr = $.cookie('cart')?$.cookie('cart') : "";
						let cookieObj = convertCookieStrToCookieObj(cookieStr);
						delete cookieObj[id];
						$.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'})
						allp = parseFloat(allp-parseFloat($(this).parent().prev().html()));
						$("#allpri").html(allp);
					})
				})
				$(".clear_1").click(function(){
					var exp = new Date();
					exp.setTime(exp.getTime() - 1);
					$.cookie('cart',JSON.stringify(cookieObj),{expires :-1,path : '/'})
					history.go(0);
				})
//				加数量
				let plus = $('.goodInfo .plus');
				plus.each(function(){
					$(this).click(function(){
						let id = $(this).parents('.goodInfo').attr('data-good-id');
						var cookieStr = $.cookie('cart')?$.cookie('cart'):"";
						var cookieObj = convertCookieStrToCookieObj(cookieStr);
						cookieObj[id].num ++;
						$.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
						$(this).prev().val(cookieObj[id].num);
						$(this).parent().next().next().html(cookieObj[id].num * cookieObj[id].price);
						allp = parseFloat(allp+parseFloat($(this).parent().next().html()));
						$("#allpri").html(allp);
					})
				})
//				减数量
				let minus = $('.goodInfo .minus');
				minus.each(function(){
					$(this).click(function(){
						let id = $(this).parents('.goodInfo').attr('data-good-id');
						var cookieStr = $.cookie('cart')?$.cookie('cart'):"";
						var cookieObj = convertCookieStrToCookieObj(cookieStr);
						cookieObj[id].num --;
						if(cookieObj[id].num < 1){
							cookieObj[id].num = 1;
						}
						$.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
						$(this).next().val(cookieObj[id].num);
						$(this).parent().next().next().html(cookieObj[id].num * cookieObj[id].price);
						allp = parseFloat(allp-parseFloat($(this).parent().next().html()));
						$("#allpri").html(allp);
						if(cookieObj[id].num == 1){
							let $all = $(".total");
							allp = 0;
							for(var i=0; i<$all.length; i++){
								allp = parseFloat(allp+parseFloat($all[i].innerHTML));
							}
							
							$("#allpri").html(allp);
						}
					})
				})
		}
		function convertCookieStrToCookieObj(str){
			if(!str){
				return {};
			}
			return JSON.parse(str);
		}
	}
	return{
		loadmess : loadmess
	}
	
})