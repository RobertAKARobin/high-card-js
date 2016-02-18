var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    values.forEach(
      function(value) {
        suits.forEach(
          function(suits) {
            game.deck.push([value, suits])
          }
        )
      }
    )
  },
  shuffleDeck: function(){

    var totalCards = game.deck.length;
    var lastCard;
    var randomCard;

    while (totalCards) {


      randomCard = Math.floor(Math.random() * totalCards--);


      lastCard = game.deck[totalCards];
      game.deck[totalCards] = game.deck[randomCard];
      game.deck[randomCard] = lastCard;
    }
    return game.deck;
},
  getMorePlayers: function(){
    var newPlayer = prompt("Would you like to add a new player? Answer 'yes' or 'no'.")
      if (newPlayer == "yes") {
        var player = prompt("What is their name?")
        game.players.push([player])
      }
      else if (newPlayer =="no") {
      }
    },
  deal: function(){
    game.players.forEach(
      function(player) {
        game.deck.forEach(
          function(card) {
            game.hands.push([player, card])
          }
        )
      }
    )
  },
  findHighestCard: function(){

    if (game.hands[1] > game.hands[1]) {
      console.log("Player " + game.hands[0] + " wins!")
    }
    else if (game.hands[])





  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}




game.getMorePlayers()
