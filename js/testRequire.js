requirejs.config({
	baseUrl: '.',
	paths: {
		jquery: 'libs/jquery-1.7.1.min',
		validate: 'js/validate'
	}
})

requirejs(['jquery', 'validate'], function ($, v) {
	$('body').css('background', '#ccc');
	alert(v.isEqual('wori', 'wori'));
});