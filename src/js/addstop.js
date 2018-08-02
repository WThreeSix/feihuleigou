define(function(){
	function stopping(){
		$.getJSON("js/listdate.json",function(data){
			var str = '';
			$(data.one).each(function(index,value){
				str += `
					<div>
						<a href = "particular.html"><img src=${value.src} alt="" /></a>
						<a href = "#"><p>${value.name}</p></a>
						<span>${value.price}</span>
					</div>
				`;
			});
			var str2 = '';
			$(data.two).each(function(index,value){
				str2 += `
					<div>
						<a href = "#"><img src=${value.src} alt="" /></a>
						<a href = "#"><p>${value.name}</p></a>
						<span>${value.price}</span>
					</div>
				`;
			});
			
			$('#add').html(str);
			$('#add1').html(str2);
			$('#add2').html(str);
			$('#add3').html(str2);
			var str3 = '';
			$(data.three).each(function(index,value){
				str3 += `
					<div class="goodInfo" data-good-id=${value.id}>
						<a href=""><img src=${value.src} alt=""/></a><br />
						<p>${value.name}</p>
						<p>飞虎价<span>${value.price}</span></p>
						<p><a href="particular.html">快速购买</a></p>
						<input type="button" name="" id="" value="加入购物车" class="addToCart"/>
					</div>
				`;
			});
			$('#all1').html(str3);
//			手机配件
			var str4 = '';
			$(data.four).each(function(index,value){
				str4 += `
					<div class="goodInfo" data-good-id=${value.id}>
						<a href=""><img src=${value.src} alt=""/></a><br />
						<p>${value.name}</p>
						<p>飞虎价<span>${value.price}</span></p>
						<p><a href="particular.html">快速购买</a></p>
						<input type="button" name="" id="" value="加入购物车" class="addToCart"/>
					</div>
				`;
			});
			
			$('#all2').html(str4);
//			摄影摄像
			var str5 = '';
			$(data.five).each(function(index,value){
				str5 += `
					<div class="goodInfo" data-good-id=${value.id}>
						<a href=""><img src=${value.src} alt=""/></a><br />
						<p>${value.name}</p>
						<p>飞虎价<span>${value.price}</span></p>
						<p><a href="particular.html">快速购买</a></p>
						<input type="button" name="" id="" value="加入购物车" class="addToCart"/>
					</div>
				`;
			});
			$('#all3').html(str5);
//			移动电源
			var str6 = '';
			$(data.six).each(function(index,value){
				str6 += `
					<div class="goodInfo" data-good-id=${value.id}>
						<a href=""><img src=${value.src} alt=""/></a><br />
						<p>${value.name}</p>
						<p>飞虎价<span>${value.price}</span></p>
						<p><a href="particular.html">快速购买</a></p>
						<input type="button" name="" id="" value="加入购物车" class="addToCart"/>
					</div>
				`;
			});
			$('#all4').html(str6);
//			只能设备
			var str7 = '';
			$(data.seven).each(function(index,value){
				str7 += `
					<div class="goodInfo" data-good-id=${value.id}>
						<a href=""><img src=${value.src} alt=""/></a><br />
						<p>${value.name}</p>
						<p>飞虎价<span>${value.price}</span></p>
						<p><a href="particular.html">快速购买</a></p>
						<input type="button" name="" id="" value="加入购物车" class="addToCart"/>
					</div>
				`;
			});
			$('#all5').html(str7);
//			音响
			var str8 = '';
			$(data.eight).each(function(index,value){
				str8 += `
					<div class="goodInfo" data-good-id=${value.id}>
						<a href=""><img src=${value.src} alt=""/></a><br />
						<p>${value.name}</p>
						<p>飞虎价<span>${value.price}</span></p>
						<p><a href="particular.html">快速购买</a></p>
						<input type="button" name="" id="" value="加入购物车" class="addToCart"/>
					</div>
				`;
			});
			$('#all6').html(str8);
//			电脑外设
			var str9 = '';
			$(data.nine).each(function(index,value){
				str9 += `
					<div class="goodInfo" data-good-id=${value.id}>
						<a href=""><img src=${value.src} alt=""/></a><br />
						<p>${value.name}</p>
						<p>飞虎价<span>${value.price}</span></p>
						<p><a href="particular.html">快速购买</a></p>
						<input type="button" name="" id="" value="加入购物车" class="addToCart"/>
					</div>
				`;
			});
			$('#all7').html(str9);
//			添加购物车
			console.log($(".goodInfo .addToCart"));
			$(".goodInfo .addToCart").click(function(e){
				$('#alert').css("display","block");
				var goodId = $(this).parent().attr("data-good-id");
					
				var goodName = $(this).siblings('p').eq(0).html();
				
				var goodPrice = parseFloat(($(this).siblings("p").eq(1).find("span").html()).substring(1));
				
				var goodSrc = $(this).siblings("a").find("img").attr("src");
				var cookieStr = $.cookie('cart') ? $.cookie('cart') : "";
				var cookieObj = convertStrToObj(cookieStr);
				if(goodId in cookieObj){
					cookieObj[goodId].num ++;
				}else{
					cookieObj[goodId] = {
						"name" : goodName,
						"src" : goodSrc,
						"price" : goodPrice,
						"num" : 1
					}
				}
				$.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
				
			})
			
		})
		function convertStrToObj(str){
			if(!str){
				return {};
			}
			return JSON.parse(str);
		}
	}
	return{
		stopping　:　stopping
	}
})