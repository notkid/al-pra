const core = require('@babel/core')

const types = require('babel-types')

const ArrowFunctionPlugin = require('babel-plugin-transform-es2015-arrow-functions')

const es6code = `
const sum = (a, b) => {
    console.log(this)
    return a + b
}
`

//
const ArrowFunctionPlugin2= {
    visitor: {
        ArrowFunctionExpression(nodePath) {
            let node = nodePath.node
            node.type = 'FunctionExpression'
        }
    }
}

const es5Code = core.transform(es6code, {
    plugins:[ArrowFunctionPlugin]

})

console.log(es5Code.code)