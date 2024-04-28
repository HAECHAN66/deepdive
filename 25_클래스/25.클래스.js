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
