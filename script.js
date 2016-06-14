var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
    deck: [],
    players: [],
    hands: [],

    buildDeck: function(){
        for (i=0; i<values.length; i++) {
            game.deck.push(values[i]+suits[0]);
        }
        for (i=0; i<values.length; i++) {
            game.deck.push(values[i]+suits[1]);
        }
        for (i=0; i<values.length; i++) {
            game.deck.push(values[i]+suits[2]);
        }
        for (i=0; i<values.length; i++) {
            game.deck.push(values[i]+suits[3]);
        }
    },

    shuffleDeck: function(array){
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
