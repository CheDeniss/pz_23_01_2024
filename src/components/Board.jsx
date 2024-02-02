import React from 'react';
import './GameEX3.css';

const Board = ({ squares, onClick }) => {
  
  return (
    <div className="board">
      {squares.map((square, index) => (
        <button key={index} className="square" onClick={() => onClick(index)}>
          {square}
        </button>
      ))}
    </div>
  );
};

export default Board;