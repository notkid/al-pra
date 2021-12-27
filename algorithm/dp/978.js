/**
 * 
 * 
 * 
 */

 var maxTurbulenceSize = function(arr) {
    let ret = 1;
    const n = arr.length;
    let dp0 = 1, dp1 = 1;
    for (let i = 1; i < n; i++) {
        if (arr[i - 1] > arr[i]) {
            dp0 = dp1 + 1;
            dp1 = 1;
        } else if (arr[i - 1] < arr[i]) {
            dp1 = dp0 + 1;
            dp0 = 1;
        } else {
            dp0 = 1;
            dp1 = 1;
        }
        ret = Math.max(ret, dp0);
        ret = Math.max(ret, dp1);
    }
    return ret;
};

