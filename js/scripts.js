//Business Logic
function Player(name) {
  this.name = name;
  this.score = 0;
}
Player.prototype.getScore = function() {
  return this.score;
}
function Game() {
  this.player1 = new Player("Player1");
  this.player2 = new Player("Player2");
  this.currentPlayer = this.player1;
  this.roundTotal = 0;
}
Game.prototype.switchPlayer = function() {
  if (this.currentPlayer.name == "Player1") {
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
}
Game.prototype.roll = function() {
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  if (diceRoll == 1) {
    this.roundTotal = 0;
    this.switchPlayer();
  } else {
    this.roundTotal += diceRoll;
  }
  return diceRoll;
}
Game.prototype.hold = function() {
  this.currentPlayer.score += this.roundTotal;
  this.switchPlayer();
  this.roundTotal = 0;
}

var currentGame = new Game();


//Front-end logic
$(function(){

  $(".dolph-roll").click(function(event){
    $("#curr-roll").text(currentGame.roll());
    $("#player1-cycle-total").text(currentGame.roundTotal);
    $("#player2-cycle-total").text(currentGame.roundTotal);
  })

  $(".dolph-hold").click(function(event){
    currentGame.hold();
    $("#player1-total").text(currentGame.player1.score);
    $("#player2-total").text(currentGame.player2.score);
  });
});

// if (random === 1) {
//   player1ResultTotal - playerCycleTotal
// playerCycleTotal = 0
// switch to player 2
// }
