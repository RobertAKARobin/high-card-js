
// function getPlayers() {  // does not handle null response
//   // var person1 = "";
//   // var person2 = "";
//   var person1 = prompt("Enter the first user name.\nJust hit enter to let the computer pick names.", "Name");
//   if (person1 == ("Name" || "" || null)) {
//     var person1 = "Computer 1";
//     var person2 = "Computer 2";
//   } else {
//     var person2 = prompt("Enter the second user name.\nJust hit enter to let the computer pick.", "Name");
//     if (person2 == ("Name" || "" || null)) {
//       var person2 = "Computer 2";
//     }
//   }
//
//
//   console.log("Player 1: " + person1);
//   console.log("Player 2: " + person2);
// }
function shuffleDeck() {
  cards = ["2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S", "4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S", "7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S", "10C", "10D", "10H", "10S", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS", "KC", "KD", "KH", "KS", "AC", "AD", "AH", "AS"]
  shuffled = [];
  for (i=51; i>=0; i--) {
    // pickIndex = Math.floor((Math.random() * i) + 1)
    pickIndex = Math.floor((Math.random() * i));
    xxx = cards.splice(pickIndex,1);
    shuffled.push(xxx.toString());
    // console.log(i + "  index: " + pickIndex);
  }
}











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
