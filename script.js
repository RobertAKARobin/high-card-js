var cardValues  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];

function BuildDeck(suit,card,index) {
  this.suit = suit;
  this.card = card;
  this.index = index;
}
//work on this later

function Hand(player,card) {
//deck => array of objects
//players => array of strings
//add player key-value pair to deck objs but no more than the number of players there are in the game
  this.player = player;
  this.card = card;
}

var game = {
  deck: [],
  players: [],
  hands: [], //this will hold sub-arrays
  buildDeck: function(){
    var self = this;
    //context of this function is the object game since it is part of a key value pair inside of the object
    // var self = this; --> the reason for this var is that we can use it to refer to a previous value of this
    //                      when this referred to the context of the buildDeck function
      suits.forEach(function(suit) {
        //context of this function changes because not attached to a key in the object, therefore
        //this refers to the Window and not the object; this is a callback function
        //callback functions are NOT always part of the Window object
          cardValues.forEach(function(card, i) {
            //context of this function changes because not attached to a key in the object, therefore
            //this refers to the Window and not the object; this is a callback function
            //callback functions are NOT always part of the Window object
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
  getMorePlayers: function(){
    var moreP = prompt("How many players should there be?");
      if (moreP > 52) {
        alert("The maximum number of players is 52.");
        this.getMorePlayers();
      }
      else {
        for (var i = 1; i <= moreP; i++) {
          this.players.push("Player "+i);
        }
      }
    },
  deal: function() {
    //don't need to use var this = self here because the "thises" are located within the constructor function only
    for (var index = 0; index < this.players.length; index++) {
      var playerCard = new Hand(this.players[index],this.deck[index]);
      this.hands.push(playerCard);
    }
    return this.hands;
  },
  findHighestCard: function(){
    // this.hands[index].card.index value of player's card
    var highCard = 0;
    var self = this;
    var playerHigh;
    //determine what the highCard for the round is
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
