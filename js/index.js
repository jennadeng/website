var isTranslate = false;

$(function(){
  $('#intro-page').bind('mousewheel', function(e){
      if(e.originalEvent.wheelDelta /120 > 0) {
        $('#main-content').addClass('d-none');
        $('#intro-page').removeClass('d-none');
        console.log("up");
      }
      else{
        $('#intro-page').addClass('d-none');
        $('#main-content').removeClass('d-none');
        console.log("down");
      }
  });
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;
  $('.carousel-item').bind('mousewheel', function(e){
      if(!isTranslate){
        isTranslate = true;
        if(e.originalEvent.wheelDelta /120 > 0) {
          if(current != 0 && (prev == null || prev == 1)){
            var prev=current;
            current = current- 1;
            setSlide(prev, current);
          } else {
            $('#main-content').addClass('d-none');
            $('#intro-page').removeClass('d-none');
          }
        }
        else{
          var next=current;
          current= current+1;
          setSlide(next, current);
        }
      }
  });
  $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function(){
    var prev=current;
    current = current- 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next){
    var slide= current;
    if(next>total-1){
     slide=0;
      current=0;
    }
    if(next<0){
      slide=total - 1;
      current=total - 1;
    }
      $('.carousel-item .carousel-item__image').eq(prev).addClass('animated fadeOutLeft');
      $('.carousel-item .carousel-item__info').eq(prev).addClass('animated fadeOutRight');
      setTimeout(function(){
          $('.carousel-item .carousel-item__image').eq(prev).removeClass('animated fadeOutLeft');
          $('.carousel-item .carousel-item__info').eq(prev).removeClass('animated fadeOutRight');
          $('.carousel-item').eq(prev).removeClass('active');
          $('.carousel-item').eq(slide).addClass('active');
          $('.carousel-item .carousel-item__image').eq(slide).addClass('animated fadeInLeft');
          $('.carousel-item .carousel-item__info').eq(slide).addClass('animated fadeInRight');
      }, 800);

      setTimeout(function(){
          $('.carousel-item .carousel-item__image').eq(slide).removeClass('animated fadeInLeft');
          $('.carousel-item .carousel-item__info').eq(slide).removeClass('animated fadeInRight');
          isTranslate = false;
      }, 2000);

    console.log('current '+current);
    console.log('prev '+prev);
  }
});
