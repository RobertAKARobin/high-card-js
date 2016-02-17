var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],

  buildDeck: function(){
    for(var s = 0; s < suits.length; s++)
    {for (var v = 0; v < values.length; v++)
    {game.deck.push([values[v], suits[s]])}
      }
  }
}
  game.buildDeck.call();

  function shuffleDeck(array) {
    //Fisher Yates example used below, looked up online
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
};

shuffleDeck(game.deck);


  function getMorePlayers() {
    var askMorePlayers = prompt('Would you like to add one more player? Y / N').toUpperCase()
    //if user asks to add another player, update game.players array with three indeces
    if (askMorePlayers == 'Y') {game.players.push(0,1,2)}
    //otherwise only send two indeces for game, player and computer
    else {game.players.push(0,1)}
  }
  //run function above
  getMorePlayers()

//deal function works only if players are player and computer :(
  function deal(){
    for (var i = 1; i<=game.deck.length; i++)
    { //push up shuffled even indexed cards to player hand
      if (i%2===0) {game.hands.push("Player: "+game.deck[i])}
      //otherwise push odd numbered index cards to computer hand
    else {game.hands.push("Computer: "+game.deck[i])}}}
  }
}

  /*
  findHighestCard: function(){

  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
*/
