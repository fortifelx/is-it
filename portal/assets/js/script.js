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