var $ = require('jquery');

$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    console.log(winTop);
    if (winTop >= 30) {
      $('body').addClass('sticky-header');
    } else {
      $('body').removeClass('sticky-header');
    }
  });
});