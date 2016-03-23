var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],

  players: [],

  winners: [],

  hands: [],

  buildDeck: function(){
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < suits.length; j++) {
        game.deck.push([values[i], suits[j]]);
      }
    }
  },

  shuffleDeck: function(){
    newDeck = []
    for (var i = 0; i < game.deck.length; i ++) {
      newCard = parseInt(Math.random() * (game.deck.length));
      newDeck.push(game.deck[newCard]);
      game.deck.splice(newCard, 0);
    }
    game.deck = newDeck;
  },

  getMorePlayers: function(){
    var input;
    var playerName;
    while (input != 'n') {
      input = prompt('Would you like to add a player? (y/n)');
      if (input === 'y') {
        playerName = prompt('What is the new player\'s name?');
        game.players.push(playerName);
      }
    }
  },

  deal: function(){
    //deal hands: hands is an array in the same order as players
    for (var i = 0; i < game.players.length; i ++) {
      game.hands.push(game.deck[game.deck.length-1]);
      game.deck.pop();
    }
  },

  findHighestCard: function(){
    var currentBest;
    var currentBestVal;
    var val;
    for (var i = 0; i < game.hands.length; i++){
      if (typeof game.hands[i][0] == "number") {
        val = game.hands[i][0];
      }
      else if (game.hands[i][0] === "J") {
        val = 11;
      }
      else if (game.hands[i][0] === "Q") {
        val = 12;
      }
      else if (game.hands[i][0] === "K") {
        val = 13;
      }
      else if (game.hands[i][0] === "A") {
        val = 14;
      }
      if (game.winners.indexOf(i) > -1) {
        continue;
      }
      else if (typeof currentBest != "number") {
        currentBest = i;
        currentBestVal = val;
      }
      else if (val > currentBestVal) {
        currentBest = i;
        currentBestVal = val;
      }
    }
    game.winners.push(currentBest);
    return currentBest;
  },

  announceWinners: function(){
    var winnerest;
    alertText = '';
    for (var i = 0; i < game.players.length; i++) {
      winnerest = game.findHighestCard();
      alertText += game.players[winnerest] + " is in the number " + (i + 1) + " spot with a " + game.hands[winnerest][0] + " of " + game.hands[winnerest][1] + "! ";
    };
    alert(alertText);
  },

  playANewGame: function(){
    game.buildDeck();
    game.shuffleDeck();
    game.getMorePlayers();
    game.deal();
    game.announceWinners();
  }
}

game.playANewGame();
