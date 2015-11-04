define(['jquery', 'ScrollTo'], function ($, ScrollTo) {
	function BackTop(opts) {
		this.opts = $.extend( this.Defaults, opts);
		var opts = this.opts;
		console.log(opts);
		var s = new ScrollTo.ScrollTo(opts);
		$(this.opts.id).click(function  () {
			if(opts.isAnimate == true) {
				s.move();
			} else {
				s.go();
			}
		} );
		var self = this;

		$(window).scroll(function(event) {
			self.checkPosition($(window).height());
		});
	}

	BackTop.Defaults = {
		id: '#backTop',
		top: 0,
		speed: 1000,
		isAnimate: true
	}

	BackTop.prototype.checkPosition = function (H) {
		console.log($(window).scrollTop());
		if($(window).scrollTop() > H) {
			$('#backTop').fadeIn();
		} else {
			$('#backTop').fadeOut();
		}
	}

	//如果我想写成jquery的插件怎么办
	$.fn.extend({
		backTop: function (opts) {
			return this.each(function(index, el) {
				new BackTop(opts);
			});//这里为什么是each呢， 是为了防止jquery插件选择了多个dom时 比如不是传id， 而是传class， 我有多个返回顶部不行吗？我只想说，你赢了
			//为什么要return呢？ jquery链式调用原则
		}
	});
	

	return BackTop;
});