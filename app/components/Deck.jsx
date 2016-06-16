import React, { PropTypes } from 'react';
import Player from './Player';

// https://facebook.github.io/react/docs/reusable-components.html
// https://github.com/airbnb/javascript/tree/master/react#ordering
const propTypes = {
  // emitter: PropTypes.object.isRequired
};

function Deck({ deck, players, emitter }) {

  // console.log(players[0]);
  return (
    <div className="deck">
      <div className="well">
        {
          players.map( player =>
            <Player
              name={player.name}
              score={player.score}
              emitter={emitter}
              key={player.uuid}
            />
          )
        }
      </div>
    </div>
  )
};

Deck.propTypes = propTypes;

export default Deck;
