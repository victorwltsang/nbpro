$(document).ready(function() {

  $(".nb-nav a").on("click", function() {
    $(".nb-nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });

});
