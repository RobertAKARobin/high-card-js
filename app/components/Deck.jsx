import React, { PropTypes } from 'react';
import Player from './Player';

// https://facebook.github.io/react/docs/reusable-components.html
// https://github.com/airbnb/javascript/tree/master/react#ordering
const propTypes = {
  // emitter: PropTypes.object.isRequired
};

function Deck({ deck, players, emitter }) {

  // console.log(players);

  return (
    <div className="deck row">
      {
        players.map( player =>
          <Player
            player={player}
            key={player.uuid}
          />
        )
      }
    </div>
  )
};

Deck.propTypes = propTypes;

export default Deck;
