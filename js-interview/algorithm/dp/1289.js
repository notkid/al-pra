/**
 * @param {number[][]} grid
 * @return {number}
 */
// var minFallingPathSum = function (grid) {
//   const n = grid.length;
//   const ret = []
//   let ans= Infinity
//   const traverse = (num, i, grid, level) => {
//     //   console.log(level)
//     if (level === n - 1) {
//       ret.push(num);
//       return;
//     }
//     level++;
//     for (let j = 0; j < n; j++) {
//       if (j !== i) {
//         traverse(num + grid[level][j], j, grid, level);
//       }
//     }
//   };
//   for (let i = 0; i < n; i++) {
//     traverse(grid[0][i], i, grid, 0);
//   }
//   for (let i = 0; i< ret.length; i++) {
//     ans = Math.min(ans, ret[i])
//   }
//   return ans;
// };

var minFallingPathSum = function (grid) {
  const n = grid.length;
  let first_sum = 0,
    second_sum = 0,
    first_pos = -1;

  for (let i = 0; i < n; i++) {
    let fmin = Infinity,
      minPos = -1,
      smin = Infinity;
    for (let j = 0; j < n; j++) {
        const cur_sum = (first_pos === j? second_sum: first_sum) + grid[i][j]
        if (cur_sum< fmin) {
            smin = fmin
            fmin = cur_sum
            minPos =j 
        } else if (cur_sum < smin) {
            smin = cur_sum
        }
    }
    first_sum = fmin
    second_sum = smin
    first_pos = minPos
  }
  return first_sum
};

console.log(
  minFallingPathSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
