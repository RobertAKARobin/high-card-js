var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
//Based on repl.it, I don't think this is 100% correct.  But I know that a nested for loop seems like the way to go.
    for (s = 0; s < suits.length; s ++) {
       for (v = 0; v < values.length; v++) {
           game.deck.push(suits[s], values[v]);
//It says "deck.push" is not a function, so I added the object game.
       }
   }
  },
  shuffleDeck: function(){
//randomly rearrange indexes in deck array.  Use math.random to select indexes within the dek array and reorder the indexes up to the length of the deck array.
///Take deck array
///scramble all 52 indexes
    var deckShuff;
    for (i = 0; i < players.length; i ++) {
    deckshuff.push(deck[Math.floor((Math.random() * 51) + 0)]);
    }
///I would like to have this iterated based on the number of players.
  },
  getMorePlayers: function(){
  // Not sure how to extract from prompt.
    game.players.push(prompt("Enter player name:"));
  },
  deal: function(){
//Push indexes for each player from deck array to hands array.
    for (i = 0; i < players.length; i ++) {
    game.hands.push(deckShuff[i]);
    }
  },
  findHighestCard: function(){
///convert face cards to a number value some way.  I'm not sure how to do this.  Then order the second index of the arrays inside the hands array.
  },
  announceWinners: function(){
///order hands array indexes from highest to lowest.
///Then match to corresponding player name.
  },
  playANewGame: function(){
    this.getMorePlayers();
    this.buildDeck();
    this.shuffleDeck();
    this.deal();
    this.findHighestCard();
    this.announceWinners();
  }
}
