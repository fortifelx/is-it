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
				if(scrolled > firstPosition/4) {
					$header.addClass(fixed);
				}
				if(scrolled > firstPosition/2) {
					$header.addClass(active);
				} 
				if(scrolled < firstPosition/3) {
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
    if($slides.length === 1) {
      $(counter).parent().css("display" , "none");
      return;
    };
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
    if ($slides.legnth === 1) {
      $counter.parent().css("display" , "none");
    }
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
	if(vWidth < 600) {
		$view.fortySlider(600, ".reviews_l_arrow", ".reviews_r_arrow", ".reviews_slider_counter", "/");
	}
})();
(function(){
  var $view = $('.product_captain_viewer');
  var vWidth = parseInt($view.css("width"), 10);
  $view.fortySlider(600, ".capt_l_arrow", ".capt_r_arrow", ".capt_slider_counter", "/");
})();
(function(){
  var $header = $('header');
  var vWidth = parseInt($header.css("width"), 10);
  var $headerMenu = $('.header_menu');
  var $headerWrapper = $('.header_wrapper');
  var status = false;
  if(vWidth < 600) {
      $headerMenu.click(function(e){
        if(status === false) {
          $headerWrapper.addClass('show_header_menu');
          status = true;
        } else {
          if(e.target == $headerMenu[0]) {
            $headerWrapper.removeClass('show_header_menu');
            status = false;
          }
        }
      })
  }
})();
(function(){

  var $slides = $(".sub_slide");
  var $container = $(".sub_slider_wrapper");
  var $viewer = $(".main_slider_wrapper");
  function viewSlide(e){
      var $newSlide = $(this).remove();
      var $oldSlide = $(".active_slide").remove();
      $oldSlide.removeClass('active_slide');
      $container.append($oldSlide);
      $viewer.append($newSlide).css("opacity" , "0").velocity({
        opacity : 1
      }, 400);
      $newSlide.addClass('active_slide');      
      $slides.off();
      $slides = $(".sub_slide");
      $slides.click(viewSlide);
  };

  $slides.click(viewSlide);

  function showSlide(){
    var $activeSlide = $(".active_slide img");
    var $viewer = $(".main_slider_viewer");
    var status = false;
    var work = false;
    var viewerW = parseInt($viewer.css("width"), 10);
    var slideW = parseInt($activeSlide.css("width"), 10);
    if(viewerW < slideW) {
      var step = slideW - viewerW*2;
      if(status === false) { 
        $activeSlide.velocity({ 
          left : -step 
        }, 6200); 
        setTimeout(function(){
          status = true;
        }, 6200);
       };
       if(status === false) { 
        $activeSlide.velocity({ 
          left : -step 
        }, 6200); 
        setTimeout(function(){
          status = true;
        }, 6200);
       };
    }
  }
})();

(function(){
var status = false;
$(".sel_btn").click(function(e){
  e.stopPropagation();
  if(status===false) {
    $(e.target).next().children().css("display", "block");
    $(document).bind("click", hideCustomSelect);
    status = true;
  } else {
    $(e.target).next().children().css("display", "none");
    $(document).unbind("click", hideCustomSelect);
    status = false;
  }
});
function hideCustomSelect(){
  $(".custom_dropdown li").css('display', 'none');
  status = false;
  $(document).unbind("click", hideCustomSelect);
}
function cutomizeSelect( selectOption, customOption) {
          var $selections = $(selectOption);
          var $customSelections = $(customOption);
          $customSelections.click(function(e){
            e.stopPropagation();
            $(e.target).parent().children().css("display" , "none");
            $(document).unbind("click", hideCustomSelect);
            status = false;
            var pos = $.inArray(e.target, $customSelections);
            $selections.prop("selected", false);

            var opt = $selections.eq($.inArray(e.target, $customSelections)+1);
            $selections.eq($.inArray(e.target, $customSelections)+1).attr("selected", "true");
            // window.location.href=e.target.options[e.target.selectedIndex].value
            var test = tets[0].value;
            console.log(test);
          });
    }
    cutomizeSelect(".custom_dropdown_country option",".custom_block_country li");
    cutomizeSelect(".custom_dropdown_people option",".custom_block_people li");
    cutomizeSelect(".custom_dropdown_filter option",".custom_block_filter li");



})();
(function(){
  var $reviews = $(".reviews_container .review_block");
  var $popup = $(".review_popup");
  var $popupClose = $(".review_popup .show_more_reviews");
  $reviews.click(function(){
    $popup.parent().css("display" , "block");
    var $target = $(this);
    var imgSrc = $target.find(".review_img img").attr("src");
    var name = $target.find(".review_header").text();
    var revObject = $target.find(".review_object").text();
    var revText = $target.find(".full_text").text();

    $popup.find(".review_img img").attr("src" , imgSrc);
    $popup.find(".review_header").html(name);
    $popup.find(".review_object").html(revObject);
    $popup.find(".text").html(revText);

  });
  $popupClose.click(function(){
    $popup.parent().css("display" , "none");
  });
})();
(function(){
    $(".become_a_captain").click(function(e){     
        $(".become_a_captain_popup").addClass("captain_popup_active");

    });
    $(".popup_close").click(function(e){
       $(".become_a_captain_popup").removeClass("captain_popup_active");
    })
     $(".become_a_captain_popup").click(function(e){
      if(this != e.target) return;
        $(".become_a_captain_popup").removeClass("captain_popup_active");
     })
})();
(function(){
  $(".product_btn_buy").click(function(e){
    console.log('here');
      $(".product_cart").css("display" , "none");
      $(".cart_product").css("display" , "block").animate({"opacity" : 1}, 200);
  });
})();
(function(){

    var video = $('#video')[0];
    if(video) {
          video.addEventListener('canplay', function(e) {
        this.volume = 0.2;
            });
    }


    var status = true;
    var $soundBtn = $('.sound-btn');
    var $muteBtn = $('.mute-btn');
    var playStatus = true;
    var $playBtn = $('.play_video');
    var $pauseBtn = $('.pause_video');
    $pauseBtn.click(function(){
        $pauseBtn.css("display" , "none");
        $playBtn.css("display", "block");
        video.pause();
        $(video).parent().addClass('main_screen_play');
    });
    $playBtn.click(function(){
        $playBtn.css("display" , "none");
        $pauseBtn.css("display", "block");
        video.play();
        $(video).parent().removeClass('main_screen_play');
    });
    $soundBtn.click(function(){
        if(status) {
            status = false;
            video.volume = 0;
            $soundBtn.css("display", "none");
            $muteBtn.css("display", "block");
            video.addEventListener('playing', function(e) {
                this.volume = 0;
            });
        }
    });
    $muteBtn.click(function(){
        status = true;
        video.volume = 0.2;
        $soundBtn.css("display", "block");
        $muteBtn.css("display", "none");
        video.addEventListener('paying', function(e) {
            this.volume = 0.2;
        });
    });

})();
(function(){

    var video = $('#video2')[0];
    if(video) {
          video.addEventListener('canplay', function(e) {
        this.volume = 0.4;
            });
    }
    var status = true;
    var $soundBtn = $('.sound-btn');
    var $muteBtn = $('.mute-btn');
    var playStatus = true;
    var $playBtn = $('.pl_video');
    var $pauseBtn = $('.ps_video');
    $pauseBtn.click(function(){
        $pauseBtn.css("display" , "none");
        $playBtn.css("display", "block");
        video.pause();
    });
    $playBtn.click(function(){
        $playBtn.css("display" , "none");
        $pauseBtn.css("display", "block");
        video.play();
    });
    $soundBtn.click(function(){
        if(status) {
            status = false;
            video.volume = 0;
            $soundBtn.css("display", "none");
            $muteBtn.css("display", "block");
            video.addEventListener('playing', function(e) {
                this.volume = 0;
            });
        }
    });
    $muteBtn.click(function(){
        status = true;
        video.volume = 0.4;
        $soundBtn.css("display", "block");
        $muteBtn.css("display", "none");
        video.addEventListener('paying', function(e) {
            this.volume = 0.4;
        });
    });

})();