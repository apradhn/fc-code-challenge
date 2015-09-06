$(function() {
  $('.story').click(function() {
    var number = $(this).data('story-number')
    console.log(number);
  });
});