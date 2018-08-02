require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		'cookie' : 'jquery.cookie',
		'slideshow' : 'slideshow',
		'count' : 'time',
		'fix1' : 'fix',
		'getstop' : 'getstop',
		'addnum' : 'addnum',
		
	}
});


require(['jquery','cookie','slideshow','count','fix1','getstop','addnum'],function($,cookie,slideshow,count,fix1,getstop,addnum){
	$(function(){
		slideshow.slideshow();
		count.count();
		fix1.fix1();
		getstop.getstop();
		addnum.addnum();
		
	})
})
