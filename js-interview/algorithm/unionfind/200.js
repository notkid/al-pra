/**
 * 200. 岛屿数量
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    const m = grid.length, n = grid[0].length
    let res  = 0
    for(let i = 0; i < m.length; i++) {
        for(let j = 0; j< n.length; j++) {
            if (grid[i][j] === '1') {
                res++
                dfs(grid, i, j)
            }
        }
    }


    const dfs = (grid, i, j) => {
        if (i>m|| j>n || i< 0 || j<0) {
            return
        }
        if (grid[i][j] === '0') {
            return
        }
        grid[i][j] =0
        dfs(grid, i-1, j)
        dfs(grid, i+1, j)
        dfs(grid, i, j-1)
        dfs(grid, i, j+ 1)
    }
    dfs(grid, 0, 0)
    return res
};