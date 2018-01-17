$(document).ready(function () {
    $(".top_menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
});

(function(){
 var par = document.querySelector('.stages_canvas');
var c = document.getElementById('stages_canvas'),
  ctx = c.getContext('2d'),
  w = c.width = par.offsetWidth*1,
  h = c.height = par.offsetHeight*1,
  t = 0, num = 450, u=0,
  s, a, b, 
  x, y, _x, _y,
  _t = 1 / 400;

var anim = function() {
  ctx.globalCompositeOperation = 'source-over';
  window.requestAnimationFrame(anim);
  ctx.fillStyle = 'hsla(0, 0%, 0%, .35)';
  ctx.fillRect(0, 0, w, h);
  // ctx.globalCompositeOperation = 'lighter';
  for (var i = 0; i < 1; i++) {
    x = 0;
    ctx.beginPath();
    for (var j = 0; j < num; j++) {
      x += .60 * Math.sin(11) *1;
      y = x * Math.sin(i + 3.0 * t + x /15) / 15;
      _x = x * Math.cos(b) + y * Math.sin(i);
      _y = x * Math.sin(b) + y * Math.cos(i);
      b = (j*2.66) * Math.PI / 4;
      ctx.lineWidth = 0.040;
      ctx.lineTo(w / 2 + _x, h / 2 + _y);
    }
    var g = ctx.createLinearGradient(w / 2 + _x, h / 2.5 + _y,  
            1, w / 2 + _x, h / 2.5 + _y);
    g.addColorStop(0.2, 'hsla('+u+',100%,100%,1)');
    g.addColorStop(0.5, 'hsla(5,50%,50%,1)');
    g.addColorStop(1, 'hsla(0,0%,0%,1)'); 
    ctx.strokeStyle = g;
    ctx.stroke();
  }
  t += _t;
  u-=.2;
};
anim();

window.addEventListener('resize', function() {
  par = document.querySelector('.stages_canvas');
  c.width = w = par.offsetWidth;
  c.height = h = par.offsetHeight;
}, false); 
})();
(function(){
document.addEventListener("DOMContentLoaded", function(event) { 
  var $parts = $(".part_tringle");
  function make_triangle() {
    $parts.velocity({ translateX: 0, translateY: 0, rotateZ: 0}, 1500);
  }
  $(".pink_block").velocity({
    left : "-107%"
  }, 1200);
  destroy_triangle();
  function destroy_triangle() {
        $($parts[0]).velocity({ translateX: -5, translateY: 5, rotateZ: 5}, 0);
        $($parts[1]).velocity({ translateX: -5, translateY: 5, rotateZ: 90}, 0);
        $($parts[2]).velocity({ translateX: -25, translateY: -12, rotateZ: 170}, 0);
        $($parts[3]).velocity({ translateX: -48, translateY: 100, rotateZ: -90}, 0);
        $($parts[4]).velocity({ translateX: -182, translateY: 8, rotateZ: 60}, 0);
        $($parts[5]).velocity({ translateX: 15, translateY: 5, rotateZ: -90}, 0);
        $($parts[6]).velocity({ translateX: -15, translateY: -5, rotateZ: -270}, 0);
        $($parts[7]).velocity({ translateX: -25, translateY: 100, rotateZ: 120}, 0);
        $($parts[8]).velocity({ translateX: -5, translateY: 3, rotateZ: -90}, 0);
        $($parts[9]).velocity({ translateX: -67, translateY: -5, rotateZ: 130}, 0);
        $($parts[10]).velocity({ translateX: -182, translateY: 125, rotateZ: -90}, 0);
        $($parts[11]).velocity({ translateX: -15, translateY: -5, rotateZ: -290}, 0);
        setTimeout(make_triangle, 1000);
  };
  function destroy_triangle_time() {
    $($parts[0]).velocity({ translateX: -5, translateY: 5, rotateZ: 5}, 300);
        $($parts[1]).velocity({ translateX: -5, translateY: 5, rotateZ: 90}, 300);
        $($parts[2]).velocity({ translateX: -25, translateY: -12, rotateZ: 170}, 300);
        $($parts[3]).velocity({ translateX: -48, translateY: 100, rotateZ: -90}, 300);
        $($parts[4]).velocity({ translateX: -182, translateY: 8, rotateZ: 60}, 300);
        $($parts[5]).velocity({ translateX: 15, translateY: 5, rotateZ: -90}, 300);
        $($parts[6]).velocity({ translateX: -15, translateY: -5, rotateZ: -270}, 300);
        $($parts[7]).velocity({ translateX: -25, translateY: 100, rotateZ: 120}, 300);
        $($parts[8]).velocity({ translateX: -5, translateY: 3, rotateZ: -90}, 300);
        $($parts[9]).velocity({ translateX: -67, translateY: -5, rotateZ: 130}, 300);
        $($parts[10]).velocity({ translateX: -182, translateY: 125, rotateZ: -90}, 300);
        $($parts[11]).velocity({ translateX: -15, translateY: -5, rotateZ: -290}, 300);
        setTimeout(make_triangle, 2000);
  };
   $('.triangle_listener').mouseover(function(){
        $($parts[1]).velocity({ translateX: 5, translateY: 5}, 500);
        $($parts[2]).velocity({ translateX: 5, translateY: 0}, 500);
        $($parts[3]).velocity({ translateX: 8, translateY: 0}, 500);
        $($parts[4]).velocity({ translateX: 8, translateY: 8}, 500);
        $($parts[5]).velocity({ translateX: 5, translateY: 5}, 500);
        $($parts[6]).velocity({ translateX: -5, translateY: -5}, 500);
        $($parts[7]).velocity({ translateX: -5, translateY: 0}, 500);
        $($parts[8]).velocity({ translateX: -5, translateY: 3}, 500);
        $($parts[9]).velocity({ translateX: -7, translateY: -5}, 500);
        $($parts[10]).velocity({ translateX: 0, translateY: 5}, 500);
        $($parts[11]).velocity({ translateX: 5, translateY: -5}, 500);
   });
   $('.triangle_listener').mouseleave(function(){
        $parts.velocity({ translateX: 0, translateY: 0}, 500);
   });
   $('.triangle_listener').click(destroy_triangle_time);
});






})();
 (function(){
/**
 * Generates multiple customizable animated sines waves
 * using a canvas element. Supports retina displays and
 * limited mobile support
 *
 * I've created a seperate library based on this pen. 
 * Check it out at https://github.com/isuttell/sine-waves
 */
function SineWaveGenerator(options) {
  $.extend(this, options || {});
  
  if(!this.el) { throw "No Canvas Selected"; }
  this.ctx = this.el.getContext('2d');
  
  if(!this.waves.length) { throw "No waves specified"; }
  
  // Internal
  this._resizeWidth();
  window.addEventListener('resize', this._resizeWidth.bind(this));
  // User
  this.resizeEvent();
  window.addEventListener('resize', this.resizeEvent.bind(this));
  
  if(typeof this.initialize === 'function') {
    this.initialize.call(this);
  }
  // Start the magic
  this.loop();
}

// Defaults
SineWaveGenerator.prototype.speed = 10;
SineWaveGenerator.prototype.amplitude = 50;
SineWaveGenerator.prototype.wavelength = 50;
SineWaveGenerator.prototype.segmentLength = 10;

SineWaveGenerator.prototype.lineWidth = 2;
SineWaveGenerator.prototype.strokeStyle  = 'rgba(255, 255, 255, 0.2)';

SineWaveGenerator.prototype.resizeEvent = function() {};

// fill the screen
SineWaveGenerator.prototype._resizeWidth = function() {
  this.dpr = window.devicePixelRatio || 1;
  
  this.width = this.el.width = window.innerWidth * this.dpr;
  this.height = this.el.height = window.innerHeight * this.dpr;
  this.el.style.width = window.innerWidth + 'px';
  this.el.style.height = window.innerHeight + 'px';
  
  this.waveWidth = this.width * 0.95;
  this.waveLeft = this.width * 0.25;
}

SineWaveGenerator.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.width, this.height);
}

SineWaveGenerator.prototype.time = 0;

SineWaveGenerator.prototype.update = function(time) {  
  this.time = this.time - 0.007;
  if(typeof time === 'undefined') {
    time = this.time;
  }

  var index = -1;
  var length = this.waves.length;

  while(++index < length) {
    var timeModifier = this.waves[index].timeModifier || 1;
    this.drawSine(time * timeModifier, this.waves[index]);
  }
  index = void 0;
  length = void 0;
}

// Constants
var PI2 = Math.PI * 2;
var HALFPI = Math.PI / 2;

SineWaveGenerator.prototype.ease = function(percent, amplitude) {
  return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * 0.5;
}

SineWaveGenerator.prototype.drawSine = function(time, options) {
  options = options || {};
  amplitude = options.amplitude || this.amplitude;
  wavelength = options.wavelength || this.wavelength;
  lineWidth = options.lineWidth || this.lineWidth;
  strokeStyle = options.strokeStyle || this.strokeStyle;
  segmentLength = options.segmentLength || this.segmentLength;
  
  var x = time;
  var y = 0;  
  var amp = this.amplitude;
 
  // Center the waves
  var yAxis = this.height / 2; 
  
  // Styles
  this.ctx.lineWidth = lineWidth * this.dpr;
  this.ctx.strokeStyle = strokeStyle;
  this.ctx.lineCap = 'round';
  this.ctx.lineJoin = 'round';
  this.ctx.beginPath();
  
  // Starting Line
  this.ctx.moveTo(0, yAxis);
  this.ctx.lineTo(this.waveLeft, yAxis);
  
  for(var i = 0; i < this.waveWidth; i += segmentLength) {
    x = (time * this.speed) + (-yAxis + i) / wavelength; 
    y = Math.sin(x); 
    
    // Easing
    amp = this.ease(i / this.waveWidth, amplitude); 
    
    this.ctx.lineTo(i + this.waveLeft, amp * y + yAxis);
    
    amp = void 0;
  }
  
  // Ending Line
  this.ctx.lineTo(this.width, yAxis);
  
  // Stroke it
  this.ctx.stroke();
  
  // Clean up
  options = void 0;
  amplitude = void 0;
  wavelength = void 0;
  lineWidth = void 0;
  strokeStyle = void 0;
  segmentLength = void 0;
  x = void 0;
  y = void 0;
} 

SineWaveGenerator.prototype.loop = function() {
  this.clear();
  this.update();
  
  window.requestAnimationFrame(this.loop.bind(this));
}

new SineWaveGenerator({
  el: document.getElementById('createsection'),
  
  speed: 1,
  
  waves: [
    {
      timeModifier: 1,
      lineWidth: 3,
      amplitude: 150,
      wavelength: 200,
      segmentLength: 20,
//       strokeStyle: 'rgba(255, 255, 255, 0.5)'
    },
    {
      timeModifier: 1.2,
      lineWidth: 3,
      amplitude: -130,
      wavelength: 300,
      segmentLength: 25,
//       strokeStyle: 'rgba(255, 255, 255, 0.5)'
    },
    {
      timeModifier: 1,
      lineWidth: 2,
      amplitude: 250,
      wavelength: 200,
      // strokeStyle: 'rgba(255, 255, 255, 0.7)'
    },
    {
      timeModifier: 1,
      lineWidth: 3,
      amplitude: -150,
      wavelength: 50,
      segmentLength: 10,
//       strokeStyle: 'rgba(255, 255, 255, 0.2)'
    },
    {
      timeModifier: 1.2,
      lineWidth: 1,
      amplitude: -100,
      wavelength: 100,
      segmentLength: 20,
//       strokeStyle: 'rgba(255, 255, 255, 0.1)'
    }
  ],
  
  initialize: function (){

  },
  
  resizeEvent: function() {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0,"rgba(240, 75, 76, 0.8)");
    gradient.addColorStop(0.3,"rgba(0, 0, 0, 0.8)");
    gradient.addColorStop(0.5,"rgba(0, 0, 0, 1)");
    gradient.addColorStop(1,"rgba(0, 0, 0, 0.3)");
    
    var index = -1;
    var length = this.waves.length;
    while(++index < length){
      this.waves[index].strokeStyle = gradient;
    }
    
    // Clean Up
    index = void 0;
    length = void 0;
    gradient = void 0;
  }
});

 })();
 (function(){
$triangle_line = $(".triangle_line");
$first_line = $(".about_first_line");
$second_line = $(".about_second_line");
$third_line = $(".about_third_line");
$forth_line = $(".about_fourth_line");
$fivth_line = $(".about_fivth_line");
$six_line = $(".about_six_line");
$seven_line = $(".about_seven_line");
$eight_line = $(".about_eight_line");
$nine_line = $(".about_nine_line");
$ten_line = $(".first_form_first_line");
$eleven_line = $(".first_form_second_line");
$twelve_line = $(".second_form_first_line");
$thirteen_line = $(".second_form_second_line");
$forteen_line = $(".second_form_third_line");
first_line_status = false;
second_line_status = false;
third_line_status = false;
forth_line_status = false;
fivth_line_status = false;
six_line_status = false;
seven_line_status = false;
eight_line_status = false;
nine_line_status = false;
ten_line_status = false;
eleven_line_status = false;
twelve_line_status = false;
thirteen_line_status = false;
forteen_line_status = false;

  window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var time = 400;
  if(scrolled > 50) {
      $triangle_line.addClass("active_line_triangle");
  }
  if(scrolled < 50) {
      $triangle_line.removeClass("active_line_triangle");
  };
    if($first_line.offset().top < scrolled*2) {
      $first_line.addClass("active_line_width");
      first_line_status = true;
    }
        if($second_line.offset().top < scrolled*1.9 && third_line_status === true) {
          setTimeout(function(){
            $second_line.addClass("active_line_width");
            second_line_status = true;
          }, time)
   }
        if($third_line.offset().top < scrolled*1.9 && first_line_status === true) {
                    setTimeout(function(){
      $third_line.addClass("active_line_height");
      third_line_status = true;
                }, time);
    }
        if($forth_line.offset().top < scrolled*1.8 && second_line_status === true) {
          setTimeout(function(){
      $forth_line.addClass("active_line_width");
      forth_line_status = true;
      }, time)
    }
        if($fivth_line.offset().top < scrolled*1.6 && forth_line_status === true) {
          setTimeout(function(){
      $fivth_line.addClass("active_line_height");
      fivth_line_status = true;
      }, time)
    }
        if($six_line.offset().top < scrolled*1.6 && fivth_line_status === true) {
          setTimeout(function(){
      $six_line.addClass("active_line_width");
      six_line_status = true;
      }, time)
    }
        if($seven_line.offset().top < scrolled*1.5 && six_line_status === true) {
          setTimeout(function(){
      $seven_line.addClass("active_line_width");
      seven_line_status = true;
      }, time)
    }
        if($eight_line.offset().top < scrolled*1.4 && nine_line_status === true) {
          setTimeout(function(){
      $eight_line.addClass("active_line_width");
      
      }, time)
    }
        if($nine_line.offset().top < scrolled*1.3 && seven_line_status === true) {
          setTimeout(function(){
      $nine_line.addClass("active_line_height");
      nine_line_status = true;
      }, time)
    }
    if($ten_line.offset().top < scrolled*1.3) {
          setTimeout(function(){
      $ten_line.addClass("active_line_height");
      ten_line_status = true;
      }, time);
    }
    if($eleven_line.offset().top < scrolled*1.3 && ten_line_status === true) {
          setTimeout(function(){
      $eleven_line.addClass("active_line_width");
      }, time)
    }
        if($twelve_line.offset().top < scrolled*1.3) {
          setTimeout(function(){
      $twelve_line.addClass("active_line_width");
      twelve_line_status = true;
      }, time);
    }
        if($thirteen_line.offset().top < scrolled*1.3 && twelve_line_status === true) {
          setTimeout(function(){
      $thirteen_line.addClass("active_line_height");
      thirteen_line_status = true;
      }, time);
    }
        if($forteen_line.offset().top < scrolled*1.3 && thirteen_line_status === true) {
          setTimeout(function(){
      $forteen_line.addClass("active_line_width");
      }, time);
    }
    if($forteen_line.offset().top < scrolled*1.15) {
        $thirteen_line.addClass("active_line_height");
        $forteen_line.addClass("active_line_width");
    }
    if($nine_line.offset().top < scrolled*1.2) {
        first_line_status = true;
        second_line_status = true;
        third_line_status = true;
        forth_line_status = true;
        fivth_line_status = true;
        six_line_status = true;
        seven_line_status = true;
        eight_line_status = true;
        nine_line_status = true;
    }

    if($first_line.offset().top > scrolled*2) {
        $first_line.removeClass("active_line_width");
        $second_line.removeClass("active_line_width");
        $third_line.removeClass("active_line_height");
        $forth_line.removeClass("active_line_width");
        $fivth_line.removeClass("active_line_height");
        $six_line.removeClass("active_line_width");
        $seven_line.removeClass("active_line_width");
        $eight_line.removeClass("active_line_width");
        $nine_line.removeClass("active_line_height");
    }
    var punctPosition = [];
    var punctHeight = [];
    var i = 0;
    var $menuLi = $(".top_menu li a");
      $menuLi.each(function(){
          var  punct = $(this).attr('href');
          punctPosition[i] = $(punct).offset().top;
          punctHeight[i] = parseInt($(punct).css("height"), 10);
          i++;
      });
      if(scrolled < punctPosition[0]) {
          $(".active").removeClass("active");

      }
      if (punctPosition[0] < scrolled && scrolled < punctPosition[1]) {
          $(".active").removeClass("active");
          $($menuLi[0]).addClass("active");
          $(".top_menu").removeClass("top_menu_active");

      };
      if (punctPosition[1] - 300 < scrolled && scrolled < punctPosition[2]) {
          $(".active").removeClass("active");
          $($menuLi[1]).addClass("active");
          $(".top_menu").addClass("top_menu_active").velocity({
              top : "0"
          }, 800);
      }
      if (punctPosition[2] - 300 < scrolled && scrolled < punctPosition[3]) {
          $(".active").removeClass("active");
          $($menuLi[2]).addClass("active");
      }
      if (punctPosition[3] - 300 < scrolled && scrolled < punctPosition[4] - 300) {
          $(".active").removeClass("active");
          $($menuLi[3]).addClass("active");
      }
      if (punctPosition[4] - 600 < scrolled) {
          $(".active").removeClass("active");
          $($menuLi[4]).addClass("active");
      }

}
 })();
(function(){
    var $puncts = $(".stages_punct_header");
    $puncts.click(function (e) {
        console.log("start");
        var $target = $(this);
        var $parent = $target.parent();
        var $height = parseInt($target.next().css('height') , 10);
        var $targetHeight = parseInt($target.css("height"), 10) ;
        $height = $height + $targetHeight;

        $(".stages_punct_active").removeClass("stages_punct_active").velocity({
            height : $targetHeight
        }, 600);
        $parent.addClass("stages_punct_active").velocity({
            height : $height
        }, 600);
    })
})();
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.450670, lng: 30.586521},
          zoom: 15,
          styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
]
        });
    var image = 'img/marker.png';
    var beachMarker = new google.maps.Marker({
    position: {lat: 50.451311, lng: 30.597912},
    map: map,
    icon: image
  });
      };
