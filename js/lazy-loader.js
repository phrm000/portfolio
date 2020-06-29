var loadedpage = function(){
  $(".se-pre-con").fadeOut("slow");
};
//paste this code under the head tag or in a separate js file.
// Wait for window load
$(".works-display").on("load", function() {
      // Animate loader off screen
      
      $(".se-pre-con img").addClass("loaded-img");
      setTimeout(loadedpage, 2000);
});