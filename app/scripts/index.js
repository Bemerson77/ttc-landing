var $ = require('jquery');


// var headerHeight = $('#header-outer').height();
// var bodyPad = $('.vision-outer').css('padding');
// var visionTop = $('.vision-outer').offset().top;
//
// console.log('visionTop', visionTop);
// console.log('visionTop pad', visionTop.scrollTop);
//
// $(function() {
//     $(window).resize(function() {
//         // windowWidth = $(window).width();
//         // windowHeight = $(window).height();
//         headerHeight = $('#header-outer').height();
//         bodyPad = parseFloat($('.sticky-header').css('padding'));
//     });
// });
//
// console.log(bodyPad);
// console.log('winW', $(window).width());
// console.log('winH', $(window).height());
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

        // if(winTop >= headerNavTop) {
        //   $('body').addClass('sticky-header');
        // }

        if(winTop >= visionTop - 100) {
          $('body').addClass('sticky-header');
        } else {
          $('body').removeClass('sticky-header');
        }
        // if (winTop >= headerHeight - 100) {
        //     $('body').addClass('sticky-header');
        // } else if (winTop >= visionTop) {
        //     $('body').removeClass('sticky-header');
        // }

        // if (winTop <= 100) {
        //     $('body').removeClass('sticky-header');
        // }

    });
});
