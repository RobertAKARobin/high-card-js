var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    console.log(this);
    var self    = this;
    values.forEach(function(value){
     suits.forEach(function(suit){
       self.deck.push([value, suit]);
     });
   });
  },
  shuffleDeck: function(deck){

  },
  getMorePlayers: function(){
    var playerName = prompt(this.players.length + " player(s) so far. Enter a player name, or click 'cancel' to play.");
      if(playerName){
        this.players.push(playerName);
        this.getMorePlayers(); //this is to rerun the prompt to add more players.
      }
  },

  deal: function(){
    var self = this;
    var announcement = "";
    self.players.forEach(function(player){

    })

  },
  findHighestCard: function(){

  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
