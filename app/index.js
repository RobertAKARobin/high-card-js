// import React    from 'react';
// import ReactDOM from 'react-dom';
//
// const Hello = () => {
//   return (
//     <p>Hello world!!!</p>
//   )
// }
//
// ReactDOM.render(
//   <Hello />,
//   document.getElementById( "app" )
// )

const values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
const game = {
  deck: [],
  players: [],
  hands: [],

  /**
   * Populates the deck array with 52 standard playing cards.
   * @return {[type]} [description]
   */
  buildDeck: function(){

  },
  /**
   * Randomizes the order of deck.
   * @return {[type]} [description]
   */
  shuffleDeck: function(){

  },
  /**
   * Asks the user if they want to add an additional player to the game.
   * If they do, the player is added to the players array.
   * If not, the script continues.
   * @return {[type]} [description]
   */
  getMorePlayers: function(){

  },
  /**
   * Assigns one card to each player.
   * @return {[type]} [description]
   */
  deal: function(){

  },
  /**
   * Finds the player with the highest card. Aces are high.
   * For now, don't worry about ties, nor about one suit being more valuable
   * than another suit.
   * @return {[type]} [description]
   */
  findHighestCard: function(){

  },
  /**
   * Alerts the card each player drew, their name, and their ranking.
   * For example, "Alice is number 1 with the 9 of Spades! Bob is number 2
   * with the 6 of diamonds!" (Dialogs are annoying. How could you show all
   * this in one alert box, rather than one for each player?)
   * @return {[type]} [description]
   */
  announceWinners: function(){

  },
  /**
   * playANewGame: Runs all the previous methods in the proper order.
   * @return {[type]} [description]
   */
  playANewGame: function(){

  }
}
