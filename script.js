var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    for (var i=0; i<values.length;i++){
      for (var x=0;x<suits.length; x++){
        var card = {
          value: values[i],
          suit: suits[x],
          trueDetective: i
        }
        this.deck.push(card);
      }
    }
    return this.deck;
  },
  shuffleDeck: function(){
    for (var i=0; i<52;i++) {
      var randomCard = Math.floor(Math.random()*this.deck.length);
      this.deck.push(this.deck[randomCard])
      this.deck.splice(randomCard,1);
    }
    return this.deck
  },

  getMorePlayers: function(){
    var addingPlayers = true;
    while (addingPlayers === true){
      var newPlayerChoice = prompt("~Do you want to add a player Y/N ~ ??").toLowerCase();
      switch(newPlayerChoice){
        case "y":
        var newPlayer = prompt("Who is the new player?").toLowerCase();

        var player = {
          name: newPlayer,
          hand:[]
        }
        this.players.push(player);
        break;

        case "n":
        return addplayers=false;
      }
    }
  },

  deal: function(){
    this.players.forEach(assignCard)
    function assignCard(playerCard, index) {
      var playerCard = game.deck.pop();
      game.players[index].hand.push(playerCard);
    }
  },

  findHighestCard: function(){
    game.players.sort(function(a, b){return b.hand[0].trueDetective-a.hand[0].trueDetective});
  },


  announceWinners: function(){

    for (var i=0; i < game.players.length; i++){
      console.log("Number "+(i+1)+" is "+game.players[i].name+" with the "+game.players[i].hand[0].value+" of "+game.players[i].hand[0].suit+"!")
    }


  },
  playANewGame: function(){
    var playingAgain = prompt("Do you want to play again? Y/N").toLowerCase();
    if (playingAgain === "y"){
      this.players=[];
      play();
    }
  }
}

function play(){
  game.shuffleDeck();
  game.getMorePlayers();
  game.deal();
  game.findHighestCard()
  game.announceWinners();
  game.playANewGame();
}

game.buildDeck();
play();
