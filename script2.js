var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];


var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    for (i = 0;i <suits.length;i++){
      for(j = 0;j<values.length;j++){
        console.log(suits[i]+' '+values[j]);
        this.deck.push(suits[i]+' '+values[j]);
      }
    }
}
};
 console.log(game.deck.length);
  shuffleDeck: function(){

  }
  }

  },
  getMorePlayers: function(){

  },
  deal: function(){

  },
  findHighestCard: function(){

  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
