import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Player({ name }) {
  let [score, setScore] = useState(0);

  function handleIncrement() {
    setScore(score + 1);
  }

  function handleDecrement() {
    setScore(score - 1);
  }

  return (
    <div className="container-fluid border border-dark p-3 m-3">
      <div className="row justify-content-center">
        {name}
        <h2 className="text-center"></h2>
      </div>
      <div className="row justify-content-center">
        <p className="text-center fs-3">{score}</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Add increment event handler */}
          <button
            onClick={handleIncrement}
            className="btn btn-outline-primary w-100">
            Add Point +
          </button>
        </div>
        <div className="col-md-6">
          {/* Add decrement event handler */}
          <button
            onClick={handleDecrement}
            className="btn btn-outline-danger w-100">
            Remove Point -
          </button>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Player;
