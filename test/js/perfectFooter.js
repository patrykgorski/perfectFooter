(function($){
	$.fn.perfectFooter = function(){
		var heightDocument = $('html').innerHeight(),
			settings = {};
		return this.each(function(){
			var self = this;
			settings.count = heightDocument+$(self).innerHeight();
			$(window).on('load resize', function(){
				heightDocument = $('html').innerHeight();
				if(window.innerHeight>settings.count){
					$(self).css({'position':'absolute', 'bottom':0, 'margin':0});
					settings.count = heightDocument+$(self).innerHeight();
				}else{
					if($(self).attr('style')){
						var remove = $(self).attr('style').replace(/(position: absolute;)|(bottom: 0px;)|(margin: 0px;)/igm, '');
						$(self).attr('style', remove);
					}
					settings.count = heightDocument;
				}
			})	
		})
	}
})(jQuery)