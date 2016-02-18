var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    for (i = 0; i < values.length; i += 1) {
        for (j = 0; j < suits.length; j += 1)
    game.deck.push({cardValue: values[i], cardSuit: suits[j]});
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

    /**
    player1 = game.hands[0].dealtCard.cardValue
    player2 = game.hands[1].dealtCard.cardValue
    var J = 11
    var Q = 12;
    var K = 13;
    var A = 14;
    console.log(player1 + " and " + player2)
    **/

    if (game.hands[0].dealtCard.cardValue === 'J') {
      game.hands[0].dealtCard.cardValue = 11;
    } else if (game.hands[0].dealtCard.cardValue === 'Q') {
      game.hands[0].dealtCard.cardValue = 12
    } else if (game.hands[0].dealtCard.cardValue === 'K') {
      game.hands[0].dealtCard.cardValue = 13
    } else if (game.hands[0].dealtCard.cardValue === 'A') {
      game.hands[0].dealtCard.cardValue = 14
    } else if (game.hands[1].dealtCard.cardValue === 'J') {
      game.hands[1].dealtCard.cardValue = 11
    } else if (game.hands[1].dealtCard.cardValue === 'Q') {
      game.hands[1].dealtCard.cardValue = 12
    } else if (game.hands[1].dealtCard.cardValue === 'K') {
      game.hands[1].dealtCard.cardValue = 13
    } else if (game.hands[1].dealtCard.cardValue === 'A') {
      game.hands[1].dealtCard.cardValue = 14
    } else

    if (game.hands[0].dealtCard.cardValue > game.hands[1].dealtCard.cardValue) {
      console.log(game.hands[0].playerName + ' wins!');
    } else if (game.hands[0].dealtCard.cardValue < game.hands[1].dealtCard.cardValue) {
        console.log(game.hands[1].playerName + ' wins!');
    } else if (game.hands[0].dealtCard.cardValue === game.hands[1].dealtCard.cardValue) {
        console.log('game tied');
      } else null;
  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
