/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a,b) => a - b )
  const ret = [],
    track = [];
  const backtrack = (result, candidates, track, idx) => {
    // if (idx === candidates.length) return;
    if (result === 0) {
      ret.push(track.slice());
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      if (i - 1 >= idx && candidates[i - 1] == candidates[i]) {
        // 当前选项和左邻选项一样，跳过
        continue;
      }

      if (result - candidates[i] >= 0) {
        track.push(candidates[i]);
        backtrack(result - candidates[i], candidates, track, i + 1);
        track.pop();
      }
    }

    // backtrack(result, candidates, track, idx + 1);
  };

  backtrack(target, candidates, track, 0);
  return ret;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
