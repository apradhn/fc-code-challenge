$(function() {
  $('.story').mouseenter(function() {
    var number = $(this).data('story-number')
    if (number == 2 || number == 3 || number == 4) {
      var two = $('.story[data-story-number=2]');
      var three = $('.story[data-story-number=3]');
      var four = $('.story[data-story-number=4]');

      var stories = [two, three, four];

      stories.forEach(function(story, index){
        story.children('.description-container').css('display', 'block');
        story.children('.num-readers-container').css('display', 'none');
      });

    }
  });


});