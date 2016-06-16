var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var players = 0
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    for (var i=0; i<13; i++) {
      //create cards 1-13 suit Clubs
      game.deck[i] = {value:values[i],suit:suits[0],points:i,playerID:0};
      //create cards 1-13 suit Diamonds
      game.deck[i+13] = {value:values[i],suit:suits[1],points:i,playerID:0};
      //create cards 1-13 suit Hearts
      game.deck[i+26] = {value:values[i],suit:suits[2],points:i,playerID:0}
      //create cards 1-13 suit Spades
      game.deck[i+39] = {value:values[i],suit:suits[3],points:i,playerID:0}
    }
  },
  shuffleDeck: function(){
  var cardToShuffle = game.deck.length
  var tempHold = []
  var randomCard = []
  // While there remain cards to shuffle…
  while (cardToShuffle) {
    // Pick a card any card.
    randomCard = Math.floor(Math.random() * cardToShuffle--);
    // And swap it with the current card.
    tempHold = game.deck[cardToShuffle];
    game.deck[cardToShuffle] = game.deck[randomCard];
    game.deck[randomCard] = tempHold;

  }
  },
  getMorePlayers: function(){
    for (var i=0; i<6; i++) {
     var tempName = prompt("Enter Player's name: ")
     if (!tempName){
       return;
     }
     game.players[i] = tempName
     if (i == 5){
        console.log("Maximum of six players has been reached")
     }
   }
  },
  deal: function(){
    l = game.deck.length
    for (var l = 0; l < game.deck.length;l=l+game.players.length){
    game.hands = []
    if ((game.deck.length-l) < game.players.length){
      console.log("Game Over Good Game!")
      return
    }
    for (var i=0; i<game.players.length; i++) {
      //take the first card and give it to player i
        game.hands[i] =  game.deck.shift();
  // player i has his card return it to the bottom of the deck before adding name
        game.deck.push(game.hands[i])
  // this should add the right player to the hand before we sort it by points
        game.hands[i].playerID = i
    }
    game.hands.sort(function(a, b){
      return b.points-a.points
    })
    for (var i=0; i<(game.hands.length); i++) {
      var j = i+1
      var k = game.hands[i].playerID
     console.log(game.players[k]+" is number "+j+" with the "+game.hands[i].value+" of "+game.hands[i].suit+"!")
    }
}
}
};
game.buildDeck();
game.shuffleDeck();
game.getMorePlayers();
if (game.players.length<6){
console.log (game.players.length+" Players will Play the Game");
};
game.deal();
