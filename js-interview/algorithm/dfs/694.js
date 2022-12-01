/**
 * 694. 不同的岛屿数量
 */

var numDistinctIsland = (grid) => {
    const m = grid.length,n=grid[0].length
    const dfs = (grid, i , j, sb, dir) => {
        if (i< 0 || j< 0 || i>=m || j>=n || grid[i][j] ==='0') return
        grid[i][j] = '0'
        sb.push(dir)

        dfs(grid,i-1,j,sb, 1)
        dfs(grid,i+1,j,sb, 2)
        dfs(grid,i,j-1,sb, 3)
        dfs(grid,i,j+1,sb, 4)
    }
    for(let i =0 ;i< m;i++) {
        for(let j = 0; j< n;j ++) {
            if (grid[i][j] ==='1') {
                const sb = []
                dfs(grid,i ,j, sb, 666)
            }
        }
    }
    return
 }