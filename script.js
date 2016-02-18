var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    values.forEach(function (a) {
      for(var i = 0; i < suits.length; i++) {
        game.deck.push(a + ' of ' + suits[i]);
      }
      return this.deck;
    });
  },
  shuffleDeck: function(){
    var input = this.deck;

    for (var i = this.deck.length-1; i >=0; i--) {

       var randomIndex = Math.floor(Math.random()*(i+1));
       var itemAtIndex = this.deck[randomIndex];

       this.deck[randomIndex] = this.deck[i];
       this.deck[i] = itemAtIndex;
    }
     return this.deck;

  },
  getMorePlayers: function(){
    var name = prompt('enter player name:');
    this.players.push({person: name});
    var ans = prompt('enter another?(y/n)');
    if (ans == 'y') {
      this.getMorePlayers();
    } else if (ans == 'n'){
      return;
    }
  },
  deal: function(){
    for(var i = 0; i < this.players.length; i++) {
      this.players[i].card = this.deck[i];
    }
  },
  findHighestCard: function(){
    for (var i = 1; i < this.players.length; i++) {
      if (this.players[i].card > this.players[i - 1]) {
        this.players[i-1] = this.players[i];
      }
    }
    return this.players;
  },
  announceWinners: function(){
    var announcement = '';
    for (var i = 0; i < this.players.length; i++) {
       announcement += this.players[i].person + ' is number ' + (i + 1) + ' with ' + this.players[i].card + '! ';
    }
    alert(announcement);
  },
  playANewGame: function(){
    this.buildDeck();
    this.shuffleDeck();
    alert('Hello there! (building deck...casino dealer deck magic in process...deck built)');
    this.getMorePlayers();
    var inGame = '';
    for (var i = 0; i < this.players.length; i++) {
      inGame += ' ' + this.players[i].person + '!';
    }
    alert('your lineup is ' + inGame);
    this.deal();
    this.findHighestCard();
    this.announceWinners();
    return;
  }
}

game.playANewGame();
/*
psuedocode

run playANewGame() to start game
  adds players
start by building deck
  use for loop within a for loop i.e.
      buildDeck() {
        this.suits[i]
          this.values[i]
            this.suits[i] + this.values[i] --> this.deck
        alert('built deck...' + this.deck)
        return game.deck
      }

    *use concat() to put 2 + 'clubs', etc together,
    so, deck array looks like [2clubs, 3clubs, 4clubs...2Diamonds, 3Diamonds...Aspades etc..];

then run shuffleDeck() to randomize game.deck

then run get more players to add more players
  use prompt to get a player's name
  then this.players.push(prompt name input)


then use deal() to put random cards into hands
  players.forEach(function (a, itemAtIndex) {
    a.card = this.deck[index];
  })

then run findHighestCard()
  for (var i = 0; i < this.players.length; i++) {
    this.hands.unshift(this.players[i].card);
  }

then run announceWinners()
  var announcement = '';
  for (var i = 0; i < this.hands.length; i++) {
    announce += hands[i].name + ' is number ' + (i + 1) + ' with ' + hands[i].card + '! ';
  }
  alert('announcement')
*/
