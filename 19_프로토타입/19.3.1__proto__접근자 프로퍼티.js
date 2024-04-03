// 모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다.
const person = { name: "Lee" };

// 1. __proto__ 는 접근자 프로퍼티다.
// 16.3.2절 "접근자 프로퍼티"
Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

const obj = {};
const perent = { x: 1 };

// getter 함수인 get __proto__ 가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;

// setter 함수인 set __proto__ 가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x); // 1

// 2. __proto__ 접근자 프로퍼티는 상속을 통해 사용된다.
const person1 = { name: "Lee" };

// person1 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person1.hasOwnProperty("__proto__")); // false
// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
/*
{
  get: [Function: get __proto__],
  set: [Function: set __proto__],
  enumerable: false,
  configurable: true
}
 */
// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); // true

// __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유 = 상호참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해서.
const parent = {};
const child = {};

// child의 프로토타입을 parent로 설정
child.__proto__ = parent;
// parent의 프로토타입을 child로 설정
parent.__proto__ = child; // Type오류 : 서로가 자신의 프로토타입이 되는 비정상적인 프로토타입 체인

// __proto__ 접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장X
// obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__ 를 상속받을 수 없다.
const obj = Object.create(null);
// obj는 Object.__proto__를 상속받을 수 없다.
console.log(obj.__proto__); // undefined
// 따라서 __proto__ 보다 Object.getPrototypeOf 메서드를 사용하는 편이 더 좋다.
console.log(Object.getPrototypeOf(obj)); // null

// __proto__ 접근자 프로퍼티 대신 프로토타입의 참조를 취득하고 싶은 경우에는 상단 메서드를 사용하고
// 교체하고 싶은 경우 Object.setPrototype 메서드를 사용할 것 권장

const obj = {};
const parent = { x: 1 };

// obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj); // obj.__proto__;
// obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj, parent); // obj.__proto__ = parent;

console.log(obj.x);

// 함수 객체의 prototype 프로퍼티 _함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
// 함수 객체는 prototype 프로퍼티를 소유한다.
(function () {}).hasOwnProperty("prototype"); // -> true
// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty("prototype"); // -> false

// 화살표 함수는 non-constructor 다.
const Person = (name) => {
  this.name = name;
};

// non-constructor은 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty("Prototype")); // false
// non-constructor은 프로토타입을 생성하지 않는다.
console.log(Person.prototype); // undefined

// ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor 이다.
const obj = {
  foo() {},
};
// 같은 오류

/* 모든 객체가 가지고 있는 (엄밀히 말하면 Object.prototype으로부터 상속받은) __proto__ 접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype 프호퍼티는 결국 동일한 프로토타입을 가리킨다.
__proto__ 접근자 프로퍼티 - 모든 객체 소유 - 값: 프로토타입의 참조 - 사용주체 : 모든 객체 - 사용 목적: 객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용
prototype 프로퍼티 - constrctor 소유 - 값: 프로토타입의 참조 - 사용주체 : 생성자 함수 - 사용 목적: 생성자 함수가 자신이 생성할 객체(인스턴스)의 프로토타입을 할당하기 위해 사용
*/

// ex. 생성자 함수로 객체를 생성한 후 __proto__ 접근자 프로퍼티와 prototpe 프로퍼티로 프로토 타입인 객체에 접근하기
// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person("Lee");
// 결국 Person.prototype과 me.__proto__는 동일한 프로토타입을 가리킨ㄴ다.
console.log(Person.prototype === me.__proto__); // true

// 프로토타입의 constructor 프로퍼티와 생성자 함수
// 생성자함수
function Person(name) {
  this.name = name;
}
const me1 = new Person("Lee");

// me1 객체의 생성자 함수는 Person이다.
console.log(me.constructor === Person); // true
