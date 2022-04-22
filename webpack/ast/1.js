//https://esprima.org/
const esprima = require('esprima')

const estraverse = require('estraverse')

const escodegen = require('escodegen')

const code = `function ast() {}`

const ast = esprima.parse(code)
const token = esprima.tokenize(code)
console.log(ast)

console.log(token)

let indent = 0
const padding = (indent) => '-'.repeat(indent)

estraverse.traverse(ast, {
    enter(node) {
        console.log(padding(indent) + node.type + 'enter')
        if (node.type === 'FunctionDeclaration') {
            node.id.name = 'newAst'
        }
        indent += 2

    },
    leave(node) {
        indent -=2
        console.log(padding(indent) + node.type + 'enter')
    },
})


const result = escodegen.generate(ast)
console.log(result)