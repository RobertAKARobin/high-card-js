var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [], // Note! Array of objects!
  buildDeck: function(){
    var self = this
    values.forEach(function(value)
    {
      suits.forEach(function(suit)
      {
        self.deck.push([value, suit]);
      });
    });
  },

  shuffleDeck: function(){
    // Using the Fisher-Yates (Knuth) shuffle
    var currentIndex = this.deck.length
      , temporaryValue
      , randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.deck[currentIndex];
      this.deck[currentIndex] = this.deck[randomIndex];
      this.deck[randomIndex] = temporaryValue;
    }
  },

  getMorePlayers: function(){
    var name = window.prompt("Enter the name of a new player or press 'cancel' to begin game.")
    if(name)
    {
      this.players.push(name);
      this.getMorePlayers();
    }
  },

  deal: function(){
    var self = this;
    var text = "";
    this.players.forEach(function(player){
      var card = self.deck.pop();
      text += player + ": " + card[0] + " of " + card[1] + ".\n";
      self.hands.push({player: player, value: card[0], suit: card[1]}) //Array of objects!
    });
    window.alert(text);
  },

  findHighestCard: function(){
    this.hands.sort(function(hand1, hand2)
    {
      if(values.indexOf(hand1.value) > values.indexOf(hand2.value))
      {
        return -1;
      }
      else {
        return 1;
      };
    });
  },

  announceWinners: function(){
    var text = "";
    this.hands.forEach(function(hand, place)
    {
      text += hand.player + " is number " + (place + 1) + ", with the " + hand.value + " of " + hand.suit + ".\n";
    });
    window.alert(text);

  },
  playANewGame: function(){
    this.buildDeck();
    this.shuffleDeck();
    this.getMorePlayers();
    this.deal();
    this.findHighestCard();
    this.announceWinners();

  }
}
