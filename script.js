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
    self.hands.sort(function(a, b){
      if(values.indexOf(a.value) > values.indexOf(b.value)) return -1;
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
