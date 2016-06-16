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
      game.deck[i] = {value:values[i],suit:suits[0],points:i};
      //create cards 1-13 suit Diamonds
      game.deck[i+13] = {value:values[i],suit:suits[1],points:i};
      //create cards 1-13 suit Hearts
      game.deck[i+26] = {value:values[i],suit:suits[2],points:i}
      //create cards 1-13 suit Spades
      game.deck[i+39] = {value:values[i],suit:suits[3],points:i}
    }
    console.log (game.deck)
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
  console.log (game.deck)
  },
  getMorePlayers: function(){
    for (var i=0; i<6; i++) {
     var tempName = prompt("Enter Player's name: ")
     if (!tempName){
       return;
     }
     game.players[i] = {name:tempName}
     console.log(game.players)
     console.log(i)
   }
  },
  deal: function(){
    game.hands = []
    if (game.deck.length < game.players.length){
      console.log("Game Over Good Game!")
      return
    }
    for (var i=0; i<game.players.length; i++) {
      //take the first card and give it to player i
        game.hands [i] =  game.deck.shift();
  // player i has his card return it to the bottom of the deck before adding name
        game.deck.push(game.hands[i])
  // this should add the right player to the hand before we sort it by points
        game.hands.push.apply(game.hands[i],game.players[i]);
    }
    game.hands.sort(function(a, b){
      return a.points-b.points
    })
    for (var i=(game.hands.length-1); i<0; i=i-1) {
  //    console.log(game.players[i]+" is number "+(i+1)"with the "+game.hand.value+" "+game.hand.suit+"!")
    }
}
};
game.buildDeck();
game.shuffleDeck();
game.getMorePlayers();
console.log (game.players.length+" Players will Play the Game");
game.deal();
