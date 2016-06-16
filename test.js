
function getPlayers() {  // does not empty response to first prompt correctly
  // var person1 = "";
  // var person2 = "";
  var input = prompt("Enter the first user name.\nJust hit enter to let the computer pick names.\nHit Cancel if you don't want to play", "Name");
  if (input) {
    if (input !== "Name") {
      player1 = input;
      var input = prompt("Enter the second user name.\nJust hit enter to let the computer pick.", "Name");
      if (input) {
        if (input !== "Name") {
          player2 = input;
        } // user just hit enter at second prompt: one computer user
        else  {
          player2 = "Computer";
        }
      }  // user cancelled second prompt: one computer user
      else  {
        player2 = "Computer";
      }
    } else if (input == "Name" || input == "") { // user just hit Enter at first prompt:  two computer users
      player1 = "Computer 1";
      player2 = "Computer 2";
  }
  else { //user hit cancel at first prompt
    player1 = "cancel";
  }}
  console.log("Player 1: " + player1);
  console.log("Player 2: " + player2);
}
// function shuffleDeck() {
//   cards = ["2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S", "4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S", "7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S", "10C", "10D", "10H", "10S", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS", "KC", "KD", "KH", "KS", "AC", "AD", "AH", "AS"]
//   cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
//   shuffledCards = [];
//   shuffledValues = [];
//   var yyy = 0;
//   for (i=51; i>=0; i--) {
//     // pickIndex = Math.floor((Math.random() * i) + 1)
//     pickIndex = Math.floor((Math.random() * i));
//     xxx = cards.splice(pickIndex,1);
//     shuffledCards.push(xxx.toString());
//     yyy = cardValues.splice(pickIndex,1);
//     shuffledValues.push(parseInt(yyy.toString(),10));
//     // console.log(i + "  index: " + pickIndex);
//   }
// }
//
//
//
//
//
//
//
//
//
//
//
function buildDeck() {
  var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
  var cards = [];
  var cardValues = [];
  var cardValue = 52;
  for (i = values.length - 1; i >= 0; i--) {
    for (j = suits.length - 1; j >= 0; j--) {
      var outVar = values[i].toString() + suits[j].substring(0,1);
      // console.log("outVar: " + outVar);
      cards.unshift(outVar);
      cardValues.unshift(cardValue);
      cardValue-=1;

      // console.log(i + "  value: " + values[i]);
      // console.log(j + "  suit: " + suits[j]);

    }
  }
}
function shuffleArray(array) {            //borrowed from the Internet
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function deal() {
  var hands = [];
  hands = shuffledValues.splice(0,2);
  // var winner = (hands[0] > hands[1]) ? players[0]:players[1];
  if (hands[0] > hands[1]) {
    winner = players[0];
    wins0 ++;
  } else {
    winner = players[1];
    wins1 ++;
  }
  line1 = players[0] + " draws: " + cards[hands[0]-1] + ", " + players[1] + " draws: " + cards[hands[1]-1];
  line2 = winner + "  wins!";
  line3 = "Score: " + players[0] + ": " + wins0 + ", " + players[1] + ": " + wins1;
  alert(line1 + "\n" + line2 + "\n" + line3 );
  if (shuffledValues.length == 0) {
    console.log("Game Over");
  }
  // alert(players[0] + " draws: " + cards[hands[0]] + ", " + players[1] + " draws: " + cards[hands[1]] + "\n" + winner + "  wins!");

  // alert("Player 1 draws: " + cards[hands[0]] + "\nPlayer 2 draws: " + cards[hands[1]] + "\n" + winner + "  wins!");

}
function gameOver() {
  var gameWinner = "";
  line1 = "Game Over!";
  if (wins0 > wins1) {
    gameWinner = players[0];
    tricksWinner = wins0;
    tricksLoser = wins1;
  } else {
    gameWinner = players[1];
    tricksWinner = wins1;
    tricksLoser = wins0;
  }
  line2 = gameWinner + " wins by a score of " + tricksWinner + " to " + tricksLoser;
  alert (line1 + "\n" + line2);
}
