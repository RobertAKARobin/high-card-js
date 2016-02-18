// During the review I noticed (he also did a disclaimer that he would) that Robin said he was just going to go with it
// as he codes.  I had assumed that durin the course it would be better "practice" if I used the lessons from the day/week
// so I tried to make the self and this use compared to what was shown.  Does it matter "how" I code since there is
// always a different way to do the same thing just depends on what makes sense to me and I use proper commenting?

var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", "Joker"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    var self. = this;
    values.forEach(function(value){
      // console.log("Value" + value)
      suits.forEach(function(suit){
        // console.log("Suit" + suit)
        self.deck.push([value, suit]);
        // console.log(deck) & console.dir(deck)
        // could also utilize game.deck.push
      });
    });
  },
  shuffleDeck: function(){
    this.deck.sort(function(){
      if(Math.random() > 0.5) return 1; // using .5 because it will be 0-0. something
      else return -1;
    });
  },
  // OR var shuffled = [];
  // game.deck.forEach(function(card){
  //console.log(card)
//})
  getMorePlayers: function(){
    var playerName = prompt(this.player.length + "play.");
    if(playerName){
      this.players.push(playerName);
      this.getMorePlayers();
    }
  },
  deal: function(){
    var self = this;
    var announcement = "";
    self.playes.forEach(function(player){
      var card = self.deck.pop();
      announcement += player + " has the " + card[0] + " of " + card[1] + "!\n";
      self.hand.push({player: player, value: card[0], suit: card[1]});
    });
    alert(announcement);
  },
  findhighestCard: function(){
    var self  = this;
    self.hands.sort(function(value, suit){
      if(values.indexOf(value.value) > values.indexOf(suit.value)) return -1;
      else return 1;
    });
  },
  announceWinners: function(){
    var self = this;
    var announcement = "";
    // self.forEach(function(hand, place){  Having problems with this one I think its hand but does not seem to work?
      announcement += hand.player + " is number " + (place + 1) + " with the " + hand.value + " of " + hand.suit + "!\n";
    });
    alert(announcement);
  },
  playANewGame: function(){
    var self = this;
    self.buildDeck();
    self.shuffleDeck();
    self.getMorePlayers();
    self.deal();
    self.findHighestCard();
    self.announceWinners();
  }
}
game.playANewGame();
