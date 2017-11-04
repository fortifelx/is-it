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
  $.fn.fortySlider = function(time, lArrow, rArrow, counter, seperator, method) {

  	var $slides = this.children();
  	var viewWidth = parseInt(this.css('width'), 10) ;
  	$slides.css({
  		"position" : "absolute",
  		"left"     : -viewWidth,
  		"visibility"  : "hidden",
  		"opacity"     : "0"
  	});
  	$($slides[0]).css({
  		"position" : "absolute",
  		"left"     : "0",
  		"visibility"  : "visible",
  		"opacity"     : "1"
  	});
  	$($slides[$slides.length-1]).css({
  		"left"     : viewWidth,
  	});

  	var $lArrow = $(lArrow);
  	var $rArrow = $(rArrow);
    var $seperator = seperator ? seperator : "/";

    var i = 0;
    var $count = (i+1) + $seperator + $slides.length;
    var $counter = $(counter).html($count);
    var $current;
    var $next;

    function showSlide() {
    	$current = $($slides[i]);
    	if(this == $lArrow[0]) {
	   		$current.velocity({
    			"opacity" : 0
    		}, time);
    		setTimeout(function(){
    			$current.css({
    				"left" : viewWidth,
    				"visibility" : "hidden"
    			})
    		}, time);
    		--i;
    		if(i === -1) i = $slides.length - 1;
    		$next = $($slides[i]);
    		$next.css({
    				"left" : 0,
    				"visibility" : "visible"
    			}).velocity({
    			opacity : 1,
    		}, time);
    	}
    	if(this == $rArrow[0]) {
    		$current.velocity({
    			"opacity" : 0
    		}, time);
    		setTimeout(function(){
    			$current.css({
    				"left" : -viewWidth,
    				"visibility" : "hidden"
    			})
    		}, time);
    		++i;
    		if(i === $slides.length) i = 0;
    		$next = $($slides[i]);
    		$next.css({
    				"left" : 0,
    				"visibility" : "visible"
    			}).velocity({
    			opacity : 1,
    		}, time);
    	}
		$count = (i+1) + $seperator + $slides.length;
	    $counter = $(counter).html($count);
    }
    $lArrow.click(showSlide);
    $rArrow.click(showSlide);

      return this.each(function() {
      		var $this  = $(this);
      	});

  };
})(jQuery);
(function(){
	var $view = $('.reviews_container');
	var vWidth = parseInt($view.css("width"), 10);
	console.log(vWidth);
	if(vWidth < 600) {
		$view.fortySlider(600, ".reviews_l_arrow", ".reviews_r_arrow", ".reviews_slider_counter", "/");
	}
})();