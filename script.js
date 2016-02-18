var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
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
    var text;
    this.hands.forEach(function(hand, place)
    {
      text += hand.player + "is number " + (place + 1) + ", with the " + hand.value + " of " + "hand.suit" + ".";
    });
    window.alert(text);

  },
  playANewGame: function(){

  }
}
