import React, { PropTypes } from 'react';
import Card from './Card';

// https://facebook.github.io/react/docs/reusable-components.html
// https://github.com/airbnb/javascript/tree/master/react#ordering
const propTypes = {
  // emitter: PropTypes.object.isRequired
};

function Player({ cards, emitter }) {
  return (
    <div className="deck">
      <div className="well">
        {
          cards.map( card =>
            <Card
              suit={card.suit}
              value={card.value}
              isShown={false}
              emitter={emitter}
              key={card.uuid}
            />
          )
        }
      </div>
    </div>
  )
};

Player.propTypes = propTypes;

export default Player;
