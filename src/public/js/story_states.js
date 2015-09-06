$(function() {
  var one = $('.story[data-story-number=1]');
  var two = $('.story[data-story-number=2]');
  var three = $('.story[data-story-number=3]');
  var four = $('.story[data-story-number=4]');
  var five = $('.story[data-story-number=5]');  

  $('.story').hover(function() {
    var number = $(this).data('story-number')
    if (number == 2 || number == 3 || number == 4) {
      var stories = [two, three, four];
      stories.forEach(function(story){
        story.children('.description-container').removeClass('hide');
        story.children('.num-readers-container').addClass('hide');
      });
      stories = [one, five];
      stories.forEach(function(story) {
        story.children('.description-container').addClass('hide');
        story.children('.num-readers-container').removeClass('hide');
      });
    } else {
      var stories = [one, five];
      stories.forEach(function(story) {
        story.children('.description-container').addClass('hide');
        story.children('.num-readers-container').removeClass('hide');
      });
      stories = [two, three, four];
      stories.forEach(function(story) {
        story.children('.description-container').removeClass('hide');
        story.children('.num-readers-container').addClass('hide');
      });
    }
  }, 
  function() {
    var number = $(this).data('story-number')
    if (number == 2 || number == 3 || number == 4) {
      var stories = [two, three, four];
      stories.forEach(function(story){
        story.children('.description-container').addClass('hide');
        story.children('.num-readers-container').removeClass('hide');
      });
      stories = [one, five];
      stories.forEach(function(story) {
        story.children('.description-container').removeClass('hide');
        story.children('.num-readers-container').addClass('hide');
      });
    } else {
      var stories = [one, five];
      stories.forEach(function(story) {
        story.children('.description-container').removeClass('hide');
        story.children('.num-readers-container').addClass('hide');
      });
      stories = [two, three, four];
      stories.forEach(function(story) {
        story.children('.description-container').addClass('hide');
        story.children('.num-readers-container').removeClass('hide');
      });
    }
  });



});