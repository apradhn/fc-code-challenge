$(function() {
  $('.story').hover(function() {
    var number = $(this).data('story-number')
    if (number == 2 || number == 3 || number == 4) {
      var one = $('.story[data-story-number=1]');
      var two = $('.story[data-story-number=2]');
      var three = $('.story[data-story-number=3]');
      var four = $('.story[data-story-number=4]');
      var five = $('.story[data-story-number=5]');

      var stories = [two, three, four];

      stories.forEach(function(story, index){
        story.children('.description-container').css('display', 'block');
        story.children('.num-readers-container').css('display', 'none');
      });

      stories = [one, five];

      stories.forEach(function(story, index) {
        story.children('.description-container').css('display', 'none');
        story.children('.num-readers-container').css('display', 'block');
      });

    }
  }, function() {
      var number = $(this).data('story-number')
      if (number == 2 || number == 3 || number == 4) {
        var one = $('.story[data-story-number=1]');
        var two = $('.story[data-story-number=2]');
        var three = $('.story[data-story-number=3]');
        var four = $('.story[data-story-number=4]');
        var five = $('.story[data-story-number=5]');

        var stories = [two, three, four];

        stories.forEach(function(story, index){
          story.children('.description-container').css('display', 'none');
          story.children('.num-readers-container').css('display', 'block');
        });

        stories = [one, five];

        stories.forEach(function(story, index) {
          story.children('.description-container').css('display', 'block');
          story.children('.num-readers-container').css('display', 'none');
        });


      }    
  });



});