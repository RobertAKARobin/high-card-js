var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  power: [],
  buildDeck: function(){
    // loop through the values array. For every value in values, loop through
    // the suits array.  Combine the two values to get 2C, 2H, 4D, etc. and
    // put each element in the value array.
    var pValue = 52;
    for (i = values.length - 1; i >= 0; i--) {
      for (j = suits.length - 1; j >= 0; j--) {
        var outVar = values[i].toString() + suits[j].substring(0,1);
        cards.unshift(outVar);
        pValues.unshift(pValue);
        pValue-=1;
      }
    }
  },
  shuffleDeck: function(){
    // build an array of 52 random numbers.
    // fruits.splice(n, 1);
    // end up with an array containing pointers with the shuffled cards.
    // n=52
    // do n = 52 to 0
    // pick a random number between 1 and n --> x
    // j = splice element x from the cards array
    // push j to shuffled
    // loop
    shuffled = [];
    for (i=52; i>0; i--) {
      pickIndex = Math.floor((Math.random() * i) + 1

    }

    Math.floor((Math.random() * 10) + 1
  },
  getMorePlayers: function(){
    //prompt for player names, 
  },
  deal: function(){
    // Each trick involves two pops, one for player A and one for player B.
    // create an Trick array that has two cards, one for each player
    // End with a loop that runs through the deck and execute each trick.
  },
  findHighestCard: function(){
    // sort the Trick array and return the highest card and winner name
  },
  announceWinners: function(){
    // call findHighestCard to determine the winner
  },
  playANewGame: function(){
    // reset the arrays, get players, shuffle, and deal
  }
}
