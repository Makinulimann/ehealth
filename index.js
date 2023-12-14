var carouselWidth = $('#carouselObat .carousel-inner').scrollWidth;
var cardWidth = $('#carouselObat .carousel-item' ).Width();

var scrollPosition = 0;

$('#carouselObat .carousel-control-next').on('click', function(){
    console.log('next');
    scrollPosition = scrollPosition + cardWidth;
    $('#carouselObat .carousel-inner').animate({scrollLeft:scrollPosition},600)
});