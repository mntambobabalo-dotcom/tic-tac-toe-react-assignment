export const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

export function checkForWinner(board) {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], winningCombo: combo };
    }
  }

  if (board.every(Boolean)) {
    return { winner: 'draw', winningCombo: [] };
  }

  return { winner: null, winningCombo: [] };
}

export function getTurnForMove(moveNumber) {
  return moveNumber % 2 === 0 ? 'x' : 'o';
}
