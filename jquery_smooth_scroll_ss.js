
/*!
 * express
 * Copyright(c) 2017 shinji sato(https://github.com/kunshin0518)
 * MIT Licensed
 */



(function ($) {
	"use strict";
	$.fn.smoothScroll = function (options) {

		options = $.extend({
			movementTime: 400,
			destination: 'body',
			easing: 'linear',
			adjustment: 0,
			centering:false,
			split:2,
		}, options);


		this.on('click', function () {
			var adjustment_box = options.adjustment;
			if(options.centering){
				adjustment_box = options.adjustment+($(window).height()/options.split)*(-1);
			}
			$("body,html").animate({
				scrollTop: $(options.destination).offset().top + adjustment_box,
			}, options.movementTime, options.easing);
		});
		return (this);
	};
})(jQuery);
