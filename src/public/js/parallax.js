$(function() {
  $(document).on('scroll', function(event) {
    var speed = 0.5;
    var storiesContainer = $('.stories-container');
    var storiesBackground = $('.stories-background');
    var titleBackground = $('.title-background');
    var title = $('.title');
    var offset = window.pageYOffset;
    storiesContainer.css('transform', 'translatey(-'+offset+'px)'); 
    storiesBackground.css('transform', 'translatey(-'+offset * 0.5 +'px)'); 
    title.css('transform', 'translatey(-'+offset * 0.5 +'px)'); 
    titleBackground.css('transform', 'translatey(-'+offset * 0.5 +'px)');
  });
});