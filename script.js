var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
//Populates deck with standard cards
  buildDeck: function(){
    for (var i = 0; i < values.length; i++){
      for (var i = 0; i < suits.length; i++)
      console.log(deck [i]);
    }
  },
//randomizes deck
  shuffleDeck: function(){
    var newDeck = [];
    for (var i = 0; i < deck.length; i++)
      newDeck[i] = deck.splic(Math.floor(Math.random());
//had to look this one up on the internet. I don't think it's complete. 

    }

  },
//confirms whether or not the player wants to add additional players
  getMorePlayers: function(){
    var playerName = prompt("Enter Name of Additional Player?");
    players.push([playerName]);
  }
},

//gives each player a card
  deal: function(){

  },
//finds the player with the card of the highest value
  findHighestCard: function(){

  },
//player's name, card, and rank
  announceWinners: function(){

  },
//runs entire game
  playANewGame: function(){

  }
}
