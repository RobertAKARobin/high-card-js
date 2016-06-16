import React, { PropTypes } from 'react';
import classNames from 'classNames';

// https://facebook.github.io/react/docs/reusable-components.html
// https://github.com/airbnb/javascript/tree/master/react#ordering
const propTypes = {
  // emitter: PropTypes.object.isRequired
};

function NewPlayerForm({ isShown, emitter }) {

  const newPlayerFormClasses = classNames( "card alert alert-info" );
  let playerName = "";
  
  return (
    <div className={newPlayerFormClasses} >
      <form onSubmit={(e)=> emitter.emit("newPlayer", playerName) && e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter player name"
          onChange={(e)=> playerName = e.target.value}
        />
      <button type="submit">Submit</button>
      </form>
    </div>
  )
};

NewPlayerForm.propTypes = propTypes;

export default NewPlayerForm;
