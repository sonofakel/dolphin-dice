//Business Logic


function ranNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



//Front-end logic
$(function(){
  $("#dolph-buttons").click(function(event){

    var random = ranNum(1,6);

    $("#curr-roll").text(random);

  })
});
