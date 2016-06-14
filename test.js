var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var cards = [];
var pValues = [];
function buildDeck() {
  var pValue = 52;
  for (i = values.length - 1; i >= 0; i--) {
    for (j = suits.length - 1; j >= 0; j--) {
      var outVar = values[i].toString() + suits[j].substring(0,1);
      // console.log("outVar: " + outVar);
      cards.unshift(outVar);
      pValues.unshift(pValue);
      pValue-=1;

      // console.log(i + "  value: " + values[i]);
      // console.log(j + "  suit: " + suits[j]);

    }
  }
}
