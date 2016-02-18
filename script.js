var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var numericVal = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var numericSuit = [1, 2, 3, 4];
var bWaitingName;
var bDealt;

var game = {
  deck: [],
  players: [],
  hands: [],

  buildDeck: function(){
    var card, lngNm;
    var total = 0;
    this.deck = [];
    for(i=0; i<suits.length; i++){
      total=0;
      for(j=0; j<values.length; j++){
        switch(numericVal[j]){
          case 11: lngNm = "jack"; break;
          case 12: lngNm = "queen"; break;
          case 13: lngNm = "king"; break;
          case 14: lngNm = "ace"; break;
          default: lngNm = values[j];
        }
        card ={
          value: values[j],
          valnum: numericVal[j],
          lngVal: lngNm,
          suit: suits[i],
          suitnum: numericSuit[i],
          totVal: total + i
        }
        this.deck.push(card);
        total += 4;
      }
    }
  },

  shuffleDeck: function(){
    function getRand52() {return (Math.round(Math.random() * 51));}
    var tempDeck = [];
    var usedIndexes = [];
    var rand = getRand52();

    for (i=0; i<52; i++){
      while(usedIndexes.indexOf(rand)>-1){
        rand = getRand52();
      }
      tempDeck.push(this.deck[rand]);
      usedIndexes.push(rand);
    }

    this.deck = tempDeck;
  },

  getMorePlayers: function(name){
    this.players.push([name, null]);
  },

  deal: function(){
    for(i=0;i<this.players.length;i++){
      this.players[i][1]=this.deck.pop();
    }
  },

  findHighestCard: function(){
    var high = 0;
    for(i=1; i <this.players.length; i++){
      if(this.players[high][1].totVal < this.players[i][1].totVal){high = i;}
    }
    return this.players[high];
  },

  announceWinners: function(){
    this.players.sort(function(a,b){return b[1].totVal - a[1].totVal});
    return this.players;

  },

  playANewGame: function(){
    this.buildDeck();
    this.shuffleDeck();
    this.players = [];
  }
}

//  Reads the input line, uses writeOut to display it, sends it to be parsed for
// for game actions, then sets the input line to blank.
function ProcIn(){
  var inputLine = document.getElementById("in");
  WriteOut(document.createTextNode("< " + inputLine.value));
  ParseIn(inputLine.value);
  inputLine.value = "";
}

// Displays text defined by outTxt.
// Text needs to be an object, so if this function recieves a string it will
// use the StrToObj function to convert it.
function WriteOut(outTxt){
  var out = document.getElementById("out");
  var line = document.createElement("p");
  if (typeof outTxt == "string"){ outTxt = StrToObj(outTxt);}
  line.appendChild(outTxt);
  out.appendChild(line);
}

// Initialize game variables, displays how to access help, then asks for a player
// name.
function StartUp(){
  game.playANewGame();
  bDealt = false;
  bWaitingName = false;
  DispHelp();
  addPlayer();
}

// Reads the input text, removes any return character, converts it to lower case
// then calls the proper function based on current state of the game.
function ParseIn(txt){
  txt = txt.replace(/\r?\n|\r/g,"")
  txt = txt.toLowerCase();
  switch(txt) {
    case "help": DispHelp(); break;
    case "shuffle": game.shuffleDeck(); break;
    case "build": game.buildDeck(); break;
    case "peek": peek(); break;
    case "player": addPlayer(); bDealt = false; break;
    case "deal": deal(); break;
    case "view": dispHands(); break;
    case "tally": tally(); break;
    case "winner": winner(); break;
    case "auto": auto(); break;
    case "restart": StartUp(); break;
    default:
      if (bWaitingName) {game.getMorePlayers(txt); WriteOut("player added!");  bWaitingName=false;}
      else {WriteOut("Command not recognized.");}
  }
}

// Converts strings to a textNode that will allow it to be added to an element
// on the HTML doc.
function StrToObj(txt){
  return(document.createTextNode(txt));
}

// Displays commands recognized by the parseIn function
function DispHelp(){
  WriteOut("-----");
  WriteOut("< help - displays this help message.");
  WriteOut("< shuffle - shuffles the deck.");
  WriteOut("< build - build a new deck.");
  WriteOut("< peek - look at the deck. cheater...");
  WriteOut("< player - adds a new player");
  WriteOut("< deal - deals a card from the deck to each player.");
  WriteOut("< view - display the card in the hand of each player.");
  WriteOut("< tally - display ranking of players.")
  WriteOut("< winner - display winner")
  WriteOut("< auto - automatically play one game/round with current players.")
  WriteOut("< restart - restarts the game with new players.")
  WriteOut("-----");

}

// For cheaters and/or developers.  Displays the entire deck, in the order cards
// will be dealt.
function peek(){
  for(i=game.deck.length-1;i>-1;i--){
    WriteOut(game.deck.length-i + ": " + game.deck[i].lngVal + " of " + game.deck[i].suit + " totVal: " + game.deck[i].totVal);
  }
}

// Sets the next ParseIn call to recieve a player name.
function addPlayer(){
  WriteOut("Please enter player name:");
  bWaitingName = true;
}

// Deals a single card to each player and set the bDealt flag to true;
function deal(){
  if (game.players.length > game.deck.length){
    WriteOut("-----");
    WriteOut("Not enough cards in the deck.");
    WriteOut("A fresh deck will be put into play.")
    game.buildDeck();
    game.shuffleDeck();
  }
  game.deal();
  bDealt = true;
}

// Displays what card each player has.
function dispHands(){
  if (!bDealt) {WriteOut("Cards have not been dealt to all players!"); return;}
  for (i = 0; i < game.players.length; i++){
    WriteOut(game.players[i][0] + " has a " + game.players[i][1].lngVal + " of " + game.players[i][1].suit + ".");
  }
}

//
function tally(){
  if (!bDealt) {WriteOut("Cards have not been dealt to all players"); return;}
  var leaderBoard = game.announceWinners();
  for (i = 0; i < leaderBoard.length; i++){
    WriteOut("#"+ (i+1) + " is " + leaderBoard[i][0] + " with a " + leaderBoard[i][1].lngVal + " of " + leaderBoard[i][1].suit);
  }
}

// if this is called more than once within the same browser session, an error starting
// winner() is not a function will be thrown after the first call to this function.
function winner(){
  winner = game.findHighestCard();
  WriteOut("Congratulations " + winner[0] + "!!!");
  WriteOut("Who is the winner with a " + winner[1].lngVal + " of " + winner[1].suit + ".");
}

//
function auto(){
  WriteOut("-----");
  deal();
  dispHands();
  tally();
  WriteOut("-----");
}

//
