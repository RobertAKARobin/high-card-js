var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var numCards = [];
// for(var i =0; i < 52; i++){
//   numCards[i] = i+1;
// }

var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    console.log(values)
    var k =0;
for(var k = 0; k < 13; k++){
    for (var i = 0; i < 4; i++){
      game.deck.push([values[k],suits[i]]);
    }
  }
console.log(game.deck);
  },


  shuffleDeck: function(){
  game.deck.sort(function(a, b){
  var randomNumber = Math.random();
  if(randomNumber < 0.5){
    return 1;
  }else{
    return -1;
  }
});
  console.log(game.deck)
  },
  getMorePlayers: function(){
        var name = prompt("Would you like to add players?");
        var i = 0;
        if (name == "yes"){
          if(game.players[i] == null){
          game.players[0] = response;
        }
      }
  },
  deal: function(){
      // choose (based on the number of random players) random indexes from the array
      //store the cards
  },
  findHighestCard: function(){
      //compare all stored values
      //return highest value card
  },
  announceWinners: function(){
      // winner equals the player with the highest card
  },
  playANewGame: function(){
    buildDeck;
  }
}
