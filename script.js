var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    values.forEach(function(value) {
      suits.forEach(funcion(suit) {
        this.deck.push[(value,suit)];
      } );
    } );
  },
  shuffleDeck: function(){
    deck.sort(function();
  );
  },
  getMorePlayers: function(){
    var playerName;
    prompt("There are " + players.length + "players thus far. Do you want to add another player?");
    players.push(playerName);
    players.getMorePlayers();

  },
  deal: function(){
    //give each player one card//
  },
  findHighestCard: function(){
    //highest card between 2 and Ace//
  },
  announceWinners: function(){

  },
  playANewGame: function(){
    //repeat all functions: buildDeck(), shuffleDeck(), getMorePlayers(), deal(), findHighestCard(), announceWinners(), playANewGame()//
  }
}
