var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [2],
  hands: [4]
var instructor = {
  name: "Players"
  suits: "Deck"
    displayCard:
  buildDeck: function(){
  for (i = 0; i < suits.length; i++) {
    for (k =0; k < values.length; k++){
      deck.push([values[k],suits[i]])
    }
    console.log (deck)

  }

}
},
  shuffleDeck: function(n){
    var i ,j, k;
    var temp;

    for (i=0; i<n; i++)
      for (j=0; j<this.deck.length; j++){
        k= Math.floor(Math.random()*this.card.deck)
        temp = this.cards[j];
        this.cards[j]=this.cards[k];
        this.cards[k]=temp;

      }

  },
  getMorePlayers: function(){
    {}


   },
   deal: function(){



  // },
  // findHighestCard: function(){
    // alert()


  // },
  // announceWinners: function(){
    // alert()


  // },
  // playANewGame: function(){
    // alert()


  // }
// }
