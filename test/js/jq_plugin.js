(function($){
	$.fn.perfectFooter = function(){
		var heightDocument = $('html').height();
		var settings = {};
		console.log(heightDocument);
		return this.each(function(){
			var self = this;
			settings.count = heightDocument+$(self).height();
			$(window).resize(function(){
				heightDocument = $('html').height();
				if(window.innerHeight>settings.count){
					$(self).css({'position':'absolute', 'bottom':0, 'margin':0});
					settings.count = heightDocument+$(self).height();
					console.log(true)
				}else{
					if($(self).attr('style')){
						var remove = $(self).attr('style').replace(/(position: absolute;)|(bottom: 0px;)|(margin: 0px;)/igm, '');
						$(self).attr('style', remove);
					}
					console.log(false);
					settings.count = heightDocument;
				}
			})	
		})
	}
})(jQuery)