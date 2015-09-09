$(function() {
  $(document).on('scroll', function(event) {
    // sets speed for parallax scroll
    var speed = 0.5;
    var storiesContainer = $('.stories-container');
    var storiesBackground = $('.stories-background');
    var titleBackground = $('.title-background');
    var title = $('.title');
    var cornerAdContainer = $('.corner-ad-container');
    var offset = window.pageYOffset;
    // sets .stories-container to scroll up the page faster than 
    // .stories-background, .title, .title-background, and .corner-ad-container
    storiesContainer.css('transform', 'translatey(-'+offset+'px)'); 
    storiesBackground.css('transform', 'translatey(-'+offset * speed +'px)'); 
    title.css('transform', 'translatey(-'+offset * speed +'px)'); 
    titleBackground.css('transform', 'translatey(-'+offset * speed +'px)');
    cornerAdContainer.css('transform', 'translatey(-'+offset * speed +'px)');
  });
});