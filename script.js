// $(document).ready(function(){

var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];


var deck = []
console.log(values.length)
for (i=0; i<(suits.length); i++){
  suit = suits[i];
  for(i=0; i<(values.length); i++){
    value = values[i]
    deck.push({Suit:suit, Value:values[i]})
  }
  console.log(deck.length)
}




var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    for (i=0; i<suits.length; i++){
      deck.push(suits[i])
      console.log(suits[i])
    }
  },
  shuffleDeck: function(){
    Math.floor((Math.random()*52)+0)
  },
  getMorePlayers: function(){

  },
  deal: function(){

  },
  findHighestCard: function(){

  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
// })
// console.log(game.deck)
