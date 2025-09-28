import { useState } from 'react';

// Square Function 
function Square({value, onSquareClick}) {

  return (
    <button 
      className="square" onClick={onSquareClick}>
        {value}
    </button>
  );

}

// Board Functions

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  /*usestate return current state(squares) then return function that updates the state(setSquares)*/
  
  function handleClick(i) {
    const nextSquares = squares.slice();
    /*extract a portion of an array or a string and return it as a new array or string*/
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  
  
  return (
  <>
  <div className="board-row">
    {/* => is an arrow function, which is a shorter way to define functions. When the square is clicked, the code after the “arrow” will run, calling handleClick(0)  */}
    <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
    <Square value={squares[1]} onSquareClick={()=>handleClick(0)} />
    <Square value={squares[2]} onSquareClick={()=>handleClick(0)} />
  </div>
  <div className="board-row">
    <Square value={squares[3]} onSquareClick={()=>handleClick(0)} />
    <Square value={squares[4]} onSquareClick={()=>handleClick(0)} />
    <Square value={squares[5]} onSquareClick={()=>handleClick(0)} />
  </div>
  <div className="board-row">
    <Square value={squares[6]} onSquareClick={()=>handleClick(0)} />
    <Square value={squares[7]} onSquareClick={()=>handleClick(0)} />
    <Square value={squares[8]} onSquareClick={()=>handleClick(0)} />
  </div>
  </>
  );
}
