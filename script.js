var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    for (var i=0; i<values.length;i++) {
      for (var j=0; j<suits.length;j++) {
        this.deck.push({ values, suits });
      }
    }
  },
  shuffleDeck: function(){
    var newArray = [];
    for(var j = 0; j < deck.length; j++){
      for(var i = 0; i < deck.length; i++){
        var temp = arrayCards.pop();
        if(Math.random() > .5){
          newArray.push(temp);
        } else{
          newArray.unshift(temp);
        }
      }
      newArray = [];
    }
    // return shuffleDeck;
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
