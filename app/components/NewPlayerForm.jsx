import React, { PropTypes } from 'react';
import classNames from 'classNames';

// https://facebook.github.io/react/docs/reusable-components.html
// https://github.com/airbnb/javascript/tree/master/react#ordering
const propTypes = {
  // emitter: PropTypes.object.isRequired
};

function NewPlayerForm({ isShown, emitter }) {

  // A temp store for user input.
  let playerName = "";

  const handleSubmit = e => {
    // Emit the event.
    emitter.emit( "newPlayer", playerName );

    // Prevent the default behavior of the submit button.
    e.preventDefault();

    // Clear the input field.
    document.querySelector('#new-player-form-input').value = '';
  }

  const newPlayerFormClasses = classNames( "alert alert-info", {shown: isShown});
  return (
    <div
      id="new-player-form"
      className={newPlayerFormClasses} >
      <p>
        Add a new player.
      </p>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Enter player name"
          onChange={(e) => playerName = e.target.value}
          id="new-player-form-input"
        />
      <button type="submit">Submit</button>
      </form>
    </div>
  )
};

NewPlayerForm.propTypes = propTypes;

export default NewPlayerForm;
