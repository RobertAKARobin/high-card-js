var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    var numberOfCardValues = values.length;
    var numberSuits = suits.length;
    var numberOfCards = 1;
    for(var v = 0; v < numberOfCardValues; v++){
      for(var s = 0; s < numberSuits; s++){
        var card = values[v]+"-"+suits[s];
        game.deck.push(card);
        console.log(game.deck.length);
      }
    }return game.deck;
  },
  shuffleDeck: function(){
    //Shuffle ARRAY Elements
          var currentIndex = game.deck.length;
          var temporaryValue;
          var randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = game.deck[currentIndex];
            game.deck[currentIndex] = game.deck[randomIndex];
            game.deck[randomIndex] = temporaryValue;
            console.log(game.deck[randomIndex]);
          }
          	return game.deck;

  },
  getMorePlayers: function(){
    while(true){
      alert("Enter player name, or type DONE to stop.");
      var playerName = prompt();
      if(playerName == "DONE"){
        break;
      }else{
        game.players.push(playerName);
      }
    }
  },
  deal: function(){
    var cardsToDeal = game.players.length;
    //Deal one card for each playerName
    for(var d = cardsToDeal; d > 0; d--){
      var card = game.deck.pop();
      console.log(card);
      game.hands.push(card);
    }
  },
  findHighestCard: function(){
    game.hands.sort();
    console.log(game.hands[0]);
    alert("Highest Card is: " + game.hands[0]);
  },
  announceWinners: function(){
    var announcement = "The PLAYER with the " + game.hands[0] + " is the WINNER!!!";
    alert(announcement);
  },
  playANewGame: function(){
    game.buildDeck();
    game.shuffleDeck();
    game.getMorePlayers();
    game.deal();
    game.findHighestCard();
    game.announceWinners();
  }
}
game.playANewGame();
