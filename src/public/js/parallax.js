$(function() {
  $(document).on('scroll', function(event) {
    var speed = 0.5;
    var storiesContainer = $('.stories-container');
    var storiesBackground = $('.stories-background');
    var titleBackground = $('.title-background');
    var title = $('.title');
    var cornerAdContainer = $('.corner-ad-container');
    var offset = window.pageYOffset;
    storiesContainer.css('transform', 'translatey(-'+offset+'px)'); 
    storiesBackground.css('transform', 'translatey(-'+offset * speed +'px)'); 
    title.css('transform', 'translatey(-'+offset * speed +'px)'); 
    titleBackground.css('transform', 'translatey(-'+offset * speed +'px)');
    cornerAdContainer.css('transform', 'translatey(-'+offset * speed +'px)');
  });
});