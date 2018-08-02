require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		'cookie' : 'jquery.cookie',
		'bigmsk' : 'bigmsk',
		'select1' : 'select1',
		'select2' : 'select2',
		'fix2' : 'fix2',
		'getstop' : 'getstop',
		'addnum' : 'addnum',
		'partadd' : 'partadd'
	}
});


require(['jquery','cookie','bigmsk','select1','select2','fix2','getstop','addnum','partadd'],function($,cookie,bigmsk,select1,select2,fix2,getstop,addnum,partadd){
	$(function(){
		
		bigmsk.bigmsk();
		select1.select1();
		select2.select2();
		fix2.fix2();
		getstop.getstop();
		addnum.addnum();
		partadd.partadd();
		
	})
})
