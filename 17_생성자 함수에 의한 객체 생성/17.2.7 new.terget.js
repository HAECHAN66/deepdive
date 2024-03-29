/* new 연산자와 함께 생성자 함수로서 호출되면 내부의 new.target은 함수자신을 가르킨다.
new 연산자 없이 일반함수로서 호출된 함수 내부의 new.target은 undfined다. 
함께 재귀 호출을 통해서 생성자 함수로서 호출할 수 있다.*/

// 생성자 함수
function Circle(radius) {
  // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined다.
  if (!new.target) {
    // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자함수로서 호출
const circle = Circle(5);
console.log(ciracle.getDiameter());

// 최신 문법 IE에서는 지원 X 이럴땐 스코프 세이프 생성자 패턴 사용

// Scope-Sage Constructor Patten
function Ciracle(radius) {
  /* 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성
    this에 바인딩. 이때 this와 Circle은 프로토타입에 의해 연결
    함수가 new연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체 window를 가리킨다.
    즉, this와 Circle은 프로토타입에 의해연결X */

  if (!(this instanceof Ciracle)) {
    // new 연산자와 함께 호출
    return new Ciracle(radius);
  }
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출
const ciracle = Ciracle(5);
console.log(ciracle.getDiameter()); // 10

// Ex Object와 Function 생성자 함수는 new 연산자 없이 호출해도 동일하게 동작

let obj = new Object();
console.log(obj); // {}

obj = Object();
console.log(obj); // {}

let f = new Function("x", "return x ** ");
console.log(f); // f anonymous(x) {return  x ** x}

f = Function("x", "return x ** x");
console.log(f); // f anonymous(x) {return  x ** x}

// String, Number, Boolean 생성자 함수는 객체를 바노한하기도 하지만, 없이 호출하면 문자열, 숫자, 불리언 값을 반환
// 이를 통해 데이터 타입을 변환하기도 한다

const str = String(123);
console.log(str, typeof str); // 123 string

const num = Number("123");
console.log(num, typeof num); // 123 number

const bool = Boolean("trne");
console.log(bool, typeof bool); // true boolean
