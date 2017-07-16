var $ = require('jquery');

$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    console.log(winTop);
    if (winTop >= 15) {
      $('body').addClass('sticky-header');
    } else {
      $('body').removeClass('sticky-header');
    }
  });
});
