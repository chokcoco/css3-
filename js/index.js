;/*!/static/js/index.js*/
requirejs.config({
	// baseUrl 为包含 RequireJS 的那个 HTML 页面的所属目录
	baseUrl: "../js",
	paths: {
		jquery: "http://fun1.yystatic.com/platform/js/jquery-1.8.0.min",
		duowan:"http://www.duowan.com/duowan.js?nocdn=true",
		hiido:"http://fun1.yystatic.com/platform/js/commons/_hiido"
	},
	shim: {
		hiido:{
			deps:['duowan']
		},
	}
})


require(
	[
	// 精彩预告 -- taskBar
	'index/mod-taskBar'
	],
	function(taskBar) {
		taskBar.init();

});


;/*!/static/js/index/mod-taskBar.js*/
define('index/mod-taskBar', ['jquery'],function($){

	return{
		init:function(){
			console.log($);

		}
	}
})

