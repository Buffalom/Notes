function getAllNoteTitles() {
  $.get("../php/getAllNoteTitles.php", function(data){
    console.log(data);
  });
}


$(function(){
  // Add needed classes:
  // Clear float overflow
  $('[class^="float"]').parent().addClass('clear-float');


  getAllNoteTitles();
});