/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
 var countPoints = function(points, queries) {
    const ret = []
    for(let i=0; i<queries.length;i++) {
        const [x1, y1, r] = queries[i]
        let n = 0
        for (let j = 0; j < points.length; j++) {
            const [x2, y2] = points[j]
            if ((Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2)) <= Math.pow(r, 2)) {
                n++
            }
        }
        ret.push(n)
    }
    return ret
};



console.log(countPoints([[1,3],[3,3],[5,3],[2,2]],
    [[2,3,1],[4,3,1],[1,1,2]]))