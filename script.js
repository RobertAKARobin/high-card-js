var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],

  //Populates the `deck` array with 52 standard playing cards.
  buildDeck: function(){
    for (var i = 0; i < suits.length; i++){
      for (var m = 0; m < values.length; m++){
        newCard = {
          suit: suits[i],
          value: values[m]
        }
        game.deck.push[newCard];
        console.log(newCard);
        console.log(newCard.length);
      }
    }
  }, //end of builddeck

  //Randomizes the order of `deck`.
  shuffleDeck: function(){
    function shuffle(array) {
      var currentIndex = array.length;
      var temporaryValue;
      var randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }// end of shuffle(array)
    shuffle(game.deck);
    console.log(game.deck);
  }, // end of shuffle deck
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
