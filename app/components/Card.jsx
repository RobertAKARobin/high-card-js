import React, { PropTypes } from 'react';
import classNames from 'classNames';

// https://facebook.github.io/react/docs/reusable-components.html
// https://github.com/airbnb/javascript/tree/master/react#ordering
const propTypes = {
  // emitter: PropTypes.object.isRequired
};

function Card({ suit, value, isShown, emtter }) {

  const cardClasses = classNames( "card alert alert-success" );
  return (
    <div className={cardClasses} >
      <p>{suit}</p>
      <p>{value}</p>
    </div>
  )
};

Card.propTypes = propTypes;

export default Card;
