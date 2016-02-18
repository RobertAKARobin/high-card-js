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
var player =prompt("Enter a new player! Call him (or her) whatever you want!")
  },
  deal: function(){

  },
  findHighestCard: function(){
//use array.sort here probably. No idea how to apply that yet. 
  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}

//not sure if I have to call a bunch of ex: playANewGame.deal or what... totally lost. time-box model ran out hard on this one. :(
