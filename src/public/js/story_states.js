$(function() {
  var one = $('.story[data-story-number=1]');
  var two = $('.story[data-story-number=2]');
  var three = $('.story[data-story-number=3]');
  var four = $('.story[data-story-number=4]');
  var five = $('.story[data-story-number=5]');  
  var contentContainer;
  var noDescription;
  var hasDescription;
  var number;

  $('.story').hover(function() {
    number = $(this).data('story-number');
    noDescription = [two, three, four];
    hasDescription = [one, five];
    swapStyles(noDescription, hasDescription);
  }, 
  function() {
    number = $(this).data('story-number')
    hasDescription = [two, three, four];
    noDescription = [one, five];
    swapStyles(noDescription, hasDescription);
  });

  function swapStyles(noDescription, hasDescription) {
    noDescription.forEach(function(story){
      contentContainer = story.children('.content-container');
      contentContainer.children('.num-readers-container').addClass('hide');
      contentContainer.children('.description-container').removeClass('hide');
    });
    hasDescription.forEach(function(story) {
      contentContainer = story.children('.content-container');
      contentContainer.children('.num-readers-container').removeClass('hide');
      contentContainer.children('.description-container').addClass('hide');
    });
  }  

});

