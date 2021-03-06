function isType(type) {
    return (content) => {
        return Object.prototype.toString.call(content) === `[object ${type}]`
    }
}

let isString = isType('String')

console.log(isString('hello'))