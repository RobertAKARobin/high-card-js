var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]; // Stored array of card values
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];        // Stored array of card suits
var game = {                                                    // Guts of the entire game, set as a variable
  deck: [],                                                     // Empty array where "newCard" is stored
  players: [],                                                  // Empty array where the players input/name is stored
  hands: [],                                                    // Empty array where "card" is stored
  buildDeck: function(){                                        // "buildDeck" key:value function
    values.forEach(function(cardValue){                         // Grabs from the values array, sets up cardValue argument
      var worthOfCard = values.indexOf(cardValue);              // Grabs and sets up cardValue's first string value as the variable worthOfCard
      suits.forEach(function(cardSuit){                         // Grabs from the suits array, sets up cardValue argument
        var newCard = {                                         // Variable newCard object
          value: cardValue,                                     // Key:Value pair
          suit: cardSuit,                                       // Key:Value pair
          worth: worthOfCard                                    // Key:Value pair
        }
        game.deck.push(newCard);                                // Pushes newCard value into the deck array
      });
    });
  },
  shuffleDeck: function(){                                      // "shuffleDeck" key:value function
    game.deck.sort(function(){                                  // Shuffles the deck array
      var randomValue = Math.random();                          // Sets randomValue variable as the Math.random() function
      if(randomValue > 0.5){                                    // If randomValue is less than 0.5, then...
        return 1;                                               // Return 1
      }else{                                                    // Or else...
        return -1;                                              // Return minus 1
      }
    });
  },
  getMorePlayers: function(){                                   // "getMorePlayers" key:value function
    while(true){                                                // While true...
      var userInput = prompt(game.players.length + " player(s) so far. Enter a player name, or click 'cancel' to play."); // Text input prompt with included values
      if(userInput === null){                                   // If the userInputis null then ...
        break;                                                  // Break
      }else{                                                    // Or else...
        game.players.push(userInput);                           // Pushes the userInput into the players array
      }
    }
  },
  deal: function(){                                             // "deal" key:value function
    alert("Dealing...");                                        // Text alert
    game.players.forEach(function(playerName){                  // Grabs from the players array, sets up playerName argument
      var card = game.deck.pop();                               // Removes the a value from the deck array, and sets as "var card"
      card.player = playerName;                                 // Sets playerName from player array
      alert(card.player + " has been dealt the " + card.value + " of " + card.suit + "!");  // Text alert with included values
      game.hands.push(card);                                    // Pushes card into hands array
    });
  },
  findHighestCard: function(){                                  // "findHighestCard" key:value function
    game.hands.sort(function(cardOne, cardTwo){                 // Grabs from the hands array, sets up cardOne and cardTwo arguments
      if(cardOne.worth > cardTwo.worth){                        // If cardOne.worth is greater than cardTwo.worth, then...
        return 1;                                               // Return 1
      }else{                                                    // Or else
        return -1;                                              // Return minus 1
      }
    });
  },
  announceWinners: function(){                                  // "announceWinners" key:value function
    var place = game.players.length;                            // The length of the players array is set as var place
    alert("And the winners are...");                            // Text alert
    game.hands.forEach(function(card){                          // Grabs from the hands array, sets up card argument
      alert(card.player + " is number " + place + " with the " + card.value + " of " + card.suit + "!"); // Text alert with included values
      place = place - 1;                                        // Place equal place minus 1
    });
  },
  playANewGame: function(){                                     // "playANewGame" key:value function
    game.buildDeck();                                           // Calls buildDeck(); function
    game.shuffleDeck();                                         // Calls shuffleDeck(); function
    game.getMorePlayers();                                      // Calls getMorePlayers(); function
    game.deal();                                                // Calls deal(); function
    game.findHighestCard();                                     // Calls findHighestCard(); function
    game.announceWinners();                                     // Calls announceWinners(); function
  }
}
game.playANewGame();                                            // Calls playANewGame(); function
