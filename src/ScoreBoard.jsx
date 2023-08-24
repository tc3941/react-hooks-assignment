import { useRef, useState } from 'react';
//Bootstrap has already been downloaded for you
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './Player';

function ScoreBoard() {
  const inputRef = useRef();
  //constantly updates value

  const printContentsOfInputRef = () => {
    //Allows us to immediately access the DOM node for our input
    console.log(inputRef.current);
    //Since inputRef.current = our input, inputRef.current.value
    //will print the current text inside of the ref
    console.log(inputRef.current.value);
  };

  //setPlayer renders using useState
  let [players, setPlayer] = useState([
    // {
    //   // id: Date.now(),
    //   // name: 'Teddy',
    //   // score: 0,
    // }
  ]);

  // function addPlayer() {
  //   players.push();
  // }

  function addPlayer() {
    //We use the spread operator to make a copy of the
    //most recent toDoItems array and add a new object
    //to it
    setPlayer([...players, { name: inputRef.current.value, id: Date.now() }]);
    console.log(players);
  }

  return (
    <div className="container">
      <div className="row  text-center">
        <h1>ScoreBoard</h1>
      </div>
      <div className="row">
        <div className="col-md-4 m-auto">
          <div className="input-group mb-3">
            {/* Modify input so that it is either connected to a ref or some kind of input state */}
            <input
              ref={inputRef}
              type="text"
              className="form-control"
              placeholder="New Player Name"
              aria-label="New Player Name"
              aria-describedby="addPlayer"
              required
            />
            {/* add Add Player event handling to this button */}
            <button
              onClick={addPlayer}
              className="btn btn-outline-primary"
              type="button"
              id="addPlayer">
              Add Player
            </button>
          </div>
        </div>
      </div>
      <div className="row m-auto">
        {players.map((player) => {
          return (
            <div key={player.id} className="col-md-4">
              {/* Make sure to pass the unique id as a key */}
              <Player
                key={player.id}
                name={player.name}
                // score={player.score}
                // Anonymous arrow function that we can hold off activating
                // until the user clicks a button inside of the Player component
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScoreBoard;
