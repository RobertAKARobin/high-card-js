var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
      for (var myRank = 0; myRank < values.length; myRank++) {
        for (var mySuit = 0; mySuit < suits.length; mySuit++) {
          this.deck.push({ "rank" : values[myRank], "suit" : suits[mySuit]});
        }
      }
  },
  shuffleDeck: function(){
    var currentIndex = this.deck.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.deck[currentIndex];
      this.deck[currentIndex] = this.deck[randomIndex];
      this.deck[randomIndex] = temporaryValue;
    }
  },
  getMorePlayers: function(){
    var message = "Enter the name of a new player.";
    var defaultText = "Name";
    var name = "";
    while (this.players.length < 2) {
      name = prompt(message,defaultText);
      this.players.push(name);
    }
    message += "\nLeave blank to stop adding players."
    while (name = prompt(message,"")) {
      this.players.push(name);
    }
  },
  deal: function(){
    for (var i = 0; i < this.players.length; i++) {
      console.log(this.players[i] + this.deck.pop() );
      this.hands.push([this.players[i],this.deck.pop()]);
    }
  },
  findHighestCard: function(){
    this.hands = this.hands.sort( function(a,b) {
      var cardA = a[1];
      var cardB = b[1];
      if (values.indexOf(cardA.rank) < values.indexOf(cardB.rank)) {
        return -1;
      }
      else if (values.indexOf(cardA.rank) > values.indexOf(cardB.rank)) {
        return  1;
      }
      else if (suits.indexOf(cardA.suit) < suits.indexOf(cardB.suit)) {
        return -1;
      }
      else if (suits.indexOf(cardA.suit) > suits.indexOf(cardB.suit)) {
        return 1;
      }
      else {
        return 0;
      }
    }

  );},
  announceWinners: function(){
    var next;
    var winner = this.hands.pop();
    var msg = winner[0] + " is the winner, with the " + winner[1].rank + " of " + winner[1].suit + "\n";
    while (next = this.hands.pop()) {
      msg += next[0] + " is next, with the " + next[1].rank + " of " + next[1].suit + "\n";
    }
    alert(msg);
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
