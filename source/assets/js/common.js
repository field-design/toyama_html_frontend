// @codekit-prepend "echo.js"

// drawer
$(document).ready(function() {
	 $('.drawer').drawer();
});

// clipboard
$('.status').hide();
var clipboard = new Clipboard('.btn');
clipboard.on('success', function(e) {
    $('.status').hide().fadeIn('fast');
    $('.status').delay(750).fadeOut('normal', function() {
        $(this).hide();
    });

});
clipboard.on('error', function(e) {
  //失敗時の処理
});

// matchHeight
$(function(){
	$('.tours a').matchHeight();
});


// smooth scroll
jQuery(document).ready(function($) {
    $('[data-smooth]').smoothScroll();
});

//echo
echo.init() ;

// web fonts
$(window).load(function () {
    $('[data-webfonts]').attr("rel", "stylesheet");
});



// inview
jQuery(document).ready(function($) {
    $('[data-inview]').on('inview', function(event,isInView) {
        if (isInView) {
          //要素が見えたときに実行する処理

        } else {
          //要素が見えなくなったときに実行する処理

        }
    });
});

//現在地 active
// $(document).ready(function() {
// if(location.pathname != "/") {
//     $('.site-header.page nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
// } else $('.site-header.page nav a:eq(0)').addClass('active');
// });

// backtop
$(function(){
	$('.backtop>a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
	$(window).scroll(function(){
		var distanceTop = 500;
		if ($(window).scrollTop() > distanceTop) {
			$('.backtop').fadeIn("slow");
		} else {
			$('.backtop').fadeOut("slow");
		}
	});
});

// カンマ区切り
$.fn.comma3 = function(){
	return this.each(function(){
		var num3string = (function(num){
				var str = new String(num);
				var n = "";
				var count = 0;
				for (var i=str.length-1; i>=0; i--){
					n = str.charAt(i) + n;
					count++;
					if (((count % 3) == 0) && (i != 0)) n = ","+n;
				}
				return n;
			})(this.innerHTML);
		this.innerHTML = num3string;
	});
};
$(".num3").comma3();
