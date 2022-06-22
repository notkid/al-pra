// 观察者模式 （发布订阅）https://refactoringguru.cn/design-patterns/observer
// https://www.promisejs.org/implementing/
// https://promisesaplus.com/
// https://www.ituring.com.cn/article/66566 

function Promise(fn) {
  let state = "pending";
  let value;
  let callbacks = [];

  function resolve(newVal) {
    if (
      newVal &&
      (typeof newVal === "object" || typeof newVal === "function")
    ) {
      let then = newVal.then;
      if (typeof then === "function") {
        then.call(newVal, resolve, reject);
        return;
      }
    }
    value = newVal;
    state = "fulfilled";
    execute();
  }

  function reject(reason) {
    state = "rejected";
    value = reason;
    execute();
  }

  function handle(handler) {
    if (state === "pending") {
      callbacks.push(handler);
      return;
    }

    if (state === "fulfilled") {
      handlerCallback = handler.onFulfilled;
    } else {
      handlerCallback = handler.onRejected;
    }

    if (!handlerCallback) {
      if (state === "fulfilled") {
        handler.resolve(value);
      } else {
        handler.reject(value);
      }
      return;
    }

    let ret;
    try {
      ret = handlerCallback(value);
    } catch (error) {
      handler.reject(error);
    }
    handler.resolve(ret);
  }

  this.then = function (onFulfilled, onRejected) {
    return new Promise(function (resolve, reject) {
      handle({
        onFulfilled: onFulfilled,
        onRejected: onRejected,
        resolve: resolve,
        reject,
      });
    });
  };

  this.catch = function (onRejected) {
    return new Promise(function (resolve, reject) {
      handle({
        onFulfilled: onFulfilled,
        onRejected: onRejected,
        resolve: resolve,
        reject,
      });
    });
  };

  function execute() {
    setTimeout(function () {
      callbacks.forEach(function (callback) {
        handle(callback);
      });
    }, 0);
  }
  fn(resolve, reject);
}

function doSomething() {
  return new Promise(function (resolve, reject) {
    var badJson = "sdfasd,asdfasd";
    setTimeout(() => {
      reject(3);
    }, 1000);
  });
}

doSomething().then(
  function (json) {
    var obj = JSON.parse(json);
    console.log(obj);
  },
  function (error) {
    console.log("uh oh", error);
  }
);
