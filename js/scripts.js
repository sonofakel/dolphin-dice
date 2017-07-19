//Business Logic
var player1ResultTotal = 0;
var player2ResultTotal = 0;
var playerCycleTotal = 0;

function ranNum() {
  return Math.floor(Math.random() * 6) + 1;
}


//Front-end logic
$(function(){

  $(".dolph-roll").click(function(event){
    var random = ranNum();
    playerCycleTotal += random;

    if (random === 1) {
      playerCycleTotal = 0;
    } else {
      playerCycleTotal
    }
    console.log(playerCycleTotal);
    $("#curr-roll").text(random);
    $("#player1-cycle-total").text(playerCycleTotal);

  })
  $(".dolph-hold").click(function(event){
    player1ResultTotal = playerCycleTotal
    $("#player1-total").text(player1ResultTotal);
    console.log(player1ResultTotal);
  });
});

// if (random === 1) {
//   player1ResultTotal - playerCycleTotal
// playerCycleTotal = 0
// switch to player 2
// }
