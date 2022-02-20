var $title = $(".hero-title");
var $subTitle = $(".hero-subtitle");
$title.hide();
$subTitle.hide();
window.onload = function() {
    setTimeout(function() {
        $title.slideDown(1000);
    }, 700);

    setTimeout(function() {
        $subTitle.slideDown(1000);
    }, 900);
}
var audio = new Audio('musicbek.mp3');
audio.play();
}
function myFunction() {
  document.getElementById("myCheck").click();
}
i = 0;
$(document).ready(function(){
  $("input").keypress(function(){
    $("span").text(i += 1);
  }
}
