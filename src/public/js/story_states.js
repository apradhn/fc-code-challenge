$(function() {
  $('.story').hover(function() {
    var number = $(this).data('story-number')
    console.log(number);
  });
});