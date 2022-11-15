var MyStack = function() {
    this.q = []
    this._q = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this.q.length >1) {
        this._q.push(this.q.shift())
    }
    const ans = this.q.shift()
    while(this._q.length >0) {
        this.q.push(this._q.shift())
    }
    return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q.slice(-1)[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.q.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */