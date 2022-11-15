/**
 * 232. 用栈实现队列
 * 
 */

 var MyQueue = function() {
    this.q = []
    this._q = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.q.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this._q.length === 0) {
        while(this.q.length > 0) {
            this._q.push(this.q.pop())
        }
    }
    return this._q.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this._q.length === 0) {
        while(this.q.length > 0) {
            this._q.push(this.q.pop())
        }

    }
    return this._q[this._q.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.q.length === 0 && this._q.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */