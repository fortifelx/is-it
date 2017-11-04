(function(){
	$(window).resize(
		function(){
			setTimeout(function(){
				location.reload(); 
			}, 2000)
		})
})();
(function(){
	var $header  = $(".header_wrapper");

	var fixed = "header_fixed";
	var active = "header_active";

	window.onscroll = function() {
				var scrolled = window.pageYOffset || document.documentElement.scrollTop;
				var firstPosition = document.documentElement.clientHeight;
				if(scrolled > firstPosition/2) {
					$header.addClass(fixed);
				}
				if(scrolled > firstPosition) {
					$header.addClass(active);
				} 
				if(scrolled < firstPosition/2) {
					$header.removeClass(active);
				}
				if(scrolled < 90) {
					$header.removeClass(fixed);
				}




	}
})();
(function( $ ) {
  $.fn.fortySlider = function(time, options) {

  	var $slides = this.children();
  	var viewWidth = parseInt(this.css('width'), 10) ;
  	$slides.css({
  		"position" : "absolute",
  		"left"     : -viewWidth,
  		"visibility"  : "hidden"
  	});
  	$($slides[0]).css({
  		"position" : "absolute",
  		"left"     : "0",
  		"visibility"  : "visible"
  	});
  	$($slides[$slides.length-1]).css({
  		"left"     : viewWidth,
  	});


      return this.each(function() {
      		var $this  = $(this);


      	});

  };
})(jQuery);
(function(){
	var $view = $('.reviews_container');


	$view.fortySlider(600);
})();