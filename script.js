var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],

  //`buildDeck`: Populates the `deck` array with 52 standard playing cards.
  buildDeck: function(){
    for(var i=0; i<suits.length; i++){
      for(var j=0; j<values.length; j++){

        var total = values[j] + " of " + suits[i];
        game.deck.push(total);
      }
    }
    return game.deck;
  },

  //`shuffleDeck`: Randomizes the order of `deck`.
  shuffleDeck: function(){
    for(var i = game.deck.length-1; i>0; i--){
      var j = Math.floor(Math.random() * (i+1));
      var temp = game.deck[i];
      game.deck[i] = game.deck[j];
      game.deck[j] = temp;
    }
    return game.deck;
  },

  //`getMorePlayers`: Asks the user if they want to add an additional player to the game. If they do, the player is added to the `players` array. If not, the script continues.
  getMorePlayers: function(){
    var addPlayer = prompt("Would you like to add a player? (Y/N)");

    if(addPlayer == "Y"){
      add();
    }
    else if(addPlayer == "N"){
      console.log("Play away!");
    }
    else{
      console.log("Invalid entry");
      game.getMorePlayers();
    }

    function add(){
      var name = prompt("What's your name?");
      game.players.push(name);
      more();
    }

    function more(){
      var morePlayers = prompt("Would you like to add more players? (Y/N)")
      if(morePlayers == "Y"){
        add();
      }
      else if(morePlayers == "N"){
        console.log("Go ahead a play!")
      }
      else{
        console.log("Invalid entry");
        game.getMorePlayers();
      }
    }
    return game.players;
  },
  
  //`deal`: Assigns one card to each player.
  deal: function(){

  },
  findHighestCard: function(){

  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
