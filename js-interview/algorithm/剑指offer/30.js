/**
 * 剑指 Offer 30. 包含min函数的栈
 */

/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = []
    this.min_stack  = [Number.MAX_SAFE_INTEGER]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {

    this.stack.push(x)
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length -1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.min_stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1 ]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.min_stack[this.min_stack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */