// 빈 객체 생성
const person = new Object();

// 프로퍼티 추가
person.name = "Lee";
person.sayHello = function () {
  console.log("Hi! My name is" + this.name);
};

console.log(person); // {name: "Lee", sayHello" f}
person.sayHello(); // Hi! My name is Lee

// 자바 스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Funtion, Arrat, Date, RegExp, Promise 등의 빌트인 생성자 함수를 제공한다.

// String 생성자 함수
const strObj = new String("Lee");
console.log(typeof strObj);
console.log(strObj);

// Number
const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

// Boolean
const boolObje = new Boolean(true);
console.log(typeof boolObje);
console.log(boolObje);

// Function (함수)
const func = new Function("x", "return x * x");
console.log(typeof boolObje);
console.log(func);

// Array    (배열)
const arr = new Array(1, 2, 3);
console.log(typeof arr);
console.log(arr);

// RegExp   (정규 표현식)
const regExp = new /ab+c/i();
console.log(typeof regExp);
console.log(regExp);

// Date
const date = new Date();
console.log(typeof date);
console.log(date); // 대한민국 표준시

/* Object 함수를 사용해 빈객체를 생성해야만 하는 건 아니다. 리터럴을 사용한게 더 간편, 특별한 이유가 없다면 그다지 유용 X */

// 생성자 함수

// 1. 문제점
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle2.getDiameter()); // 20
/* 객체 고유 상태 데이터인 radius 프로퍼티의 값은 객체마다 다를 수 잇지만 getDiamete 메서드는 완전히 동일,
수십 개의 객체를 생성해야한다면 문제가 커짐 */

// 2. 장점

function Circle(radius) {
  // 생성자 함수의 내부의 this는 생성자 함수가 행성할 인스턴스를 가르킴
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스 생성

const circle3 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
const circle4 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle3.getDiameter());
console.log(circle4.getDiameter());

// this가 가르키는 값, 즉 this바인딩은 함수 호출 방식에 따라 동적으로 결정

function foo() {
  console.log(this);
}

// 일반적인 함수로서 호출
// 전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global을 가르킨다.
foo(); // global

const obj = { foo }; // ES6 프로퍼티 축약 표현
obj.foo(); // 메서드로서 호출

const inst = new foo(); // 생성자 함수로서 호출

// new 연산자와 함께 호출하면 해당함수는 생성자 함수로 동작한다.
// 즉, 일반함수로서 호출
const circle5 = Circle(15);

// 일반함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환
console.log(circle5); // nudefined
console.log(radius); // 15

/* 생성자 함수의 인스턴스 생성 과정
템플릿(클래스)으로서 동작하여 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화
(인스턴스 프로퍼티 추가 및 초기값 할당) 하는 것이다.
*/

function Circle(radius) {
  // 인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const ciracle6 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
/* 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다. new 연산자와 함께 생성자 함수 호출시
인스턴스를 생성하고 인스턴스를 초기화 한 후 암묵적으로 인스턴스를 반환한다. */

// 1. 인스턴스 생성과 this 바인딩
// 빈 객체가 바로 생성자 함수가 생성한 인스턴스다. 인스턴스는 this에 바인딩 된다. 생성자 함수 내부의 this가 생성자 함수가 생성할 인스턴스를 가르키는 이유
// 이 처리는 함수 몸체의 코드가 한 줄씩 실행되는 런타임 이전에 실행된다.

/* 바인딩 : 식별자와 값을 연결하는 과정을 의미.
Ex_ 변수 선언은 변수이름(식별자)과 확보된 메모리 공간의 주소를 바인딩 하는 것이다. this 바인딩은 this(키워드로 분류되지만 식별자 역할)
와 this가 가리킬 객체를 바인딩 하는 것이다.
*/

function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩
  console.log(this);

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 2. 인스턴스 초기화
// 코드가 한 줄 씩 실행되어 this에 바인딩 되어있는 인스턴스를 초기화. 초기값을 인스턴스 프로퍼티에 할당하여 초기화 하거나 고정값을 할당.

function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩

  // 2. this에 바인딩 되어 있는 인스턴스를 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 3. 인스턴스 반환
function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩

  // 2. this에 바인딩 되어 있는 인스턴스를 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 완성된 인스턴스가 바인딩 된 this가 암묵적으로 반환
}

// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환
const ciracle7 = new Circle(1);
console.log(ciracle7); // Circle { radius : 1, getDiameter : f }

/*
만약 this가 아닌 다른 객체를 명시적으로 반환하면 this가 반환하지 못하고 retrun문에 명시한 객체가 반환된다.
명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
아래처럼 생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 기본 동작을 훼손한다.
따라서 생성자 함수 내부에서 return문은 반드시 생략하긔
*/

function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩

  // 2. this에 바인딩 되어 있는 인스턴스를 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 완성된 인스턴스가 바인딩 된 this가 암묵적으로 반환
  // 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this 가 반환
  return 100;
}

// 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환
const ciracle8 = new Circle(1);
console.log(ciracle7); // Circle { radius : 1, getDiameter : f }
