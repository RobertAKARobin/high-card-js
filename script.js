var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    for(i=0; i<values.length; i++){
      for(j=0; j<suits.length; j++){
        this.deck.push([values[i], suits[j]])
      }
    }
  },
  shuffleDeck: function(){
      var currentIndex = game.deck.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = game.deck[currentIndex];
        game.deck[currentIndex] = game.deck[randomIndex];
        game.deck[randomIndex] = temporaryValue;
      }
  },
  getMorePlayers: function(){
    var playerNum = prompt("Enter number of additional players");
    for(k=0; k<playerNum; k++){
      var playerName = prompt("Enter a name")
      this.players.push(playerNameg)
    }
  },
  deal: function(){

  },
  findHighestCard: function(){

  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
