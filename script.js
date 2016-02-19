var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  //Populates the deck array with 52 standard playing cards.
  buildDeck: function(){
    //for loop to output values four times
    var max = suits.length;
    for (var i = 0; i < max; i++) {
        for (var j = 0; j < values.length; j++) {
        //create deck array with values and suits subarrays
        game.deck.push([values[j],suits[i]]);
      }
    }
  },

  //Randomizes the order of deck.
  shuffleDeck: function(){
    //I copied the code from this site and adapted it: https://bost.ocks.org/mike/shuffle/

      var m = game.deck.length, t, i;
      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = game.deck[m];
        game.deck[m] = game.deck[i];
        game.deck[i] = t;
      }
      return game.deck;
  },

  //Asks the user if they want to add an additional player to the game.
  //If they do, the player is added to the players array. If not, the script continues.
  getMorePlayers: function(){
      var addPlayer = prompt("Currently " + game.players.length + " player(s). Add player name(s) separated by a comma (,) to join game. Otherwise, hit 'Cancel'.");
      game.players.push(addPlayer.split(", "));
  },

  //Assigns one card to each player.
  deal: function(){

    //forEach value in players, pop a card- game.deck.pop();
    game.players.forEach(function() {
      var cardDrawn = game.deck.pop();
      var max = game.players.length;
      for (var k = 0; k < max; k++) {
      var cardDrawn = game.deck.pop();
        game.hands.push([game.players[k], cardDrawn]); //currently only adds one card to hands
      //}

    })
    //create hands array = [[player], [popped card]]

    //pop a card from deck

    //create game.hands.push([players[k], cardDrawn);
  },

  //Finds the player with the highest card. Aces are high.
  //For now, don't worry about ties, nor about one suit being more valuable than another suit.
  findHighestCard: function(){

  },

  //Alerts the card each player drew, their name, and their ranking.
  //For example, "Alice is number 1 with the 9 of Spades! Bob is number 2 with the 6 of diamonds!"
  //(Dialogs are annoying. How could you show all this in one alert box, rather than one for each player?)
  announceWinners: function(){

  },

  //Runs all the previous methods in the proper order.
  playANewGame: function(){

  }
}

//game.buildDeck.call();
