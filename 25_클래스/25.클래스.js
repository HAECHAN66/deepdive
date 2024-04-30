// 클래스

// 예제 25-01
// E55 생성자 함수
var Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log(`안녛 난 ` + this.name);
  };
  // 생성자 함수 반환
  return Person;
})();

// 인스턴스 생성
var me = new Person("주연");
me.sayHi(); // 안녛 난 주연

// 예제 25-04
// 클래스 선언문
class Perosn {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`안녕하세옇 제 이름은 ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log(`안녕!`);
  }
}

// 인스턴스 생성
const me = new Person("이주연");

// 인스턴스의 프로퍼티 참조
console.log(me.name);
// 프로토타입 메서드 호출
me.sayHi();
// 정적 메서드 호출
Person.sayHello();

// 예제 25-07
const Person = "";
{
  // 호이스팅이 발생하지 않는다면 ''이 출력되어야 한다.
  console.log(Person);
  // ReferenceError
  // 클래스 선언문
  class Person {}
}

// 예제 25-10
const Person = class MyClass {};

// 함수 표현식과 마찬가지로 클래스를 카리키는 식별자로 인스턴스를 생성해야 한다.
const me = new Person();
// 클래스 이름 MyClass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자다.
console.log(MtClass);

const you = new MyClass();
// 기명 함수 표현식과 마찬가지로 클래스 표현식에서 사용한 클래스 이름은 외부코드에서 접근 불가능

// 예제 25-14
// 클래스
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}
// 생성자 함수
function Person(name) {
  // 인스턴스 생성 및 초기화
  this.name = name;
}

// 예제 25-16
class Person {}
// `constructor`를 생략하면 클래스엔 암묵적으로 정의. 생략한 클래스는 빈 `constructor`에 의해 빈 객체를 생성

// 예제 25-17
class Person {
  // `constructor는 생략하면 아래와 같이 빈 `constructor 가 암묵적으로 정의
  constructor() {}
}
// 빈 객체가 생성된다.
const me = new Perosn();
console.log(me);

// 예제 25-18
// 프로퍼티가 추가되어 초기화된 인스턴스를 생성하려면 constructor내부에서 this에 인스턴스 프로퍼티 추가
class Person {
  constructor() {
    // 고정값으로 인스턴스 초기화
    this.name = "이주연";
    this.address = "서울";
  }
}

// 인스턴스 프로퍼티가 추가된다.
const me = new Person();
console.log(me); // Person { name: '이주연', address: '서울' }

// 예제 25-19
class Person {
  constructor() {
    // 인수로 인스턴스 초기화
    this.name = name;
    this.address = address;
  }
}

// 인수로 초기값을 전달한다. 초기값은 constructor에 전달된다.
const me = new Person("이주연", "서울");
console.log(me); // Person { name: '이주연', address: '서울' }

// 만약 this가 아닌 다른 객체를 명시적으로 반환하면 this, 즉 인스턴스가 반환되지 못하고 return문에 명시한 객체가 반환
// 예제 25-20
class Person {
  constructor(name) {
    this.name = name;

    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    return {};
  }
}

// constructor에서 명시적으로 반환한 빈 객체가 반환된다.
const me = new Person("이주연");
console.log(me);

// 하지만 명시적으로 원시값을 반환하면 원시값은 무시되고 암묵적으로 this가 반환된다.
// 예제 25-21
class Person {
  constructor(name) {
    this.name = name;

    // 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
    return 100;
  }
}

const me = new Person("이주연");
console.log(me); // Person { name: '이주연' }

// 이처럼 constructor 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 클래스의 기본 동작을 훼손한다.
// 따라서 constructor 내부에서 return문을 반드시 생략해야 한다.

// 예제 25-22
// 생성자 함수
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHi = function () {
  console.log(`안녕핳세옇 저는 ${this.name}입니닿`);
};

const me = new Person("이주연");
me.sayHi(); // 안녕핳세옇 저는 이주연입니닿
// 클래스 몸체에서 정의한 메서드는 클래스의 prototype 프로퍼티에 메서드를 추가하지 않아도 기본적으로 프로토타입 메서드가 된다.

// 예제 25-23
class Person {
  // 생성자
  constructor(name) {
    this.name = name;
  }
  // 프로토타입 메서드
  sayHi() {
    console.log(`안녛핳세옇 저는 ${this.name}`);
  }
}
const me = new Person("이주연");
me.sayHi(); // 안녛핳세옇 저는 이주연
// 생성자 함수와 마찬가지로 클래스가 생성한 인스턴스는 프로토타입 체인의 일원이 된다.

// 예제 25-24
Object.getPrototypeOf(me) === Person.prototype; // -> true
me instanceof Person; // -> true

// Person.prototype의 프로토타입은 Object.prototype이다.
Object.getPrototypeOf(Person.prototype) === Object.prototype; // 찐
me instanceof Object; // 찐

// me 객체의 constructor는 Person 클래스다.
me.contructor === Person; // 찐

// 예제 25-25
// 생성자 함수
function Person(name) {
  this.name = name;
}
// 정적 메서드
Person.sayHi = function () {
  console.log(`ㅎㅇ!`);
};
// 정적 메서드 호출
Person.sayHi(); // ㅎㅇ!

// 예제 25-26
class Person {
  // 생성자
  constructor(name) {
    this.name = name;
  }

  // 정적 메서드
  static sayHi() {
    console.log(`gg`);
  }
}

// 예제 25-29
class Square {
  // 정적 메서드
  static area(width, height) {
    return width * height;
  }
}

console.log(Square.area(10, 10)); // 100

// 예제 25-30
class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  // 프로토타입 메서드
  area() {
    return this.width * this.height;
  }
}

const square = new Square(10, 10);
console.log(square.area()); // 100
// 22.2절 "함수 호출 방식과 this바인딩"

// 예제 25-31
// 표준 빌트인 객체의 정적 메서드
Math.max(1, 2, 3);
Number.isNaN(NaN);
JSON.stringify({ a: 1 });
Object.is({}, {});
Reflect.has({ a: 1 }, "a");

// 예제 25-34
class Person {
  constructor(name) {
    // 인스턴스 프로퍼티
    this.name = name; // name프로퍼티는 public이다.
  }
}
const me = new Person("이주연");

// name은 public이다.
console.log(me.name);

// 예제 25-35
const person = {
  // 데이터 프로퍼티
  firstName: "주연",
  lastname: "이",

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter함수
  get fullName() {
    return `${this.firstName} ${this.lastname}`;
  },
  // setter함수
  // 배열 디스트럭처링 할당 <36장>
  set fullName(name) {
    [this.firstName, this.lastname] = name.split("");
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(`${person.firstName} ${person.lastname}`); // 주연 이

// 접근자 프로퍼티를 통한 프로퍼티의 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출
person.fullName = "이 주연♥";
console.log(person);

// 접근자 프로퍼티를 통한 프로퍼티의 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter함수 호출
console.log(person.fullName);

// fullName은 접근자 프로퍼티다
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(person, "fullName"));
/*
{
  get: [Function: get fullName],
  set: [Function: set fullName],
  enumerable: true,
  configurable: true
}
 */

// 위 예제의 객체 리터럴을 클래스로 표현
// 예제 25-36
class Person {
  constructor(firstName, lastname) {
    this.firstName = firstName;
    this.lastname = lastname;
  }

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter
  get fullName() {
    return `${this.firstName} ${this.lastname}`;
  }
  // setter
  set fullName(name) {
    [this.firstName, this.lastname] = name.slice("");
  }
}

const me = new Person("주연", "이");

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${me.firstName} ${me.lastname}`);
me.fullName = "이주연";
console.log(me);
console.log(me.fullName);
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullname"));

// 예제 25-39
class Person {
  // 클래스 필드 정의
  name = "Lee";
}
const me = new Person("Lee");

// 예제 25-40
class Person {
  name = "Lee";
}
const me = new Person();
console.log(me); // Person { name: 'Lee' }

// 예제 25-44
class Person {
  name;

  constructor(name) {
    // 클래스 필드 초기화
    this.name;
  }
}
const me = new Person("이주연새꺄!");
console.log(me);

// 예제 25-46
class Person {
  // 클래스 필드에 문자열을 할당
  name = "아";

  // 클래스 필드에 함수를 할당
  getName = function () {
    return this.name;
  };
  // 화살표 함수로 정의할 수도 있다.
  // getName = () => this.name;
}
const me = new Person();
console.log(me); // Person { name: '아', getName: [Function: getName] }
console.log(me.getName); // [Function: getName]

// 예제 25-48
class Person {
  constructor(name) {
    this.name = name; // 인스턴스 프로퍼티는 기본적으로 public
  }
}
const me = new Person("뀨");
console.log(me.name); // 뀨

// 예제 25-49
class Person {
  name = "뀨"; // 클래스 필드도 기본적으로 public
}
// 인스턴스 생성
const me = new Person();
console.log(me.name); // 뀨

// 예제 25-50
class Person {
  // private 필드 정의
  #name = "";

  constructor(name) {
    // private 참조
    this.#name = name;
  }
}
const me = new Person("아");

// private 필드 #name은 클래스 외부에서 참조할 수 있다.
console.log(me.#name);
// SyntaxError

// 예제 25-51
class Person {
  // private 필드 정의
  #name = "";

  constructor(name) {
    this.name = name;
  }

  // name은 접근자 프로퍼티다
  get name() {
    // private필드를 참조하여 trim한 다음 반환
    return this.#name.trim();
  }
}
const me = new Person("그만");
console.log(me.name);

// 예제 25-53
class MyMath {
  // static public 필드 정의
  static PI = 22 / 7;

  // static private 필드 정의
  static #num = 10;

  // static 메서드
  static incremnet() {
    return ++MyMath.#num;
  }
}
console.log(MyMath.PI); // 3.142857142857143
console.log(MyMath.incremnet()); // 11

// 예제 25-54
class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }
  eat() {
    return "eat";
  }
  move() {
    return "move";
  }
}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스를 구현
class Bird extends Animal {
  fly() {
    return "fly";
  }
}

const bird = new Bird(1, 5);

console.log(bird); // Bird { age: 1, weight: 5 }
console.log(bird instanceof Bird);
console.log(bird instanceof Animal);
console.log(bird.eat());
console.log(bird.move());
console.log(bird.fly());

/*
true
true
eat
move
fly
*/

// 예제 25-57
// 생성자 함수
function Base(a) {
  this.a = a;
}
// 생성자 함수를 상속받는 서브 클래스
class Derived extends Base {}

const derived = new Derived(1);
console.log(derived); // Derived { a: 1 }

// 예제 25-58
function Base1() {
  class Base2 {}
  let condition = true;

  // 조건에 따라 동적로 상속 대상을 결정하는 서브 클래스
  class Derived extends (condition ? Base1 : Base2) {}
  console.log(derived);

  console.log(derived instanceof Base1); // true
  console.log(derived instanceof Base2); // false
}

// 예제 25-61
// 수퍼클래스
class Base {}
// 서브클래스
class Derived extends Base {}
// 암묵적으로 constructor 생성

// 예제 25-62
// 수퍼클래스
class Base {
  constructor() {}
}
// 서브클래스
class Derived extends Base {
  constructor(...args) {
    super(...args);
  }
}

const derived1 = new Derived();
console.log(derived1); // Derived {}

// 예제 25-63
// 수퍼클래스
class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}
// 서브클래스
class Derived extends Base {
  // 암묵적으로 constructor 정의
  // constructor(...args) {super(...args);
}

const derived2 = new Derived(1, 2);
console.log(derived2); // Derived { a: 1, b: 2 }

// 예제 25-64
class Base {
  constructor(a, b) {
    // 4
    this.a = a;
    this.b = b;
  }
}

class Derived extends Base {
  constructor(a, b, c) {
    //2
    super(a, b); // 3
    this.c = c;
  }
}
const derived3 = new Derived(1, 2, 3); // 1
console.log(derived3); // Derived { a: 1, b: 2, c: 3 }

// 예제 25-68

class Base {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `반가웧 난${this.name}이얗! `;
  }
}

class Derived extends Base {
  sayHi() {
    // super.sayHi는 수퍼클래스의 프로토타입 메서드를 가리킨다.
    return `${super.sayHi()}혜인아 사랑해. 결혼하자.`;
  }
}
const derived4 = new Derived("주연");
console.log(derived4.sayHi()); // 반가웧 난주연이얗! 혜인아 사랑해. 결혼하자.

// 예제 25-69
// 수퍼클래스
class Base {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `반가웧 난${this.name}이얗! `;
  }
}

class Derived extends Base {
  sayHi() {
    // __super는 Base.prototype을 가리킨다.
    const __super = Object.getPrototypeOf(Derived.prototype);
    return `${__super.sayHi.call(this)} 우아앙~ 우히히!`;
  }
}

// 예제 25-72
const base = {
  name: "주연",
  sayHi() {
    return `안녕! ${this.name}아! `;
  },
};

const derived5 = {
  __proto__: base,
  sayHi() {
    return `${super.sayHi} 머해?ㅎㅎ`;
  },
};

console.log(derived5.sayHi()); // sayHi() { return `안녕! ${this.name}아! `;} 머해?ㅎㅎ

// 예제 25-73
// 수퍼클래스
class Base {
  static sayHi() {
    return `ㅎㅇ`;
  }
}
// 서브클래스
class Derived extends Base {
  static sayHi() {
    return `${super.sayHi} 뭐하냐`;
  }
}
console.log(Derived.sayHi()); // sayHi() { return `ㅎㅇ`;} 뭐하냐

// 예제 25-80
// Array 생성자 함수를 상속받아 확장한 MyArray
class MyArray extends Array {
  // 중복된 배열 요소를 제거하고 반환한다 : [1,1,2,3] => [1,2,3]
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }

  // 모든 배열 요소의 평균을 구한다: [1,2,3] =>2
  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray); // MyArray(3) [ 1, 2, 3 ]

// MyArray.prototype.uniq 호출
console.log(myArray.uniq()); // MyArray(4) [ 1, 1, 2, 3 ]
// MyArray.prototype.average 호출
console.log(myArray.average()); // 1.75

// 예제 25-83
// Array생성자 함수를 상속받아 확장한 MyArray
class MyArray extends Array {
  // 모든 메서드가 Array 타입의 인스턴스를 반환하도록 한다.
  static get [Symbol.species]() {
    return Array;
  }

  // 중복된 배열 요소를 제거하고 반환한다 : [1,1,2,3] => [1,2,3]
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }

  // 모든 배열 요소의 평균을 구한다 : [1,2,3] =>
  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}

const myArray1 = new MyArray(1, 1, 2, 3);

console.log(myArray1.uniq() instanceof MyArray); // false
console.log(myArray1.uniq() instanceof Array); // true

// 메서드 체이닝
// uniq 메서드는 Array 인스턴스를 반환하므로 average 메서드를 호출할 수 없다.
console.log(myArray1.uniq().average()); // TypeError
