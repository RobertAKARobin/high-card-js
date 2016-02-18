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
    } console.log(game.deck)

  },
  shuffleDeck: function(){
    game.deck.sort();
    console.log(game.deck)
  },
  getMorePlayers: function(){
    game.players.push(prompt('Would you like to add another player to the game?  If so, type their name.'))
    console.log(game.players)
  },
  deal: function(){
    //for (i = 0; i < game.players.length; i += 1) {
    //hands.push.(players[i] +
    for (i = 0; i < game.players.length; i += 1) {
      var card = game.deck[parseInt(Math.random() * game.deck.length)]
      game.hands.push({playerName: game.players[i], dealtCard: card})
    }
    console.log(game.hands)

  },
  findHighestCard: function(){
    if (parseInt(game.hands[0].dealtCard) > parseInt(game.hands[1].dealtCard)) {
      console.log(game.hands[0].playerName + ' wins!');
    } else if (parseInt(game.hands[0].dealtCard) < parseInt(game.hands[1].dealtCard)) {
        console.log(game.hands[1].playerName + ' wins!');
    } else if (parseInt(game.hands[0].dealtCard) === (parseInt(game.hands[1].dealtCard))) {
        console.log('game tied');
      } else null;
  },

  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
