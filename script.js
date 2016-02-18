var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],  //why are these in [] with nothing in them?
  players: [],
  hands: [],
  buildDeck: function(){  //I know this has to do with annonymous functions and "this" but right now all I know is that if I wrote the word "this" it would be referencing "game" which is a "global" variable. That's all I got. I know I WANT to make a DECK that has values and suits mixed together. I think that "math.random" function will maybe help but... how?//
  values.forEach(function(value)).bind() //<<- I know bind can "remind " an annonymous function of a this but...I don't understand why we are using annonymous functions anyway. I'm sorry. 
  },
  shuffleDeck: function(){

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
