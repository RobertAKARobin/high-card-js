var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];


var game = {
  deck: [],
  players: [],
  hands: []
  buildDeck: function(){

    for(i=0; i<values.length; i++){
      for(x=0; x<suits.length; x++){

      deck.push(suits[x]+values[i]);


        }
      }

    //pupulates deck with 52 cards
  },
  shuffleDeck: function(){

  },
  getMorePlayers: function(){
    // ask user if they want to add an additional player
  },
  deal: function(){
    //assigns one card to each player
  },
  findHighestCard: function(){
    //find player with the highest card, Ace is highest
  },
  announceWinners: function(){
    /*Alerts the card each player drew, their name, and their ranking. For example, "Alice is number 1 with the 9 of Spades! Bob is number 2 with the 6 of diamonds!" (Dialogs are annoying. How could you show all this in one alert box, rather than one for each player?)
    */
  },
  playANewGame: function(){
    // replays the game 
  }
}

