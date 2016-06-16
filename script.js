window.onload = function() {
  var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
game.playANewGame();
}

var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];

var game = {
  deck: [],       // contains a deck of cards
  players: [],     // contains player names
  hands: [],       // contains the values of the cards dealt in a hand
  cardValues: [],  // contains the values of the deck of cards, 1-52
  shuffledValues: [],   // shuffled version of cardValues
  deck: [],        // contains a deck of cards
  players: ["Computer 1", "Computer 2"],     // contains player names
  hands: [],       // contains the values of the cards dealt in a hand
  cardValues: [],  // contains the values of the deck of cards, 1-52
  shuffledValues: [],   // shuffled version of cardValues
  wins0: 0,
  wins1: 1,
  buildDeck: function(){
    console.log("buildDeck");
    var cardValue = 52;
    for (i = values.length - 1; i >= 0; i--) {
      for (j = suits.length - 1; j >= 0; j--) {
        outVar = values[i].toString() + suits[j].substring(0,1);
        // console.log("outVar: " + outVar);
        game.deck.unshift(outVar);
        game.cardValues.unshift(cardValue);
        cardValue-=1;
      }
    }
  },
  shuffleArray: function(array) {         //borrowed from the Internet
    console.log("shuffleArray");
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
    game.shuffledValues = game.shuffleArray(game.cardValues);
  },
  getMorePlayers: function(){  // change the default values in the array if the user enters anything.
    console.log("Get more players");
    var input = prompt("Enter the first user name.\nJust hit enter to let the computer pick names.\nHit Cancel if you don't want to play", "Name");
    if (input) {
      if (input !== "Name") {
        game.players.splice(0, 1, input);
      }
    }
    var input = prompt("Enter the second user name.\nJust hit enter to let the computer pick.", "Name");
    if (input) {
      if (input !== "Name") {
        game.players.splice(1, 1, input);
      }
    }
  },
  deal: function(){
    console.log("deal");
    // use splice to get two cards from the shuffledValues array
    // and put them in the hands array.
    // End with a loop that runs through the deck and execute each trick.
    game.hands = game.shuffledValues.splice(0,2);
    if (game.hands[0] > game.hands[1]) {
      winner = game.players[0];
      game.wins0 ++;
    } else {
      winner = game.players[1];
      game.wins1 ++;
    }
    line1 = game.players[0] + " draws: " + game.deck[game.hands[0]-1] + ", " + game.players[1] + " draws: " + game.deck[game.hands[1]-1];
    line2 = winner + "  wins!";
    line3 = "Score: " + game.players[0] + ": " + game.wins0 + ", " + game.players[1] + ": " + game.wins1;
    alert(line1 + "\n" + line2 + "\n" + line3 );
  },
  findHighestCard: function(){
    // done in the deal routine
  },
  announceWinners: function(){
    var gameWinner = "";
    line1 = "Game Over!";
    if (game.wins0 > game.wins1) {
      gameWinner = players[0];
      var tricksWinner = game.wins0;
      var tricksLoser = game.wins1;
    } else {
      gameWinner = game.players[1];
      tricksWinner = game.wins1;
      tricksLoser = game.wins0;
    }
    line2 = gameWinner + " wins by a score of " + tricksWinner + " to " + tricksLoser;
    alert (line1 + "\n" + line2);
  },
  playANewGame: function(){
    // reset the arrays, get players, shuffle, and deal

    game.getMorePlayers();
    game.buildDeck();
    game.shuffleDeck();
    while (game.shuffledValues.length > 0) {
      game.deal()
      // console.log("Game Over");
    }
    game.announceWinners();

  }
}
