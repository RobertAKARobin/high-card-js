var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],

  buildDeck: function(){
    for (var cardValue = 0; cardValue < values.length; cardValue++){
       for (var suitValue = 0; suitValue < suits.length; suitValue++){
         game.deck.push({value: values[cardValue], suit: suits[suitValue], cardRank: cardValue});
       }
     }
     return game.deck
   },
  shuffleDeck: function(array){ //credits to Fisher Yates shuffle https://bost.ocks.org/mike/shuffle/
        var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  },
  getMorePlayers: function(){
    var addPlayers = true;
    while (addPlayers === true){ //loop to keep adding players then adds player count, stops with a N
      var newPlayer = prompt("Would you like to add a player? Y/N")
        if (newPlayer === "Y"){
            var playerName = prompt("What is your name?")
            game.players.push({name: playerName, hand:[]})
        }
        if (newPlayer === "N"){
          return addplayers = false;
        }
      }
  },
  deal: function(){
    for (var i=0; i<game.players.length;i++){
      var dealtCard = game.deck.shift();
      game.players[i].hand.push(dealtCard); //using the principle that the array and objects are linked together, this arranges the first object in the object 'hand' which is hte cardRank.
    }

  },
  findHighestCard: function(){
    game.players.sort(function(a, b){
      return b.hand[0].cardRank-a.hand[0].cardRank});
  },
  announceWinners: function(){
    //game.players[0].hand[0].suit
    //game.players[0].hand[0].value
    for (var i=0; i < game.players.length; i++){
      console.log("Rank"+(i+1)+" is "+game.players[i].name+" with the "+game.players[i].hand[0].value+" of "+game.players[i].hand[0].suit+"!")
   }
  },
  playANewGame: function(){
    var playAgain = prompt("Rematch? Y/N")
      if (playAgain === "Y"){
        game.players = [];
        game.deck = []; //need to rebuid the deck since we shifted cards out
        play();
      }
    }
}

function play(){
  game.buildDeck();
  game.shuffleDeck(game.deck);
  game.getMorePlayers();
  game.deal();
  game.findHighestCard();
  game.announceWinners();
  game.playANewGame();
}
play();
