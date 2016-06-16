import React, { PropTypes } from 'react';
import { EventEmitter } from "events";
import * as shortid         from 'shortid';
import NotificationSystem   from 'react-notification-system';
import Deck   from './Deck';
import NewPlayerForm   from './NewPlayerForm';


/*
The "interface" for this game consists entirely of alert boxes (aka dialog boxes)
in your web browser.
 */

class App extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  constructor( props ) {
    super( props );
    this.state = {
      deck:    this.buildDeck(),
      players: [],
      hands:   [],
      isPromptShown: false,
      promptMsg: "",
    };

    // Initialize the notification.
    this._notificationSystem = null;

    // Create an emitter for this app.
    this.emitter = new EventEmitter;

    // Event handlers
    this.emitter.on("newPlayer", (playerName) => {

      let tmpList = Array.from( this.state.players );
      tmpList.push({
          name:  playerName,
          score: 0,
          uuid:  shortid.generate()
      })

      this.setState({
        players: tmpList
      });
    });
  }


  /**
   * Populates the deck array with 52 standard playing cards.
   * @return {[type]} [description]
   */
  buildDeck() {
    // Create a set of 52 cards.
    const suits  = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let cards  = [];

    for ( let suitIndex = 0; suitIndex < 4; suitIndex++ ) {
      for ( let valueIndex = 0; valueIndex < 13; valueIndex++ ) {
        cards.push({
          suit:  suits[ suitIndex ],
          value: values[ valueIndex ],
          uuid: shortid.generate(),
        });
      }
    }

    // console.log(cards);
    return cards;
  }

  /**
   * [valueToString description]
   * @param  {Number} value
   * @return {String} The the corresponding to the specified value.
   */
  valueToString( value ) {
    switch( value ) {
      case 0: return '2';
      case 1: return '3';
      case 2: return '4';
      case 3: return '5';
      case 4: return '6';
      case 5: return '7';
      case 6: return '8';
      case 7: return '9';
      case 8: return '10';
      case 9: return 'J';
      case 10: return 'Q';
      case 11: return 'K';
      case 12: return 'A';
      default: console.error( 'invalid value: %s', value );
    }
  }


  /**
   * Randomizes the order of deck.
   */
  shuffleDeck() {
    let cards = this.state.deck;

    // http://stackoverflow.com/a/6274381/3837223
    let j, x, i;
    for (i = cards.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = cards[i - 1];
        cards[i - 1] = cards[j];
        cards[j] = x;
    }

    this.setState({
      deck: cards
    });
  }

  /** TODO
   * Asks the user if they want to add an additional player to the game.
   * If they do, the player is added to the players array.
   * If not, the script continues.
   * @return {[type]} [description]
   */
  getMorePlayers(){
    // var userName = prompt("Hello");


  }

  /**
   * Assigns one card to each player.
   * @return {[type]} [description]
   */
  deal(){

  }

  /**
   * Finds the player with the highest card. Aces are high.
   * For now, don't worry about ties, nor about one suit being more valuable
   * than another suit.
   * @return {[type]} [description]
   */
  findHighestCard(){

  }

  /**
   * Alerts the card each player drew, their name, and their ranking.
   * For example, "Alice is number 1 with the 9 of Spades! Bob is number 2
   * with the 6 of diamonds!" (Dialogs are annoying. How could you show all
   * this in one alert box, rather than one for each player?)
   * @return {[type]} [description]
   */
  announceWinners(){

  }

  /**
   * PlayANewGame: Runs all the previous methods in the proper order.
   * @return {[type]} [description]
   */
  playANewGame(){
    // Reset announcement.

    // Reset
  }

  render() {
    const notificationStyles = {
      NotificationItem: { // Override the notification item
        DefaultStyle: { // Applied to every notification, regardless of the notification level
          zIndex: 10,
          fontSize: '20px',
          background: 'rgba(22, 82, 124, 0.8)',
          color: 'rgb(202,178,161)'
        }
      }
    };

    return (
      <div>
        <h1 className="page-header">High cards</h1>
        <NotificationSystem
          ref="notificationSystem"
          style={notificationStyles}
        />

        <NewPlayerForm
          isShown={true}
          emitter={this.emitter}
        />

        <button
          onClick={this.playANewGame.bind(this)}
          className="btn btn-default">playANewGame
        </button>
        <button
          onClick={this.getMorePlayers.bind(this)}
          className="btn btn-default">
          getMorePlayers
        </button>
        <button
          onClick={this.deal.bind(this)}
          className="btn btn-default">
          Deal
        </button>

        <Deck
          deck={this.state.deck}
          players={this.state.players}
          emitter={this.emitter}
        />
      </div>
    );
  }
}

export default App;
