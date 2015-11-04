requirejs.config({
	baseUrl: './js',
	paths: {
		jquery: '../libs/jquery-1.7.1.min'
	}
});

requirejs(['jquery', 'ScrollTo', 'BackTop'], function ($, ScrollTo, BackTop) {
	/*var ScrollTo = new ScrollTo.ScrollTo({
		top: 90,
		speed: 1000
	});
	$('#backTop').click($.proxy(ScrollTo.move, ScrollTo) ) ;*/

	new BackTop({
		id: '#backTop',
		top: 90,
		speed: 1000
	});//罗马不是一天就建成的， 你看看我们的修改痕迹， 最终只需要new一行代码就可以了,  这个就叫封装
	/*$('#backTop').click(function(e) {
		ScrollTo.move();
	});*/
	/*$('#backTop').click(function(event) {
		//$('html, body')， 这样写是为了做浏览器兼容
		$('html, body').animate({
			scrollTop: 0
		}, 500);

		// $('html, body').scrollTop(0);//非动画
	});*/

	/*$(window).scroll(function(event) {
		checkPosition($(window).height());
	});
	checkPosition($(window).height());//防止第一次加载top出现

	function checkPosition (H) {
		console.log($(window).scrollTop());
		if($(window).scrollTop() > H) {
			$('#backTop').fadeIn();
		} else {
			$('#backTop').fadeOut();
		}
	}*/
})