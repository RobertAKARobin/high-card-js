var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    for (i = 0; i < values.length; i += 1) {
        for (j = 0; j < suits.length; j += 1)
    game.deck.push(values[i] + " of " + suits[j]);
    }

  },
  shuffleDeck: function(){
    game.deck.sort();
  },
  getMorePlayers: function(){
    game.players.push(prompt('Would you like to add another player to the game?  If so, type their name.'))

  },
  deal: function(){
    //for (i = 0; i < game.players.length; i += 1) {
    //hands.push.(players[i] +
    var card = game.deck[parseInt(Math.random() * game.deck.length)]
    console.log(card)
    game.hands.push({playerName: game.players[0], dealtCard: card})
    
  },
  findHighestCard: function(){

  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
