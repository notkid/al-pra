/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const ret = [],
    track = [];

  const isValid = (track, row, col) => {
    for (let i = 0; i < row; i++) {
      if (track[i][col] === "Q") return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (track[i][j] === "Q") {
        return false;
      }
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (track[i][j] === "Q") {
        return false;
      }
    }

    return true;
  };

  const backtrack = (n, idx) => {
    if (idx === n) {
      ret.push(track.slice());
      return;
    }
    for (let i = 0; i < n; i++) {
      if (idx > 0 && !isValid(track, idx, i)) {
        continue;
      }
      track.push(".".repeat(i) + "Q" + ".".repeat(n - i - 1));
      backtrack(n, idx + 1);
      track.pop();
    }
  };

  backtrack(n, 0);
  return ret;
};

console.log(solveNQueens(4));
