var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [];
  players: [],
  hands: [],
  buildDeck: function(){
    for (i=0, i < values, i++){
      for (j=0, j < suits, j++){
        this.deck.push([values[i],suits[j]]);
      }
    }
  },
  shuffleDeck: function(){
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      
      while (0 !== currentIndex) {


        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;


        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  },
  getMorePlayers: function(){

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
