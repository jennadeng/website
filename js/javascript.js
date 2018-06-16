$(document).ready(function(){
            $('.aniview').AniView();
        });
        
$(window).scroll(function() {
var scroll = $(window).scrollTop();
 //console.log(scroll);
if (scroll >= 800) {
    //console.log('a');
    $("#mainNav").addClass("black-background");
} else {
    //console.log('a');
    $("#mainNav").removeClass("black-background");
}
});
