require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		'cookie' : 'jquery.cookie',
		'select3' : 'select3',
		'stopping' : 'addstop',
		'menu' : 'menu',
		'getstop' : 'getstop',
		'fix2' : 'fix2',
		'addnum' : 'addnum'
	}
});


require(['jquery','cookie','select3','stopping','menu','getstop','fix2','addnum'],function($,cookie,select3,stopping,menu,getstop,fix2,addnum){
	$(function(){
		
		stopping.stopping();
		select3.select3();
		menu.menu();
		getstop.getstop();
		fix2.fix2();
		addnum.addnum();
	})
})
