/**
 * @param {string} s
 * @return {number}
 */
 var numWays = function (s) {
    const n = s.length, MOD = 1000000007
    let num1 = 0;
    for (let i = 0; i < n; i++) if (s[i] == 1) num1++;
    if (num1 === 0) {
        return ((n - 1) * (n - 2) / 2) % MOD
    }
    if (num1 < 3 || num1 % 3 !== 0) return 0
    var arr = [],curnum1 = 0
    for (let i = 0; i < n; i++) {
        if (s[i] == 1) {
            curnum1++;
            if (curnum1 === 1) arr.push(i);
        }
        if (curnum1 === num1 / 3) {
            arr.push(i);
            curnum1 = 0;
        }
    }
    // console.log(arr)
    return (arr[2] - arr[1]) * (arr[4] - arr[3]) % MOD;
};