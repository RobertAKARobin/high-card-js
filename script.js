var vals = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
    deck: [],
    players: [],
    hands: [],
    buildDeck: function(){
        this.deck = [];
        for (var _ = 0; _ < suits.length; _++) {
            this.deck.push(vals);
        }
    },
    shuffleDeck: function(){
        function shuffleArray(array) {
            for (var i = array.length-1; i >= 0; i--) {
                var j = Math.floor(Math.random() * i);
                var t = array[i];
                array[i] = array[j];
                array[j] = t;
            }
            return array;
        }
        this.deck.forEach(function(value, index) {
            // This action also copies to the previous element
            // at this.deck[index-1]. Currently baffled.
            this.deck[index] = shuffleArray(this.deck[index]);
        }.bind(this));
    },
    getMorePlayers: function(){
        var numPlayers = 0;
        while (true) {
            var player = prompt("Add a player / press cancel to finish adding.\n" +
                                numPlayers + " players");
            if (player === null) {
                break
            }
            if (player != "") {
                this.players.push(player);
                numPlayers++;
            }
        }
    },
    deal: function(){
        var dealMsg = "";
        this.players.forEach(function(player) {
            // TODO: Account for number of players larger than 12
            var randSuit = Math.floor(Math.random() * suits.length);
            this.hands.push({
                peep: player,
                val: this.deck[randSuit][0],
                suit: suits[randSuit]
            });
            dealMsg += player + " was dealt a " + this.deck[randSuit][0] +
                       " of " + suits[randSuit] + "\n";
            this.deck[randSuit].shift();
        }.bind(this));
        alert(dealMsg);
    },
    findHighestCard: function(){
        // Sort hands by card
        this.hands.sort(function(a, b) {
            if(vals.indexOf(a.val) > vals.indexOf(b.val)) {
                return -1;
            } else {
                return 1;
            }
        }.bind(this));
    },
    announceWinners: function(){
        // TODO: Account for three or more way tie
        if (this.players.length > 1 && this.hands[0].val === this.hands[1].val) {
            alert("It's a tie between " + this.hands[0].peep + " with a " +
                  this.hands[0].val + " of " + this.hands[0].suit + " and " +
                  this.hands[1].peep + " with a " + this.hands[1].val + " of " +
                  this.hands[1].suit);
        } else {
            var orderMsg = "";
            this.hands.forEach(function(value, index) {
                orderMsg += value.peep + " is number " + (index+1) + " with the " +
                            value.val + " of " + value.suit + "!\n";
            }.bind(this));
            alert(orderMsg);
        }
    },
    playANewGame: function(){
        this.getMorePlayers();
        if (this.players.length === 0) {
            return;
        }
        this.buildDeck();
        this.shuffleDeck();
        this.deal();
        this.findHighestCard();
        this.announceWinners();
    }
}
game.playANewGame()
