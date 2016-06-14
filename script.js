var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    for (var i=0; i<values.length;i++){
      for (var x=0;x<suits.length; x++){
        var card = values[i]+suits[x];
        this.deck.push(card);
      }
    }
    return this.deck;
  },
  shuffleDeck: function(){
    for (var i=0; i<52;i++) {
      var randomCard = Math.floor(Math.random()*this.deck.length);
      this.deck.push(this.deck[randomCard])
      this.deck.splice(randomCard,1);
    }
    return this.deck
  },

  getMorePlayers: function(){
    var newPlayerChoice = prompt("~Do you want to add a player~ ??").toLowerCase();
    switch(newPlayerChoice){
      case "yes":
      var newPlayer = prompt("Who is the new player?").toLowerCase();

      var player = {
        name: newPlayer,
        card:[]
      }
      this.players.push(player);
      break;
      default:
    }
  },

  deal: function(){
    this.players.forEach(assignCard)
      function assignCard(playerCard, index) {
          var playerCard = game.deck.pop();
        game.players[index].card.push(playerCard);
      }
    },

//     findHighestCard: function(){
//
//       this.player.forEach(getCard)
//
//       function getCard() {
// console.log(parseInt(this.card));
//   //     - `findHighestCard`: Finds the player with the highest card. Aces are high. For now, don't worry about ties, nor about one suit being more valuable than another suit.
//
// }
//     },
    announceWinners: function(){

    },
    playANewGame: function(){

    }
  }

  game.buildDeck();
  game.shuffleDeck();
  game.getMorePlayers();
  game.getMorePlayers();
  game.deal();
