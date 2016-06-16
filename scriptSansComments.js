var cardValues  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];

function Hand(player,card) {
  this.player = player;
  this.card = card;
}

var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    var self = this;
      suits.forEach(function(suit) {
          cardValues.forEach(function(card, i) {
            self.deck.push(
            {
              suit:suit,
              card:card,
              index:i
            }
          );
        });
      });
      return this.deck;
    },
  shuffleDeck: function(){
    var holdArray = [];
    for (var i = 0; i < 52; i++) {
      holdArray = holdArray.concat(this.deck.splice(Math.random()*this.deck.length-1,1));
    }
    this.deck = holdArray;
    return this.deck;
  },

    var moreP = prompt("How many players should there be?");
      }
        }
    for (var index = 0; index < this.players.length; index++) {
      var playerCard = new Hand(this.players[index],this.deck[index]);
      this.hands.push(playerCard);
    }
    return this.hands;
  },
  findHighestCard: function(){
    var highCard = 0;
    var self = this;
    var playerHigh;
    for (var handsIndex = 0; handsIndex < this.hands.length; handsIndex++) {
      playerCard = this.hands[handsIndex].card.index;
      if (playerCard > highCard) {
        highCard = playerCard;
        playerHigh = this.hands[handsIndex].player;
      }
    }
    return [playerHigh, highCard];
  },
  announceWinners: function(){
    return this.findHighestCard()[0]+" Wins!";
  },
  playANewGame: function(){
    this.deck = [];
    this.players = [];
    this.hands = [];
  }
}
