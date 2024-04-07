// Object.create에 의한 직접 상속

/**
@param {Object} prototype - 생성할 객체의 프로토타입으로 지정할 객체
@param {Object} [propertiesObject] - 생성할 객체의 프로퍼티를 갖는 객체
@return {Object} 지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체
*/
// Object.create(prototype[, propertiesObject])

// 프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인 종점에 위치
// obj -> null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); // true
// Object.prototype을 상속받지 못한다
console.log(obj.toString()); // 타입에러

// obj -> Object.prototype -> null
// obj -> {}; 와 동일하다.
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// obj = {x:1}; 와 동일하다.
obj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
});
// 위 코드는 아래와 동일하다.
// obj -> MyProto -> Object.prototype -> null
// obj.x = 1;
console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

const myProto = { x: 10 };
// 임의의 객체를 직접 상속 받는다.
// obj -> myProto -> Object.prototype -> null
obj = Object.create(myProto);
console.log(obj.x); // 10
console.log(Object.getPrototypeOf(obj) === myProto); // true

// 생성자 함수
function Person(name) {
  this.name = name;
}
// obj -> Person.prototype -> Object.prototype -> null
// obj = new Person('Lee')와 동일하다.
obj = Object.create(Person.prototype);
obj.name = "이마요시 쇼이치";
console.log(obj.name); // 이마요시 쇼이치
console.log(Object.getPrototypeOf(obj) === Person.prototype); // true

/*
이처럼 Object.create 메서드는 첫 번째 매개변수에 전달한 객체의 프로토타입 체인안에 속하는 객체를 생성한다.
즉, 객체를 생성하면서 직접적으로 상속을 구현하는 것이다. 장점은
1. new연산자가 없이도 객체를 생성
2. 프로토타입을 지정하면서 객체를 생성
3. 객체 리터럴에 의해 생성된 객체도 상속

모든 객체의 프로토타입 체인의 종점, Object.prototype의 메서드이므로 모든 객체가 상속받아 호출 가능
*/
const obj = { a: 1 };
obj.hasOwnProperty("a");
obj.propertyIsEnumerable("a");
// 이런 직접 호출은 권장 X
// 프로토타입이 null인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성
const obj = Object.create(null);
obj.a = 1;

console.log(Object.getPrototypeOf(obj) === null);

// obj는 Object.prototype의 빌트인 메서드를 사용할 수 없다.
console.log(obj.hasOwnProperty("a"));
// 타입에러
// 이런 직접호출에 의한 에러를 막기 위해 간접 호출이 필요함
// 프로토타입이 null인 객체 생성
const obj = Object.create(null);
obj.a = 1;
// Object.prototype의 빌트인 메서드는 객체로 직접 호출 x
console.log(Object.prototype.hasOwnProperty.call(obj, "a")); // true

// 객체 리터럴 내부에서 __proto__ 에 의한 직접 상속
const myProto1 = { x: 10 };

// 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속을 받을 수 있다.
const obj = {
  y: 20,
  // 객체를 직접 상속받는다
  // obj -> myProto -> Object.prototype -> null
  __proto__: myProto1,
};
/*
const obj = Object.create(myProto, {
    y: {value: 20, writable: true, enumerable: true, configurable: true}
});
같은 코드
*/

console.log(obj.x, obj.y);
console.log(Object.getPrototypeOf(obj) === myProto1);

// 정적 프로퍼티 , 메서드
// 생성자 함수
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`반갑구만~ 난 토오의 주장 ${name}.`);
};

// 정적 프로퍼티
Person.staticProp = "static prop";

// 정적 메서드
Person.staticMethod = function () {
  console.log("staticMethod");
};

const me = new Person("이마요시 쇼이치");

// 생성자 함수에 추가한 정적 프로퍼티/메서드는 생성자 함수로 호츌/참조 한다.
Person.staticMethod(); // staticMethod
// 정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출 X
// 인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상에 존재해야만 함
me.staticMethod(); // 타입에러

// Object.create는 정적 메서드다
const obj = Object.create({ name: "Lee" });
// Object.prototype.hasOwnProperty는 프로토타입 메서드다
obj.hasOwnProperty("name"); // ㄴㄴ
// this를 사용하지 않으면 정적메스도로 변경 가능.

function Foo() {}
// 프로토타입
Foo.prototype.x = function () {
  console.log("이마요시");
};

const foo = new Foo();
// 프로토타입 메서드를 호출하려면 인스턴스를 생성
foo.x(); // x
// 정적메서드
Foo.x = function () {
  console.log("x");
};
// 정적메서드는 인스턴스를 생성하지 않아도 호출 가능
Foo.x();

// 13. 프로퍼티 존재 확인
// in 연산자
/**
 * key: 프로퍼티 키를 나타내는 문자열
 * object: 개게로 평가되는 표현식 */
key in Object;

const perosn = {
  name: "Lee",
  address: "Seoul",
};

console.log("name" in perosn);
console.log("address" in perosn);
console.log("age" in perosn);
console.log("toString" in perosn);

const perosn1 = { name: "Lee" };
console.log(Reflect.has(perosn1, "name"));
console.log(Reflect.has(perosn1, "toString"));

// Object.prototype.hasOwnProperty 메서드
console.log(perosn.hasOwnProperty("name"));
console.log(perosn.hasOwnProperty("age"));
// 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true반환
console.log(person.hasOwnProperty("toString"));
