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

// 19.4 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입
// obj 객체를 생성한 생성자 함수는 Object다.
const obj = new Object();
console.log(obj.constructor === Object); // true

// add 함수 객체를 생성한 생성자 함수는 Function이다.
const add = new Function("a", "b", "return a + b");
console.log(add.constructor === Function); // true

// 생성자 함수
function Person(name) {
  this.name = name;
}
// me 객체를 생성한 생성자 함수는 Person이다.
const me2 = new Person("Lee");
console.log(me2.constructor === Person);

// 명시적으로 new 연산자와 함께 인스턴스를 생성X 객체 생성방식
// 객체 리터럴
const obj = {};

// 함수 리터럴
const add2 = function (a, b) {
  return a + b;
};

// 배열 리터럴
const arr = [1, 2, 3];

// 정규 표현식 리터럴
const regexp = /is/gi; // 이게 뭥미?

// obj 객체는 Object 셍성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성
const obj = {};

// 하지만 obj 객체의 생성자 함수는 Object 생성자 함수다.
console.log(obj.constructor === Object);

/* 추상연산
ECMASctipt 사양에서 내부 동작의 구현 알고리즘을 표현힌 것이다.
ECMASctipt 사양에서 설명을 위해 사용되는 함수와 유사한 의사코드라 이해
*/

// 2. Object 생성자 함수에 의한 객체 생성
// 인수가 전달되지 않았을 떄 추상 연산
let obj = new Object();
console.log(obj); // {}

// 1. new.target이 undefined나 Object가 아닌 경우
// 인스턴스 -> Foo.protorype -> Object.prototype 순으로 프로토타입 체인이 생성
class Foo extends Object {}
new Foo(); // Foo{}

// 3. 인수가 전달된 경우에는 인수를 객체로 변환
// Number 객체생성
obj = new Object(123);
console.log(obj); // Number {123}

// String 객체 생성
obj = new Object("123");
console.log(obj); // String {"123"}

// foo 함수는 Function 생성자 함수로 생성한 함수 객체가 아니라 함수 선언문으로 생성
function foo() {}
// 하지만 constructor 프로퍼티를 통해 확인해보면 foo의 생성자 함수는 Function 생성자 함수이다.
console.log(foo.constructor === Function); // true
/* 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재
 프로토타입의 생성시점
 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성
 사용자 정의 생성자 함수와 프로토타입 생성시점
 생성자 함수로서 호출할 수 있는 함수,
 즉 constructor는 함수 정의가 평가되어 함수 객체를 생성하는
 시점에 프로토타입도 더불어 생성
 
 함수정의(constructo)가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성*/
console.log(Preson.prototype);

// 생성자 함수
function Person(name) {
  this.name = name;
}

// 화살표 함수는 non-constructor이다.
const Person = (name) => {
  this.name = name;
};
// non-constructor은 프로토타입이 생성 되지 않는다.
console.log(Person.prototype);

// 객체가 생성되기 이전에 생성자 함수와 프로토타입은 이미 객체화되어 존재한다.
// 이후 생성자 함수 또는 리터럴표기법으로 객체를 생성하면
// 프로토타입은 생성된 객체의 [[Prototype]] 내부 슬롯에 할당된다.

// 객체 생성 방식과 프로토타입의 결정
<table>
  <caption> 객체 생성 방법 </caption>
  <tr>
    <td>객체리터럴</td>
  </tr>
  <tr>
    <td>Object 생성자 함수</td>
  </tr>
  <tr>
    <td>생성자 함수</td>
  </tr>
  <tr>
    <td>Object.create 메서드</td>
  </tr>
  <tr>
    <td>클래스(ES6)</td>
  </tr>
</table>;

// 객체 리터럴에 의해 생성된 객체의 프로토타입 _평가하여 생성할 때 OrdinaryObjectCtrate
const obj = { x: 1 };

// obj는 Object.prototype을 상속 받는다.
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty("x")); // true

// Object 생성자 함수에 의해 생성된 객체의 프로토타입 _ 생성자 함수를 인수 없이 호출하면 빈객체 생성.
const obj = new Object();
obj.x = 1; // 위에 것과 같이 상속받게 된다

console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty("x")); // true

// 생성자 함수에 의해 생성된 객체의 프로토타입_new연산자와 함께 호출 인스턴스를 생성하면 추상연산자가 호출된다
// 이때 추상연산에 전달되는 프로토타입은 생성함수의 prototype 프로퍼티에 바인딩되어 있는 객체.
function Person(name) {
  this.name = name;
}
const me3 = new Person("Lee");
// Person.prototype에 프로퍼티를 추가하여 자식 객체가 생속 받을 수 있도록 구현
// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me4 = new Person("Lee Juyean");
const you = new Person("Lee Hyein");

me4.sayHello();
you.sayHello();

function Love(we) {
  this.we = we;
}

const we2 = new Love("주연");

Love.prototype.sayLike = function () {
  console.log(`안녕! 나는 ${this.we}이를 사랑해!`);
};

const je = new Love("주연");

je.sayLike();
