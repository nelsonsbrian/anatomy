$(document).ready(function() {

  $(".clickable.head-click").click(function() {
    $(".head").toggle();
  });
  $(".clickable.chest-click").click(function() {
    $(".chest").toggle();
  });
  $(".clickable.leg-click").click(function() {
    $(".legs").toggle();
  });

  $("button#black").click(function(){
    $("body").toggleClass("dark-background");

  });

});
