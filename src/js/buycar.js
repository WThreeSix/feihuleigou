require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		'cookie' : 'jquery.cookie',
		'loadmess' : 'loadmess',
		'check' : 'check',
		'addnum' : 'addnum'
	}
});


require(['jquery','cookie','loadmess','check','addnum'],function($,cookie,loadmess,check,addnum){
	$(function(){
		loadmess.loadmess();
		check.check();
//		addnum.addnum();
	})
})
