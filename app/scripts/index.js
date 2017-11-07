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
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 90
        }, 650);
        return false;
      }
    }
  });
});


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

    $('.check-btn').click(function() {
      $('.check-btn-txt').toggleClass('hidden');
    });

    $('.text-btn').click(function() {
      $('.text-btn-txt').toggleClass('hidden');
    });

    // hamburger menu function
    $('.menu').click(function() {
        $(this).toggleClass('open');
        $('.header-nav').toggleClass('menu-active');
        $('.header-nav-item').toggleClass('nav-active');
        $('.header-nav-logo-wrapper').toggleClass('logo-active');
        $('.header-social-nav').toggleClass('social-active');
    });

    $('.header-nav-logo-wrapper').click(function(){
      $('html, body').animate({
        scrollTop: 0
      }, 650);
    });

    $('.header-nav-item a').click(function(){
      $('.menu').toggleClass('open');
      $('.header-nav').removeClass('menu-active');
      $('.header-nav-item').removeClass('nav-active');
      $('.header-nav-logo-wrapper').removeClass('logo-active');
      $('.header-social-nav').removeClass('social-active');
    });

});
