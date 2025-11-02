function solveNQueens(N) {
  const board = Array.from({ length: N }, () => Array(N).fill('.'));
  const solutions = [];

  function isSafe(row, col) {

    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < N; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }

    return true;
  }

  function solve(row) {
    if (row === N) {
      const solution = board.map(r => r.join(' '));
      solutions.push(solution);
      return;
    }
    for (let col = 0; col < N; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q'; 
        solve(row + 1); 
        board[row][col] = '.';
      }
    }
  }

  solve(0);

  solutions.forEach((sol, idx) => {
    console.log(`Solution ${idx + 1}:`);
    sol.forEach(row => console.log(row));
    console.log('');
  });
}

solveNQueens(4);
