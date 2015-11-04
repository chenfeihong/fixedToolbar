define(['jquery'], function ($) {
	//构造函数
	function ScrollTo (opts) {
		console.log(opts);
		// 继承传入的参数
		this.opts = $.extend(ScrollTo.Defaults,opts);//把opts合并到Defaults
		
		//缓存起来， 节约性能啊， 你以为每次都jquery去获取， 很耗性能呢的
		this.$target = $('html, body');
	}

	//检查是否到达顶部
	ScrollTo.prototype.isMoving = function() {
		
		if(this.$target.is(':animated')) {
			return true;
		}

		return false;
	}

	ScrollTo.prototype.move = function () {
		if(this.isMoving()) {//防止动画中运行过程中， 执行多次
			return ;
		}
		this.$target.animate({
			scrollTop: this.opts.top
		}, this.opts.speed);
		console.log('fk');
	}
	//没有动画
	ScrollTo.prototype.go = function () {
		this.$target.scrollTop(this.opts.top);
	}



	//默认参数, 写成静态类变量是灰常好的哦, 
	ScrollTo.Defaults = {
		top: 0,
		speed: 800
	}

	return {
		ScrollTo: ScrollTo
	};
});