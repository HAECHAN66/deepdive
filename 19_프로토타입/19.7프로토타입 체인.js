function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`안녕! tlqkf 내이름은 ${this.name}이다!! 이녀석아!!!!`);
};

const me = new Person("섹시다이너마이트 이마요시 쇼이치");

// hasOwnProperty는 Object.prototype의 메서드다.
console.log(me.hasOwnProperty("name")); // 진실!!!

// 여기서me가 체인으로 위에 Person과 Object 전부 받음 그래서 체인이 됨. 즉, 상속이라는 말이다.*미도리마

Object.getPrototypeOf(me) === Person.prototype; // 찐
Object.getPrototypeOf(Person.prototype) === Object.prototype; // 아아 -, 나도 찐.. 이라는 말이다.

/* 자바스크립트 객체의 프로퍼티에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면
[[Prototype]] 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 이를 프로토타입 체인이라 한다.
프로토타입 체인은 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 메커니즘이다.

hasOwnProperty는 Object.prototype의 메서드다.
me 객체는 프로토타입 체인을 따라 hasOwnProperty 메서드를 검색하여 사용한다.
 */
me.hasOwnProperty("name"); // -> true

Object.prototype.hasOwnProperty.call(me, "name");

// call 메서드 - this로 사용할 객체를 전달하면서 함수를 호출.
// 프로토타입 체인의 최상위는 언제나 Object.prototype이다. 따라서 모든 객체는 쟤 상속 받음
// Object.prototype을 프로토타입 체인의 종점(end of prototype chain)이라 한다.

console.log(me.foo); // undefined 종점인 Object.prototype을 못 찾으면 에러
// 이에 반해 프로퍼티가 아닌 식별자는 스코프 체인을 검색.
// 중첩 관계로 이뤄진 스코프의 계층적 구조에서 식별자를 검색.
// 따라서 스코프 체인은 식별자 검색을 위한 메커니즘

me.hasOwnProperty("name"); // 스코프 체인과 프로토타입 체인은 서로 연관없이 별도로 동작하는 것이 아니라 서로 혐력하여 검색하는데 사용됨.

// 8. 오버라이딩과 프로퍼티 섀도잉
const Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }
  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`반갑다. 나는 ${this.name}라 한다.`);
  };

  // 생성자 함수를 반환
  return Person;
})();

const me1 = new Person("이마요시 쇼이치");

// 인스턴스 메서드
me1.sayHello = function () {
  console.log(`여~ 나는 ${this.name}라 한다. 토오의 주장이지.`);
};

me1.sayHello();

// 오버라이딩 = 상위 클래스가 가지고 있는 하위 클래스가 재정의하여 사용하는 방식
// 오버로딩 = 함수 이름은 동일하지만 매개변수의 타입 또는 개수가 다른 메서드를 구현하고 매개변수에 의해 구별하여 호출하는 방식
// 인스턴스 메서드 삭제
delete me1.sayHello;
me1.sayHello();

// 프로토타입 메서드 변경
Person.prototype.sayHello = function () {
  console.log(`반갑네 내 이름은 ${this.name}이구만.`);
};
me1.sayHello();

// 프로토타입 메서드 삭제
delete Person.prototype.sayHello;
me1.sayHello; // TypeError
