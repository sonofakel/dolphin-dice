//Business Logic
var player1ResultTotal=0;
var player2ResultTotal=0;
var playerCycleTotal=0;

function ranNum() {
  return Math.floor(Math.random() * 6) + 1;
}


//Front-end logic
$(function(){
  $(".dolph-roll").click(function(event){

    var random = ranNum();

    var plusCycle = random += playerCycleTotal;
    var plusPlayer1 = random += player1ResultTotal;

    console.log(plusCycle);
    console.log(plusPlayer1);



    // if (random === 1) {
    //   player1ResultTotal - playerCycleTotal
    // playerCycleTotal = 0
    // switch to player 2
    // }

    $("#curr-roll").text(random);


  })
});
