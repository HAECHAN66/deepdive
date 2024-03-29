// 생성자 함수로서 호출한다는 것은 new연산자와 함께 호출하여 객체를 생성하는 것을 의미
// 함수는 객체이므로 일반객체와 동일하게 동작. 내부 슬롯과 내부 메서드를 모두 가지고 있기 때문

// 함수는 객체
function foo() {}

// 함수는 객체이므로 프로퍼티를 소유
foo.prop = 10;

// 함수는 객체이므로 메서드 소유
foo.method = function () {
  console.log(this.prop);
};

foo.method(); // 10 | 일반객체는 호출 할 수 없지만 함수는 호출이 가능

function foo() {}

foo(); // 일반적인 함수로서 호출 : [[Call]]가 호출
new foo(); // 생성자 함수로서 호출 : [[Construct]]가 호출

/* 함수는 constructor(일반함수 또는 생성자 함수로서 호출할수있는 객체) 일수도 있고 non-constructor일 수도 있다.
   또한 callable이면서 constructor이거나 callable이면서 non-constructor(일반 함수로서만 호출할 수 있는)이다. */

// constructor와 non-constructor 의 구분
// constructor : 함수 선언문, 함수 표현식, 클래스
// non-constructor : 메서드(ES6 메서드 축약 표현), 화살표 함수

// ECMAScript 사양에서 메서드 인정 범위가 좁다
// 일반함수정의 : 함수선언문, 함수표현식
function foo() {}
const bar = function () {};
// 프로퍼티 x의 값으로 할당 된 것은 일반 함수로 정의된 함수. 이는 메서드로 인정X
const baz = {
  x: function () {},
};

// 일반 함수로 정의된 함수만이 construtor이다.
new foo(); // -> foo {}
new bar(); // -> bar {}
new baz.x(); // -> x {}

// 화살표 함수 정의
const arrow = () => {};

new arrow(); // TypeError : arrow is not a constructor

// 메서드 정의 : ES6의 메서드 축약 표현만 메서드로 인정
const obj = {
  x() {},
};

new obj.x(); // TypeError : arrow is not a constructor
// non-constructor인 함수 객체를 생성자 함수로서 호출하면 에러 발생

// 주의! => 일반함수에new 연산자를 붙여 호출하면 생성자 함수처럼 동작 가능
function foo() {}
// 일반함수로서 호출
// [[Call]] 호출. 모든 함수객체는 구현되어 있음
foo();

// 생성자함수로서 호출
// [[Construtor]] 호출. 갖지 않는다면 에러 발생
new foo();

// New 연산자 : 일반함수와 생성자 함수에 특별한 형식적 차이X, new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작. non-이 아닌 construtor이어야함

// 생성자함수로서 정의하지 않은 일반함수
function add(x, y) {
  return x + y;
}

// 생성자 함수로서 정의하지 않은 일반함수를 new 연산자와 함께 호출
let inst = new add();

// 객체를 반환하는 일반함수
function creaeUser(naem, role) {
  return { name, role };
}

// 일반함수를 new 연산자와 함께 호출
inst = new creaeUser("Lee", "admin");
// 함수가 생성한 객체를 반환
console.log(inst); // {name: "Lee", role: "admin"}

// 반대로 생성자 함수를 new 없이 호출하면 일반함수
// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수 호출하면 일반함수로서 호출
const circle = Circle(5);
console.log(circle); // nudefined

// 일반 함수 내부의 this는 전역 객체 window를 가리킨다.
console.log(radius); // 5
console.log(getDiameter()); // 10

circle.getDiameter();
// TypeError: Cannot read property 'getDiameter' of undefined
/* 일반함수로서 호출되었기 때문에 Circle함수 내부의 this는 전역 객체 window를 카리킨다.
따라서 radius 프로퍼티와 getDiameter메서드는 전역 객체의 프로퍼티와 메서드가 된다.

생성자 함수는 첫 문자를 대문자로 기술하는 파스칼 케이스로 며명하여 일반함수와 구별할 수 있도록 노력*/
