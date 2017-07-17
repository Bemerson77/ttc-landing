var $ = require('jquery');

$(function() {
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        var headerHeight = $('#header-outer').height();
        var headerNavTop = $('.header-nav-outer').offset().top;
        var visionTop = $('.vision-outer').offset().top;
        console.log('headerNavTop', headerNavTop);
        console.log('visionTop', visionTop);
        console.log(headerHeight);
        console.log(winTop);

        if(winTop >= visionTop - 100) {
          $('body').addClass('sticky-header');
        } else {
          $('body').removeClass('sticky-header');
        }

    });
});
