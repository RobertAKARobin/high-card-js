var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    for (var v = 0; v < values.length; v++){
      for (var s = 0; s < suits.length; s++){
      game.deck.push({value: values[v], suit: suits[s], assignedValue: v});
      }
    }
    return game.deck
  },
  shuffleDeck: function(){
    for (var v = game.deck.length - 1; v > 0; v -= 1){
      s = Math.floor(Math.random() * game.deck.length)
      game.deck.push(game.deck[s]);
      game.deck.splice(s, 1);
    }
    return game.deck
  },
  getMorePlayers: function(){
    var newPlayer = prompt("Would you like to add an additional player?")
    switch(newPlayer){
      case "Yes":
        var playerName = prompt("What is your name?")
        game.players.push({name: playerName, hand:[]})
      default:
        break;
    }
    return game.players
  },
  deal: function(){
    // for (var i = 0; i < this.players.length; i++){
    //   if (this.deck.length > 0){
    //      var playerCard = this.deck.shift();
    //      var currentPlayer = game.players[i]
    //      currentPlayer.hand.push(playerCard)
    //    }
    //    else{
    //     return null;
    //   }
    // }
    game.players.forEach(assignCard)
     function assignCard(playerCard, index) {
         var playerCard = game.deck.shift();
       game.players[index].hand.push(playerCard);
     }
  },
  findHighestCard: function(){
    for (var i = 0; i < game.players.length; i++){
      // console.log(game.players[i].hand[0].assignedValue)
      var playerValue = game.players[i].hand[0].assignedValue
      // game.players.sort(playerValue);
    }
  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
game.buildDeck();
game.shuffleDeck();
