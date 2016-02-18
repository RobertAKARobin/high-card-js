var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    for (suit in suits) {
      for (value in values) {
        deck.push(values[value].toString() + "-" + suits[suit])
      }
    }
  },
  shuffleDeck: function(deck){
    var Index = deck.length, tempValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempValue = deck[Index];
      deck[Index] = deck[randomIndex];
      deck[randomIndex] = tempValue;
    }
    return deck;
  },
  getMorePlayers: function(){
    var playerQty = prompt("How many players?")
    for(var player = 0;  player< parseInt(playerQty); player++) {
      var playerName = prompt("What is the new player's name?");
      players.push(playerName);
    }
    return players;
  },
  deal: function(){
    var deal = [];
    for (var playerQty = 0; playerQty <= players.length; playerQty++){
      deal[playerQty] = deck.shift();
    }
  },
  findHighestCard: function(){
    var dealSeperated = []
    var cardValues = []
    for (var i = 0; i < deal.length; i++) {
      dealSeperated[i] = deal[i].split("-");
    }
    for(var j = 0; j < players.length; j++) {
      cardValues[j] = parseInt(dealSeperated[j][0]);
    }
    if (cardValues.indexOf("J")!==-1) {
      cardValues[cardValues.indexOf("J")]= "11";
    } else if (cardValues.indexOf("Q")!==-1) {
      cardValues[cardValues.indexOf("Q")]= "12";
    } else if (cardValues.indexOf("K")!==-1) {
        cardValues[cardValues.indexOf("Q")]= "13";
    } else if (cardValues.indexOf("A")!==-1) {
        cardValues[cardValues.indexOf("Q")]= "14";
    } else {
      cardValues = cardValues;
    }
    var highCard = Math.max.apply(Math, cardValues);
    return highCard;
  },
  announceWinners: function(){
    var winner = players[cardValues.indexOf(highCard)];
  },
  playANewGame: function(){

  }
}
