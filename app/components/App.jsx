import React, { PropTypes } from 'react';
import { EventEmitter }     from "events";
import * as shortid         from 'shortid';
import NotificationSystem   from 'react-notification-system';
import Deck                 from './Deck';
import NewPlayerForm        from './NewPlayerForm';

class App extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  constructor( props ) {
    super( props );

    // Initial state of the app.
    this.state = {
      deck:    this.buildDeck(),
      players: [],
      hands:   [],
      isPromptShown: false,
      isFormShown:   false
    };

    // Initialize the notification.
    this._notificationSystem = null;
  }

  // https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods
  // http://qiita.com/mizchi/items/6a3500e598ec36746509
  componentWillMount() {
    // Create an emitter for this app.
    // https://nodejs.org/api/events.html
    this.emitter = new EventEmitter;

    // Event handlers
    this.emitter.on("newPlayer", playerName => {
      if (playerName.length < 1) {
        this._addNotification( 'Name must not be empty' );

      } else {
        let newPlayer = {
            name:  playerName,
            score: 0,
            card:  null,
            uuid:  shortid.generate()
        }

        this.setState({
          players: [...this.state.players, newPlayer],
          isFormShown: false
        });
      }
    });
  }

  componentDidMount() {
    // Set up the notification system.
    this._notificationSystem = this.refs.notificationSystem;
  }

  componentWillUnmount() {
    this.emitter.removeAllListeners();
  }

  _addNotification( message ) {
    this._notificationSystem.addNotification({
      message: message,
      level:   'success'
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
    let cards    = [];

    for ( let suitIndex = 0; suitIndex < 4; suitIndex++ ) {
      for ( let valueIndex = 0; valueIndex < 13; valueIndex++ ) {
        cards.push({
          suit:  suits[ suitIndex ],
          value: values[ valueIndex ],
          // player: -999,
          uuid: shortid.generate(),
        });
      }
    }

    // console.log(cards);
    return cards;
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

  /**
   * Asks the user if they want to add an additional player to the game.
   * If they do, the player is added to the players array.
   * If not, the script continues.
   */
  getMorePlayers(){
    this.setState({
      isFormShown: ! this.state.isFormShown
    });
  }

  /**
   * Assigns one card to each player.
   * @return {[type]} [description]
   */
  deal(){
    this.shuffleDeck();

    // Create a copy of current deck.
    let deckCopy = [...this.state.deck];

    // For each player
    let playersCopy = [...this.state.players].map( player => {

      // Get a card and remove it from the deck.
      let card = deckCopy.splice(0, 1)[0];

      // Assign that card to the player.
      return Object.assign( player, { card: card });
    });

    // Update players and deck.
    this.setState({
      players: playersCopy,
      deck:    deckCopy
    });
  }

  /**
   * Finds the player with the highest card. Aces are high.
   * For now, don't worry about ties, nor about one suit being more valuable
   * than another suit.
   * @return {[type]} [description]
   */
  findHighestCard(){
    // TODO
  }

  /**
   * Alerts the card each player drew, their name, and their ranking.
   * For example, "Alice is number 1 with the 9 of Spades! Bob is number 2
   * with the 6 of diamonds!" (Dialogs are annoying. How could you show all
   * this in one alert box, rather than one for each player?)
   * @return {[type]} [description]
   */
  announceWinners(){
    // TODO
  }

  /**
   * PlayANewGame: Runs all the previous methods in the proper order.
   * @return {[type]} [description]
   */
  playANewGame(){
    // Reset the game state.
    this.setState({
      deck:    this.buildDeck(),
      players: [],
      hands:   [],
      isPromptShown: false,
      isFormShown:   false
    });
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
          isShown={this.state.isFormShown}
          emitter={this.emitter}
        />

        <div className="btn-group">
          <button
            onClick={this.playANewGame.bind(this)}
            className="btn btn-default">
            Reset
          </button>
          <button
            onClick={this.getMorePlayers.bind(this)}
            className="btn btn-default">
            Add a player
          </button>
          <button
            onClick={this.deal.bind(this)}
            className="btn btn-default">
            Deal
          </button>
        </div>

        <hr />

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
