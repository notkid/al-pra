/**
 * 面试题13. 机器人的运动范围
 *
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let ans = 1;
  const directions = [
    [0, 1],
    [1, 0],
  ];
  const visited = new Array(m).fill(false).map((_) => new Array(n).fill(false));
  const canMove = (i, j) => {
    let sum = 0;
    while (i) {
      sum += i % 10;
      i = Math.floor(i / 10);
    }
    while (j) {
      sum += j % 10;
      j = Math.floor(j / 10);
    }
    return sum;
  };
  const q = [[0, 0]];
  while (q.length) {
    const [x, y] = q.shift();
    for (let [dx, dy] of directions) {
      if (
        x + dx < 0 ||
        x + dx >= m ||
        y + dy < 0 ||
        y + dy >= n ||
        visited[x + dx][y + dy] ||
        canMove(x + dx, y + dy) > k
      ) {
        continue;
      }
      q.push([x + dx, y + dy]);
      visited[x + dx][y + dy] = true;
      ans++;
    }
  }

  return ans;
};

console.log(movingCount(2, 3, 1));
