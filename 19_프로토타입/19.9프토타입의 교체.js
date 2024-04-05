// 생성자 함수에 의한 프로토타입의 교체
const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  // 1. 생성자 함수의 prototype 프로퍼티를 통해 타입을 교체 / 객체 리터럴 할당. 이는 교체한거
  Person.prototype = {
    sayHello() {
      console.log(`well well... ${this.name}...`);
    },
  };

  return Person;
})();

const me = new Person("tiger");
// me 객체의 생성자 함수를 검색하면 Person이 아니라 Object가 나온다.
// 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴
console.log(me.constructor === Person);
console.log(me.constructor === Object);

// 바꾸는 방법
const Person3 = (function () {
  function Person3(name) {
    this.name = name;
  }

  // 1. 생성자 함수의 prototype 프로퍼티를 통해 타입을 교체 / 객체 리터럴 할당. 이는 교체한거
  Person3.prototype = {
    // constructor 프로퍼티와 생성자 함수 간의 연결 설정
    constructor: Person3,

    sayHello() {
      console.log(`well well... ${this.name}...`);
    },
  };

  return Person3;
})();

const me1 = new Person3("tiger");
console.log(me1.constructor === Person3);
console.log(me1.constructor === Object);

// 인스턴스에 의한 프로토타입의 교체 __proto__ 접근자 프로퍼티은 이미 생성된 객체의 프로토타입을 교체하는 것
function Person(name) {
  this.name = name;
}

const me2 = new Person("tiger");

// 프로토타입으로 교체할 객체
const parent = {
  sayHello() {
    console.log(`well well... ${this.name}...`);
  },
};

// me2 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me2, parent);
// me2.__proto__ = parent;

me2.sayHello();

console.log(me2.constructor === Person); // 구라
console.log(me2.constructor === Object); // 맞음

// 생성자와 인스턴스 교체의 차이점 : Person 생성자 함수의 prototype 프로퍼티가 교체된 프로토타입을 가리킴 유무
// 생성자 -> 가리킨다.
// 인스턴스 -> 가리키지 않는다.

// 파괴된 생성자 함수와 프로토타입 간의 연결 되살리기
function Person(name) {
  this.name = name;
}

const me3 = new Person("tiger");

// 프로토타입으로 교체할 객체
const parent1 = {
  // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
  constructor: Person,
  sayHello() {
    console.log(`well well... ${this.name}...`);
  },
};

// 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
Person.prototype = parent1;

// me3 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me3, parent1);
// me3.__proto__ = parent;

me3.sayHello();

console.log(me3.constructor === Person); // 맞음
console.log(me3.constructor === Object); // 구라

// 생성자 함수의 prototype 프로퍼티가 교체된 프로토타입을 가리킨다.
console.log(Person.prototype === Object.getPrototypeOf(me3)); // 찐!
