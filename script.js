$(document).on("ready", function() {

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


        console.log(game.deck);
        return game.deck;
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
        console.log(array);
        return array;
    },

    getMorePlayers: function(){
        var answer = prompt("Would you like to add another player?", "Just enter 'y' or 'n'");
        if (answer == 'y') {
            var playerName = prompt("Enter the new player's name:");
            game.players.push(playerName);
        }
        else {
            return;
        }
    },

    deal: function(){
        for (i=0; i<game.players.length; i++) {
            if (game.deck.length > 0) {
                return game.deck.shift();
            }
            else {
                return null;
            }
        }
    },

    findHighestCard: function(){

    },

    announceWinners: function(){

    },

    playANewGame: function(){

    }
}

$("#start").on("click", function() {
    console.log("HEYO");
    game.shuffleDeck(game.buildDeck());
});

$("#addplayer").on("click", function() {
    console.log("HEYA");
    game.getMorePlayers();
});

});
