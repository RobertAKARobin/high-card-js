var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];

var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    values.forEach(function(eachValue){
      var worthOfCard = values.indexOf(eachValue);
      suits.forEach(function(eachSuit){
        var newCard = {
          value: eachValue,
          suit: eachSuit,
          worth: worthOfCard
        }
        game.deck.push(newCard);
      });
    });
  },
  shuffleDeck: function(){
    var shuffled = [];
    game.deck.sort(function(cardOne, cardTwo){
      if(Math.random() > 0.5){
        return 1;
      }else{
        return -1;
      }
    });
  },
  getMorePlayers: function(){
    while(true){
      alert("Enter player's name or type STOP to stop");
      var playerName = prompt();
      if (playerName === "STOP"){
        break;
      } else {
        game.players.push(playerName);
      }
    }
  },
  deal: function(){
    alert("Dealing...");
    game.players.forEach(function(player){
      var card = game.deck.pop();
      card.player = player;
      alert(card.player + " has been dealt the " + card.value + " of " + card.suit);
      game.hands.push(card);
    })
  },
  findHighestCard: function(){
    game.hands.sort(function(cardOne,cardTwo){
      if(cardOne.worth > cardTwo.worth){
        return 1;
      }else{
        return -1;
      }
    });
  },
  announceWinners: function(){
    var place = game.players.length;
 alert("And the winners are...");
 game.hands.forEach(function(card){
   alert(card.player + " is number " + place + " with the " + card.value + " of " + card.suit + "!");
   place = place - 1;
 });
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
  console.log(game);
