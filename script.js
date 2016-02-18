var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    var self = this;
    values.forEach(function(x){
      suits.forEach(function(y){
        self.push(deck[x,y]);
    });
  });

  },
  shuffleDeck: function(){
    var self = this;
    self.deck.sort(function() {
     return 0.5 - Math.random();
   },
  getMorePlayers: function(){
    var self = this;
    var getPlayer = prompt("Number of Player:" self.players.length + " What is the name of your player? If you don't want a player, please enter cancel");
    if(getPlayer != "cancel"){
      self.players.push(getPlayer);
      self.getMorePlayers();
    }

  },
  deal: function(){
    var self = this;

  },
  findHighestCard: function(){
    var self = this;
  },
  announceWinners: function(){
    var self = this;

  },
  playANewGame: function(){
    var self = this;
    self.buildDeck();
    self.shuffleDeck();
    self.getMorePlayers();
    self.deal();
    self.findHighestCard();
    self.announceWinners();
  }
}

function gameSetup(){
     var numGames = prompt("How many games do you want to play");
     numGames = parseInt(numGames);
     if (typeof(numGames) != 'number' ){
        var numGames = prompt("Invalid. Please select how many games you want to play");
            gameSetup();
     }
     else{
        playTo(numGames);
     }

function playTo(x){
  for(var i = 0; i<x ; i++){
    console.log("Game number: " + (i+1));
    game.playANewGame();
  }
}

gameSetup();
