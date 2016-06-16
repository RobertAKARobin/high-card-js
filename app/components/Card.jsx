import React, { PropTypes } from 'react';
import classNames from 'classNames';

// https://facebook.github.io/react/docs/reusable-components.html
// https://github.com/airbnb/javascript/tree/master/react#ordering
const propTypes = {
  // emitter: PropTypes.object.isRequired
};

function Card({ suit, value }) {

  const cardClasses = classNames( "card alert alert-success" );

  /**
   * Convert worth value to string on the card.
   * @param  {Number} value
   * @return {String} The the corresponding to the specified value.
   */
  function valueToString( value ) {
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

  return (
    <div className={cardClasses} >
      <p>{suit}</p>
      <p>{valueToString( value )}</p>
    </div>
  )
};

Card.propTypes = propTypes;

export default Card;
