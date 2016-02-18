var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  // buildDeck: function(){
  //
  // },
  // shuffleDeck: function(){
  //
  // },
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
