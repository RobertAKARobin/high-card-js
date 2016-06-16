import React, { PropTypes } from 'react';
import Card from './Card';

// https://facebook.github.io/react/docs/reusable-components.html
// https://github.com/airbnb/javascript/tree/master/react#ordering
const propTypes = {
  // emitter: PropTypes.object.isRequired
};

function Player({ player, emitter }) {
  return (
    <div className="player col-sm-3">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>
            {player.name}
          </h4>
        </div>
        <div className="panel-body">
          <p>Score: {player.score}</p>
          {
            (player.card) &&
              <Card
                suit={player.card.suit}
                value={player.card.value}
              />
          }
        </div>
      </div>
    </div>
  )
};

Player.propTypes = propTypes;

export default Player;
