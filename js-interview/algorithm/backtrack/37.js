
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function (board) {
    const n = 9
    const isValid = (board, r, c, val) => {
        for (let i = 0; i < n; i++) {
            if (board[i][c] === val) return false
            if (board[r][i] === val) return false
            if (board[r + Math.floor(i / 3)][c + i % 3] === val) return false
        }
        return true
    }
    const backtrack = (board, i, j) => {
        if (j === n){
            backtrack(board, i +1, 0)
            return
        }
          if (i === n) {
            return true
        }
        if (board[i][j] === '.') {
            backtrack(board, i, j + 1)
        }
      

        for (let val = 1; val <= 9; i++) {
            if (!isValid(board, i, j, val)) {
                continue
            }
            board[i][j] = val
            if(backtrack(board, i, j + 1)) return true
            board[i][j] = '.'
        }
    }
    backtrack(board, 0, 0)
};

let root = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]



console.log(solveSudoku(root))