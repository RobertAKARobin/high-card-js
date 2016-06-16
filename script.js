var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    //determine the standard value of each card
    values.forEach(function(cardValue){
      //use the location of the card to determine the worth
      var worthOfCard = values.indexOf(cardValue);
      //create suit for each card
      suits.forEach(function(cardSuit){
        //create an object for each card
        var newCard = {
          value: cardValue,
          suit: cardSuit,
          worth:worthOfCard
        }
        //push the created cards into the deck
        game.deck.push(newCard);
      })
    })
  },
  shuffleDeck: function(){
    //randomize the deck array
    game.deck.sort(function(){

      var randomValue = Math.random();
      if(randomValue > 0.5){
        return 1;
      }else{
        return -1;
      }
    });


  },
  getMorePlayers: function(){
    while(true){
      var getplayers = prompt("Insert name of the player, if no more players hit cancel");
      if (getplayers === null){
        //break will return false
        break;
      } else {
      game.players.push(getplayers)
      }
    }


  },
  deal: function(){
    game.players.forEach(function(playerName){
    //take one card out of the deck array using pop()
    var card = game.deck.pop();

    //hand becomes the new object therefore another key with player name is added
    card.player = playerName;
    alert(playerName + " was dealt " + card.value + " of " + card.suit);

    //put all the playing cards in the hand array to be sorted
    game.hands.push(card);
    })

  },
  findHighestCard: function(){

    function compare(a,b){
      if(a.worth < b.worth){
        return -1;
      }
      else {
        return 1;
      }
    }
    game.hands.sort(compare);

    console.log(game.hands);



  },
  announceWinners: function(){
    var winner = game.hands.length - 1;
    alert("the winner is " + game.hands[winner].player);

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
