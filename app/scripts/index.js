var $ = require('jquery');

var headHeight = $('.header-outer').height();
var topDecimal = (0.18 / 100) * headHeight;
var topVal = (topDecimal * 100).toFixed();
$('.header-banner-inner').css('top', topVal + "px");

$( window ).resize(function() {
  var headHeight = $('.header-outer').height();
  var topDecimal = (0.18 / 100) * headHeight;
  var widthDecimal = (0.81 / 100) * headHeight;
  var topVal = (topDecimal * 100).toFixed();
  var widthVal = (widthDecimal * 100).toFixed();
  console.log(widthVal);
  // console.log(topVal);
  $('.header-banner-inner').css('top', topVal + "px");
});


$(function() {
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        var headerHeight = $('#header-outer').height();
        var headerNavTop = $('.header-nav-outer').offset().top;
        var visionTop = $('.vision-outer').offset().top;
        // console.log('headerNavTop', headerNavTop);
        // console.log('visionTop', visionTop);
        // console.log(headerHeight);
        // console.log(winTop);

        if(winTop >= visionTop - 100) {
          $('body').addClass('sticky-header');
        } else {
          $('body').removeClass('sticky-header');
        }

    });
});
