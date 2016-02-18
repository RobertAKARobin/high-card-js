var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  /*game.deck becomes an array of arrays, with each inside array holding one value and one suit 'pair'.*/
  buildDeck: function(){
    for(i = 0; i<values.length; i++){
      for(j = 0; j<suits.length; j++){
        game.deck.push([values[i],suits[j]]);
      };
    };
    return game.deck;
  },
  // shuffleDeck: function(){
  //
  // },
  /*game.getMorePlayers asks for number of players and then a name for each player and saves to game.players*/
  getMorePlayers: function(){
    var addPlayer = prompt("Do you want to add an additional player?", "Type 'Y' for 'Yes' Or 'N' for 'No'");
    if((addPlayer === 'y')||(addPlayer === 'Y')){
        var playerNum = prompt("How many new players", "Type a number 1-4");
        for(i = 0; i<playerNum; i++){
          var fname = prompt("What is new players name?", "Type Name");
          game.players[i] = fname;
        };
    }else{
      alert("Okay, I will shuffle the deck.");
    }
  // },
  // deal: function(){
  //
  // },
  // findHighestCard: function(){
  //
  // },
  // announceWinners: function(){
  //
  // },
  // playANewGame: function(){

  }
}
