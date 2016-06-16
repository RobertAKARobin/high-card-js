window.onload = function() {
  var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
game.playANewGame();
}

var game = {
  deck: [],        // contains a deck of cards
  players: [],     // contains player names
  hands: [],       // contains the values of the cards dealt in a hand
  cardValues: [],  // contains the values of the deck of cards, 1-52
  shuffledValues: [],   // shuffled version of cardValues
  deck: [],        // contains a deck of cards
  players: [],     // contains player names
  hands: [],       // contains the values of the cards dealt in a hand
  cardValues: [],  // contains the values of the deck of cards, 1-52
  shuffledValues: [],   // shuffled version of cardValues
  buildDeck: function(){
    console.log("buildDeck");
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

        console.log(i + "  value: " + values[i]);
        console.log(j + "  suit: " + suits[j]);

      }
    }
  },
  shuffleArray: function(array) {            //borrowed from the Internet
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  },
  shuffleDeck: function(){
    console.log("shuffleDeck");
    // console.log("shuffleDeck");
    // shuffles the cardValues array.
    shuffledValues = game.shuffleArray(game.cardValues);
  },
  getMorePlayers: function(){
    console.log("Get more players");
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
    //prompt for player names,
  },
  deal: function(){
    // Each trick involves two pops, one for player A and one for player B.
    // create an Trick array that has two cards, one for each player
    // End with a loop that runs through the deck and execute each trick.
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
  },
  findHighestCard: function(){
    // sort the Trick array and return the highest card and winner name
    // done in the deal routine
  },
  announceWinners: function(){
    // call findHighestCard to determine the winner
    // done in the deal routine
  },
  playANewGame: function(){
    // reset the arrays, get players, shuffle, and deal

    game.getMorePlayers();
    game.buildDeck();
    game.shuffleDeck();

  }
}
