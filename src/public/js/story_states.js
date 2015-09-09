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
    // callback function for mouseenter
    noDescription = [two, three, four];
    hasDescription = [one, five];
    swapStyles(noDescription, hasDescription);
  }, 
  // callback function for mouseleave
  function() {
    hasDescription = [two, three, four];
    noDescription = [one, five];
    swapStyles(noDescription, hasDescription);
  });

  function swapStyles(noDescription, hasDescription) {
    // for stories without a description, shows description, shows gradient and hides num-readers
    noDescription.forEach(function(story){
      contentContainer = story.children('.content-container');
      contentContainer.children('.num-readers-container').addClass('hide');
      contentContainer.children('.description-container').removeClass('hide');
      story.addClass('gradient');
    });
    // for stories with a description, hides description, hides gradient and shows num-readers
    hasDescription.forEach(function(story) {
      contentContainer = story.children('.content-container');
      contentContainer.children('.num-readers-container').removeClass('hide');
      contentContainer.children('.description-container').addClass('hide');
      story.removeClass('gradient');
    });
  }  

});

