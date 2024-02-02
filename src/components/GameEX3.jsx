import React, { useState, useEffect } from 'react';
import Board from './Board.jsx';
import './GameEX3.css';

const checkWinner = (squares) => {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {

    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const Game = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [computerTurn, setComputerTurn] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const calculateComputerMove = (squares) => {
    for (let i = 0; i < squares.length; i++) {
      if (!squares[i]) {
        return i;
      }
    }

    return -1;
  };

  const handleClick = (index) => {

    if (checkWinner(squares) || squares[index] || computerTurn) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';

    setSquares(newSquares);
    setXIsNext(!xIsNext);
    setComputerTurn(true);
    setShowStatus(true);
  };

  useEffect(() => {

    if (computerTurn && !xIsNext) {

      const computerMove = calculateComputerMove(squares.slice());

      if (computerMove !== -1) {

        const newSquares = squares.slice();
        newSquares[computerMove] = 'O';

        setSquares(newSquares);
        setXIsNext(true);
      }

      setComputerTurn(false);
    }
  }, [computerTurn, squares, xIsNext]);

  const winner = checkWinner(squares);

  let status;

  if (winner) {

    status = 'Перемога: ' + winner;
  } 
    else if (squares.every((square) => square !== null)) {
      status = 'Нічия!';
    } 
      else {
        status = 'Наступний хід: ' + (xIsNext ? 'Гравець' : 'Компютер');
      }

  const handleNewGameClick = () => {
    
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setComputerTurn(false);
    setShowStatus(true);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        {showStatus && <div className="statuss">{status}</div>}
        <button className="new-button" onClick={handleNewGameClick}>New Game</button>
      </div>
    </div>
  );
};

export default Game;