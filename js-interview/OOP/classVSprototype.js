// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// https://juejin.cn/post/6934498361475072014
// https://github.com/ziyi2/js/blob/master/JS%E7%B1%BB%E5%92%8C%E7%BB%A7%E6%89%BF.md
const { log, info } = console;
{
  log("构造函数模式 start =======================");
  function Person(name) {
    this.name = name;
    this.getName = function () {
      return this.name;
    };
  }

  const Tom = new Person("Tom");
  log(Tom.getName());
  log(Tom.constructor === Person);

  const Bob = new Person("Bob");
  log(Tom.getName === Bob.getName);

  function createPerson(name) {
    var person = new Object();
    person.name = name;
    person.getName = function () {
      return this.name;
    };
    return person;
  }

  /**
   * 
   * 工厂模式虽然抽象了创建具体对象的过程，解决了创建多个相似对象的问题，
   * 但是没有解决对象的识别问题，即如何知道对象的类型，而类（构造函数）
   * 创建的实例对象可以识别实例对象对应哪个原型对象（需要注意原型对象是类的唯一标识，
   * 当且仅当两个对象继承自同一个原型对象，才属于同一个类的实例，而构造函数并不能作为类的唯一标识）。

        构造函数的创建过程

        创建一个新对象
        将构造函数的作用域赋给新对象（this新对象）
        执行构造函数中的代码
        返回新对象（最终返回的就是new出来的实例对象，因此this指向实例对象）
   * 
   * 
   */

  log(
    "构造函数模式 end ======================= 可以创建不同实例属性的副本，包括引用类型的实例属性，但是不能共享方法"
  );
}

{
  log("原型 start =======================");
  function Person(name) {
    this.name = name;
  }

  Person.prototype = {
    constructor: Person,
    getName: function () {
      return this.name;
    },
    age: 28,
    names: ["ziyi", "ziyi1", "ziyi2"],
  };

  var person = new Person();
  person.names[0] = "ziyi_modify";
  person.age = 11;
  var person1 = new Person();
  // ["ziyi_modify", "ziyi1", "ziyi2"]
  console.log(person1.names);
  // 28
  console.log(person1.age);
  /**
   *
   * 原型对象的基本类型数据的属性（存放的是具体的值，因此每个实例对象的该属性值的改变互不影响）的共享对于实例对象而言非常便捷有效，
   * 但是原型对象的引用类型属性不同，原型对象的引用类型的属性存放的是一个指针(C语言中的指针的意思，
   * 指针存放的是一个地址，并不是存放一个具体的值，因为类似数组等值在一个32bit的物理块中是放不下的，
   * 肯定是放在一个连续的物理块中，因此需要一个地址去读取这些连续的物理块)，指针最终指向的是一个连续的物理块，
   * 因此通过原型对象的引用类型修改的值都是改变这个物理块中的值，因此所有实例对象的该指向都会发生变化。
   *
   */
  log("原型 end ======================= ");
}

{
  log("原型链 start =======================");
  function Person(name) {
    this.name = name;
  }

  Person.prototype.getName = function () {
    return this.name;
  };

  const Tom = new Person("Tom");
  log(Tom.getName());
  log(Tom.constructor === Person);

  const Bob = new Person("Bob");

  log(Tom.getName === Bob.getName);
  log(Person.prototype.constructor === Person);
  log("原型链 end ======================= ");
}

/**
 * 
 * 
 * 构造函数模式	可以创建不同实例属性的副本，包括引用类型的实例属性，但是不能共享方法
原型模式	引用类型的属性对于实例对象而言共享同一个物理空间，因此可以共享方法
原型链	对父类实现方法和属性继承的过程中，父类实例对象的引用类型属性在子类的实例中共享同一个物理空间，因为父类的实例对象指向了子类的原型对象
借用构造函数	解决了继承中的引用值类型共享物理空间的问题，但是没法实现方法的共享
组合继承	属性的继承使用借用构造函数方法，方法的继承使用原型链技术，即解决了引用值类型共享的问题，又实现了方法的共享，但是子类的原型对象中还存在父类实例对象的实例属性
 * 
 */