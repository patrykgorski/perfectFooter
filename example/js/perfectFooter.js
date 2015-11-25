function perfectFooter(footerClass, heightAboveElement){
	this.nameElement = footerClass || '.pf';
	this.$footer = $(this.nameElement);
	this.sElement = heightAboveElement || 'body';
	this.count = (this.checkElementHeight()+this.checkFooterHeight());
}
perfectFooter.prototype.checkElementHeight = function(){
	return $(this.sElement).innerHeight();
}
perfectFooter.prototype.checkFooterHeight = function(){
	return $(this.$footer).innerHeight();
}
perfectFooter.prototype.setPositionFooter = function(){
	if(window.innerHeight>this.count){
		this.$footer.css({'position':'absolute', 'bottom':0, 'margin':0});
		this.count = (this.checkElementHeight()+this.checkFooterHeight());
	}else{
		if(this.$footer.attr('style')){
			var remove = this.$footer.attr('style').replace(/(position: absolute;)|(bottom: 0px;)|(margin: 0px;)/igm, '');
			this.$footer.removeClass('pf-position');
			this.$footer.attr('style', remove);
		}
		this.count = this.checkElementHeight();
	}	
}
$(window).resize(function(){
	pf.setPositionFooter();
})	