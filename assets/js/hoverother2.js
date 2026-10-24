$(function() {
  $('#text').hover(function() {
    $('#AboutProject').css('background-image', 'url("BG_aboutProject_4.png")');
      $('#AboutProject').css('transition', 'all .5s ease-in-out');
  }, function() {
    // on mouseout, reset the background colour
    $('#AboutProject').css('background-image', 'url("BG_aboutProject_5.png")');
      $('#AboutProject').css('transition', 'all .5s ease-in-out');
  });
});