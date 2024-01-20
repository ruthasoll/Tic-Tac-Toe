let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

function Move(boxIndex) {
  const box = document.getElementsByClassName('box')[boxIndex];
  if (box.innerText === '' && gameActive) {
    box.innerText = currentPlayer;
    gameState[boxIndex] = currentPlayer;

    if (checkWin()) {
      alert('Player ' + currentPlayer + ' wins!');
      gameActive = false;
      return;
    }

    if (checkDraw()) {
      alert('It\'s a draw! Play again.');
      resetGame();
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (
      gameState[a] !== '' &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  return !gameState.includes('');
}

function resetGame() {
  const boxes = document.getElementsByClassName('box');
  for (let box of boxes) {
    box.innerText = '';
  }

  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
}