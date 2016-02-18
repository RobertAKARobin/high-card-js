var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var a = "playOne";
var b = "playTwo";
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    vaules.forEach(function (values) {
    suits.forEach(function (suits) {
      })
    })

    game.deck.push(values, suits);
    console.log(buildDeck);
  },
  shuffleDeck: function(){
    var shuffle = math.random()
    if (shuffle < 0) {
      return values;
    } else if (shuffle < 0) {
      return suits;
    } else {

    }
  },
  getMorePlayers: function(){
    var players = this;
    prompt("Enter a new player.")
    this.game.players.push()
    console.log(game.players);
  },
  deal: function(){

  },
  findHighestCard: function(){
    if (true) {

    }

  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
