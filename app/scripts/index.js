var $ = require('jquery');

// var headHeight = $('.header-outer').height();
// var topDecimal = (0.18 / 100) * headHeight;
// var topVal = (topDecimal * 100).toFixed();
// $('.header-banner-inner').css('top', topVal + 'px');
//
// $(window).resize(function() {
//     var headHeight = $('.header-outer').height();
//     var topDecimal = (0.18 / 100) * headHeight;
//     var widthDecimal = (0.81 / 100) * headHeight;
//     var topVal = (topDecimal * 100).toFixed();
//     var widthVal = (widthDecimal * 100).toFixed();
//     $('.header-banner-inner').css('top', topVal + 'px');
// });


$(function() {
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        var headerHeight = $('#header-outer').height();
        var headerNavTop = $('.header-nav-outer').offset().top;
        var visionTop = $('.vision-outer').offset().top;

        if (winTop >= visionTop - 100) {
            $('body').addClass('sticky-header');
        } else {
            $('body').removeClass('sticky-header');
        }

    });

    var footerLogo = $('.footer-logo');
    var footerLogoImgs = [
      './images/love-jesus-white.png',
      './images/serve-people-white.png',
      './images/live-unified-white.png'
    ];
    var current = 0;
    // console.log(current);
    function nextFooterLogo() {
        current = ++current % footerLogoImgs.length;
        $(".footer-logo").attr("src", footerLogoImgs[current]);
        
        setTimeout(nextFooterLogo, 5000);
    }
    setTimeout(nextFooterLogo, 5000);

});
